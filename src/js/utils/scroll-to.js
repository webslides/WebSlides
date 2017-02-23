import Easings from './easing';

let SCROLLABLE_CONTAINER = getScrollableContainer();

/**
 * Returns the correct DOM element to be used for scrolling the
 * page, due to Firefox not scrolling on document.body.
 * @return {Element} Scrollable Element.
 */
function getScrollableContainer() {
  if (SCROLLABLE_CONTAINER) {
    return SCROLLABLE_CONTAINER;
  }

  const documentElement = window.document.documentElement;
  let scrollableContainer;

  documentElement.scrollTop = 1;

  if (documentElement.scrollTop === 1) {
    documentElement.scrollTop = 0;
    scrollableContainer = documentElement;
  } else {
    scrollableContainer = document.body;
  }

  SCROLLABLE_CONTAINER = scrollableContainer;

  return scrollableContainer;
}

/**
 * Smoothly scrolls to a given Y position using Easing.Swing. It'll run a
 * callback upon finishing.
 * @param {number} y Offset of the page to scroll to.
 * @param {number} duration Duration of the animation. 500ms by default.
 * @param {function} cb Callback function to call upon completion.
 */
function scrollTo(y, duration = 500, cb = () => {}) {
  const scrollableContainer = getScrollableContainer();
  const delta = y - scrollableContainer.scrollTop;
  const startLocation = scrollableContainer.scrollTop;
  const increment = 16;

  if (!duration) {
    scrollableContainer.scrollTop = y;
    cb();
    return;
  }

  const animateScroll = elapsedTime => {
    elapsedTime += increment;
    const percent = Math.min(1, elapsedTime / duration);
    const easingP = Easings.swing(
      percent,
      elapsedTime * percent,
      y,
      delta,
      duration);

    scrollableContainer.scrollTop = Math.floor(startLocation +
        (easingP * delta));

    if (elapsedTime < duration) {
      setTimeout(() => animateScroll(elapsedTime), increment);
    } else {
      cb();
    }
  };

  animateScroll(0);
}

export default { getScrollableContainer, scrollTo };
