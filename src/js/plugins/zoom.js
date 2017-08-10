import DOM from '../utils/dom';
import Keys from '../utils/keys';
import scrollTo from '../utils/scroll-to';
import Slide from '../modules/slide';

const CLASSES = {
  ZOOM: 'grid',
  DIV: 'column',
  WRAP: 'wrap-zoom',
  WRAP_CONTAINER: 'wrap',
  CURRENT: 'current',
  SLIDE: 'slide',
  ZOOM_ENABLED: 'ws-ready-zoom'
};

const ID = 'webslides-zoomed';

/**
 * Zoom plugin.
 */
export default class Zoom {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    /**
     * @type {WebSlides}
     * @private
     */
    this.zws_ = {};

    /**
     * @type {boolean}
     * @private
     */
    this.isZoomed_ = false;

    this.preBuildZoom_();
    document.body.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  /**
   * On key down handler. Will decide if Zoom in or out
   * @param {Event} event Key down event.
   */
  onKeyDown(event) {
    if (!this.isZoomed_ && Keys.MINUS.some(key => key === event.which)) {
      this.zoomIn();
    } else if (this.isZoomed_ &&
      (Keys.PLUS.some(key => key === event.which) ||
        event.which === Keys.ESCAPE)) {
      this.zoomOut();
    }
  }

  /**
   * Prepare zoom structure, scales the slides and uses a grid layout
   * to show them.
   */
  preBuildZoom_() {
    // Clone #webslides element
    this.zws_.el = this.ws_.el.cloneNode();
    this.zws_.el.id = ID;
    this.zws_.wrap = DOM.createNode('div');
    this.zws_.wrap.className = CLASSES.WRAP_CONTAINER;
    this.zws_.el.appendChild(this.zws_.wrap);
    this.zws_.grid = DOM.createNode('div');
    this.zws_.grid.className = CLASSES.ZOOM;
    this.zws_.wrap.appendChild(this.zws_.grid);

    this.zws_.el.addEventListener('click', () => this.toggleZoom());

    // Clone the slides
    this.zws_.slides = [].map.call(this.ws_.slides,
        (slide, i) => {
          const s_ = slide.el.cloneNode(true);
          this.zws_.grid.appendChild(s_);
          return new Slide(s_, i);
        });

    this.disable();
    DOM.after(this.zws_.el, this.ws_.el);

    // Creates the container for each slide
    this.zws_.slides.forEach(elem => this.createSlideBlock_(elem));
  }

  /**
   * Creates a block structure around the slide.
   * @param {Element} elem slide element.
   */
  createSlideBlock_(elem) {
    // Wraps the slide around a container
    const wrap = DOM.wrap(elem.el, 'div');
    wrap.className = CLASSES.WRAP;
    wrap.setAttribute('id', `zoomed-${elem.el.getAttribute('id')}`);

    // Slide container, need due to flexbox styles
    const div = DOM.wrap(wrap, 'div');
    div.className = CLASSES.DIV;

    // Adding some layer for controlling click events
    const divLayer = DOM.createNode('div');
    divLayer.className = 'zoom-layer';
    divLayer.addEventListener('click', e => {
      e.stopPropagation();
      this.zoomOut();
      this.ws_.goToSlide(elem.i);
    });
    wrap.appendChild(divLayer);

    // Slide number
    const slideNumber = DOM.createNode('p', '', `${elem.i + 1}`);
    slideNumber.className = 'text-slide-number';
    div.appendChild(slideNumber);
  }

  /**
   * Toggles zoom.
   */
  toggleZoom() {
    if (this.isZoomed_) {
      this.zoomOut();
    } else {
      this.zoomIn();
    }
  }

  /**
   * Zoom In the slider, scales the slides and uses a grid layout to show them.
   */
  zoomIn() {
    if (!this.ws_.options.showIndex) return;
    this.enable();
    const currentId = this.ws_.currentSlide_.el.id;
    const zoomedCurrent = this.zws_.el
      .querySelector(`.${CLASSES.WRAP}.${CLASSES.CURRENT}`);

    if (zoomedCurrent) {
      zoomedCurrent.classList.remove(CLASSES.CURRENT);
    }

    const actualCurrent = this.zws_.el
      .querySelector(`#zoomed-${currentId}`);
    actualCurrent.classList.add(CLASSES.CURRENT);

    this.isZoomed_ = true;
    document.documentElement.classList.add(CLASSES.ZOOM_ENABLED);

    setTimeout(() => {
      this.ws_.disable();
      this.zws_.el.classList.add('in');
      const wrapCSS = window.getComputedStyle(this.zws_.grid);
      const scrollingElement = document.body;

      scrollTo(actualCurrent.parentNode.offsetTop
        + DOM.parseSize(wrapCSS.paddingTop), 50, () => {}, scrollingElement);
    }, 50);
  }

  /**
   * Zoom Out the slider, remove scale from the slides.
   */
  zoomOut() {
    if (!this.ws_.options.showIndex) return;
    this.zws_.el.classList.remove('in');

    setTimeout(() => {
      this.ws_.enable();
      this.disable();
      this.isZoomed_ = false;
      document.documentElement.classList.remove(CLASSES.ZOOM_ENABLED);
    }, 400);
  }

  /**
   * Hides the zoom container
   */
  disable() {
    this.zws_.el.classList.add('disabled');
  }

  /**
   * Shows the zoom container
   */
  enable() {
    this.zws_.el.classList.remove('disabled');
  }
}
