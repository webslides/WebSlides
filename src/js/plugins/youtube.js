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
    /**
     * Whether the Player is ready or not.
     * @type {boolean}
     */
    this.ready = false;
    /**
     * Ready callback.
     * @type {?function}
     */
    this.onReadyCb = null;
    /**
     * Slide element in which the video is located.
     * @type {Node}
     */
    this.slide = Slide.getSectionFromEl(el).section;
    /**
     * Whether it should autoplay on load or not.
     * @type {boolean}
     */
    this.autoplay = typeof el.dataset.autoplay !== 'undefined';
    /**
     * Whether the video should be muted or not.
     * @type {boolean}
     */
    this.isMuted = typeof el.dataset.mute !== 'undefined';

    const playerVars = this.getPlayerVars(el);

    /**
     * Youtube player.
     * @type {YT.Player}
     */
    this.player = new YT.Player(el, {
      videoId: el.dataset.youtubeId,
      playerVars,
      events: {
        onReady: () => {
          this.ready = true;
          if (this.timeout && this.player.getPlayerState() !== 1) {
            this.play();
          }

          if (this.onReadyCb) {
            this.onReadyCb();
            this.onReadyCb = null;
          }
        }
      }
    });

    /**
     * The iframe in which the video is loaded.
     * @type {Element}
     */
    this.el = this.player.getIframe();
    /**
     * Timeout id.
     * @type {?number}
     */
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

      if (this.isMuted) {
        this.player.mute();
      } else {
        this.player.unMute();
      }

      this.player.playVideo();
    } else {
      this.onReadyCb = this.play;
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
   * Parses the element to have the proper variables.
   * @param {Element} element
   * @return {Object} Player variables.
   */
  getPlayerVars(element) {
    const vars = {
      modestbranding: 1,
      rel: 0,
      origin: window.location.origin
    };

    if (this.slide.classList.contains('fullscreen')) {
      // Disabling keyboard interaction for fullscreenvideos
      vars.disablekb = 1;
    }

    if (typeof element.dataset.noControls !== 'undefined') {
      vars.controls = 0;
      vars.showinfo = 0;
    }

    if (typeof element.dataset.loop !== 'undefined') {
      vars.loop = 1;
      vars.playlist = element.dataset.youtubeId;
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
    if (slide.player.autoplay) {
      slide.player.play();
    }
  }

  /**
   * On Section enable hook. Will pause the video.
   * @param {Slide} slide
   */
  static onSectionDisabled(slide) {
    slide.player.pause();
  }
}
