/* global YT */
import DOM from '../utils/dom';
import Slide from '../modules/slide';

/**
 * Player wrapper around the YT player. This is mostly to get around the event
 * in which we need to play a video which player isn't ready yet.
 */
class Player {
  /**
   * @param {Element} el
   */
  constructor(el) {
    this.ready = false;
    this.onReadyC = null;
    this.slide = Slide.getSectionFromEl(el).section;

    const playerVars = this.getPlayerVars(el);

    this.player = new YT.Player(el, {
      videoId: el.dataset.youtubeId,
      playerVars,
      events: {
        onReady: () => {
          this.ready = true;
          if (this.timeout && this.player.getPlayerState() !== 1) {
            this.play();
          }

          if (this.onReadyC) {
            this.onReadyC();
            this.onReadyC = null;
          }
        }
      }
    });

    this.el = this.player.getIframe();
    this.timeout = null;
  }

  /**
   * Plays the video.
   */
  play() {
    if (this.ready) {
      this.timeout = setTimeout(() => {
        this.timeout = null;
      }, 1000);
      this.player.playVideo();
    } else {
      this.onReadyC = this.play;
    }
  }

  /**
   * Pause playing the video if it's already playing.
   */
  pause() {
    if (this.player &&
        this.player.pauseVideo &&
        this.player.getPlayerState() === 1) {
      this.player.pauseVideo();
    }
  }

  /**
   * Get player vars by element.
   * @return {{modestbranding: number}}
   */
  getPlayerVars() {
    const vars = {
      modestbranding: 1,
      rel: 0,
      origin: window.location.origin
    };

    if (this.slide.classList.contains('fullscreen')) {
      // Disabling keyboard interaction for fullscreenvideos
      vars.disablekb = 1;
      vars.showinfo = 0;
    }

    return vars;
  }
}

/**
 * Video plugin.
 */
export default class YouTube {
  /**
   * Grid plugin that shows a grid on top of the WebSlides for easy prototyping.
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    this.videos = DOM.toArray(this.ws_.el.querySelectorAll('[data-youtube'));

    if (this.videos.length) {
      this.inject();
    }
  }

  /**
   * Once the YouTube API is ready this gets called so we can start the videos.
   */
  onYTReady() {
    this.videos.forEach(video => {
      const player = new Player(video);

      if (typeof video.dataset.autoplay !== 'undefined') {
        const {i} = Slide.getSectionFromEl(player.el);
        const slide = this.ws_.slides[i - 1];

        slide.player = player;
        slide.onEnable(YouTube.onSectionEnabled);
        slide.onDisable(YouTube.onSectionDisabled);

        if (this.ws_.currentSlide_ === slide) {
          YouTube.onSectionEnabled(slide);
        }
      }
    });
  }

  /**
   * Injects the YouTube iFrame API into the page.
   */
  inject() {
    window.onYouTubeIframeAPIReady = this.onYTReady.bind(this);
    const tag = document.createElement('script');
    tag.src = `https://www.youtube.com/iframe_api`;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  /**
   * On Section enable hook. Will play the video.
   * @param {Slide} slide
   */
  static onSectionEnabled(slide) {
    slide.player.play();
  }

  /**
   * On Section enable hook. Will pause the video.
   * @param {Slide} slide
   */
  static onSectionDisabled(slide) {
    slide.player.pause();
  }
}
