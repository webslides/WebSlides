import Keys from '../utils/keys';

export default class Keyboard {
  /**
   * Keyboard interaction plugin.
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    document.addEventListener('keydown', this.onKeyPress_.bind(this), false);
  }

  /**
   * Reacts to the keydown event. It reacts to the arrows and space key
   * depending on the layout of the page.
   * @param {KeyboardEvent} event The key event.
   * @private
   */
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
