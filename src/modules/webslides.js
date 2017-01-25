import Navigation from './navigation';

export default class WebSlides {
  constructor() {
    this.el = document.getElementById('webslides');
    this.moving = false;
    this.currentSlide = 0;

    if (!this.el) {
      throw new Error('Couldn\'t find the webslides container!');
    }

    this.createNav_();
    this.navigation.updateCounter(this.currentSlide + 1, this.slides.length);
  }

  createNav_() {
    this.navigation = new Navigation({
      isVertical: true
    });
    this.el.appendChild(this.navigation.el);
  }

  grabSlides_() {
    this.slides = Array.from(this.el.getElementsByClassName('slide'));
  }

  goToSlide(slide) {
    if (slide >= 0 && slide < this.slides.length) {
      console.log('Foo');
    }
  }
}
