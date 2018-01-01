import WSCustomEvent from './custom-event';

let transitionEvent = '';
let animationEvent = '';

/**
 * Static class for DOM helper.
 */
export default class DOM {
  /**
   * Creates a node with optional parameters.
   * @param {string} tag The name of the tag of the needed element.
   * @param {string} id The desired id for the element. It defaults to an
   * empty string.
   * @param {string} text The desired text to go inside of the element. It
   * defaults to an empty string.
   * @return {Element}
   */
  static createNode(tag, id = '', text = '') {
    const node = document.createElement(tag);
    if (id) {
      node.id = id;
    }

    if (text) {
      node.textContent = text;
    }

    return node;
  }

  /**
   * Listens for an event once.
   * @param {Element} el Element to listen to.
   * @param {string} event Event Type.
   * @param {Function} callback Function to execute once the event fires.
   */
  static once(el, event, callback) {
    const cb = e => {
      if (e.target === el) {
        el.removeEventListener(event, cb);
        callback(e);
      }
    };

    el.addEventListener(event, cb, false);
  }

  /**
   * Gets the prefixed transitionend event.
   * @param {?Element} optEl Element to check
   * @return {string}
   */
  static getTransitionEvent(optEl) {
    if (transitionEvent && !optEl) {
      return transitionEvent;
    }

    transitionEvent = '';

    const el = optEl || document.createElement('ws');
    const transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };
    const transitionNames = Object.keys(transitions);

    for (let i = 0, length = transitionNames.length;
          i < length && !transitionEvent; i++) {
      const transitionName = transitionNames[i];

      if (typeof el.style[transitionName] !== 'undefined') {
        transitionEvent = transitions[transitionName];
      }
    }

    return transitionEvent;
  }

  /**
   * Gets the prefixed animation end event.
   * @param {?Element} optEl Element to check
   * @return {string}
   */
  static getAnimationEvent(optEl) {
    if (animationEvent && !optEl) {
      return animationEvent;
    }

    animationEvent = 'animationend';

    const el = optEl || document.createElement('ws');
    const animations = {
      'animation': 'animationend',
      'OAnimation': 'oAnimationEnd',
      'MozAnimation': 'animationend',
      'WebkitAnimation': 'webkitAnimationEnd'
    };
    const animationNames = Object.keys(animations);

    for (let i = 0, length = animationNames.length;
          i < length; i++) {
      const animationName = animationNames[i];

      if (typeof el.style[animationName] !== 'undefined') {
        animationEvent = animations[animationName];
        break;
      }
    }

    return animationEvent;
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
   * Checks if the element is visible.
   * @param {Element} el Element to check.
   * @return {boolean}
   */
  static isVisible(el) {
    return (el.offsetParent !== null);
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
      detail: eventInfo,
      bubbles: true
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

  /**
   * Checks whether the document has focus on an input or contenteditable
   * element.
   * @return {boolean} Whether the focused element is an input or content
   * editable.
   */
  static isFocusableElement() {
    let result = false;

    if (document.activeElement) {
      const isContentEditable =
          document.activeElement.contentEditable !== 'inherit' &&
          document.activeElement.contentEditable !== undefined;
      const isInput = ['INPUT', 'SELECT', 'OPTION', 'TEXTAREA']
          .indexOf(document.activeElement.tagName) > -1;
      result = isInput || isContentEditable;
    }

    return result;
  }

  /**
   * Gets the integer value of a style property.
   * @param {string} prop CSS property value.
   * @return {Number} The property without the units.
   */
  static parseSize(prop) {
    return Number(prop.replace(/[^\d\.]/g, ''));
  }

  /**
   * Wraps a HTML structure around an element.
   * @param {Element} elem the element to be wrapped.
   * @param {string} tag the new element tag.
   * @return {Element} the new element.
   */
  static wrap(elem, tag) {
    const wrap = document.createElement(tag);
    elem.parentElement.insertBefore(wrap, elem);
    wrap.appendChild(elem);

    return wrap;
  }

  /**
   * Inserts and element after another element.
   * @param {Element} elem the element to be inserted.
   * @param {Element} target the element to be inserted after.
   */
  static after(elem, target) {
    const parent = target.parentNode;

    if (parent.lastChild === target) {
      parent.appendChild(elem);
    } else {
      parent.insertBefore(elem, target.nextSibling);
    }
  }
}
