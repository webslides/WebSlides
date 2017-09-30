(function (window, document) {
  'use strict';

  // Set the configuration values on object creation.
  // - idPrefix: The string that uniquely prefixes the ID of all elements that
  //   can receive the fullscreen focus.
  // - bodyClass: The class that is set on the body element when the fullscreen
  //   mode is toggled on.
  // - elementClass: the class that is set on the element that is receiving the
  //   fullscreen focus.
  var KssFullScreen = function (config) {
    this.idPrefix = config.idPrefix || 'kss-fullscreen-';
    this.bodyClass = config.bodyClass || 'kss-fullscreen-mode';
    this.elementClass = config.elementClass || 'is-fullscreen';

    this.init();
  };

  // Initialize the page to see if the fullscreen mode should be immediately
  // turned on.
  KssFullScreen.prototype.init = function () {
    // Check the location hash to see if it matches the idPrefix.
    if (window.location.hash.slice(0, this.idPrefix.length + 1) === '#' + this.idPrefix) {
      this.setFocus(window.location.hash.slice(1 + this.idPrefix.length));
    }

    var self = this;
    // Initialize all fullscreen toggle buttons.
    document.querySelectorAll('a[data-kss-fullscreen]').forEach(function (button) {
      // Get the section reference from the data attribute.
      button.onclick = self.setFocus.bind(self, button.dataset.kssFullscreen);
    });
  };

  // Activation function that takes the ID of the element that will receive
  // fullscreen focus.
  KssFullScreen.prototype.setFocus = function (id) {
    var el;

    // Find the element with the given ID and start fullscreen mode.
    if (el = document.getElementById(id)) {
      el.classList.toggle('is-fullscreen');
      document.body.classList.toggle('kss-fullscreen-mode');

      // When enabling the focus mode, change the location hash.
      if (el.classList.contains('is-fullscreen')) {
        window.location.hash = '#' + this.idPrefix + id;
        // Don't follow the link location.
        return false;
      }
    }

    return true;
  };

  // Export to DOM global space.
  window.KssFullScreen = KssFullScreen;

})(window, document);
