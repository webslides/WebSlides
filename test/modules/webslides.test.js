import WebSlides from '../../src/js/modules/webslides';
import Slide from '../../src/js/modules/slide';
import DOM from '../../src/js/utils/dom';

jest.useFakeTimers();

let ws;
let webslides;

beforeEach(() => {
  const slides =
    '<section class="slide"><div class="content">Content</section>'.repeat(20);
  document.body.innerHTML =
      `<div id="webslides">${slides}<div id="other"></div></div>`;

  ws = document.getElementById('webslides');
  webslides = new WebSlides();
});

afterEach(() => {
  document.body.innerHTML = '';
  location.hash = '';
});

test('Should throw if no element is found with webslides id', () => {
  document.body.innerHTML = '';

  expect(() => {
    ws.setAttribute('id', '');
    new WebSlides();
  }).toThrow('Couldn\'t find the webslides container!');
});

test('Should have correct properties', () => {
  expect(webslides.isMoving).toBe(false);
  expect(webslides.slides.length).toBe(20);
  expect(webslides.currentSlideI_).toBe(0);
  expect(webslides.currentSlide_).toBe(webslides.slides[0]);
  expect(webslides.maxSlide_).toBe(20);
  expect(webslides.isVertical).toBe(false);
  expect(webslides.initialised).toBe(true);

  expect(webslides.slides[0]).toBeInstanceOf(Slide);

  // Plugins
  expect(webslides.plugins.autoslide).toBeDefined();
  expect(webslides.plugins.clickNav).toBeDefined();
  expect(webslides.plugins.grid).toBeDefined();
  expect(webslides.plugins.hash).toBeDefined();
  expect(webslides.plugins.keyboard).toBeDefined();
  expect(webslides.plugins.nav).toBeDefined();
  expect(webslides.plugins.scroll).toBeDefined();
  expect(webslides.plugins.touch).toBeDefined();
  expect(webslides.plugins.video).toBeDefined();
  expect(webslides.plugins.youtube).toBeDefined();
  expect(webslides.plugins.zoom).toBeDefined();

  // Options
  expect(webslides.options.autoslide).toBe(false);
  expect(webslides.options.changeOnClick).toBe(false);
  expect(webslides.options.loop).toBe(true);
  expect(webslides.options.minWheelDelta).toBe(40);
  expect(webslides.options.navigateOnScroll).toBe(true);
  expect(webslides.options.scrollWait).toBe(450);
  expect(webslides.options.slideOffset).toBe(50);
});

test('Should be able to define vertical WS', () => {
  ws.classList.add('vertical');
  webslides = new WebSlides();

  expect(webslides.isVertical).toBe(true);
});

test('Should remove all elements that are not sections', () => {
  expect(document.getElementById('other')).toBeNull();
});

test('Ready', () => {
  // Already initialised
  expect(document.documentElement.classList.contains('ws-ready')).toBe(true);
  document.documentElement.classList.remove('ws-ready');
  const listener = jest.fn();

  ws.addEventListener('ws:init', listener);
  webslides.initialised = false;
  webslides.onInit_();
  expect(listener).toHaveBeenCalled();
  expect(document.documentElement.classList.contains('ws-ready')).toBe(true);
  expect(webslides.initialised).toBe(true);
});

test('Should be possible to init with a different slide', () => {
  location.hash = '#slide=4';
  webslides = new WebSlides();
  expect(webslides.currentSlideI_).toBe(3);
});

