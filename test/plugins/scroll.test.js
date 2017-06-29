import Scroll from '../../src/js/plugins/scroll';

jest.useFakeTimers();

// Copy of DOM.fireEvent, but using wheel deltas
const fireEvent = (target, eventType, deltaX, deltaY) => {
  const event = new CustomEvent(eventType);
  event.deltaX = deltaX;
  event.deltaY = deltaY;
  event.deltaMode = 0;

  target.dispatchEvent(event);
};

beforeAll(() => {
  const brs = '<br />'.repeat(20);
  document.body.innerHTML = `<div id="webslides">${brs}</div>`;
});

test('Scroll utility', () => {
  // Forces mobile detection
  window.navigator = {
    userAgent: 'Android'
  };
  const ws = document.getElementById('webslides');
  const next = jest.fn();
  const prev = jest.fn();

  let disabled = true;
  const webslides = {
    el: ws,
    isDisabled: () => disabled,
    isMoving: false,
    isVertical: false,
    goNext: next,
    goPrev: prev,
    options: {
      navigateOnScroll: true,
      scrollWait: 200,
      minWheelDelta: 50
    }
  };

  new Scroll(webslides);
  fireEvent(ws, 'wheel', 300, 200);

  expect(next).not.toBeCalled();
  expect(prev).not.toBeCalled();

  // Wait until next execution
  jest.runTimersToTime(201);
  expect(next.mock.calls.length).toBe(0);
  expect(prev.mock.calls.length).toBe(0);

  disabled = false;
  fireEvent(ws, 'wheel', 300, 200);

  jest.runTimersToTime(201);
  expect(next.mock.calls.length).toBe(1);
  expect(prev.mock.calls.length).toBe(0);

  fireEvent(ws, 'wheel', -200, -300);

  jest.runTimersToTime(201);
  expect(next.mock.calls.length).toBe(1);
  expect(prev.mock.calls.length).toBe(1);
});
