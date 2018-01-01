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
    this.counter = Navigation.createCounter(ELEMENT_ID.COUNTER, wsInstance);
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    this.el.appendChild(this.next);
    this.el.appendChild(this.prev);
    this.el.appendChild(this.counter);

    this.ws_.el.appendChild(this.el);
    this.slides = Array.prototype.slice.call(
      document.querySelectorAll('#webslides section')).map(s => s.id);

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
    this.counter.addEventListener('click', this.onButtonClicked_.bind(this));
    document.body.addEventListener('click', this.onBodyClicked_.bind(this));
  }

  /**
   * Whenever the body is clicked, check if the element has [data-slide] attr
   * and if so, navigate to it.
   * @param {MouseEvent} event Click event
   */
  onBodyClicked_(event) {
    const matches = document.body.matches || document.body.msMatchesSelector;
    let el;

    if (matches.call(event.target, '[data-slide]')) {
      el = event.target;
    } else if (matches.call(event.target, '[data-slide] *')) {
      el = event.target.querySelector('[data-slide]');
    }

    if (el) {
      event.preventDefault();
      const i = this.slides.indexOf(el.dataset.slide);
      this.ws_.goToSlide(i);
    }
  }

  /**
   * Updates the counter inside the navigation.
   * @param {string|number} current Current slide number.
   * @param {string|number} max Max slide number.
   */
  updateCounter(current, max) {
    if (this.ws_.options.showIndex) {
      this.counter.childNodes[0].textContent = `${current} / ${max}`;
    } else {
      this.counter.textContent = `${current} / ${max}`;
    }
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
   * Creates the navigation counter.
   * @param {!String} id Desired ID for the counter.
   * @param {WebSlides} ws_ WebSlides object.
   * @return {Element} The arrow element.
   */
  static createCounter(id, ws_) {
    const counter = DOM.createNode('span', id);
    if (ws_.options.showIndex) {
      const link = document.createElement('a');
      link.href = '#';
      link.title = 'View all slides';
      counter.appendChild(link);
    }

    return counter;
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
    } else if (event.target === this.prev) {
      this.ws_.goPrev();
    } else {
      this.ws_.toggleZoom();
    }
  }
}