describe('Go to slide', () => {
  beforeEach(() => {
    jest.spyOn(webslides, 'scrollTransitionToSlide_');
    jest.spyOn(webslides, 'transitionToSlide_');
  });

  test('Shouldn\'t allow to go to invalid indexes', () => {
    webslides.goToSlide(-4);
    webslides.goToSlide(null);
    webslides.goToSlide(99);

    expect(webslides.scrollTransitionToSlide_).not.toHaveBeenCalled();
    expect(webslides.transitionToSlide_).not.toHaveBeenCalled();
  });

  test('Shouldn\'t allow to move if already moving', () => {
    webslides.isMoving = true;
    webslides.goToSlide(2);
    expect(webslides.scrollTransitionToSlide_).not.toHaveBeenCalled();
    expect(webslides.transitionToSlide_).not.toHaveBeenCalled();
  });

  test('Shouldn\'t allow to move if going to same slide', () => {
    webslides.goToSlide(0);
    expect(webslides.scrollTransitionToSlide_).not.toHaveBeenCalled();
    expect(webslides.transitionToSlide_).not.toHaveBeenCalled();
  });

  test('Shouldn\'t use Scroll if first slide', () => {
    webslides.isVertical = true;
    webslides.currentSlide_ = null;

    webslides.goToSlide(1);

    expect(webslides.scrollTransitionToSlide_).not.toHaveBeenCalled();
    expect(webslides.transitionToSlide_).toHaveBeenCalled();
  });

  test('Shouldn\'t use Scroll if not vertical', () => {
    webslides.isVertical = false;
    webslides.goToSlide(1);

    expect(webslides.scrollTransitionToSlide_).not.toHaveBeenCalled();
    expect(webslides.transitionToSlide_).toHaveBeenCalled();
  });

  test('Shouldn\'t use Scroll if no touch or not enabled', () => {
    webslides.plugins.touch = null;
    webslides.goToSlide(1);

    expect(webslides.scrollTransitionToSlide_).not.toHaveBeenCalled();
    expect(webslides.transitionToSlide_).toHaveBeenCalled();
    webslides.transitionToSlide_.mockClear();

    webslides.plugins.touch = {
      isEnabled: false
    };

    webslides.goToSlide(2);

    expect(webslides.scrollTransitionToSlide_).not.toHaveBeenCalled();
    expect(webslides.transitionToSlide_).toHaveBeenCalled();
  });

  test('Forward should be true if moving ahead or forced', () => {
    const getIsMovingForward = () =>
        webslides.transitionToSlide_.mock.calls[0][0];

    webslides.goToSlide(2);
    expect(getIsMovingForward()).toBe(true);
    webslides.transitionToSlide_.mockClear();

    // Going back
    webslides.goToSlide(1);
    expect(getIsMovingForward()).toBe(false);
    webslides.transitionToSlide_.mockClear();

    // Going forward but forced
    webslides.goToSlide(3, false);
    expect(getIsMovingForward()).toBe(false);
    webslides.transitionToSlide_.mockClear();
  });

  test('Should pass correct arguments to transition to slide', () => {
    webslides.goToSlide(2);
    const args = webslides.transitionToSlide_.mock.calls[0];

    expect(args[1]).toBeInstanceOf(Slide);
    expect(args[1]).toBe(webslides.slides[2]);
    expect(args[2]).toBe(webslides.onSlideChange_);
  });

  test('Should pass correct arguments to scroll to slide', () => {
    webslides.isVertical = true;
    webslides.goToSlide(2);
    const args = webslides.scrollTransitionToSlide_.mock.calls[0];

    expect(args[1]).toBeInstanceOf(Slide);
    expect(args[1]).toBe(webslides.slides[2]);
    expect(args[2]).toBe(webslides.onSlideChange_);
  });

  test('After move', () => {
    webslides.isVertical = true;
    const mock = jest.fn();
    const currentSlide = webslides.currentSlide_;
    webslides.el.addEventListener('ws:slide-change', mock);

    webslides.goToSlide(1);
    expect(webslides.isMoving).toBe(true);
    jest.runAllTimers();
    expect(webslides.isMoving).toBe(false);
    expect(webslides.currentSlide_).not.toBe(currentSlide);
    expect(webslides.currentSlide_).toBe(webslides.slides[1]);
    expect(webslides.currentSlideI_).toBe(1);
    expect(currentSlide.el.style.display).toBe('none');

    const mockEvent = mock.mock.calls[0][0].detail;
    expect(mockEvent.slides).toBe(webslides.maxSlide_);
    expect(mockEvent.currentSlide0).toBe(1);
    expect(mockEvent.currentSlide).toBe(2);
  });
});

describe('Go next/prev', () => {
  beforeEach(() => {
    jest.spyOn(webslides, 'goToSlide');
  });

  test('Go next should go to the next slide', () => {
    webslides.goNext();
    expect(webslides.goToSlide).toHaveBeenCalledWith(1, true);
  });

  test('Go prev should go to the previous slide', () => {
    webslides.currentSlideI_ = 2;
    webslides.goPrev();
    expect(webslides.goToSlide).toHaveBeenCalledWith(1, false);
  });

  test('Should not be possible to move if loop is disabled and on edge', () => {
    webslides.options.loop = false;
    webslides.goPrev();
    expect(webslides.goToSlide).not.toHaveBeenCalled();
    webslides.currentSlideI_ = webslides.maxSlide_;
    webslides.goNext();
    expect(webslides.goToSlide).not.toHaveBeenCalled();
  });

  test('It should loop correctly', () => {
    webslides.currentSlideI_ = webslides.maxSlide_ - 1;
    webslides.goNext();
    expect(webslides.goToSlide).toHaveBeenCalledWith(0, true);

    webslides.goPrev();
    expect(webslides.goToSlide).toHaveBeenCalledWith(19, false);
  });
});

