import Video from '../../src/js/plugins/video';
import DOM from '../../src/js/utils/dom';

beforeAll(() => {
  const slides = '12345'.replace(/(\d)/g,
      '<div id="section-$1" class="slide"><video autoplay="true" /></div>');
  document.body.innerHTML = `<div id="webslides">${slides}</div>`;
});

test('Video utility', () => {
  const ws = document.getElementById('webslides');
  const slides = ws.querySelectorAll('.slide');
  const videos = ws.querySelectorAll('video');
  const play = jest.fn();
  const pause = jest.fn();
  videos.forEach(video => {
    video.play = play;
    video.pause = pause;
  });

  const webslides = {
    el: ws,
    slides: []
  };
  slides.forEach(slide => webslides.slides.push({el: slide}));

  expect(ws.querySelectorAll('video[autoplay]').length).toBe(5);

  new Video(webslides);

  expect(ws.querySelectorAll('video[autoplay]').length).toBe(0);
  expect(pause.mock.calls.length).toBe(5);

  webslides.slides.forEach(slide => {
    DOM.fireEvent(slide.el, 'slide:enable', {slide: slide});
    DOM.fireEvent(slide.el, 'slide:disable', {slide: slide});
  });

  expect(pause.mock.calls.length).toBe(10);
});
