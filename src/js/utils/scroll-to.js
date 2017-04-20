import Easings from './easing';

const SCROLLABLE_CONTAINER = document.getElementById('webslides');

/**
 * Smoothly scrolls to a given Y position using Easing.Swing. It'll run a
 * callback upon finishing.
 * @param {number} y Offset of the page to scroll to.
 * @param {number} duration Duration of the animation. 500ms by default.
 * @param {function} cb Callback function to call upon completion.
 */
export default function scrollTo(y, duration = 500, cb = () => {}) {
  const delta = y - SCROLLABLE_CONTAINER.scrollTop;
  const startLocation = SCROLLABLE_CONTAINER.scrollTop;
  const increment = 16;

  if (!duration) {
    SCROLLABLE_CONTAINER.scrollTop = y;
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

    SCROLLABLE_CONTAINER.scrollTop = Math.floor(startLocation +
        (easingP * delta));

    if (elapsedTime < duration) {
      setTimeout(() => animateScroll(elapsedTime), increment);
    } else {
      cb();
    }
  };

  animateScroll(0);
}
