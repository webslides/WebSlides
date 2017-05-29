import scrollTo from '../../src/js/utils/scroll-to';

jest.useFakeTimers();

beforeAll(() => {
  const brs = '<br />'.repeat(20);
  document.body.innerHTML = `<div id="webslides">${brs}</div>`;
});

afterAll(() => {
  jest.clearAllTimers();
});

test('ScrollTo with defaults', () => {
  const ws = document.getElementById('webslides');

  scrollTo(100);

  expect(ws.scrollTop).toBe(0);

  jest.runTimersToTime(400);

  expect(ws.scrollTop).toBeLessThan(100);

  jest.runAllTimers();

  expect(ws.scrollTop).toBe(100);
});

test('ScrollTo with custom duration', () => {
  const ws = document.getElementById('webslides');
  ws.scrollTop = 0;
  scrollTo(100, 2000);

  expect(ws.scrollTop).toBe(0);
  jest.runTimersToTime(500);
  expect(ws.scrollTop).toBeLessThan(100);
  jest.runTimersToTime(700);
  expect(ws.scrollTop).toBeLessThan(100);
  jest.runAllTimers();

  expect(ws.scrollTop).toBe(100);
});

test('ScrollTo with custom callback', () => {
  const ws = document.getElementById('webslides');
  ws.scrollTop = 0;
  const cb = jest.fn();

  scrollTo(100, 500, cb);
  expect(ws.scrollTop).toBe(0);
  expect(cb).not.toBeCalled();

  jest.runAllTimers();

  expect(ws.scrollTop).toBe(100);
  expect(cb).toBeCalled();
});
