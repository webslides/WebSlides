import DOM from '../utils/dom';
import Keys from '../utils/keys';
import Slide from '../modules/slide';


const CLASSES = {
  ZOOM: 'grid',
  DIV: 'column',
  WRAP: 'wrap-zoom'
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
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  /**
   * On key down handler. Will decide if Zoom in or out
   * @param {Event} event Key down event
   */
  onKeyDown(event) {
    if ( !this.isZoomed_ && Keys.MINUS.includes( event.which ) ) {
      this.zoomIn();
    } else if ( this.isZoomed_ &&
      (Keys.PLUS.includes( event.which ) || event.which == Keys.ESCAPE ) ) {
      this.zoomOut();
    }
  }

  /**
   * Prepare zoom structure, scales the slides and uses a grid layout
   * to show them
   */
  preBuildZoom_() {
    // Clone #webslides element
    this.zws_.el = this.ws_.el.cloneNode();
    this.zws_.el.id = ID;
    this.zws_.el.className = CLASSES.ZOOM;
    // Clone the slides
    this.zws_.slides = [].map.call(this.ws_.slides,
        (slide, i) => {
          const s_ = slide.el.cloneNode(true);
          this.zws_.el.appendChild(s_);
          return new Slide(s_, i);
        });
    DOM.hide(this.zws_.el);
    DOM.after(this.zws_.el, this.ws_.el);

    // Creates the container for each slide
    this.zws_.slides.forEach( elem => this.createSlideBlock_(elem));
  }

  /**
   * Creates a block structure around the slide
   * @param {Element} elem slide element
   */
  createSlideBlock_(elem) {
    // Wraps the slide around a container
    const wrap = DOM.wrap(elem.el, 'div');
    wrap.className = CLASSES.WRAP;
    // Slide container, need due to flexbox styles
    const div = DOM.wrap(wrap, 'div');
    div.className = CLASSES.DIV;
    // Adding some layer for controling click events
    const divLayer = document.createElement('div');
    divLayer.className = 'zoom-layer';
    divLayer.addEventListener('click', e => {
      this.zoomOut();
      this.ws_.goToSlide(elem.i);
    });
    wrap.appendChild(divLayer);
    // Slide number
    const slideNumber = document.createElement('span');
    slideNumber.className = 'slide-number';
    slideNumber.textContent = `${elem.i+1}`;
    div.appendChild(slideNumber);
    // Zoom out when click in slide "border"
    const obj = this;
    div.addEventListener('click', () => obj.toggleZoom());

    this.setSizes_(div, wrap, elem);
  }

  /**
   * Sets layers size
   * @param {Element} div flexbox element
   * @param {Element} wrap wrapping element
   * @param {Element} elem slide element
   */
  setSizes_(div, wrap, elem) {
    // Calculates the margins in relation to window width
    const divCSS = window.getComputedStyle(div);
    const marginW = DOM.parseSize(divCSS.paddingLeft)
      + DOM.parseSize(divCSS.paddingRight);
    const marginH = DOM.parseSize(divCSS.paddingTop)
      + DOM.parseSize(divCSS.paddingBottom);

    // Sets element size: window size - relative margins
    const scale = divCSS.width.includes('%') ?
      100 / DOM.parseSize(divCSS.width) :
      window.innerWidth / DOM.parseSize(divCSS.width);
    if (scale == 1) {
      // If the scale is 100% means it is mobile
      const wsW = this.ws_.el.clientWidth;
      elem.el.style.width = `${(wsW - marginW) * 2}px`;
      elem.el.style.height = `${(wsW - marginH) * 1.5}px`;
      elem.el.style.minHeight = scale == 1? 'auto' : '';
      // Because of flexbox, wrap height is required
      wrap.style.height = `${(wsW - marginH) * 1.5 / 2}px`;
    } else {
      elem.el.style.width = `${window.innerWidth - marginW * scale}px`;
      elem.el.style.height = `${window.innerHeight - marginH * scale}px`;
      // Because of flexbox, wrap height is required
      wrap.style.height = `${window.innerHeight / scale}px`;
    }
  }

  /**
   * Toggles zoom
   */
  toggleZoom() {
    if (this.isZoomed_) {
      this.zoomOut();
    } else {
      this.zoomIn();
    }
  }

  /**
   * Zoom In the slider, scales the slides and uses a grid layout to show them
   */
  zoomIn() {
    DOM.hide(this.ws_.el);
    DOM.show(this.zws_.el);
    this.isZoomed_ = true;
    document.body.style.overflow = 'auto';
  }

  /**
   * Zoom Out the slider, remove scale from the slides
   */
  zoomOut() {
    DOM.hide(this.zws_.el);
    DOM.show(this.ws_.el);
    this.isZoomed_ = false;
    document.body.style.overflow = '';
  }

  /**
   * When windows resize it is necessary to recalculate layers sizes
   * @param {Event} ev
   */
  onWindowResize(ev) {
    if (this.isZoomed_) this.zoomOut();

    this.zws_.slides.forEach( elem => {
      const wrap = elem.el.parentElement;
      const div = wrap.parentElement;
      this.setSizes_(div, wrap, elem);
    });
  }

}
