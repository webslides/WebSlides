import DOM from '../utils/dom';

/**
 * Autoslide plugin.
 */
export default class AutoSlide {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    /**
     * Interval ID reference for the autoslide.
     * @type {?number}
     * @private
     */
    this.interval_ = null;

    DOM.once(wsInstance.el, 'ws:init', this.play.bind(this));
  }

  /**
   * Starts autosliding all the slides if it's not currently doing it and the
   * autoslide option was a number greater than 0.
   * @param {?number=} time Amount of milliseconds to wait to go to next slide
   * automatically.
   */
  play(time) {
    time = time || this.ws_.options.autoslide;

    if (!this.interval_ && typeof time === 'number' && time > 0) {
      this.interval_ = setInterval(this.ws_.goNext.bind(this.ws_), time);
    }
  }

  /**
   * Stops autosliding all the slides.
   */
  stop() {
    if (this.interval_) {
      clearInterval(this.interval_);
      this.interval_ = null;
    }
  }
}
