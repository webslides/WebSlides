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

export default class Navigation {
  /**
   * The Navigation constructor. It'll create all the nodes needed for the
   * navigation such as the arrows and the counter.
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  constructor(wsInstance) {
    const arrowLabels = wsInstance.isVertical ?
        LABELS.VERTICAL : LABELS.HORIZONTAL;

    this.el = DOM.createNode('div', 'navigation');
    this.next = Navigation.createArrow(ELEMENT_ID.NEXT, arrowLabels.NEXT);
    this.prev = Navigation.createArrow(ELEMENT_ID.PREV, arrowLabels.PREV);
    this.counter = DOM.createNode('span', ELEMENT_ID.COUNTER);

    this.el.appendChild(this.next);
    this.el.appendChild(this.prev);
    this.el.appendChild(this.counter);

    wsInstance.el.appendChild(this.el);
  }

  /**
   *
   * @param current
   * @param max
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
}
