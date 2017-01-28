import Keys from '../utils/keys';

export default class Keyboard {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    document.addEventListener("keydown", this.onKeyPress_.bind(this), false);
  }

  onKeyPress_(event) {
    let method;

    if (event.which === Keys.SPACE) {
      method = this.ws_.goNext;
    } else {
      if (this.ws_.isVertical) {
        if (event.which === Keys.DOWN) {
          method = this.ws_.goNext;
        } else if (event.which === Keys.UP) {
          method = this.ws_.goPrev;
        }
      } else {
        if (event.which === Keys.RIGHT) {
          method = this.ws_.goNext;
        } else if (event.which === Keys.LEFT) {
          method = this.ws_.goPrev;
        }
      }
    }

    if (method) {
      method.call(this.ws_);
    }
  }
}
