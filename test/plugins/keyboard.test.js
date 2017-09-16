import Keyboard from '../../src/js/plugins/keyboard';
import Keys from '../../src/js/utils/keys';

// @TODO: Check to do this with simulant
const simulateKeyEvent = (el, code, extra) => {
  const config = Object.assign({
    bubbles: true,
    cancelableCode: true,
    which: code,
    shiftKey: false}, extra);

  const evt = new KeyboardEvent('keydown', config);
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

  const key = new Keyboard(webslides);

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
  // Shift + Space
  simulateKeyEvent(document, Keys.SPACE, {shiftKey: true});
  expect(next.mock.calls.length).toBe(2);
  expect(prev.mock.calls.length).toBe(1);
  simulateKeyEvent(document, Keys.RE_PAGE);
  expect(prev.mock.calls.length).toBe(2);

  // Home - End
  simulateKeyEvent(document, Keys.HOME);
  expect(goto.mock.calls.length).toBe(1);
  simulateKeyEvent(document, Keys.END);
  expect(goto.mock.calls.length).toBe(2);

  // Arrow keys, only left right should increase
  simulateKeyEvent(document, Keys.DOWN);
  simulateKeyEvent(document, Keys.UP);
  simulateKeyEvent(document, Keys.LEFT);
  simulateKeyEvent(document, Keys.RIGHT);
  expect(prev.mock.calls.length).toBe(3);
  expect(next.mock.calls.length).toBe(3);

  // Arrow keys, only up down should increase
  key.ws_.isVertical = true;
  simulateKeyEvent(document, Keys.DOWN);
  simulateKeyEvent(document, Keys.UP);
  simulateKeyEvent(document, Keys.LEFT);
  simulateKeyEvent(document, Keys.RIGHT);
  expect(prev.mock.calls.length).toBe(4);
  expect(next.mock.calls.length).toBe(4);

  // F, only trigger on when alone
  simulateKeyEvent(document, Keys.F);
  simulateKeyEvent(document, Keys.F, {ctrlKey: true});
  simulateKeyEvent(document, Keys.F, {metaKey: true});
  expect(fullscreen.mock.calls.length).toBe(1);
});
