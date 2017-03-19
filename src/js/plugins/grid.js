import Keys from '../utils/keys';

const GRID_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAg' +
  'MAAACdGdVrAAAACVBMVEUAAAAtXsUtXcPDDPUWAAAAA3RSTlMAZmHzZFkxAAAAFklEQVQI12M' +
  'AA9bBR3ExhAJB1iooBQBGwgVEs/QtuAAAAABJRU5ErkJggg==';

/**
 * Grid plugin that shows a grid on top of the WebSlides for easy prototyping.
 */
export default class Grid {
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

    const CSS = `body.baseline {
                  background: url(${GRID_IMAGE}) left top .8rem/.8rem;
                }`;
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = CSS;
    } else {
      style.appendChild(document.createTextNode(CSS));
    }

    head.appendChild(style);

    document.addEventListener('keydown', this.onKeyPress_.bind(this), false);
  }

  /**
   * Reacts to the keydown event. It reacts to ENTER key to toggle the class.
   * @param {KeyboardEvent} event The key event.
   * @private
   */
  onKeyPress_(event) {
    if (event.which === Keys.ENTER) {
      document.body.classList.toggle('baseline');
    }
  }
}
