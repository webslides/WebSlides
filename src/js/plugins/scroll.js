import ScrollHelper from '../utils/scroll-to';

const MIN_WHEEL_DELTA = 40;

export default class Scroll {
  /**
   * Scroll handler for the WebSlides.
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    this.scrollContainer_ = ScrollHelper.getScrollableContainer();
    this.isGoingUp_ = false;

    if (this.ws_.isVertical) {
        this.scrollContainer_.addEventListener(
            'wheel', this.onMouseWheel_.bind(this));
    }
  }

  /**
   * Reacts to the wheel event. Detects whether is going up or down and decides
   * if it needs to move the slide based on the amount of delta.
   * @param {WheelEvent} event The Wheel Event.
   * @private
   */
  onMouseWheel_(event) {
    if (this.ws_.isMoving) {
      return;
    }

    const { deltaY: wheelDelta } = event;
    this.isGoingUp_ = wheelDelta < 0;

    if (Math.abs(wheelDelta) >= MIN_WHEEL_DELTA) {
      if (this.isGoingUp_) {
        this.ws_.goPrev();
      } else {
        this.ws_.goNext();
      }

      event.preventDefault();
    }
  }
};
