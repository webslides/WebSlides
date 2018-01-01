import DOM from '../../src/js/utils/dom';
import Hash from '../../src/js/plugins/hash';

describe('Hash utility', () => {
  document.body.innerHTML =
      `<div id="webslides" data-test="test"><p>Text</p></div>`;

  document.location.hash = '#slide=1';
  const goto = jest.fn();
  const ws = document.getElementById('webslides');


  const webslides = {
    options: {
      changeOnClick: true
    },
    goToSlide: goto,
    el: ws
  };

  test('Make sure it has not changed the slide', () => {
    expect(goto).not.toBeCalled();
  });

  new Hash(webslides);

  test('Move to slide 1', () => {
    expect(Hash.getSlideNumber()).toBe(0);
    DOM.fireEvent(ws, 'ws:slide-change', {
      slides: 3,
      currentSlide0: 1,
      currentSlide: 2
    });
    expect(Hash.getSlideNumber()).toBe(1);
    expect(document.location.hash).toBe('#slide=2');

    DOM.fireEvent(window, 'hashchange');
    expect(goto.mock.calls.length).toBe(1);
  });

  test('Forces slide change', () => {
    Hash.setSlideNumber(5);
    const state = history.state;
    expect(state.slideI).toBe(4);
  });

  test('Wrong hash', () => {
    document.location.hash = 'slide=NaN';
    DOM.fireEvent(window, 'hashchange');
    // It shouldn't be call.
    expect(goto.mock.calls.length).toBe(1);
    expect(Hash.getSlideNumber()).toBe(null);
  });

  test('Repeat slide change', () => {
    Hash.setSlideNumber(5);
    let state = history.state;
    expect(state.slideI).toBe(4);
    Hash.setSlideNumber(5);
    state = history.state;
    expect(state.slideI).toBe(4);
  });
});
