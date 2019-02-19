import DOM from '../utils/dom';
import {default as Slide, Events as SlideEvents} from '../modules/slide';

/**
 * Video plugin. Video plugin that allows to autoplay videos once the slide gets
 * active.
 */
export default class Media {
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

    const medias = DOM.toArray(this.ws_.el.querySelectorAll('video,audio'));

    if (medias.length) {
      medias.forEach(media => {
        if (!media.hasAttribute('autoplay')) {
          return;
        }

        media.removeAttribute('autoplay');
        media.pause();
        media.currentTime = 0;
        const {i} = Slide.getSectionFromEl(media);
        const slide = wsInstance.slides[i - 1];

        slide.media = media;

        slide.el.addEventListener(SlideEvents.ENABLE, Media.onSectionEnabled);
        slide.el.addEventListener(SlideEvents.DISABLE, Media.onSectionDisabled);
      });
    }
  }

  /**
   * On Section enable hook. Will play the video.
   * @param {CustomEvent} event
   */
  static onSectionEnabled(event) {
    event.detail.slide.media.play();
  }

  /**
   * On Section enable hook. Will pause the video.
   * @param {CustomEvent} event
   */
  static onSectionDisabled(event) {
    event.detail.slide.media.pause();
  }
}
