import Plugins from '../plugins/plugins';
import Slide from './slide';
import DOM from '../utils/dom';
import scrollTo from '../utils/scroll-to';

const CLASSES = {
  VERTICAL: 'vertical'
};

// Default plugins
const PLUGINS = {
  'clickNav': Plugins.ClickNav,
  'grid': Plugins.Grid,
  'hash': Plugins.Hash,
  'keyboard': Plugins.Keyboard,
  'nav': Plugins.Navigation,
  'scroll': Plugins.Scroll,
  'touch': Plugins.Touch
};

export default class WebSlides {
  /**
   * Options for WebSlides
   * @param {number|boolean} autoslide If a number is provided, it will allow
   * autosliding by said amount of miliseconds.
   * @param {boolean} changeOnClick If true, it will allow
   * clicking on any place to change the slide.
   * @param {number} minWheelDelta Controls the amount of needed scroll to
   * trigger navigation.
   * @param {number} scrollWait Controls the amount of time to wait till
   * navigation can occur again with scroll.
   * @param {number} slideOffset Controls the amount of needed touch delta to
   * trigger navigation.
   */
  constructor({
    autoslide = false,
    changeOnClick = false,
    minWheelDelta = 40,
    scrollWait = 450,
    slideOffset = 50
  } = {}) {
    /**
     * WebSlide element.
     * @type {Element}
     */
    this.el = document.getElementById('webslides');
    /**
     * Moving flag.
     * @type {boolean}
     */
    this.isMoving = false;
    /**
     * Slide's array.
     * @type {?Array<Slide>}
     */
    this.slides = null;
    /**
     * Current slide's index.
     * @type {number}
     * @private
     */
    this.currentSlideI_ = -1;
    /**
     * Current slide reference.
     * @type {?Slide}
     * @private
     */
    this.currentSlide_ = null;
    /**
     * Max slide index.
     * @type {number}
     * @private
     */
    this.maxSlide_ = 0;
    /**
     * Whether the layout is going to be vertical or horizontal.
     * @type {boolean}
     */
    this.isVertical = this.el.classList.contains(CLASSES.VERTICAL);
    /**
     * Plugin's dictionary.
     * @type {Object}
     */
    this.plugins = {};
    /**
     * Interval ID reference for the autoslide.
     * @type {?number}
     * @private
     */
    this.interval_ = null;
    /**
     * Options dictionary.
     * @type {Object}
     */
    this.options = {
      autoslide,
      changeOnClick,
      minWheelDelta,
      scrollWait,
      slideOffset
    };

    if (!this.el) {
      throw new Error('Couldn\'t find the webslides container!');
    }

    // Bootstrapping
    this.removeChildren_();
    this.grabSlides_();
    this.createPlugins_();
    this.initSlides_();
    this.play();
    // Finished
    this.onInit_();
  }

  /**
   * Removes all children elements inside of the main container that are not
   * eligible to be a Slide Element.
   * @private
   */
  removeChildren_() {
    const nodes = this.el.childNodes;
    let i = nodes.length;

    while (i--) {
      const node = nodes[i];

      if (!Slide.isCandidate(node)) {
        this.el.removeChild(node);
      }
    }
  }

  /**
   * Creates all the registered plugins and store the instances inside of the
   * the webslide instance.
   * @private
   */
  createPlugins_() {
    Object.keys(PLUGINS).forEach(pluginName => {
      const pluginCto = PLUGINS[pluginName];
      this.plugins[pluginName] = new pluginCto(this);
    });
  }

  /**
   * Called once the WebSlide instance has finished initialising.
   * @private
   * @fires WebSlide#ws:init
   */
  onInit_() {
    DOM.fireEvent(this.el, 'ws:init');
  }

  /**
   * Grabs the slides from the DOM and creates all the Slides modules.
   * @private
   */
  grabSlides_() {
    this.slides = DOM.toArray(this.el.childNodes)
        .map((slide, i) => new Slide(slide, i));

    this.maxSlide_ = this.slides.length;
  }

  /**
   * Goes to a given slide.
   * @param {!number} slideI The slide index.
   * @param {?boolean} forward Whether we're forcing moving forward/backwards.
   * This parameter is used only from the goNext, goPrev functions to adjust the
   * scroll animations.
   */
  goToSlide(slideI, forward = null) {
    if (this.isValidIndexSlide_(slideI) &&
        !this.isMoving &&
        this.currentSlideI_ !== slideI) {
      this.isMoving = true;
      let isMovingForward = false;

      if (forward !== null) {
        isMovingForward = forward;
      } else {
        if (this.currentSlideI_ >= 0) {
          isMovingForward = slideI > this.currentSlideI_;
        }
      }
      const nextSlide = this.slides[slideI];

      if (this.currentSlide_ !== null && this.isVertical &&
        (!this.plugins.touch || !this.plugins.touch.isEnabled)) {
        this.scrollTransitionToSlide_(
            isMovingForward, nextSlide, this.onSlideChange_);
      } else {
        this.transitionToSlide_(
            isMovingForward, nextSlide, this.onSlideChange_);
      }
    }
  }

