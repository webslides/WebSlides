
// Copy of DOM.fireEvent, but using touch offets
const fireEvent = (target, eventType, offsetX, offsetY, touches) => {
  const event = new CustomEvent(eventType);

  event.offsetX = offsetX;
  event.offsetY = offsetY;
  event.touches = touches;

  target.dispatchEvent(event);
};

beforeAll(() => {
  const brs = '<br />'.repeat(20);
  document.body.innerHTML = `<div id="webslides">${brs}</div>`;
});

test('Touch utility', () => {
  // Overrides userAgent to force mobile detection
  const UAProp = Object.getOwnPropertyDescriptor(window.navigator.__proto__, 'userAgent');
  Object.defineProperty(window.navigator, 'userAgent', {get: () => 'Android'});

  const Touch = require('../../src/js/plugins/touch');

  const ws = document.getElementById('webslides');
  const next = jest.fn();
  const prev = jest.fn();
  const zoom = jest.fn();

  let disabled = true;
  const webslides = {
    el: ws,
    isDisabled: () => {return disabled;},
    isMoving: false,
    isVertical: false,
    goNext: next,
    goPrev: prev,
    toggleZoom: zoom,
    options: {
      slideOffset: 100
    }
  };

  const touch = new Touch.default(webslides);
  fireEvent(document, 'touchstart', 200, 200, [1]);
  fireEvent(document, 'touchmove', 200, 400, [1]);
  fireEvent(document, 'touchend', 200, 200, [1]);

  expect(next).not.toBeCalled();
  expect(prev).not.toBeCalled();
  expect(zoom).not.toBeCalled();

  disabled = false;

  fireEvent(document, 'touchstart', 800, 200, [1]);
  fireEvent(document, 'touchmove', 400, 200, [1]);
  fireEvent(document, 'touchend', 400, 200, [1]);

  expect(next.mock.calls.length).toBe(1);
  expect(prev.mock.calls.length).toBe(0);
  expect(zoom.mock.calls.length).toBe(0);

  fireEvent(document, 'touchstart', 200, 200, [1]);
  fireEvent(document, 'touchmove', 400, 200, [1]);
  fireEvent(document, 'touchend', 400, 200, [1]);

  expect(next.mock.calls.length).toBe(1);
  expect(prev.mock.calls.length).toBe(1);
  expect(zoom.mock.calls.length).toBe(0);

  fireEvent(document, 'touchstart', 200, 200, [{clientX: 100, clientY: 100}, {clientX: 400, clientY: 400}]);
  fireEvent(document, 'touchmove', 400, 200, [{clientX: 200, clientY: 200}, {clientX: 300, clientY: 300}]);
  fireEvent(document, 'touchend', 400, 200, [{clientX: 200, clientY: 200}, {clientX: 300, clientY: 300}]);

  expect(next.mock.calls.length).toBe(1);
  expect(prev.mock.calls.length).toBe(1);
  expect(zoom.mock.calls.length).toBe(1);

});
