import MobileDetector from '../utils/mobile-detector';

const EVENTS = {
  touch: {
    START: 'touchstart',
    MOVE: 'touchmove',
    END: 'touchend'
  },
  pointer: {
    START: 'pointerdown',
    MOVE: 'pointermove',
    END: 'pointerup'
  }
};

/**
 * Touch plugin.
 */
export default class Touch {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    /**
     * Start position for the X coordinate.
     * @type {number}
     * @private
     */
    this.startX_ = 0;

    /**
     * Start position for the Y coordinate.
     * @type {number}
     * @private
     */
    this.startY_ = 0;

    /**
     * Start position for the X coord.
     * @type {number}
     * @private
     */
    this.endX_ = 0;

    /**
     * Start position for the Y coord.
     * @type {number}
     * @private
     */
    this.endY_ = 0;

    /**
     * Whether is enabled or not. Only enabled for touch devices.
     * @type {boolean}
     * @private
     */
    this.isEnabled = false;

    /**
     * Whether is a gesture or not.
     * @type {boolean}
     * @private
     */
    this.isGesture = false;

    /**
     * Stores start touch event (x, y).
     * @type {array}
     * @private
     */
    this.startTouches = [];

    /**
     * Stores end touch event (x, y).
     * @type {array}
     * @private
     */
    this.endTouches = [];

    let events;

    if (MobileDetector.isAny()) {
      // Likely IE
      if (window.PointerEvent && (
          MobileDetector.isWindows() || MobileDetector.isWindowsPhone())) {
        events = EVENTS.pointer;
      } else {
        events = EVENTS.touch;
      }

      this.isEnabled = true;
      document.addEventListener(events.START, this.onStart_.bind(this), false);
      document.addEventListener(events.MOVE, this.onMove_.bind(this), false);
      document.addEventListener(events.END, this.onStop_.bind(this), false);
    }
  }

  /**
   * Start touch handler. Saves starting points.
   * @param {Event} event The Touch event.
   * @private
   */
  onStart_(event) {
    if (this.ws_.isDisabled()) {
      return;
    }

    const info = Touch.normalizeEventInfo(event);

    if (event.touches.length === 1) {
      this.startX_ = info.x;
      this.startY_ = info.y;
      this.endX_ = info.x;
      this.endY_ = info.y;
    } else if (event.touches.length > 1) {
      this.startTouches = Touch.getTouchCoordinates(event);
      this.endTouches = this.startTouches;
      this.isGesture = true;
    }
  }

  /**
   * Move touch handler. Saves end points.
   * @param {Event} event The Touch event.
   * @private
   */
  onMove_(event) {
    if (this.ws_.isDisabled()) {
      return;
    }

    const info = Touch.normalizeEventInfo(event);

    if (this.isGesture) {
      this.endTouches = Touch.getTouchCoordinates(event);
    } else {
      this.endX_ = info.x;
      this.endY_ = info.y;
    }
  }

  /**
   * Stop touch handler. Checks if it needs to make any actions.
   * @private
   */
  onStop_() {
    if (this.ws_.isDisabled()) {
      return;
    }

    if (this.isGesture) {
      const startDistance = Math.sqrt(
        Math.pow(this.startTouches[0].x - this.startTouches[1].x, 2) +
        Math.pow(this.startTouches[0].y - this.startTouches[1].y, 2)
      );
      const endDistance = Math.sqrt(
        Math.pow(this.endTouches[0].x - this.endTouches[1].x, 2) +
        Math.pow(this.endTouches[0].y - this.endTouches[1].y, 2)
      );
      if (startDistance > endDistance) {
        // Pinch gesture
        this.ws_.toggleZoom();
      }
      this.isGesture = false;
    } else {
      const diffX = this.startX_ - this.endX_;
      const diffY = this.startY_ - this.endY_;

      // It's an horizontal drag
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < -this.ws_.options.slideOffset) {
          this.ws_.goPrev();
        } else if(diffX > this.ws_.options.slideOffset) {
          this.ws_.goNext();
        }
      }
    }
  }

  /**
   * Get X,Y coordinates from touch pointers.
   * @param {Event} event
   * @return {Object}
   */
  static getTouchCoordinates(event) {
    return [
      {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      },
      {
        x: event.touches[1].clientX,
        y: event.touches[1].clientY
      }
    ];
  }

  /**
   * Normalizes an event to deal with differences between PointerEvent and
   * TouchEvent.
   * @param {Event} event
   * @return {Object} Normalised touch points.
   */
  static normalizeEventInfo(event) {
    let touchEvent = {pageX: 0, pageY: 0};

    if (typeof event.changedTouches !== 'undefined') {
      touchEvent = event.changedTouches[0];
    } else if (typeof event.originalEvent !== 'undefined' &&
        typeof event.originalEvent.changedTouches !== 'undefined') {
      touchEvent = event.originalEvent.changedTouches[0];
    }

    const x = event.offsetX || event.layerX || touchEvent.pageX;
    const y = event.offsetY || event.layerY || touchEvent.pageY;

    return {x, y};
  }
}
