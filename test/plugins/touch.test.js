import Touch from '../../src/js/plugins/touch';

// Copy of DOM.fireEvent, but using touch offets
const getEvent = (eventType, offsetX, offsetY, touches) => {
  const event = new CustomEvent(eventType);

  event.offsetX = offsetX;
  event.offsetY = offsetY;
  event.touches = touches;

  return event;
};

beforeAll(() => {
  const brs = '<br />'.repeat(20);
  document.body.innerHTML = `<div id="webslides">${brs}</div>`;
});

test('Touch utility', () => {
  // Overrides userAgent to force mobile detection
  Object.getOwnPropertyDescriptor(window.navigator.__proto__, 'userAgent');
  Object.defineProperty(window.navigator, 'userAgent', {get: () => 'Android'});

  const ws = document.getElementById('webslides');
  const next = jest.fn();
  const prev = jest.fn();
  const zoom = jest.fn();

  let disabled = true;
  const webslides = {
    el: ws,
    isDisabled: () => disabled,
    isMoving: false,
    isVertical: false,
    goNext: next,
    goPrev: prev,
    toggleZoom: zoom,
    options: {
      slideOffset: 100
    }
  };

  const touch = new Touch(webslides);
  touch.onStart_(getEvent('touchstart', 200, 200, [1]));
  touch.onMove_(getEvent('touchstart', 200, 400, [1]));
  touch.onStop_(getEvent('touchstart', 200, 200, [1]));

  expect(next).not.toBeCalled();
  expect(prev).not.toBeCalled();
  expect(zoom).not.toBeCalled();

  disabled = false;

  touch.onStart_(getEvent('touchstart', 800, 200, [1]));
  touch.onMove_(getEvent('touchstart', 400, 400, [1]));
  touch.onStop_(getEvent('touchstart', 400, 200, [1]));

  expect(next.mock.calls.length).toBe(1);
  expect(prev.mock.calls.length).toBe(0);
  expect(zoom.mock.calls.length).toBe(0);

  touch.onStart_(getEvent('touchstart', 200, 200, [1]));
  touch.onMove_(getEvent('touchstart', 400, 200, [1]));
  touch.onStop_(getEvent('touchstart', 400, 200, [1]));

  expect(next.mock.calls.length).toBe(1);
  expect(prev.mock.calls.length).toBe(1);
  expect(zoom.mock.calls.length).toBe(0);

  touch.onStart_(getEvent('touchstart', 200, 200,
    [{clientX: 100, clientY: 100}, {clientX: 400, clientY: 400}]));
  touch.onMove_(getEvent('touchstart', 400, 200,
    [{clientX: 200, clientY: 200}, {clientX: 300, clientY: 300}]));
  touch.onStop_(getEvent('touchstart', 400, 200,
    [{clientX: 200, clientY: 200}, {clientX: 300, clientY: 300}]));

  expect(next.mock.calls.length).toBe(1);
  expect(prev.mock.calls.length).toBe(1);
  expect(zoom.mock.calls.length).toBe(1);
});
