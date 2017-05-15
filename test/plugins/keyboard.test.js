import DOM from '../../src/js/utils/dom';
import Keyboard from '../../src/js/plugins/keyboard';
import Keys from '../../src/js/utils/keys';

const simulateKeyEvent = (el, code) => {
  const evt = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelableCode: true,
    which: code,
    shiftKey: true});
  el.dispatchEvent(evt);
};

beforeAll(() => {
  document.body.innerHTML = `<div id="webslides" data-test="test"><p>Text</p></div><input id="focusable" />`;
});

test('Keyboard plugin', () => {
  const goto = jest.fn();
  const next = jest.fn();
  const prev = jest.fn();
  const ws = document.getElementById('webslides');
  const focusable = document.getElementById('focusable');

  let disabled = true;

  const webslides = {
    goToSlide: goto,
    goNext: next,
    goPrev: prev,
    isVertical: false,
    isDisabled: () => {return disabled;},
    el: ws
  };

  const keyboard = new Keyboard(webslides);

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
});
