const HASH = '#slide';
const slideRegex = /#slide=(\d+)/;

export default class Hash {
  static getSlideNumber() {
    let results = document.location.hash.match(slideRegex);
    let slide = 0;

    if (Array.isArray(results)) {
      slide = parseInt(results[1], 10);
    }

    if (!Number.isInteger(slide) || slide < 0 || !Array.isArray(results)) {
      slide = null;
    } else {
      slide--; // Convert to 0 index
    }

    return slide;
  }

  static setSlideNumber(number) {
    history.pushState(null, `Slide ${number}`, `${HASH}=${number}`);
  }
}
