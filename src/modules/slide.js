import DOM from '../utils/dom';

const CLASSES = {
  SLIDE: 'slide',
  CURRENT: 'current'
};

export default class Slide {
  constructor(el, i) {
    this.el = el;
    this.parent = el.parentNode;
    this.i = i;
    this.el.id = 'section-' + (i + 1);

    this.el.classList.add(CLASSES.SLIDE);

    // Hide slides by default
    this.hide();
  }

  hide() {
    DOM.hide(this.el);
    this.el.classList.remove(CLASSES.CURRENT);
  }

  show() {
    DOM.show(this.el);
    this.el.classList.add(CLASSES.CURRENT);
  }

  moveAfterLast() {
    const last = this.parent.childNodes[this.parent.childElementCount - 1];

    this.parent.insertBefore(this.el, last.nextSibling);
  }

  moveBeforeFirst() {
    const first = this.parent.childNodes[0];

    this.parent.insertBefore(this.el, first);
  }

  static isCandidate(el) {
    return el.nodeType === 1 && el.tagName === 'SECTION';
  }
}
