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
    let argument;

    // Check if there's a focused element that might use the keyboard.
    if (document.activeElement) {
      const isContentEditable = document.activeElement
            .contentEditable !== 'inherit';
      const isInput = ['INPUT', 'SELECT', 'OPTION', 'TEXTAREA']
            .indexOf(document.activeElement.tagName) > -1;

      if (isInput || isContentEditable) {
        return;
      }
    }

    switch (event.which) {
      case Keys.AV_PAGE:
      case Keys.SPACE:
        method = this.ws_.goNext;
        break;
      case Keys.RE_PAGE:
        method = this.ws_.goPrev;
        break;
      case Keys.HOME:
        method = this.ws_.goToSlide;
        argument = 0;
        break;
      case Keys.END:
        method = this.ws_.goToSlide;
        argument = this.ws_.maxSlide_ - 1;
        break;
      case Keys.DOWN:
        method = this.ws_.isVertical ? this.ws_.goNext : null;
        break;
      case Keys.UP:
        method = this.ws_.isVertical ? this.ws_.goPrev : null;
        break;
      case Keys.LEFT:
        method = !this.ws_.isVertical ? this.ws_.goPrev : null;
        break;
      case Keys.RIGHT:
        method = !this.ws_.isVertical ? this.ws_.goNext : null;
        break;
    }

    if (method) {
      method.call(this.ws_, argument);
    }
  }
}
