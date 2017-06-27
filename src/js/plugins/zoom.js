import DOM from '../utils/dom';
import Keys from '../utils/keys';
import Slide from '../modules/slide';

const CLASSES = {
  ZOOM: 'grid',
  DIV: 'column',
  WRAP: 'wrap-zoom',
  WRAP_CONTAINER: 'wrap',
  CURRENT: 'current',
  SLIDE: 'slide'
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
    if (!this.isZoomed_ && Keys.MINUS.includes(event.which)) {
      this.zoomIn();
    } else if (this.isZoomed_ &&
      (Keys.PLUS.includes(event.which) || event.which === Keys.ESCAPE)) {
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

    DOM.hide(this.zws_.el);
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
    const slideNumber = DOM.createNode('p', '', `${elem.i+1}`);
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
    DOM.show(this.zws_.el);
    const currentId = this.ws_.el
      .querySelector(`.${CLASSES.SLIDE}.${CLASSES.CURRENT}`)
      .getAttribute('id');
    const zoomedCurrent = this.zws_.el
      .querySelector(`.${CLASSES.WRAP}.${CLASSES.CURRENT}`);
    if (zoomedCurrent) {
      zoomedCurrent.classList.remove(CLASSES.CURRENT);
    }
    this.zws_.el
      .querySelector(`#zoomed-${currentId}`)
      .classList.add(CLASSES.CURRENT);
    setTimeout(() => {
      this.ws_.disable();
    }, 400);
    this.isZoomed_ = true;
    document.body.style.overflow = 'auto';
  }

  /**
   * Zoom Out the slider, remove scale from the slides.
   */
  zoomOut() {
    setTimeout(() => {
      DOM.hide(this.zws_.el);
      this.ws_.enable();
    }, 400);
    this.isZoomed_ = false;
    document.body.style.overflow = '';
  }
}
