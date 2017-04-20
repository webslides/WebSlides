const NativeCustomEvent = window.CustomEvent;

/**
 * Check for the usage of native support for CustomEvents which is lacking
 * completely on IE.
 * @return {boolean} Whether it can be used or not.
 */
function canIuseNativeCustom() {
  try {
    const p = new NativeCustomEvent('t', {
      detail: {
        a: 'b'
      }
    });
    return 't' === p.type && 'b' === p.detail.a;
  } catch (e) { }

  return false;
}

/**
 * Lousy polyfill for the Custom Event constructor for IE.
 * @param {!string} type The type of the event.
 * @param {?Object} params Additional information for the event.
 * @return {Event}
 * @constructor
 */
const IECustomEvent = function CustomEvent(type, params) {
  const e = document.createEvent('CustomEvent');

  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, undefined);
  }

  return e;
};

const WSCustomEvent = canIuseNativeCustom() ? NativeCustomEvent : IECustomEvent;

export default WSCustomEvent;
