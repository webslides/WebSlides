import Slide from '../../src/js/modules/slide';

describe('Slide module', () => {
  test('Candidate', () => {
    const valid = document.createElement('section');
    const invalid = document.createElement('p');

    expect(Slide.isCandidate(valid)).toBe(true);
    expect(Slide.isCandidate(invalid)).toBe(false);
  });

  describe('Instance behaviour', () => {
    let ws;
    let slides;

    beforeEach(() => {
      const template =
        '<section><div class="content">Content</div></section>'
        .repeat(5);
      document.body.innerHTML = `<div id="webslides">${template}</div>`;

      const el = document.getElementById('webslides');
      slides = [];

      el.querySelectorAll('section').forEach((el, i) => {
        slides.push(new Slide(el, i));
      });

      ws = {
        el,
        slides
      };
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    test('Slides should have some properties', () => {
      const slide = ws.slides[0];

      expect(slide.el).toBeInstanceOf(Element);
      expect(slide.el.id).toBe('section-1');
      expect(slide.parent).toBeInstanceOf(Element);
      expect(slide.parent.id).toBe('webslides');
      expect(slide.i).toBe(0);
    });

    test('Slides should get a slide class and be hidden', () => {
      const slide = ws.slides[0];

      expect(slide.el.classList.contains('slide')).toBe(true);
      expect(slide.el.style.display).toBe('none');
    });

    test('Show/hide', () => {
      const slide = ws.slides[0];

      slide.show();
      expect(slide.el.style.display).not.toBe('none');
      expect(slide.el.classList.contains('current')).toBe(true);

      slide.hide();
      expect(slide.el.style.display).toBe('none');
      expect(slide.el.classList.contains('current')).not.toBe(true);
    });

    test('Events', () => {
      const slide = ws.slides[0];
      const leave = jest.fn();
      const enter = jest.fn();
      const enable = jest.fn();
      const disable = jest.fn();
      const show = jest.fn();

      slide.el.addEventListener('dom:leave', leave);
      slide.el.addEventListener('dom:enter', enter);
      slide.el.addEventListener('slide:enable', enable);
      slide.el.addEventListener('slide:disable', disable);
      slide.el.addEventListener('slide:show', show);

      expect(enter).not.toHaveBeenCalled();
      expect(leave).not.toHaveBeenCalled();
      expect(enable).not.toHaveBeenCalled();
      expect(disable).not.toHaveBeenCalled();
      expect(show).not.toHaveBeenCalled();

      slide.enable();
      expect(enter).not.toHaveBeenCalled();
      expect(leave).not.toHaveBeenCalled();
      expect(enable).toHaveBeenCalledTimes(1);
      expect(disable).not.toHaveBeenCalled();
      expect(show).not.toHaveBeenCalled();
      enable.mockClear();

      slide.disable();
      expect(enter).not.toHaveBeenCalled();
      expect(leave).not.toHaveBeenCalled();
      expect(enable).not.toHaveBeenCalled();
      expect(disable).toHaveBeenCalledTimes(1);
      expect(show).not.toHaveBeenCalled();
      disable.mockClear();

      slide.moveAfterLast();
      expect(enter).toHaveBeenCalledTimes(1);
      expect(leave).toHaveBeenCalledTimes(1);
      expect(enable).not.toHaveBeenCalled();
      expect(disable).not.toHaveBeenCalled();
      expect(show).not.toHaveBeenCalled();
      enter.mockClear();
      leave.mockClear();

      slide.moveBeforeFirst();
      expect(enter).toHaveBeenCalledTimes(1);
      expect(leave).toHaveBeenCalledTimes(1);
      expect(enable).not.toHaveBeenCalled();
      expect(disable).not.toHaveBeenCalled();
      expect(show).not.toHaveBeenCalled();
      enter.mockClear();
      leave.mockClear();

      slide.show();
      expect(show).toHaveBeenCalled();
    });

    test('Move', () => {
      const wsEl = document.getElementById('webslides');
      const slide = ws.slides[0];

      expect(wsEl.lastChild).not.toBe(slide.el);
      slide.moveAfterLast();
      expect(wsEl.lastChild).toBe(slide.el);

      expect(wsEl.firstChild).not.toBe(slide.el);
      slide.moveBeforeFirst();
      expect(wsEl.firstChild).toBe(slide.el);
    });

    test('Get section from el', () => {
      const wsEl = document.getElementById('webslides');
      const el = ws.slides[3].el.firstChild;
      const found = Slide.getSectionFromEl(el);

      expect(found.section.id).toBe('section-4');
      expect(found.i).toBe(4);

      const notFound = Slide.getSectionFromEl(wsEl);
      expect(notFound.section).toBeNull();
      expect(notFound.i).toBeNull();
    });
  });
});
