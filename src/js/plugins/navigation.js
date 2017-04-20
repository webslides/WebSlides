import DOM from '../utils/dom';

const ELEMENT_ID = {
  NAV: 'navigation',
  NEXT: 'next',
  PREV: 'previous',
  COUNTER: 'counter'
};

const LABELS = {
  VERTICAL: {
    NEXT: '↓',
    PREV: '↑'
  },
  HORIZONTAL: {
    NEXT: '→',
    PREV: '←'
  }
};

/**
 * Navigation plugin.
 */
export default class Navigation {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    const arrowLabels = wsInstance.isVertical ?
        LABELS.VERTICAL : LABELS.HORIZONTAL;
    /**
     * Navigation element.
     * @type {Element}
     */
    this.el = DOM.createNode('div', 'navigation');
    /**
     * Next button.
     * @type {Element}
     */
    this.next = Navigation.createArrow(ELEMENT_ID.NEXT, arrowLabels.NEXT);
    /**
     * Prev button.
     * @type {Element}
     */
    this.prev = Navigation.createArrow(ELEMENT_ID.PREV, arrowLabels.PREV);
    /**
     * Counter Element.
     * @type {Element}
     */
    this.counter = DOM.createNode('span', ELEMENT_ID.COUNTER);
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    this.el.appendChild(this.next);
    this.el.appendChild(this.prev);
    this.el.appendChild(this.counter);

    this.ws_.el.appendChild(this.el);
    this.bindEvents_();
  }

  /**
   * Bind all events for the navigation.
   * @private
   */
  bindEvents_() {
    this.ws_.el.addEventListener(
      'ws:slide-change', this.onSlideChanged_.bind(this));
    this.next.addEventListener('click', this.onButtonClicked_.bind(this));
    this.prev.addEventListener('click', this.onButtonClicked_.bind(this));
  }

  /**
   * Updates the counter inside the navigation.
   * @param {string|number} current Current slide number.
   * @param {string|number} max Max slide number.
   */
  updateCounter(current, max) {
    this.counter.textContent = `${current} / ${max}`;
  }

  /**
   * Creates an arrow to navigate.
   * @param {!String} id Desired ID for the arrow.
   * @param {!String} text Desired text for the arrow.
   * @return {Element} The arrow element.
   */
  static createArrow(id, text) {
    const arrow = DOM.createNode('a', id, text);
    arrow.href = '#';
    arrow.title = 'Arrow Keys';

    return arrow;
  }

  /**
   * Slide Change event handler. Will update the text on the navigation.
   * @param {CustomEvent} event
   * @private
   */
  onSlideChanged_(event) {
    this.updateCounter(event.detail.currentSlide, event.detail.slides);
  }

  /**
   * Handles clicks on the next/prev buttons.
   * @param {MouseEvent} event
   * @private
   */
  onButtonClicked_(event) {
    event.preventDefault();
    if (event.target === this.next) {
      this.ws_.goNext();
    } else {
      this.ws_.goPrev();
    }
  }
}
