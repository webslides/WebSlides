import scrollTo from '../../src/js/utils/scroll-to';

jest.useFakeTimers();

beforeAll(() => {
  const brs = '<br />'.repeat(20);
  document.body.innerHTML = `<div id="webslides">${brs}</div>`;
});

test('ScrollTo utility', () => {
  const ws = document.getElementById('webslides');
  const cb = jest.fn();

  scrollTo(100, 500, cb);

  expect(cb).not.toBeCalled();
  expect(ws.scrollTop).toBe(0);

  jest.runAllTimers();

  expect(cb).toBeCalled();
  expect(ws.scrollTop).toBe(100);
});
