import Plugins from '../plugins/plugins';
import Slide from './slide';
import DOM from '../utils/dom';
import ScrollHelper from '../utils/scroll-to';

const CLASSES = {
  VERTICAL: 'vertical'
};

const PLUGINS = {
  'nav': Plugins.Navigation,
  'hash': Plugins.Hash,
  'keyboard': Plugins.Keyboard
};

export default class WebSlides {
  constructor() {
    this.el = document.getElementById('webslides');
    this.isMoving = false;
    this.slides = null;
    this.currentSlideI_ = -1;
    this.currentSlide_ = null;
    this.maxSlide_ = 0;
    this.isVertical = this.el.classList.contains(CLASSES.VERTICAL);
    this.plugins = {};

    if (!this.el) {
      throw new Error('Couldn\'t find the webslides container!');
    }

    this.removeChildren_();
    this.grabSlides_();
    this.createPlugins_();
    this.initSlides_();

    this.onInit_();
  }

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

  createPlugins_() {
    Object.keys(PLUGINS).forEach(pluginName => {
      const pluginCto = PLUGINS[pluginName];
      this.plugins[pluginName] = new pluginCto(this);
    });
  }

  onInit_() {
    DOM.fireEvent(this.el, 'ws:init');
  }

  grabSlides_() {
    this.slides = Array.from(this.el.childNodes)
        .map((slide, i) => new Slide(slide, i));

    this.maxSlide_ = this.slides.length;
  }

  goToSlide(slideI, forward = null) {
    if (this.isValidIndexSlide_(slideI) && !this.isMoving) {
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

      if (this.currentSlide_ !== null) {
        this.animateToSlide_(isMovingForward, nextSlide, this.onSlideChange_);
      } else {
        this.transitionToSlide_(
            isMovingForward, nextSlide, this.onSlideChange_);
        nextSlide.moveBeforeFirst();
      }
    }
  }

  animateToSlide_(isMovingForward, nextSlide, callback) {
    DOM.lockScroll();

    if (!isMovingForward) {
      nextSlide.moveBeforeFirst();
      nextSlide.show();
      ScrollHelper.scrollTo(this.currentSlide_.el.offsetTop, 0);
    } else {
      nextSlide.show();
    }

    ScrollHelper.scrollTo(nextSlide.el.offsetTop, 500, () => {
      this.currentSlide_.hide();

      if (isMovingForward) {
        this.currentSlide_.moveAfterLast();
      }

      DOM.unlockScroll();
      callback.call(this, nextSlide);
    });
  }

  transitionToSlide_(isMovingForward, nextSlide, callback) {
    ScrollHelper.scrollTo(0, 0);

    nextSlide.show();

    if (this.currentSlide_) {
      if (isMovingForward) {
        this.currentSlide_.moveAfterLast();
      } else {
        nextSlide.moveBeforeFirst();
      }
    }

    callback.call(this, nextSlide);
  }

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

  goNext() {
    let nextIndex = this.currentSlideI_ + 1;

    if (nextIndex >= this.maxSlide_) {
      nextIndex = 0;
    }

    this.goToSlide(nextIndex, true);
  }

  goPrev() {
    let prevIndex = this.currentSlideI_ - 1;

    if (prevIndex < 0) {
      prevIndex = this.maxSlide_ - 1;
    }

    this.goToSlide(prevIndex, false);
  }

  isValidIndexSlide_(i) {
    return i >= 0 && i < this.maxSlide_;
  }

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
}
