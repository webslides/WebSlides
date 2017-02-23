import DOM from '../utils/dom';

const CLASSES = {
  SLIDE: 'slide',
  CURRENT: 'current'
};

/**
 * Wrapper for the Slide section.
 */
export default class Slide {
  /**
   * Bootstraps the slide by saving some data, adding a class and hiding it.
   * @param {Element} el Section element.
   * @param {number} i Zero based index of the slide.
   */
  constructor(el, i) {
    /**
     * @type {Element}
     */
    this.el = el;
    /**
     * The section's parent.
     * @type {Node}
     */
    this.parent = el.parentNode;
    /**
     * @type {number}
     */
    this.i = i;

    this.el.id = 'section-' + (i + 1);
    this.el.classList.add(CLASSES.SLIDE);

    // Hide slides by default
    this.hide();
  }

  /**
   * Hides the node and removes the class that makes it "active".
   */
  hide() {
    DOM.hide(this.el);
    this.el.classList.remove(CLASSES.CURRENT);
  }

  /**
   * Shows the node and adds the class that makes it "active".
   */
  show() {
    DOM.show(this.el);
    this.el.classList.add(CLASSES.CURRENT);
  }

  /**
   * Moves the section to the bottom of the section's list.
   */
  moveAfterLast() {
    const last = this.parent.childNodes[this.parent.childElementCount - 1];

    this.parent.insertBefore(this.el, last.nextSibling);
  }

  /**
   * Moves the section to the top of the section's list.
   */
  moveBeforeFirst() {
    const first = this.parent.childNodes[0];

    this.parent.insertBefore(this.el, first);
  }

  /**
   * Checks whether an element is a valid candidate to be a slide by ensuring
   * it's a "section" element.
   * @param {Element} el Element to be checked.
   * @return {boolean} Whether is candidate or not.
   */
  static isCandidate(el) {
    return el.nodeType === 1 && el.tagName === 'SECTION';
  }
}
