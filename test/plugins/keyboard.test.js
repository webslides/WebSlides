import Keyboard from '../../src/js/plugins/keyboard';
import Keys from '../../src/js/utils/keys';

// @TODO: Check to do this with simulant
const simulateKeyEvent = (el, code) => {
  const evt = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelableCode: true,
    which: code,
    shiftKey: true});
  el.dispatchEvent(evt);
};

beforeAll(() => {
  document.body.innerHTML = `<div id="webslides" data-test="test">
                              <p>Text</p>
                             </div>
                             <input id="focusable" />`;
});

test('Keyboard plugin', () => {
  const goto = jest.fn();
  const next = jest.fn();
  const prev = jest.fn();
  const fullscreen = jest.fn();
  const ws = document.getElementById('webslides');

  let disabled = true;

  const webslides = {
    goToSlide: goto,
    goNext: next,
    goPrev: prev,
    isVertical: false,
    fullscreen: fullscreen,
    isDisabled: () => disabled,
    el: ws
  };

  new Keyboard(webslides);

  expect(goto).not.toBeCalled();
  expect(next).not.toBeCalled();
  expect(prev).not.toBeCalled();

  simulateKeyEvent(document, Keys.AV_PAGE);
  expect(next.mock.calls.length).toBe(0);

  disabled = false;
  simulateKeyEvent(document, Keys.AV_PAGE);
  expect(next.mock.calls.length).toBe(1);
  simulateKeyEvent(document, Keys.SPACE);
  expect(next.mock.calls.length).toBe(2);
  simulateKeyEvent(document, Keys.RE_PAGE);
  expect(prev.mock.calls.length).toBe(1);
  simulateKeyEvent(document, Keys.HOME);
  expect(goto.mock.calls.length).toBe(1);
  simulateKeyEvent(document, Keys.DOWN);
  expect(next.mock.calls.length).toBe(2);
  simulateKeyEvent(document, Keys.UP);
  expect(prev.mock.calls.length).toBe(1);
  simulateKeyEvent(document, Keys.LEFT);
  expect(prev.mock.calls.length).toBe(2);
  simulateKeyEvent(document, Keys.RIGHT);
  expect(next.mock.calls.length).toBe(3);
  simulateKeyEvent(document, Keys.F);
  expect(fullscreen.mock.calls.length).toBe(1);
});
