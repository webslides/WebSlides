/**
 * Static class for DOM helper.
 */
export default class DOM {
  /**
   * Creates a node with optional parameters.
   * @param {string} tag The name of the tag of the needed element.
   * @param {string} id The desired id for the element. It defaults to an
   * empty string.
   * @param {string} text The desired text to go inside of the element. It defaults
   * to an empty string.
   * @return {Element}
   */
  static createNode(tag, id = '', text = '') {
    const node = document.createElement(tag);
    node.id = id;

    if (text) {
      node.textContent = text;
    }

    return node;
  }

  /**
   * Hides an element setting the display to none.
   * @param {Element} el Element to be hidden.
   */
  static hide(el) {
    el.style.display = 'none';
  }

  /**
   * Shows an element by removing the display property. This is only intended
   * to be used in conjunction with DOM.hide.
   * @param {Element} el Element to be shown.
   */
  static show(el) {
    el.style.display = '';
  }

  /**
   * Locks the scroll on the document by setting the HTML to have a hidden
   * overflow.
   */
  static lockScroll() {
    document.documentElement.style.overflow = 'hidden';
  }

  /**
   * Unlocks the scroll on the document by setting the HTML to have an auto
   * overflow.
   */
  static unlockScroll() {
    document.documentElement.style.overflow = 'auto';
  }
}
