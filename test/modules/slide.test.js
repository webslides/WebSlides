import Slide from '../../src/js/modules/slide';

beforeAll(() => {
  const slides = '<section class="slide"><div class="content">Content</section>'
      .repeat(5);
  document.body.innerHTML = `<div id="webslides">${slides}</div>`;
});

test('Slide utility', () => {
  const ws = document.getElementById('webslides');
  const slides = ws.querySelectorAll('.slide');
  const leave = jest.fn();
  const enter = jest.fn();
  const enable = jest.fn();
  const disable = jest.fn();

  const webslides = {
    el: ws,
    slides: []
  };

  expect(Slide.isCandidate(slides[0])).toBe(true);
  slides.forEach((slide, i) => webslides.slides.push(new Slide(slide, i)));
  expect(webslides.slides.length).toBe(slides.length);
  webslides.slides.forEach((slide, i) => {
    expect(typeof slide).toBe('object');
    expect(slide.el).toBe(slides[i]);
    expect(slide.el.id).toBe(`section-${i+1}`);
    expect(slide.el.style.display).toBe('none');
    slide.show();
    expect(slide.el.style.display).toBe('');
    expect(slide.el.classList.contains('current')).toBe(true);
    slide.hide();
    expect(slide.el.style.display).toBe('none');
  });

  webslides.slides[0].el.addEventListener('dom:leave', leave);
  webslides.slides[0].el.addEventListener('dom:enter', enter);
  webslides.slides[0].el.addEventListener('slide:enable', enable);
  webslides.slides[0].el.addEventListener('slide:disable', disable);

  expect(enter.mock.calls.length).toBe(0);
  expect(leave.mock.calls.length).toBe(0);
  expect(enable.mock.calls.length).toBe(0);
  expect(disable.mock.calls.length).toBe(0);
  webslides.slides[0].moveAfterLast();
  expect(ws.querySelector('.slide').id).toBe('section-2');
  expect(enter.mock.calls.length).toBe(1);
  expect(leave.mock.calls.length).toBe(1);
  expect(enable.mock.calls.length).toBe(0);
  expect(disable.mock.calls.length).toBe(0);
  webslides.slides[0].moveBeforeFirst();
  expect(ws.querySelector('.slide').id).toBe('section-1');
  expect(enter.mock.calls.length).toBe(2);
  expect(leave.mock.calls.length).toBe(2);
  expect(enable.mock.calls.length).toBe(0);
  expect(disable.mock.calls.length).toBe(0);
  webslides.slides[0].enable();
  expect(enter.mock.calls.length).toBe(2);
  expect(leave.mock.calls.length).toBe(2);
  expect(enable.mock.calls.length).toBe(1);
  expect(disable.mock.calls.length).toBe(0);
  webslides.slides[0].disable();
  expect(enter.mock.calls.length).toBe(2);
  expect(leave.mock.calls.length).toBe(2);
  expect(enable.mock.calls.length).toBe(1);
  expect(disable.mock.calls.length).toBe(1);

  const found = Slide.getSectionFromEl(ws.querySelector('.content'));
  expect(found.section.id).toBe('section-1');
  expect(found.i).toBe(1);
});
