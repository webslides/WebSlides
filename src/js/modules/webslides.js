import Plugins from '../plugins/plugins';
import Slide from './slide';
import DOM from '../utils/dom';
import scrollTo from '../utils/scroll-to';

const CLASSES = {
  VERTICAL: 'vertical',
  READY: 'ws-ready'
};

// Default plugins
const PLUGINS = {
  'autoslide': Plugins.AutoSlide,
  'clickNav': Plugins.ClickNav,
  'grid': Plugins.Grid,
  'hash': Plugins.Hash,
  'keyboard': Plugins.Keyboard,
  'nav': Plugins.Navigation,
  'scroll': Plugins.Scroll,
  'touch': Plugins.Touch,
  'video': Plugins.Video,
  'youtube': Plugins.YouTube
};


/**
 * WebSlides module.
 */
export default class WebSlides {
  /**
   * Options for WebSlides
   * @param {number|boolean} autoslide If a number is provided, it will allow
   * autosliding by said amount of milliseconds.
   * @param {boolean} changeOnClick If true, it will allow
   * clicking on any place to change the slide.
   * @param {boolean} loop Whether to go to first slide from last one or not.
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
    loop = true,
    minWheelDelta = 40,
    scrollWait = 450,
    slideOffset = 50
  } = {}) {
    /**
     * WebSlide element.
     * @type {Element}
     */
    this.el = document.getElementById('webslides');

    if (!this.el) {
      throw new Error('Couldn\'t find the webslides container!');
    }

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
     * Options dictionary.
     * @type {Object}
     */
    this.options = {
      autoslide,
      changeOnClick,
      loop,
      minWheelDelta,
      scrollWait,
      slideOffset
    };
    /**
     * Initialisation flag.
     * @type {boolean}
     */
    this.initialised = false;

    // Bootstrapping
    this.removeChildren_();
    this.grabSlides_();
    this.createPlugins_();
    this.initSlides_();
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
      const PluginCto = PLUGINS[pluginName];
      this.plugins[pluginName] = new PluginCto(this);
    });
  }

  /**
   * Called once the WebSlide instance has finished initialising.
   * @private
   * @fires WebSlide#ws:init
   */
  onInit_() {
    this.initialised = true;
    DOM.fireEvent(this.el, 'ws:init');
    document.documentElement.classList.add(CLASSES.READY);
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
   * @param {?boolean=} forward Whether we're forcing moving forward/backwards.
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
      setTimeout(() => {
        callback.call(this, nextSlide);
      }, 150);
    });
  }

  /**
   * Transitions to a slide, without doing the scroll animation. If the page is
   * already initialised and on mobile device, it will do a slide animation.
   * @param {boolean} isMovingForward Whether we're going forward or backwards.
   * @param {Slide} nextSlide Next slide.
   * @param {Function} callback Callback to be called upon finishing. This is a
   * sync function so it'll happen on run time.
   * @private
   */
  transitionToSlide_(isMovingForward, nextSlide, callback) {
    scrollTo(0, 0);
    let className = 'slideInRight';

    if (!isMovingForward) {
      nextSlide.moveBeforeFirst();
      className = 'slideInLeft';
    }

    if (this.currentSlide_) {
      if (isMovingForward) {
        this.currentSlide_.moveAfterLast();
      }

      this.currentSlide_.hide();
    }

    nextSlide.show();

    if (this.initialised &&
        this.plugins.touch &&
        this.plugins.touch.isEnabled) {
      DOM.once(nextSlide.el, DOM.getAnimationEvent(), () => {
        nextSlide.el.classList.remove(className);
        callback.call(this, nextSlide);
      });

      nextSlide.el.classList.add(className);
    } else {
      callback.call(this, nextSlide);
    }
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
    if (this.currentSlide_) {
      this.currentSlide_.disable();
    }

    this.currentSlide_ = slide;
    this.currentSlideI_ = slide.i;
    this.currentSlide_.enable();
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
      if (!this.options.loop) {
        return;
      }

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
      if (!this.options.loop) {
        return;
      }

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
   * @param {!string} key They key under which it'll be stored inside of the
   * instance, inside the plugins dict.
   * @param {!Function} cto Plugin constructor.
   */
  static registerPlugin(key, cto) {
    PLUGINS[key] = cto;
  }
}
