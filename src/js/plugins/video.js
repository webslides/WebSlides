import DOM from '../utils/dom';
import Slide from '../modules/slide';

/**
 * Video plugin. Video plugin that allows to autoplay videos once the slide gets
 * active.
 */
export default class Video {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance.
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    const videos = DOM.toArray(this.ws_.el.querySelectorAll('video'));

    if (videos.length) {
      videos.forEach(video => {
        video.removeAttribute('autoplay');
        const {i} = Slide.getSectionFromEl(video);
        const slide = wsInstance.slides[i - 1];

        /**
         * @type {HTMLMediaElement}
         */
        slide.video = video;
        slide.onEnable(Video.onSectionEnabled);
        slide.onDisable(Video.onSectionDisabled);
      });
    }
  }

  /**
   * On Section enable hook. Will play the video.
   * @param {Slide} slide
   */
  static onSectionEnabled(slide) {
    slide.video.play();
  }

  /**
   * On Section enable hook. Will pause the video.
   * @param {Slide} slide
   */
  static onSectionDisabled(slide) {
    slide.video.pause();
  }
}
