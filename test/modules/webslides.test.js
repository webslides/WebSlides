import WebSlides from '../../src/js/modules/webslides';

jest.useFakeTimers();

beforeAll(() => {
  const slides =
    '<section class="slide"><div class="content">Content</section>'.repeat(20);
  document.body.innerHTML =
      `<div id="webslides">${slides}<div id="other"></div></div>`;
});

test('WebSlides utility', () => {
  let webslides;
  const ws = document.getElementById('webslides');
  const change = jest.fn();
  expect(() => {
    ws.setAttribute('id', '');
    webslides = new WebSlides();
  }).toThrow();

  ws.setAttribute('id', 'webslides');
  expect(() => {
    webslides = new WebSlides();
  }).not.toThrow();
  webslides.el.addEventListener('ws:slide-change', change);
  expect(document.getElementById('other')).toBe(null);
  expect(webslides.slides.length)
      .toBe(document.querySelectorAll('#webslides .slide').length);
  webslides.slides.forEach(slide => {
    expect(typeof slide).toBe('object');
  });
  expect(webslides.plugins.autoslide).not.toBe(null);
  expect(webslides.plugins.clickNav).not.toBe(null);
  expect(webslides.plugins.grid).not.toBe(null);
  expect(webslides.plugins.hash).not.toBe(null);
  expect(webslides.plugins.keyboard).not.toBe(null);
  expect(webslides.plugins.nav).not.toBe(null);
  expect(webslides.plugins.scroll).not.toBe(null);
  expect(webslides.plugins.touch).not.toBe(null);
  expect(webslides.plugins.video).not.toBe(null);
  expect(webslides.plugins.youtube).not.toBe(null);
  expect(webslides.plugins.zoom).not.toBe(null);

  expect(change.mock.calls.length).toBe(0);
  webslides.goToSlide(2, true);
  // Wait until next execution
  jest.runTimersToTime(501);

  expect(change.mock.calls.length).toBe(1);
  expect(document.querySelector('#webslides .slide').getAttribute('id'))
    .toBe(webslides.slides[1].el.getAttribute('id'));
  webslides.goPrev();
  // Wait until next execution
  jest.runTimersToTime(501);
  expect(change.mock.calls.length).toBe(2);
  expect(document.querySelector('#webslides .slide').getAttribute('id'))
    .toBe(webslides.slides[1].el.getAttribute('id'));
  webslides.goNext();
  // Wait until next execution
  jest.runTimersToTime(501);
  expect(change.mock.calls.length).toBe(3);
  expect(document.querySelector('#webslides .slide').getAttribute('id'))
    .toBe(webslides.slides[2].el.getAttribute('id'));

  const zoom = document.getElementById('webslides-zoomed');
  expect(zoom).not.toBe(null);
  expect(webslides.el.style.display).toBe('');
  expect(zoom.style.display).toBe('none');
  webslides.toggleZoom();
  webslides.disable();
  expect(webslides.el.classList.contains('disabled')).toBe(true);
  expect(webslides.isDisabled()).toBe(true);
  webslides.enable();
  expect(webslides.isDisabled()).toBe(false);

  const requestFullscreenMock = jest.fn();
  const exitFullScreenMock = jest.fn();
  document.fullscreen = false;
  document.documentElement.requestFullscreen = requestFullscreenMock;
  document.exitFullScreen = exitFullScreenMock;
  webslides.fullscreen();
  expect(requestFullscreenMock.mock.calls.length).toBe(1);
  document.fullscreen = true;
  webslides.fullscreen();
  expect(exitFullScreenMock.mock.calls.length).toBe(1);
});
