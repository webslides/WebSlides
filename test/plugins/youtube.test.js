import YouTube from '../../src/js/plugins/youtube';
import DOM from '../../src/js/utils/dom';

beforeAll(() => {
  const video = '<div id="section-1" class="slide"><div class="embed">' +
    '<div data-youtube="video" ' +
    '     data-youtube-id="CQY3KUR3VzM" ' +
    '     data-autoplay data-loop></div></div></div>';
  document.body.innerHTML =
    `<script></script><div id="webslides">${video}</div>`;
});

test('YouTube utility', () => {
  const ws = document.getElementById('webslides');
  const slides = ws.querySelectorAll('.slide');
  const play = jest.fn();
  const pause = jest.fn();
  const destroy = jest.fn();
  const create = jest.fn();

  const webslides = {
    el: ws,
    slides: []
  };
  slides.forEach(slide => webslides.slides.push({el: slide}));

  window.YT = {
    Player: function(a, b) {
      return {
        getIframe: () => {
          const div = DOM.createNode('div');
          div.innerHTML =
            `<iframe id="widget8" 
                     src="https://www.youtube.com/embed/_m67JbGjWnc" 
                     data-youtube-id="_m67JbGjWnc" 
                     frameborder="0" height="360" width="640"></iframe>`;
          webslides.slides[0].el.appendChild(div);
          return div.querySelector('iframe');
        }
      };
    }
  };

  new YouTube(webslides);

  expect(typeof window.onYouTubeIframeAPIReady).toBe('function');
  const el = webslides.el.querySelector('[data-youtube]');

  el.dataset.autoplay = true;
  el.dataset.youtubeId = 'CQY3KUR3VzM';

  window.onYouTubeIframeAPIReady();

  const slide = {
    slide: {
      player: {
        autoplay: true,
        play: play,
        pause: pause,
        destroy: destroy,
        create: create
      }
    }
  };

  DOM.fireEvent(webslides.slides[0].el, 'dom:enter', slide);
  expect(play.mock.calls.length).toBe(0);
  expect(pause.mock.calls.length).toBe(0);
  expect(destroy.mock.calls.length).toBe(0);
  expect(create.mock.calls.length).toBe(1);

  DOM.fireEvent(webslides.slides[0].el, 'dom:leave', slide);
  expect(play.mock.calls.length).toBe(0);
  expect(pause.mock.calls.length).toBe(0);
  expect(destroy.mock.calls.length).toBe(1);
  expect(create.mock.calls.length).toBe(1);

  DOM.fireEvent(webslides.slides[0].el, 'slide:enable', slide);
  expect(play.mock.calls.length).toBe(1);
  expect(pause.mock.calls.length).toBe(0);
  expect(destroy.mock.calls.length).toBe(1);
  expect(create.mock.calls.length).toBe(1);

  DOM.fireEvent(webslides.slides[0].el, 'slide:disable', slide);
  expect(play.mock.calls.length).toBe(1);
  expect(pause.mock.calls.length).toBe(1);
  expect(destroy.mock.calls.length).toBe(1);
  expect(create.mock.calls.length).toBe(1);
});
