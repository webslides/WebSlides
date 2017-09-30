(function (window, document) {
  'use strict';

  var KssMarkup = function (config) {
    this.bodyClass = config.bodyClass || 'kss-markup-mode';
    this.detailsClass = config.detailsClass || 'kss-markup';

    this.init();
  };

  KssMarkup.prototype.init = function () {
    var self = this;
    // Initialize all markup toggle buttons.
    document.querySelectorAll('a[data-kss-markup]').forEach(function (el) {
      el.onclick = self.showGuides.bind(self);
    });
  };

  // Activation function that takes the ID of the element that will receive
  // fullscreen focus.
  KssMarkup.prototype.showGuides = function () {
    var body = document.getElementsByTagName('body')[0],
      enabled = body.classList.contains(this.bodyClass);

    document.querySelectorAll('.' + this.detailsClass).forEach(function (el) {
      if (enabled) {
        el.removeAttribute('open');
      } else {
        el.setAttribute('open', '');
      }
    });

    // Toggle the markup mode.
    body.classList.toggle(this.bodyClass);
  };

  // Export to DOM global space.
  window.KssMarkup = KssMarkup;

})(window, document);
