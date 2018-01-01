import DOM from '../../src/js/utils/dom';
import ClickNav from '../../src/js/plugins/click-nav';

beforeAll(() => {
  document.body.innerHTML =
      `<div id="webslides" data-test="test"><p>Text</p></div>`;
});

test('Click nav plugin', () => {
  const next = jest.fn();
  const ws = document.getElementById('webslides');

  const webslides = {
    options: {
      changeOnClick: true
    },
    goNext: next,
    el: ws
  };

  expect(next).not.toBeCalled();

  new ClickNav(webslides);
  DOM.fireEvent(ws, 'click');
  expect(next.mock.calls.length).toBe(1);
});
