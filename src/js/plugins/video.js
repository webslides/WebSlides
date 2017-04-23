import DOM from '../utils/dom';
import {default as Slide, Events as SlideEvents} from '../modules/slide';

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
        if (!video.hasAttribute('autoplay')) {
          return;
        }

        video.removeAttribute('autoplay');
        video.pause();
        video.currentTime = 0;
        const {i} = Slide.getSectionFromEl(video);
        const slide = wsInstance.slides[i - 1];

        slide.video = video;

        slide.el.addEventListener(SlideEvents.ENABLE, Video.onSectionEnabled);
        slide.el.addEventListener(SlideEvents.DISABLE, Video.onSectionDisabled);
      });
    }
  }

  /**
   * On Section enable hook. Will play the video.
   * @param {CustomEvent} event
   */
  static onSectionEnabled(event) {
    event.detail.slide.video.play();
  }

  /**
   * On Section enable hook. Will pause the video.
   * @param {CustomEvent} event
   */
  static onSectionDisabled(event) {
    event.detail.slide.video.pause();
  }
}
