import DOM from '../utils/dom';
import Keys from '../utils/keys';


const CLASSES = {
  ZOOM: 'grid',
  DIV: 'column',
  WRAP: 'wrap-zoom'
};

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
     * @type {boolean}
     * @private
     */
    this.isZoomed_ = false;

    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  /**
   * On key down handler. Will decide if Zoom in or out
   * @param {Event} event Key down event
   */
  onKeyDown( event ) {
    if ( !this.isZoomed_ && Keys.MINUS.includes( event.which ) ) {
      this.zoomIn();
    } else if ( this.isZoomed_ && Keys.PLUS.includes( event.which ) ) {
      this.zoomOut();
    }
  }

  /**
   * Zoom In the slider, scales the slides and uses a grid layout to show them
   */
  zoomIn() {
    this.ws_.el.classList.add(CLASSES.ZOOM);
    this.ws_.goToSlide(0);

    this.ws_.slides.forEach( elem => {
      const wrap = DOM.wrap(elem.el, 'div');
      wrap.className = CLASSES.WRAP;
      const div = DOM.wrap(wrap, 'div');
      div.className = CLASSES.DIV;

      const divCSS = window.getComputedStyle(div);
      const marginW = DOM.parseSize(divCSS.paddingLeft)
        + DOM.parseSize(divCSS.paddingRight);
      const marginH = DOM.parseSize(divCSS.paddingTop)
        + DOM.parseSize(divCSS.paddingBottom);

      elem.el.style.width = `${window.innerWidth - marginW * 4}px`;
      elem.el.style.height = `${window.innerHeight - marginH * 4}px`;

      const slideCSS = window.getComputedStyle(elem.el);
      wrap.style.height = `${DOM.parseSize(slideCSS.height) / 4}px`;
    });

    this.isZoomed_ = true;
  }


  /**
   * Zoom Out the slider, remove scale from the slides
   */
  zoomOut() {
    this.ws_.el.classList.remove(CLASSES.ZOOM);

    this.ws_.slides.forEach( elem => {
      const wrap = elem.el.parentElement;
      const div = wrap.parentElement;
      elem.parent.appendChild(elem.el);
      wrap.remove();
      div.remove();
      elem.el.style.width = '';
      elem.el.style.height = '';
    });

    this.isZoomed_ = false;
  }

}
