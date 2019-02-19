import DOM from '../../src/js/utils/dom';
import Navigation from '../../src/js/plugins/navigation';

beforeAll(() => {
  document.body.innerHTML = `<div id="webslides"></div>`;
});

test('Navigation plugin', () => {
  const ws = document.getElementById('webslides');

  const zoom = jest.fn();
  const next = jest.fn();
  const prev = jest.fn();
  const webslides = {
    el: ws,
    goNext: next,
    goPrev: prev,
    toggleZoom: zoom,
    options: {showIndex: true}
  };

  const fakeArrow = Navigation.createArrow('arrow', 'Test');
  expect(fakeArrow.tagName).toBe('A');
  expect(fakeArrow.title).toBe('Arrow Keys');
  expect(fakeArrow.id).toBe('arrow');
  expect(fakeArrow.textContent).toBe('Test');

  const fakeCounter = Navigation.createCounter('counter', webslides);
  expect(fakeCounter.tagName).toBe('SPAN');
  expect(fakeCounter.childNodes.length).toBe(1);
  expect(fakeCounter.childNodes[0].tagName).toBe('A');
  expect(fakeCounter.childNodes[0].href).toBe('http://localhost/#');
  expect(fakeCounter.childNodes[0].title).toBe('View all slides');

  new Navigation(webslides);

  const navElem = ws.querySelector('#navigation');
  const counter = navElem.querySelector('#counter');
  const nextElem = navElem.querySelector('#next');
  const prevElem = navElem.querySelector('#previous');
  expect(navElem).not.toBe(null);
  expect(counter).not.toBe(null);
  expect(nextElem).not.toBe(null);
  expect(prevElem).not.toBe(null);

  DOM.fireEvent(ws, 'ws:slide-change', {
    slides: 3,
    currentSlide0: 1,
    currentSlide: 2
  });
  expect(counter.textContent).toBe('2 / 3');

  expect(next.mock.calls.length).toBe(0);
  expect(prev.mock.calls.length).toBe(0);
  expect(zoom.mock.calls.length).toBe(0);

  DOM.fireEvent(nextElem, 'click');
  expect(next.mock.calls.length).toBe(1);

  DOM.fireEvent(prevElem, 'click');
  expect(prev.mock.calls.length).toBe(1);

  DOM.fireEvent(counter, 'click');
  expect(zoom.mock.calls.length).toBe(1);
});
