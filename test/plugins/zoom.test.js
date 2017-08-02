import Zoom from '../../src/js/plugins/zoom';
import DOM from '../../src/js/utils/dom';

jest.useFakeTimers();

// Copy of DOM.fireEvent, but using keydown
const simulateKeyEvent = (el, code) => {
  const evt = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelableCode: true,
    which: code,
    shiftKey: true});
  el.dispatchEvent(evt);
};

beforeAll(() => {
  const slides = '12345'.replace(/(\d)/g,
      '<div id="section-$1" class="slide"><div>Slide $1</div></div>')
      .replace('section-1" class="', 'section-1" class="current ');
  document.body.innerHTML = `<div id="webslides">${slides}</div>`;
});

test('Zoom utility', () => {
  const ws = document.getElementById('webslides');
  const slides = ws.querySelectorAll('.slide');
  const goto = jest.fn();
  const enable = jest.fn();
  const disable = jest.fn();

  const webslides = {
    el: ws,
    slides: [],
    goToSlide: goto,
    enable: enable,
    disable: disable,
    options: {showIndex: true}
  };
  slides.forEach(slide => webslides.slides.push({el: slide}));
  webslides.currentSlide_ = webslides.slides[0];

  new Zoom(webslides);

  const zws = document.querySelector('#webslides-zoomed');
  const zoomSlides = zws.querySelectorAll('.slide');

  expect(zws).not.toBe(null);
  expect(zws.className).toMatch('disable');
  expect(slides.length).toBe(zoomSlides.length);
  expect(zws.childNodes[0].className).toBe('wrap');
  expect(zws.childNodes[0].childNodes[0].className).toBe('grid');

  simulateKeyEvent(document.body, 109);

  expect(zws.className).not.toMatch('disable');


  // Wait until next execution
  jest.runTimersToTime(600);
  expect(disable.mock.calls.length).toBe(1);
  expect(enable.mock.calls.length).toBe(0);
  expect(goto.mock.calls.length).toBe(0);

  DOM.fireEvent(zws.querySelector('.zoom-layer'), 'click');

  // Wait until next execution
  jest.runTimersToTime(401);
  expect(disable.mock.calls.length).toBe(1);
  expect(enable.mock.calls.length).toBe(1);
  expect(goto.mock.calls.length).toBe(1);
});
