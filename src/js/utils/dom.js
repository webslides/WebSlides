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
    node.id = id;

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
   * @return {string}
   */
  static getTransitionEvent() {
    if (transitionEvent) {
      return transitionEvent;
    }

    const el = document.createElement('ws');
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
   * @return {string}
   */
  static getAnimationEvent() {
    if (animationEvent) {
      return animationEvent;
    }

    const el = document.createElement('ws');
    const animations = {
      'animation': 'animationend',
      'OAnimation': 'oAnimationEnd',
      'MozAnimation': 'animationend',
      'WebkitAnimation': 'webkitAnimationEnd'
    };
    const animationNames = Object.keys(animations);

    for (let i = 0, length = animationNames.length;
          i < length && !animationEvent; i++) {
      const animationName = animationNames[i];

      if (typeof el.style[animationName] !== 'undefined') {
        animationEvent = animations[animationName];
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

  /**
   * Checks whether the document has focus on an input or contenteditable
   * element.
   * @return {boolean} Whether the focused element is an input or content
   * editable.
   */
  static isFocusableElement() {
    let result = false;

    if (document.activeElement) {
      const isContentEditable = document.activeElement
          .contentEditable !== 'inherit';
      const isInput = ['INPUT', 'SELECT', 'OPTION', 'TEXTAREA']
          .indexOf(document.activeElement.tagName) > -1;

      result = isInput || isContentEditable;
    }

    return result;
  }
}
