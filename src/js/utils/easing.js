/**
 * Swing easing function.
 * @param {number} p The percentage of time that has passed.
 * @return {number}
 */
function swing(p) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}

export default {swing};
