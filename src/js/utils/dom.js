import WSCustomEvent from './custom-event';


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
   * Fires a custom event on the given target.
   * @param {Element} target The target of the event.
   * @param {string} eventType The event type.
   * @param {Object} eventInfo Optional parameter to provide additional data
   * to the event.
   */
  static fireEvent(target, eventType, eventInfo = {}) {
    const event = new WSCustomEvent(eventType, {
      detail: eventInfo
    });

    target.dispatchEvent(event);
  }

  /**
   * Converts an iterable to an array.
   * @param {*} iterable Element to convert to array
   * @return {Array} the element casted to an array.
   */
  static toArray(iterable) {
    return [].slice.call(iterable);
  }
}