describe('Scroll to', () => {
  test('Overflow should be removed and resetted', () => {
    webslides.scrollTransitionToSlide_(true, webslides.slides[1], () => {});
    expect(webslides.el.style.overflow).toBe('hidden');
    jest.runAllTimers();
    expect(webslides.el.style.overflow).not.toBe('hidden');
  });

  test('Should move slide if not moving forward', () => {
    const getHTML = () => webslides.el.innerHTML;

    expect(getHTML().indexOf('section-1"'))
      .toBeLessThan(getHTML().indexOf('section-20"'));

    webslides.scrollTransitionToSlide_(false, webslides.slides[19], () => {});

    expect(getHTML().indexOf('section-20"'))
      .toBeLessThan(getHTML().indexOf('section-1"'));
  });

  test('Should not move slide if moving forward', () => {
    const getHTML = () => webslides.el.innerHTML;

    expect(getHTML().indexOf('section-1"'))
      .toBeLessThan(getHTML().indexOf('section-2"'));

    webslides.scrollTransitionToSlide_(true, webslides.slides[1], () => {});

    expect(getHTML().indexOf('section-1"'))
      .toBeLessThan(getHTML().indexOf('section-2"'));
  });

  test('Should call the callback once finished with the next slide', () => {
    const cb = jest.fn();

    webslides.scrollTransitionToSlide_(true, webslides.slides[1], cb);
    expect(cb).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(cb).toHaveBeenCalledWith(webslides.slides[1]);
  });
});

describe('Transition to', () => {
  test('Should move slide if not moving forward', () => {
    const getHTML = () => webslides.el.innerHTML;

    expect(getHTML().indexOf('section-1"'))
      .toBeLessThan(getHTML().indexOf('section-20"'));

    webslides.transitionToSlide_(false, webslides.slides[19], () => {});

    expect(getHTML().indexOf('section-20"'))
      .toBeLessThan(getHTML().indexOf('section-1"'));
  });

  test('Should move current slide to last if moving forward', () => {
    const getHTML = () => webslides.el.innerHTML;

    expect(getHTML().indexOf('section-1'))
      .toBeLessThan(getHTML().indexOf('section-2'));

    webslides.transitionToSlide_(true, webslides.slides[1], () => {});

    expect(getHTML().indexOf('section-1"'))
      .toBeGreaterThan(getHTML().indexOf('section-20"'));
  });

  test('Should slideInRight if touch and moving forward', () => {
    const callback = jest.fn();
    const nextSlideEl = webslides.slides[19].el;
    webslides.initialised = true;
    webslides.plugins.touch = {
      isEnabled: true
    };

    webslides.transitionToSlide_(true, webslides.slides[19], callback);
    expect(nextSlideEl.classList.contains('slideInRight'))
      .toBe(true);
    expect(callback).not.toBeCalled();
    DOM.fireEvent(nextSlideEl, 'animationend');
    expect(callback).toHaveBeenCalledWith(webslides.slides[19]);
    expect(nextSlideEl.classList.contains('slideInRight'))
      .toBe(false);
  });

  test('Should slideInLeft if touch and not moving forward', () => {
    const callback = jest.fn();
    const nextSlideEl = webslides.slides[1].el;
    webslides.initialised = true;
    webslides.plugins.touch = {
      isEnabled: true
    };

    webslides.transitionToSlide_(false, webslides.slides[1], callback);
    expect(nextSlideEl.classList.contains('slideInLeft'))
      .toBe(true);
    expect(callback).not.toBeCalled();
    DOM.fireEvent(nextSlideEl, 'animationend');
    expect(callback).toHaveBeenCalledWith(webslides.slides[1]);
    expect(nextSlideEl.classList.contains('slideInLeft'))
      .toBe(false);
  });
});

test('Enable/Disable', () => {
  expect(webslides.isDisabled()).toBe(false);
  expect(webslides.el.classList.contains('disabled')).toBe(false);
  webslides.disable();
  expect(webslides.el.classList.contains('disabled')).toBe(true);
  expect(webslides.isDisabled()).toBe(true);

  webslides.enable();
  expect(webslides.isDisabled()).toBe(false);

  expect(webslides.el.classList.contains('disabled')).toBe(false);
});

test('Fullscreen', () => {
  // Mocking FullScreen API
  document.fullscreen = false;
  document.documentElement.requestFullscreen = jest.fn();
  document.exitFullScreen = jest.fn();

  expect(document.documentElement.requestFullscreen).not.toHaveBeenCalled();
  webslides.fullscreen();
  expect(document.documentElement.requestFullscreen).toHaveBeenCalled();
  document.fullscreen = true;
  expect(document.exitFullScreen).not.toHaveBeenCalled();
  webslides.fullscreen();
  expect(document.exitFullScreen).toHaveBeenCalled();
});

test('Zoom', () => {
  webslides.plugins.zoom = {
    toggleZoom: jest.fn()
  };

  expect(webslides.plugins.zoom.toggleZoom).not.toHaveBeenCalled();
  webslides.toggleZoom();
  expect(webslides.plugins.zoom.toggleZoom).toHaveBeenCalled();
});

test('Plugin register', () => {
  const cto = jest.fn();
  const Mock = function() {
    cto();
  };

  WebSlides.registerPlugin('mock', Mock);
  webslides = new WebSlides();

  expect(cto).toHaveBeenCalled();
  expect(webslides.plugins.mock).toBeDefined();
});