  /**
   * Transitions to a slide, doing the scroll animation.
   * @param {boolean} isMovingForward Whether we're going forward or backwards.
   * @param {Slide} nextSlide Next slide.
   * @param {Function} callback Callback to be called upon finishing. This is an
   * async function so it'll happen once the scroll animation finishes.
   * @private
   * @see scrollTo
   */
  scrollTransitionToSlide_(isMovingForward, nextSlide, callback) {
    this.el.style.overflow = 'hidden';

    if (!isMovingForward) {
      nextSlide.moveBeforeFirst();
      nextSlide.show();
      scrollTo(this.currentSlide_.el.offsetTop, 0);
    } else {
      nextSlide.show();
    }

    scrollTo(nextSlide.el.offsetTop, 500, () => {
      this.currentSlide_.hide();

      if (isMovingForward) {
        this.currentSlide_.moveAfterLast();
      }

      this.el.style.overflow = 'auto';
      setTimeout(() => { callback.call(this, nextSlide); }, 150);
    });
  }

  /**
   * Transitions to a slide, without doing the scroll animation.
   * @param {boolean} isMovingForward Whether we're going forward or backwards.
   * @param {Slide} nextSlide Next slide.
   * @param {Function} callback Callback to be called upon finishing. This is a
   * sync function so it'll happen on run time.
   * @private
   */
  transitionToSlide_(isMovingForward, nextSlide, callback) {
    scrollTo(0, 0);

    if (!isMovingForward) {
      nextSlide.moveBeforeFirst();
    }

    if (this.currentSlide_) {
      if (isMovingForward) {
        this.currentSlide_.moveAfterLast();
      }

      this.currentSlide_.hide();
    }

    nextSlide.show();
    callback.call(this, nextSlide);
  }

  /**
   * Whenever a slide is changed, this function gets called. It updates the
   * references to the current slide, disables the moving flag and fires
   * a custom event.
   * @param {Slide} slide The slide we're transitioning to.
   * @fires WebSlide#ws:slide-change
   * @private
   */
  onSlideChange_(slide) {
    this.currentSlide_ = slide;
    this.currentSlideI_ = slide.i;
    this.isMoving = false;

    DOM.fireEvent(this.el, 'ws:slide-change', {
      slides: this.maxSlide_,
      currentSlide0: this.currentSlideI_,
      currentSlide: this.currentSlideI_ + 1
    });
  }

  /**
   * Goes to the next slide.
   */
  goNext() {
    let nextIndex = this.currentSlideI_ + 1;

    if (nextIndex >= this.maxSlide_) {
      nextIndex = 0;
    }

    this.goToSlide(nextIndex, true);
  }

  /**
   * Goes to the previous slide.
   */
  goPrev() {
    let prevIndex = this.currentSlideI_ - 1;

    if (prevIndex < 0) {
      prevIndex = this.maxSlide_ - 1;
    }

    this.goToSlide(prevIndex, false);
  }

  /**
   * Check if the given number is a valid index to go to.
   * @param {number} i The index to check.
   * @return {boolean} Whether you can move to that slide or not.
   * @private
   */
  isValidIndexSlide_(i) {
    return i >= 0 && i < this.maxSlide_;
  }

  /**
   * Init the shown slide on load. It'll fetch it from the Hash if present
   * and, otherwise, it'll default to the first one.
   * @private
   * @see Hash.getSlideNumber
   */
  initSlides_() {
    let slideNumber = this.plugins.hash.constructor.getSlideNumber();

    // Not valid
    if (slideNumber === null ||
        slideNumber >= this.maxSlide_) {
      slideNumber = 0;
    }

    // Keeping the order
    if (slideNumber !== 0) {
      let i = 0;
      while(i < slideNumber) {
        this.slides[i].moveAfterLast();
        i++;
      }
    }

    this.goToSlide(slideNumber);
  }

  /**
   * Registers a plugin to be loaded when the instance is created. It allows
   * (on purpose) to replace default plugins.
   * Those being:
   *  - Navigation
   *  - Hash
   *  - Keyboard
   * @param {!string} key They key under which it'll be stored inside of the
   * instance, inside the plugins dict.
   * @param {!Function} cto Plugin constructor.
   */
  static registerPlugin(key, cto) {
    PLUGINS[key] = cto;
  }

  /**
   * Starts autosliding all the slides if it's not currently doing it and the
   * autoslide option was a number greater than 0.
   * @param {?number} time Amount of milliseconds to wait to go to next slide
   * automatically.
   */
  play(time) {
    time = time || this.options.autoslide;

    if (!this.interval_ && typeof time === 'number' && time > 0) {
      this.interval_ = setInterval(this.goNext.bind(this), time);
    }
  }

  /**
   * Stops autosliding all the slides.
   */
  stop() {
    if (this.interval_) {
      clearInterval(this.interval_);
      this.interval_ = null;
    }
  }
}
