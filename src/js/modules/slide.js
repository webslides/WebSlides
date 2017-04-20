import DOM from '../utils/dom';

const CLASSES = {
  SLIDE: 'slide',
  CURRENT: 'current'
};

const Events = {
  ENTER: 'dom:enter',
  LEAVE: 'dom:leave',
  ENABLE: 'slide:enable',
  DISABLE: 'slide:disable'
};

/**
 * Wrapper for the Slide section.
 */
class Slide {
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

    this.el.id = `section-${(i + 1)}`;
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
   * @fires Slide#dom:leave
   * @fires Slide#dom:enter
   */
  moveAfterLast() {
    const last = this.parent.childNodes[this.parent.childElementCount - 1];

    this.fire_(Events.LEAVE);
    this.parent.insertBefore(this.el, last.nextSibling);
    this.fire_(Events.ENTER);
  }

  /**
   * Moves the section to the top of the section's list.
   * @fires Slide#dom:leave
   * @fires Slide#dom:enter
   */
  moveBeforeFirst() {
    const first = this.parent.childNodes[0];

    this.fire_(Events.LEAVE);
    this.parent.insertBefore(this.el, first);
    this.fire_(Events.ENTER);
  }

  /**
   * Fires an enable event.
   * @fires Slide#slide:enable
   */
  enable() {
    this.fire_(Events.ENABLE);
  }

  /**
   * Fires a disable event.
   * @fires Slide#slide:disable
   */
  disable() {
    this.fire_(Events.DISABLE);
  }

  /**
   * Fires an event passing the slide instance on the detail.
   * @param {String} name Name of the event to fire.
   * @private
   */
  fire_(name) {
    DOM.fireEvent(this.el, name, {
      slide: this
    });
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

  /**
   * Gets the section element from an inner element.
   * @param {Node} el
   * @return {{section: ?Node, i: ?number}} A map with the section and the
   * position of the section.
   */
  static getSectionFromEl(el) {
    let parent = el;
    let section = null;
    let i = null;

    while (parent.parentElement &&
          !parent.classList.contains(CLASSES.SLIDE)) {
      parent = parent.parentElement;
    }

    if (parent.classList.contains(CLASSES.SLIDE)) {
      section = parent;
      i = parseInt(section.id.replace('section-', ''), 10);
    }

    return {section, i};
  }
}

export {
  Slide as default,
  Events
};
