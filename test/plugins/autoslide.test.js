import DOM from '../../src/js/utils/dom';
import AutoSlide from '../../src/js/plugins/autoslide';

jest.useFakeTimers();

beforeAll(() => {
  document.body.innerHTML =
      `<div id="webslides"></div><input id="focusable" />`;
});

test('AutoSlide plugin', () => {
  const next = jest.fn();
  const ws = document.getElementById('webslides');
  const webslides = {
    options: {
      autoslide: 100
    },
    goNext: next,
    el: ws
  };

  expect(next).not.toBeCalled();

  new AutoSlide(webslides);
  DOM.fireEvent(ws, 'ws:init');

  // Wait until next execution
  jest.runTimersToTime(101);

  expect(next.mock.calls.length).toBe(1);

  // Wait until next execution
  jest.runTimersToTime(101);

  expect(next.mock.calls.length).toBe(2);

  // Pause on focus
  document.getElementById('focusable').focus();
  DOM.fireEvent(document.body, 'focus');
  jest.runTimersToTime(101);

  expect(next.mock.calls.length).toBe(2);
});
