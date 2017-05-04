import DOM from '../../src/js/utils/dom';
import Hash from '../../src/js/plugins/hash';

beforeAll(() => {
  document.body.innerHTML = `<div id="webslides" data-test="test"><p>Text</p></div>`;
});

test('Hash plugin', () => {
  document.location.hash = '#slide=1';
  const goto = jest.fn();
  const ws = document.getElementById('webslides');
  // Simulates dataset
  ws.dataset = {};
  const webslides = {
    options: {
      changeOnClick: true
    },
    goToSlide: goto,
    el: ws
  };

  expect(goto).not.toBeCalled();

  const hash = new Hash(webslides);

  expect(Hash.getSlideNumber()).toBe(0);
  DOM.fireEvent(ws, 'ws:slide-change', {
    slides: 3,
    currentSlide0: 1,
    currentSlide: 2
  });
  expect(Hash.getSlideNumber()).toBe(1);
  expect(document.location.hash).toBe('#slide=2');

  DOM.fireEvent(window, 'hashchange');
  expect(goto.mock.calls.length).toBe(1);
});
