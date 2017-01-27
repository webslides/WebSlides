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
  constructor({ isVertical }) {
    const arrowLabels = isVertical ? LABELS.VERTICAL : LABELS.HORIZONTAL;

    this.el = DOM.createNode('div', 'navigation');
    this.next = Navigation.createArrow(ELEMENT_ID.NEXT, arrowLabels.NEXT);
    this.prev = Navigation.createArrow(ELEMENT_ID.PREV, arrowLabels.PREV);
    this.counter = DOM.createNode('span', ELEMENT_ID.COUNTER);

    this.el.appendChild(this.next);
    this.el.appendChild(this.prev);
    this.el.appendChild(this.counter);
  }

  updateCounter(current, max) {
    this.counter.textContent = `${current} / ${max}`;
  }

  static createArrow(id, text) {
    const arrow = DOM.createNode('a', id, text);
    arrow.href = '#';
    arrow.title = 'Arrow Keys';

    return arrow;
  }
}
