import Easings from './easing';

let SCROLLABLE_CONTAINER;

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

function scrollTo(y, duration = 500, cb = () => {}) {
  const scrollableContainer = getScrollableContainer();
  const delta = y - scrollableContainer.scrollTop;
  const increment = 20;

  const animateScroll = elapsedTime => {
    elapsedTime += increment;
    const percent = elapsedTime / duration;

    scrollableContainer.scrollTop = Easings.swing(
        percent,
        elapsedTime * percent,
        y,
        delta,
        duration) * delta;

    if (elapsedTime < duration) {
      setTimeout(() => animateScroll(elapsedTime), increment);
    } else {
      cb();
    }
  };

  animateScroll(0);
}

export default { getScrollableContainer, scrollTo };
