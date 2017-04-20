const CLICKABLE_ELS = [
  'INPUT',
  'SELECT',
  'OPTION',
  'BUTTON',
  'A',
  'TEXTAREA'
];

/**
 * ClickNav plugin that allows to click on the page to get to the next slide.
 */
export default class ClickNav {
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

    if (wsInstance.options.changeOnClick) {
      this.ws_.el.addEventListener('click', this.onClick_.bind(this));
    }
  }

  /**
   * Reacts to the click event. It will go to the next slide unless the element
   * has a data-prevent-nav attribute or is on the list of CLICKABLE_ELS.
   * @param {MouseEvent} event The click event.
   * @private
   */
  onClick_(event) {
    if (CLICKABLE_ELS.indexOf(event.target.tagName) < 0 &&
      typeof event.target.dataset.preventNav === 'undefined') {
      this.ws_.goNext();
    }
  }
}
