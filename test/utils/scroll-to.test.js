jest.useFakeTimers();

beforeAll(() => {
  const brs = '<br />'.repeat(20);
  document.body.innerHTML = `<div id="webslides">${brs}</div>`;
});

test('ScrollTo utility', () => {
  const ws = document.getElementById('webslides');
  // Needs to be required and not imported because const defined in top level
  const scrollTo = require('../../src/js/utils/scroll-to');
  const cb = jest.fn();

  scrollTo.default(100, 500, cb);

  expect(cb).not.toBeCalled();
  expect(ws.scrollTop).toBe(0);

  jest.runAllTimers();

  expect(cb).toBeCalled();
  expect(ws.scrollTop).toBe(100);
});
