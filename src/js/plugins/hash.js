const HASH = '#slide';
const slideRegex = /#slide=(\d+)/;

/**
 * Static class with methods to manipulate and extract info from the hash of
 * the URL.
 */
export default class Hash {
  /**
   * @param {WebSlides} wsInstance
   * @constructor
   */
  constructor(wsInstance) {
    this.ws_ = wsInstance;

    wsInstance.el.addEventListener('ws:slide-change', Hash.onSlideChange_);
    window.addEventListener('hashchange', this.onHashChange_.bind(this), false);
  }

  /**
   * hashchange event handler, makes the WebSlide instance navigate to the
   * needed slide.
   */
  onHashChange_() {
    const newSlideIndex = Hash.getSlideNumber();

    if (newSlideIndex !== null) {
      this.ws_.goToSlide(newSlideIndex);
    }
  }

  /**
   * Handler for the slide change event which updates the slide on the hash.
   * @param {Event} event
   * @private
   */
  static onSlideChange_(event) {
    Hash.setSlideNumber(event.detail.currentSlide);
  }

  /**
   * Gets the slide number from the hash by a regex matching `#slide=` and gets
   * the number after it. If the number is invalid or less than 0, it will
   * return null as an invalid value.
   * @return {?number}
   */
  static getSlideNumber() {
    const results = document.location.hash.match(slideRegex);
    let slide = 0;

    if (Array.isArray(results)) {
      slide = parseInt(results[1], 10);
    }

    if (typeof slide !== 'number' || slide < 0 || !Array.isArray(results)) {
      slide = null;
    } else {
      slide--; // Convert to 0 index
    }

    return slide;
  }

  /**
   * It will update the hash (if it's different) so it reflects the slide
   * number being visible.
   * @param {number} number The number of the slide we're transitioning to.
   */
  static setSlideNumber(number) {
    if (Hash.getSlideNumber() !== (number - 1)) {
      history.pushState({
        slideI: number - 1
      }, `Slide ${number}`, `${HASH}=${number}`);
    }
  }
}
