/*!
 * Name: WebSlides
 * Version: 1.3.1
 * Date: 2017-04-26
 * Description: Making HTML presentations easy
 * URL: https://github.com/webslides/webslides#readme
 * Credits: @jlantunez, @LuisSacristan, @Belelros
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customEvent = __webpack_require__(17);

var _customEvent2 = _interopRequireDefault(_customEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var transitionEvent = '';
var animationEvent = '';

/**
 * Static class for DOM helper.
 */

var DOM = function () {
  function DOM() {
    _classCallCheck(this, DOM);
  }

  _createClass(DOM, null, [{
    key: 'createNode',

    /**
     * Creates a node with optional parameters.
     * @param {string} tag The name of the tag of the needed element.
     * @param {string} id The desired id for the element. It defaults to an
     * empty string.
     * @param {string} text The desired text to go inside of the element. It
     * defaults to an empty string.
     * @return {Element}
     */
    value: function createNode(tag) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var node = document.createElement(tag);
      node.id = id;

      if (text) {
        node.textContent = text;
      }

      return node;
    }

    /**
     * Listens for an event once.
     * @param {Element} el Element to listen to.
     * @param {string} event Event Type.
     * @param {Function} callback Function to execute once the event fires.
     */

  }, {
    key: 'once',
    value: function once(el, event, callback) {
      var cb = function cb(e) {
        if (e.target === el) {
          el.removeEventListener(event, cb);
          callback(e);
        }
      };

      el.addEventListener(event, cb, false);
    }

    /**
     * Gets the prefixed transitionend event.
     * @return {string}
     */

  }, {
    key: 'getTransitionEvent',
    value: function getTransitionEvent() {
      if (transitionEvent) {
        return transitionEvent;
      }

      var el = document.createElement('ws');
      var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };
      var transitionNames = Object.keys(transitions);

      for (var i = 0, length = transitionNames.length; i < length && !transitionEvent; i++) {
        var transitionName = transitionNames[i];

        if (typeof el.style[transitionName] !== 'undefined') {
          transitionEvent = transitions[transitionName];
        }
      }

      return transitionEvent;
    }

    /**
     * Gets the prefixed animation end event.
     * @return {string}
     */

  }, {
    key: 'getAnimationEvent',
    value: function getAnimationEvent() {
      if (animationEvent) {
        return animationEvent;
      }

      var el = document.createElement('ws');
      var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
      };
      var animationNames = Object.keys(animations);

      for (var i = 0, length = animationNames.length; i < length && !animationEvent; i++) {
        var animationName = animationNames[i];

        if (typeof el.style[animationName] !== 'undefined') {
          animationEvent = animations[animationName];
        }
      }

      return animationEvent;
    }

    /**
     * Hides an element setting the display to none.
     * @param {Element} el Element to be hidden.
     */

  }, {
    key: 'hide',
    value: function hide(el) {
      el.style.display = 'none';
    }

    /**
     * Shows an element by removing the display property. This is only intended
     * to be used in conjunction with DOM.hide.
     * @param {Element} el Element to be shown.
     */

  }, {
    key: 'show',
    value: function show(el) {
      el.style.display = '';
    }

    /**
     * Fires a custom event on the given target.
     * @param {Element} target The target of the event.
     * @param {string} eventType The event type.
     * @param {Object} eventInfo Optional parameter to provide additional data
     * to the event.
     */

  }, {
    key: 'fireEvent',
    value: function fireEvent(target, eventType) {
      var eventInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var event = new _customEvent2.default(eventType, {
        detail: eventInfo
      });

      target.dispatchEvent(event);
    }

    /**
     * Converts an iterable to an array.
     * @param {*} iterable Element to convert to array
     * @return {Array} the element casted to an array.
     */

  }, {
    key: 'toArray',
    value: function toArray(iterable) {
      return [].slice.call(iterable);
    }

    /**
     * Checks whether the document has focus on an input or contenteditable
     * element.
     * @return {boolean} Whether the focused element is an input or content
     * editable.
     */

  }, {
    key: 'isFocusableElement',
    value: function isFocusableElement() {
      var result = false;

      if (document.activeElement) {
        var isContentEditable = document.activeElement.contentEditable !== 'inherit';
        var isInput = ['INPUT', 'SELECT', 'OPTION', 'TEXTAREA'].indexOf(document.activeElement.tagName) > -1;

        result = isInput || isContentEditable;
      }

      return result;
    }
  }]);

  return DOM;
}();

exports.default = DOM;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(0);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLASSES = {
  SLIDE: 'slide',
  CURRENT: 'current'
};

var Events = {
  ENTER: 'dom:enter',
  LEAVE: 'dom:leave',
  ENABLE: 'slide:enable',
  DISABLE: 'slide:disable'
};

/**
 * Wrapper for the Slide section.
 */

var Slide = function () {
  /**
   * Bootstraps the slide by saving some data, adding a class and hiding it.
   * @param {Element} el Section element.
   * @param {number} i Zero based index of the slide.
   */
  function Slide(el, i) {
    _classCallCheck(this, Slide);

    /**
     * @type {Element}
     */
    this.el = el;
    /**
     * The section's parent.
     * @type {Node}
     */
    this.parent = el.parentNode;
    /**
     * @type {number}
     */
    this.i = i;

    this.el.id = 'section-' + (i + 1);
    this.el.classList.add(CLASSES.SLIDE);

    // Hide slides by default
    this.hide();
  }

  /**
   * Hides the node and removes the class that makes it "active".
   */


  _createClass(Slide, [{
    key: 'hide',
    value: function hide() {
      _dom2.default.hide(this.el);
      this.el.classList.remove(CLASSES.CURRENT);
    }

    /**
     * Shows the node and adds the class that makes it "active".
     */

  }, {
    key: 'show',
    value: function show() {
      _dom2.default.show(this.el);
      this.el.classList.add(CLASSES.CURRENT);
    }

    /**
     * Moves the section to the bottom of the section's list.
     * @fires Slide#dom:leave
     * @fires Slide#dom:enter
     */

  }, {
    key: 'moveAfterLast',
    value: function moveAfterLast() {
      var last = this.parent.childNodes[this.parent.childElementCount - 1];

      this.fire_(Events.LEAVE);
      this.parent.insertBefore(this.el, last.nextSibling);
      this.fire_(Events.ENTER);
    }

    /**
     * Moves the section to the top of the section's list.
     * @fires Slide#dom:leave
     * @fires Slide#dom:enter
     */

  }, {
    key: 'moveBeforeFirst',
    value: function moveBeforeFirst() {
      var first = this.parent.childNodes[0];

      this.fire_(Events.LEAVE);
      this.parent.insertBefore(this.el, first);
      this.fire_(Events.ENTER);
    }

    /**
     * Fires an enable event.
     * @fires Slide#slide:enable
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.fire_(Events.ENABLE);
    }

    /**
     * Fires a disable event.
     * @fires Slide#slide:disable
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.fire_(Events.DISABLE);
    }

    /**
     * Fires an event passing the slide instance on the detail.
     * @param {String} name Name of the event to fire.
     * @private
     */

  }, {
    key: 'fire_',
    value: function fire_(name) {
      _dom2.default.fireEvent(this.el, name, {
        slide: this
      });
    }

    /**
     * Checks whether an element is a valid candidate to be a slide by ensuring
     * it's a "section" element.
     * @param {Element} el Element to be checked.
     * @return {boolean} Whether is candidate or not.
     */

  }], [{
    key: 'isCandidate',
    value: function isCandidate(el) {
      return el.nodeType === 1 && el.tagName === 'SECTION';
    }

    /**
     * Gets the section element from an inner element.
     * @param {Node} el
     * @return {{section: ?Node, i: ?number}} A map with the section and the
     * position of the section.
     */

  }, {
    key: 'getSectionFromEl',
    value: function getSectionFromEl(el) {
      var parent = el;
      var section = null;
      var i = null;

      while (parent.parentElement && !parent.classList.contains(CLASSES.SLIDE)) {
        parent = parent.parentElement;
      }

      if (parent.classList.contains(CLASSES.SLIDE)) {
        section = parent;
        i = parseInt(section.id.replace('section-', ''), 10);
      }

      return { section: section, i: i };
    }
  }]);

  return Slide;
}();

exports.default = Slide;
exports.Events = Events;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Keys = {
  ENTER: 13,
  SPACE: 32,
  RE_PAGE: 33,
  AV_PAGE: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

exports.default = Keys;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UA = window.navigator.userAgent;

/**
 * Mobile detector helper class. Tests the User Agent to see if we're, likely,
 * on a mobile device.
 */

var MobileDetector = function () {
  function MobileDetector() {
    _classCallCheck(this, MobileDetector);
  }

  _createClass(MobileDetector, null, [{
    key: "isAndroid",

    /**
     * Whether the device is Android or not.
     * @return {Boolean}
     */
    value: function isAndroid() {
      return !!UA.match(/Android/i);
    }

    /**
     * Whether the device is BlackBerry or not.
     * @return {Boolean}
     */

  }, {
    key: "isBlackBerry",
    value: function isBlackBerry() {
      return !!UA.match(/BlackBerry/i);
    }

    /**
     * Whether the device is iOS or not.
     * @return {Boolean}
     */

  }, {
    key: "isiOS",
    value: function isiOS() {
      return !!UA.match(/iPad|iPhone|iPod/i);
    }

    /**
     * Whether the device is Opera or not.
     * @return {Boolean}
     */

  }, {
    key: "isOpera",
    value: function isOpera() {
      return !!UA.match(/Opera Mini/i);
    }

    /**
     * Whether the device is Windows or not.
     * @return {Boolean}
     */

  }, {
    key: "isWindows",
    value: function isWindows() {
      return !!UA.match(/IEMobile/i);
    }

    /**
     * Whether the device is Windows Phone or not.
     * @return {Boolean}
     */

  }, {
    key: "isWindowsPhone",
    value: function isWindowsPhone() {
      return !!UA.match(/Windows Phone/i);
    }

    /**
     * Whether the device is any mobile device or not.
     * @return {Boolean}
     */

  }, {
    key: "isAny",
    value: function isAny() {
      return MobileDetector.isAndroid() || MobileDetector.isBlackBerry() || MobileDetector.isiOS() || MobileDetector.isOpera() || MobileDetector.isWindows() || MobileDetector.isWindowsPhone();
    }
  }]);

  return MobileDetector;
}();

exports.default = MobileDetector;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugins = __webpack_require__(12);

var _plugins2 = _interopRequireDefault(_plugins);

var _slide = __webpack_require__(1);

var _slide2 = _interopRequireDefault(_slide);

var _dom = __webpack_require__(0);

var _dom2 = _interopRequireDefault(_dom);

var _scrollTo = __webpack_require__(19);

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLASSES = {
  VERTICAL: 'vertical',
  READY: 'ws-ready'
};

// Default plugins
var PLUGINS = {
  'autoslide': _plugins2.default.AutoSlide,
  'clickNav': _plugins2.default.ClickNav,
  'grid': _plugins2.default.Grid,
  'hash': _plugins2.default.Hash,
  'keyboard': _plugins2.default.Keyboard,
  'nav': _plugins2.default.Navigation,
  'scroll': _plugins2.default.Scroll,
  'touch': _plugins2.default.Touch,
  'video': _plugins2.default.Video,
  'youtube': _plugins2.default.YouTube
};

/**
 * WebSlides module.
 */

var WebSlides = function () {
  /**
   * Options for WebSlides
   * @param {number|boolean} autoslide If a number is provided, it will allow
   * autosliding by said amount of milliseconds.
   * @param {boolean} changeOnClick If true, it will allow
   * clicking on any place to change the slide.
   * @param {boolean} loop Whether to go to first slide from last one or not.
   * @param {number} minWheelDelta Controls the amount of needed scroll to
   * trigger navigation.
   * @param {number} scrollWait Controls the amount of time to wait till
   * navigation can occur again with scroll.
   * @param {number} slideOffset Controls the amount of needed touch delta to
   * trigger navigation.
   */
  function WebSlides() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$autoslide = _ref.autoslide,
        autoslide = _ref$autoslide === undefined ? false : _ref$autoslide,
        _ref$changeOnClick = _ref.changeOnClick,
        changeOnClick = _ref$changeOnClick === undefined ? false : _ref$changeOnClick,
        _ref$loop = _ref.loop,
        loop = _ref$loop === undefined ? true : _ref$loop,
        _ref$minWheelDelta = _ref.minWheelDelta,
        minWheelDelta = _ref$minWheelDelta === undefined ? 40 : _ref$minWheelDelta,
        _ref$scrollWait = _ref.scrollWait,
        scrollWait = _ref$scrollWait === undefined ? 450 : _ref$scrollWait,
        _ref$slideOffset = _ref.slideOffset,
        slideOffset = _ref$slideOffset === undefined ? 50 : _ref$slideOffset;

    _classCallCheck(this, WebSlides);

    /**
     * WebSlide element.
     * @type {Element}
     */
    this.el = document.getElementById('webslides');

    if (!this.el) {
      throw new Error('Couldn\'t find the webslides container!');
    }

    /**
     * Moving flag.
     * @type {boolean}
     */
    this.isMoving = false;
    /**
     * Slide's array.
     * @type {?Array<Slide>}
     */
    this.slides = null;
    /**
     * Current slide's index.
     * @type {number}
     * @private
     */
    this.currentSlideI_ = -1;
    /**
     * Current slide reference.
     * @type {?Slide}
     * @private
     */
    this.currentSlide_ = null;
    /**
     * Max slide index.
     * @type {number}
     * @private
     */
    this.maxSlide_ = 0;
    /**
     * Whether the layout is going to be vertical or horizontal.
     * @type {boolean}
     */
    this.isVertical = this.el.classList.contains(CLASSES.VERTICAL);
    /**
     * Plugin's dictionary.
     * @type {Object}
     */
    this.plugins = {};
    /**
     * Options dictionary.
     * @type {Object}
     */
    this.options = {
      autoslide: autoslide,
      changeOnClick: changeOnClick,
      loop: loop,
      minWheelDelta: minWheelDelta,
      scrollWait: scrollWait,
      slideOffset: slideOffset
    };
    /**
     * Initialisation flag.
     * @type {boolean}
     */
    this.initialised = false;

    // Bootstrapping
    this.removeChildren_();
    this.grabSlides_();
    this.createPlugins_();
    this.initSlides_();
    // Finished
    this.onInit_();
  }

  /**
   * Removes all children elements inside of the main container that are not
   * eligible to be a Slide Element.
   * @private
   */


  _createClass(WebSlides, [{
    key: 'removeChildren_',
    value: function removeChildren_() {
      var nodes = this.el.childNodes;
      var i = nodes.length;

      while (i--) {
        var node = nodes[i];

        if (!_slide2.default.isCandidate(node)) {
          this.el.removeChild(node);
        }
      }
    }

    /**
     * Creates all the registered plugins and store the instances inside of the
     * the webslide instance.
     * @private
     */

  }, {
    key: 'createPlugins_',
    value: function createPlugins_() {
      var _this = this;

      Object.keys(PLUGINS).forEach(function (pluginName) {
        var PluginCto = PLUGINS[pluginName];
        _this.plugins[pluginName] = new PluginCto(_this);
      });
    }

    /**
     * Called once the WebSlide instance has finished initialising.
     * @private
     * @fires WebSlide#ws:init
     */

  }, {
    key: 'onInit_',
    value: function onInit_() {
      this.initialised = true;
      _dom2.default.fireEvent(this.el, 'ws:init');
      document.documentElement.classList.add(CLASSES.READY);
    }

    /**
     * Grabs the slides from the DOM and creates all the Slides modules.
     * @private
     */

  }, {
    key: 'grabSlides_',
    value: function grabSlides_() {
      this.slides = _dom2.default.toArray(this.el.childNodes).map(function (slide, i) {
        return new _slide2.default(slide, i);
      });

      this.maxSlide_ = this.slides.length;
    }

    /**
     * Goes to a given slide.
     * @param {!number} slideI The slide index.
     * @param {?boolean=} forward Whether we're forcing moving forward/backwards.
     * This parameter is used only from the goNext, goPrev functions to adjust the
     * scroll animations.
     */

  }, {
    key: 'goToSlide',
    value: function goToSlide(slideI) {
      var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.isValidIndexSlide_(slideI) && !this.isMoving && this.currentSlideI_ !== slideI) {
        this.isMoving = true;
        var isMovingForward = false;

        if (forward !== null) {
          isMovingForward = forward;
        } else {
          if (this.currentSlideI_ >= 0) {
            isMovingForward = slideI > this.currentSlideI_;
          }
        }
        var nextSlide = this.slides[slideI];

        if (this.currentSlide_ !== null && this.isVertical && (!this.plugins.touch || !this.plugins.touch.isEnabled)) {
          this.scrollTransitionToSlide_(isMovingForward, nextSlide, this.onSlideChange_);
        } else {
          this.transitionToSlide_(isMovingForward, nextSlide, this.onSlideChange_);
        }
      }
    }

    /**
     * Transitions to a slide, doing the scroll animation.
     * @param {boolean} isMovingForward Whether we're going forward or backwards.
     * @param {Slide} nextSlide Next slide.
     * @param {Function} callback Callback to be called upon finishing. This is an
     * async function so it'll happen once the scroll animation finishes.
     * @private
     * @see scrollTo
     */

  }, {
    key: 'scrollTransitionToSlide_',
    value: function scrollTransitionToSlide_(isMovingForward, nextSlide, callback) {
      var _this2 = this;

      this.el.style.overflow = 'hidden';

      if (!isMovingForward) {
        nextSlide.moveBeforeFirst();
        nextSlide.show();
        (0, _scrollTo2.default)(this.currentSlide_.el.offsetTop, 0);
      } else {
        nextSlide.show();
      }

      (0, _scrollTo2.default)(nextSlide.el.offsetTop, 500, function () {
        _this2.currentSlide_.hide();

        if (isMovingForward) {
          _this2.currentSlide_.moveAfterLast();
        }

        _this2.el.style.overflow = 'auto';
        setTimeout(function () {
          callback.call(_this2, nextSlide);
        }, 150);
      });
    }

    /**
     * Transitions to a slide, without doing the scroll animation. If the page is
     * already initialised and on mobile device, it will do a slide animation.
     * @param {boolean} isMovingForward Whether we're going forward or backwards.
     * @param {Slide} nextSlide Next slide.
     * @param {Function} callback Callback to be called upon finishing. This is a
     * sync function so it'll happen on run time.
     * @private
     */

  }, {
    key: 'transitionToSlide_',
    value: function transitionToSlide_(isMovingForward, nextSlide, callback) {
      var _this3 = this;

      (0, _scrollTo2.default)(0, 0);
      var className = 'slideInRight';

      if (!isMovingForward) {
        nextSlide.moveBeforeFirst();
        className = 'slideInLeft';
      }

      if (this.currentSlide_) {
        if (isMovingForward) {
          this.currentSlide_.moveAfterLast();
        }

        this.currentSlide_.hide();
      }

      nextSlide.show();

      if (this.initialised && this.plugins.touch && this.plugins.touch.isEnabled) {
        _dom2.default.once(nextSlide.el, _dom2.default.getAnimationEvent(), function () {
          nextSlide.el.classList.remove(className);
          callback.call(_this3, nextSlide);
        });

        nextSlide.el.classList.add(className);
      } else {
        callback.call(this, nextSlide);
      }
    }

    /**
     * Whenever a slide is changed, this function gets called. It updates the
     * references to the current slide, disables the moving flag and fires
     * a custom event.
     * @param {Slide} slide The slide we're transitioning to.
     * @fires WebSlide#ws:slide-change
     * @private
     */

  }, {
    key: 'onSlideChange_',
    value: function onSlideChange_(slide) {
      if (this.currentSlide_) {
        this.currentSlide_.disable();
      }

      this.currentSlide_ = slide;
      this.currentSlideI_ = slide.i;
      this.currentSlide_.enable();
      this.isMoving = false;

      _dom2.default.fireEvent(this.el, 'ws:slide-change', {
        slides: this.maxSlide_,
        currentSlide0: this.currentSlideI_,
        currentSlide: this.currentSlideI_ + 1
      });
    }

    /**
     * Goes to the next slide.
     */

  }, {
    key: 'goNext',
    value: function goNext() {
      var nextIndex = this.currentSlideI_ + 1;

      if (nextIndex >= this.maxSlide_) {
        if (!this.options.loop) {
          return;
        }

        nextIndex = 0;
      }

      this.goToSlide(nextIndex, true);
    }

    /**
     * Goes to the previous slide.
     */

  }, {
    key: 'goPrev',
    value: function goPrev() {
      var prevIndex = this.currentSlideI_ - 1;

      if (prevIndex < 0) {
        if (!this.options.loop) {
          return;
        }

        prevIndex = this.maxSlide_ - 1;
      }

      this.goToSlide(prevIndex, false);
    }

    /**
     * Check if the given number is a valid index to go to.
     * @param {number} i The index to check.
     * @return {boolean} Whether you can move to that slide or not.
     * @private
     */

  }, {
    key: 'isValidIndexSlide_',
    value: function isValidIndexSlide_(i) {
      return i >= 0 && i < this.maxSlide_;
    }

    /**
     * Init the shown slide on load. It'll fetch it from the Hash if present
     * and, otherwise, it'll default to the first one.
     * @private
     * @see Hash.getSlideNumber
     */

  }, {
    key: 'initSlides_',
    value: function initSlides_() {
      var slideNumber = this.plugins.hash.constructor.getSlideNumber();

      // Not valid
      if (slideNumber === null || slideNumber >= this.maxSlide_) {
        slideNumber = 0;
      }

      // Keeping the order
      if (slideNumber !== 0) {
        var i = 0;
        while (i < slideNumber) {
          this.slides[i].moveAfterLast();
          i++;
        }
      }

      this.goToSlide(slideNumber);
    }

    /**
     * Registers a plugin to be loaded when the instance is created. It allows
     * (on purpose) to replace default plugins.
     * @param {!string} key They key under which it'll be stored inside of the
     * instance, inside the plugins dict.
     * @param {!Function} cto Plugin constructor.
     */

  }], [{
    key: 'registerPlugin',
    value: function registerPlugin(key, cto) {
      PLUGINS[key] = cto;
    }
  }]);

  return WebSlides;
}();

exports.default = WebSlides;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _webslides = __webpack_require__(4);

var _webslides2 = _interopRequireDefault(_webslides);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.WebSlides = _webslides2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(0);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Autoslide plugin.
 */
var AutoSlide = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  function AutoSlide(wsInstance) {
    _classCallCheck(this, AutoSlide);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    /**
     * Interval ID reference for the autoslide.
     * @type {?number}
     * @private
     */
    this.interval_ = null;
    /**
     * Internal stored time.
     * @type {?number}
     */
    this.time = this.ws_.options.autoslide;

    if (this.time) {
      _dom2.default.once(wsInstance.el, 'ws:init', this.play.bind(this));
      document.body.addEventListener('focus', this.onFocus.bind(this));
    }
  }

  /**
   * On focus handler. Will decide if stops/play depending on the focused
   * element if autoslide is active.
   */


  _createClass(AutoSlide, [{
    key: 'onFocus',
    value: function onFocus() {
      if (_dom2.default.isFocusableElement()) {
        this.stop();
      } else if (this.interval_ === null) {
        this.play();
      }
    }

    /**
     * Starts autosliding all the slides if it's not currently doing it and the
     * autoslide option was a number greater than 0.
     * @param {?number=} time Amount of milliseconds to wait to go to next slide
     * automatically.
     */

  }, {
    key: 'play',
    value: function play(time) {
      if (typeof time !== 'number') {
        time = this.time;
      }

      this.time = time;

      if (!this.interval_ && typeof time === 'number' && time > 0) {
        this.interval_ = setInterval(this.ws_.goNext.bind(this.ws_), time);
      }
    }

    /**
     * Stops autosliding all the slides.
     */

  }, {
    key: 'stop',
    value: function stop() {
      if (this.interval_) {
        clearInterval(this.interval_);
        this.interval_ = null;
      }
    }
  }]);

  return AutoSlide;
}();

exports.default = AutoSlide;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLICKABLE_ELS = ['INPUT', 'SELECT', 'OPTION', 'BUTTON', 'A', 'TEXTAREA'];

/**
 * ClickNav plugin that allows to click on the page to get to the next slide.
 */

var ClickNav = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  function ClickNav(wsInstance) {
    _classCallCheck(this, ClickNav);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    if (wsInstance.options.changeOnClick) {
      this.ws_.el.addEventListener('click', this.onClick_.bind(this));
    }
  }

  /**
   * Reacts to the click event. It will go to the next slide unless the element
   * has a data-prevent-nav attribute or is on the list of CLICKABLE_ELS.
   * @param {MouseEvent} event The click event.
   * @private
   */


  _createClass(ClickNav, [{
    key: 'onClick_',
    value: function onClick_(event) {
      if (CLICKABLE_ELS.indexOf(event.target.tagName) < 0 && typeof event.target.dataset.preventNav === 'undefined') {
        this.ws_.goNext();
      }
    }
  }]);

  return ClickNav;
}();

exports.default = ClickNav;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keys = __webpack_require__(2);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GRID_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAg' + 'MAAACdGdVrAAAACVBMVEUAAAAtXsUtXcPDDPUWAAAAA3RSTlMAZmHzZFkxAAAAFklEQVQI12M' + 'AA9bBR3ExhAJB1iooBQBGwgVEs/QtuAAAAABJRU5ErkJggg==';

/**
 * Grid plugin that shows a grid on top of the WebSlides for easy prototyping.
 */

var Grid = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  function Grid(wsInstance) {
    _classCallCheck(this, Grid);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    var CSS = 'body.baseline {\n                  background: url(' + GRID_IMAGE + ') left top .8rem/.8rem;\n                }';
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = CSS;
    } else {
      style.appendChild(document.createTextNode(CSS));
    }

    head.appendChild(style);

    document.addEventListener('keydown', this.onKeyPress_.bind(this), false);
  }

  /**
   * Reacts to the keydown event. It reacts to ENTER key to toggle the class.
   * @param {KeyboardEvent} event The key event.
   * @private
   */


  _createClass(Grid, [{
    key: 'onKeyPress_',
    value: function onKeyPress_(event) {
      if (event.which === _keys2.default.ENTER) {
        document.body.classList.toggle('baseline');
      }
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HASH = '#slide';
var slideRegex = /#slide=(\d+)/;

/**
 * Static class with methods to manipulate and extract info from the hash of
 * the URL.
 */

var Hash = function () {
  /**
   * @param {WebSlides} wsInstance
   * @constructor
   */
  function Hash(wsInstance) {
    _classCallCheck(this, Hash);

    this.ws_ = wsInstance;

    wsInstance.el.addEventListener('ws:slide-change', Hash.onSlideChange_);
    window.addEventListener('hashchange', this.onHashChange_.bind(this), false);
  }

  /**
   * hashchange event handler, makes the WebSlide instance navigate to the
   * needed slide.
   */


  _createClass(Hash, [{
    key: 'onHashChange_',
    value: function onHashChange_() {
      var newSlideIndex = Hash.getSlideNumber();

      if (newSlideIndex !== null) {
        this.ws_.goToSlide(newSlideIndex);
      }
    }

    /**
     * Handler for the slide change event which updates the slide on the hash.
     * @param {Event} event
     * @private
     */

  }], [{
    key: 'onSlideChange_',
    value: function onSlideChange_(event) {
      Hash.setSlideNumber(event.detail.currentSlide);
    }

    /**
     * Gets the slide number from the hash by a regex matching `#slide=` and gets
     * the number after it. If the number is invalid or less than 0, it will
     * return null as an invalid value.
     * @return {?number}
     */

  }, {
    key: 'getSlideNumber',
    value: function getSlideNumber() {
      var results = document.location.hash.match(slideRegex);
      var slide = 0;

      if (Array.isArray(results)) {
        slide = parseInt(results[1], 10);
      }

      if (typeof slide !== 'number' || slide < 0 || !Array.isArray(results)) {
        slide = null;
      } else {
        slide--; // Convert to 0 index
      }

      return slide;
    }

    /**
     * It will update the hash (if it's different) so it reflects the slide
     * number being visible.
     * @param {number} number The number of the slide we're transitioning to.
     */

  }, {
    key: 'setSlideNumber',
    value: function setSlideNumber(number) {
      if (Hash.getSlideNumber() !== number - 1) {
        history.pushState({
          slideI: number - 1
        }, 'Slide ' + number, HASH + '=' + number);
      }
    }
  }]);

  return Hash;
}();

exports.default = Hash;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keys = __webpack_require__(2);

var _keys2 = _interopRequireDefault(_keys);

var _dom = __webpack_require__(0);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Keyboard interaction plugin.
 */
var Keyboard = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  function Keyboard(wsInstance) {
    _classCallCheck(this, Keyboard);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    document.addEventListener('keydown', this.onKeyPress_.bind(this), false);
  }

  /**
   * Reacts to the keydown event. It reacts to the arrows and space key
   * depending on the layout of the page.
   * @param {KeyboardEvent} event The key event.
   * @private
   */


  _createClass(Keyboard, [{
    key: 'onKeyPress_',
    value: function onKeyPress_(event) {
      var method = void 0;
      var argument = void 0;

      if (_dom2.default.isFocusableElement()) {
        return;
      }

      switch (event.which) {
        case _keys2.default.AV_PAGE:
        case _keys2.default.SPACE:
          method = this.ws_.goNext;
          break;
        case _keys2.default.RE_PAGE:
          method = this.ws_.goPrev;
          break;
        case _keys2.default.HOME:
          method = this.ws_.goToSlide;
          argument = 0;
          break;
        case _keys2.default.END:
          method = this.ws_.goToSlide;
          argument = this.ws_.maxSlide_ - 1;
          break;
        case _keys2.default.DOWN:
          method = this.ws_.isVertical ? this.ws_.goNext : null;
          break;
        case _keys2.default.UP:
          method = this.ws_.isVertical ? this.ws_.goPrev : null;
          break;
        case _keys2.default.LEFT:
          method = !this.ws_.isVertical ? this.ws_.goPrev : null;
          break;
        case _keys2.default.RIGHT:
          method = !this.ws_.isVertical ? this.ws_.goNext : null;
          break;
      }

      if (method) {
        method.call(this.ws_, argument);
      }
    }
  }]);

  return Keyboard;
}();

exports.default = Keyboard;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(0);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ELEMENT_ID = {
  NAV: 'navigation',
  NEXT: 'next',
  PREV: 'previous',
  COUNTER: 'counter'
};

var LABELS = {
  VERTICAL: {
    NEXT: '↓',
    PREV: '↑'
  },
  HORIZONTAL: {
    NEXT: '→',
    PREV: '←'
  }
};

/**
 * Navigation plugin.
 */

var Navigation = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  function Navigation(wsInstance) {
    _classCallCheck(this, Navigation);

    var arrowLabels = wsInstance.isVertical ? LABELS.VERTICAL : LABELS.HORIZONTAL;
    /**
     * Navigation element.
     * @type {Element}
     */
    this.el = _dom2.default.createNode('div', 'navigation');
    /**
     * Next button.
     * @type {Element}
     */
    this.next = Navigation.createArrow(ELEMENT_ID.NEXT, arrowLabels.NEXT);
    /**
     * Prev button.
     * @type {Element}
     */
    this.prev = Navigation.createArrow(ELEMENT_ID.PREV, arrowLabels.PREV);
    /**
     * Counter Element.
     * @type {Element}
     */
    this.counter = _dom2.default.createNode('span', ELEMENT_ID.COUNTER);
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    this.el.appendChild(this.next);
    this.el.appendChild(this.prev);
    this.el.appendChild(this.counter);

    this.ws_.el.appendChild(this.el);
    this.bindEvents_();
  }

  /**
   * Bind all events for the navigation.
   * @private
   */


  _createClass(Navigation, [{
    key: 'bindEvents_',
    value: function bindEvents_() {
      this.ws_.el.addEventListener('ws:slide-change', this.onSlideChanged_.bind(this));
      this.next.addEventListener('click', this.onButtonClicked_.bind(this));
      this.prev.addEventListener('click', this.onButtonClicked_.bind(this));
    }

    /**
     * Updates the counter inside the navigation.
     * @param {string|number} current Current slide number.
     * @param {string|number} max Max slide number.
     */

  }, {
    key: 'updateCounter',
    value: function updateCounter(current, max) {
      this.counter.textContent = current + ' / ' + max;
    }

    /**
     * Creates an arrow to navigate.
     * @param {!String} id Desired ID for the arrow.
     * @param {!String} text Desired text for the arrow.
     * @return {Element} The arrow element.
     */

  }, {
    key: 'onSlideChanged_',


    /**
     * Slide Change event handler. Will update the text on the navigation.
     * @param {CustomEvent} event
     * @private
     */
    value: function onSlideChanged_(event) {
      this.updateCounter(event.detail.currentSlide, event.detail.slides);
    }

    /**
     * Handles clicks on the next/prev buttons.
     * @param {MouseEvent} event
     * @private
     */

  }, {
    key: 'onButtonClicked_',
    value: function onButtonClicked_(event) {
      event.preventDefault();
      if (event.target === this.next) {
        this.ws_.goNext();
      } else {
        this.ws_.goPrev();
      }
    }
  }], [{
    key: 'createArrow',
    value: function createArrow(id, text) {
      var arrow = _dom2.default.createNode('a', id, text);
      arrow.href = '#';
      arrow.title = 'Arrow Keys';

      return arrow;
    }
  }]);

  return Navigation;
}();

exports.default = Navigation;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoslide = __webpack_require__(6);

var _autoslide2 = _interopRequireDefault(_autoslide);

var _clickNav = __webpack_require__(7);

var _clickNav2 = _interopRequireDefault(_clickNav);

var _grid = __webpack_require__(8);

var _grid2 = _interopRequireDefault(_grid);

var _hash = __webpack_require__(9);

var _hash2 = _interopRequireDefault(_hash);

var _keyboard = __webpack_require__(10);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _navigation = __webpack_require__(11);

var _navigation2 = _interopRequireDefault(_navigation);

var _scroll = __webpack_require__(13);

var _scroll2 = _interopRequireDefault(_scroll);

var _touch = __webpack_require__(14);

var _touch2 = _interopRequireDefault(_touch);

var _video = __webpack_require__(15);

var _video2 = _interopRequireDefault(_video);

var _youtube = __webpack_require__(16);

var _youtube2 = _interopRequireDefault(_youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  AutoSlide: _autoslide2.default,
  ClickNav: _clickNav2.default,
  Grid: _grid2.default,
  Hash: _hash2.default,
  Keyboard: _keyboard2.default,
  Navigation: _navigation2.default,
  Scroll: _scroll2.default,
  Touch: _touch2.default,
  Video: _video2.default,
  YouTube: _youtube2.default
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobileDetector = __webpack_require__(3);

var _mobileDetector2 = _interopRequireDefault(_mobileDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Scroll plugin.
 */
var Scroll = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  function Scroll(wsInstance) {
    _classCallCheck(this, Scroll);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    /**
     * Where the scroll is going to happen. The WebSlides element.
     * @type {Element}
     * @private
     */
    this.scrollContainer_ = wsInstance.el;
    /**
     * Whether movement is happening up or down.
     * @type {boolean}
     * @private
     */
    this.isGoingUp_ = false;
    /**
     * Whether movement is happening left or right.
     * @type {boolean}
     * @private
     */
    this.isGoingLeft_ = false;
    /**
     * Timeout id holder.
     * @type {?number}
     * @private
     */
    this.timeout_ = null;

    if (!_mobileDetector2.default.isAny()) {
      this.scrollContainer_.addEventListener('wheel', this.onMouseWheel_.bind(this));

      if (!wsInstance.isVertical) {
        wsInstance.el.addEventListener('ws:slide-change', this.onSlideChange_.bind(this));
      }
    }
  }

  /**
   * When the slides change, set an inner timeout to avoid prematurely
   * changing to the next slide again.
   * @private
   */


  _createClass(Scroll, [{
    key: 'onSlideChange_',
    value: function onSlideChange_() {
      var _this = this;

      this.timeout_ = setTimeout(function () {
        _this.timeout_ = null;
      }, this.ws_.options.scrollWait);
    }

    /**
     * Reacts to the wheel event. Detects whether is going up or down and decides
     * if it needs to move the slide based on the amount of delta.
     * @param {WheelEvent} event The Wheel Event.
     * @private
     */

  }, {
    key: 'onMouseWheel_',
    value: function onMouseWheel_(event) {
      if (this.ws_.isMoving || this.timeout_) {
        event.preventDefault();
        return;
      }

      var wheelDeltaY = event.deltaY,
          wheelDeltaX = event.deltaX;

      var isVertical = this.ws_.isVertical;
      var isHorizontalMovement = Math.abs(wheelDeltaX) > Math.abs(wheelDeltaY);
      this.isGoingUp_ = wheelDeltaY < 0;
      this.isGoingLeft_ = wheelDeltaX < 0;

      // If we're mainly moving horizontally, prevent default
      if (isHorizontalMovement) {
        if (!isVertical) {
          event.preventDefault();
        } else {
          // If we're moving horizontally but this is vertical, return to avoid
          // unwanted navigation.
          return;
        }
      }

      if (Math.abs(wheelDeltaY) >= this.ws_.options.minWheelDelta || Math.abs(wheelDeltaX) >= this.ws_.options.minWheelDelta) {
        if (isHorizontalMovement && this.isGoingLeft_ || !isHorizontalMovement && this.isGoingUp_) {
          this.ws_.goPrev();
        } else {
          this.ws_.goNext();
        }

        event.preventDefault();
      }
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobileDetector = __webpack_require__(3);

var _mobileDetector2 = _interopRequireDefault(_mobileDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EVENTS = {
  touch: {
    START: 'touchstart',
    MOVE: 'touchmove',
    END: 'touchend'
  },
  pointer: {
    START: 'pointerdown',
    MOVE: 'pointermove',
    END: 'pointerup'
  }
};

/**
 * Touch plugin.
 */

var Touch = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  function Touch(wsInstance) {
    _classCallCheck(this, Touch);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    /**
     * Start position for the X coordinate.
     * @type {number}
     * @private
     */
    this.startX_ = 0;

    /**
     * Start position for the Y coordinate.
     * @type {number}
     * @private
     */
    this.startY_ = 0;

    /**
     * Start position for the X coord.
     * @type {number}
     * @private
     */
    this.endX_ = 0;

    /**
     * Start position for the Y coord.
     * @type {number}
     * @private
     */
    this.endY_ = 0;

    /**
     * Whether is enabled or not. Only enabled for touch devices.
     * @type {boolean}
     * @private
     */
    this.isEnabled = false;

    var events = void 0;

    if (_mobileDetector2.default.isAny()) {
      // Likely IE
      if (window.PointerEvent && (_mobileDetector2.default.isWindows() || _mobileDetector2.default.isWindowsPhone())) {
        events = EVENTS.pointer;
      } else {
        events = EVENTS.touch;
      }

      this.isEnabled = true;
      document.addEventListener(events.START, this.onStart_.bind(this), false);
      document.addEventListener(events.MOVE, this.onMove_.bind(this), false);
      document.addEventListener(events.END, this.onStop_.bind(this), false);
    }
  }

  /**
   * Start touch handler. Saves starting points.
   * @param {Event} event The Touch event.
   * @private
   */


  _createClass(Touch, [{
    key: 'onStart_',
    value: function onStart_(event) {
      var info = Touch.normalizeEventInfo(event);

      this.startX_ = info.x;
      this.startY_ = info.y;
      this.endX_ = info.x;
      this.endY_ = info.y;
    }

    /**
     * Move touch handler. Saves end points.
     * @param {Event} event The Touch event.
     * @private
     */

  }, {
    key: 'onMove_',
    value: function onMove_(event) {
      var info = Touch.normalizeEventInfo(event);

      this.endX_ = info.x;
      this.endY_ = info.y;
    }

    /**
     * Stop touch handler. Checks if it needs to make any actions.
     * @private
     */

  }, {
    key: 'onStop_',
    value: function onStop_() {
      var diffX = this.startX_ - this.endX_;
      var diffY = this.startY_ - this.endY_;

      // It's an horizontal drag
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < -this.ws_.options.slideOffset) {
          this.ws_.goPrev();
        } else if (diffX > this.ws_.options.slideOffset) {
          this.ws_.goNext();
        }
      }
    }

    /**
     * Normalizes an event to deal with differences between PointerEvent and
     * TouchEvent.
     * @param {Event} event
     * @return {Object} Normalised touch points.
     */

  }], [{
    key: 'normalizeEventInfo',
    value: function normalizeEventInfo(event) {
      var touchEvent = { pageX: 0, pageY: 0 };

      if (typeof event.changedTouches !== 'undefined') {
        touchEvent = event.changedTouches[0];
      } else if (typeof event.originalEvent !== 'undefined' && typeof event.originalEvent.changedTouches !== 'undefined') {
        touchEvent = event.originalEvent.changedTouches[0];
      }

      var x = event.offsetX || event.layerX || touchEvent.pageX;
      var y = event.offsetY || event.layerY || touchEvent.pageY;

      return { x: x, y: y };
    }
  }]);

  return Touch;
}();

exports.default = Touch;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(0);

var _dom2 = _interopRequireDefault(_dom);

var _slide = __webpack_require__(1);

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Video plugin. Video plugin that allows to autoplay videos once the slide gets
 * active.
 */
var Video = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance.
   * @constructor
   */
  function Video(wsInstance) {
    _classCallCheck(this, Video);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    var videos = _dom2.default.toArray(this.ws_.el.querySelectorAll('video'));

    if (videos.length) {
      videos.forEach(function (video) {
        if (!video.hasAttribute('autoplay')) {
          return;
        }

        video.removeAttribute('autoplay');
        video.pause();
        video.currentTime = 0;

        var _Slide$getSectionFrom = _slide2.default.getSectionFromEl(video),
            i = _Slide$getSectionFrom.i;

        var slide = wsInstance.slides[i - 1];

        slide.video = video;

        slide.el.addEventListener(_slide.Events.ENABLE, Video.onSectionEnabled);
        slide.el.addEventListener(_slide.Events.DISABLE, Video.onSectionDisabled);
      });
    }
  }

  /**
   * On Section enable hook. Will play the video.
   * @param {CustomEvent} event
   */


  _createClass(Video, null, [{
    key: 'onSectionEnabled',
    value: function onSectionEnabled(event) {
      event.detail.slide.video.play();
    }

    /**
     * On Section enable hook. Will pause the video.
     * @param {CustomEvent} event
     */

  }, {
    key: 'onSectionDisabled',
    value: function onSectionDisabled(event) {
      event.detail.slide.video.pause();
    }
  }]);

  return Video;
}();

exports.default = Video;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global YT */


var _dom = __webpack_require__(0);

var _dom2 = _interopRequireDefault(_dom);

var _slide = __webpack_require__(1);

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Player wrapper around the YT player. This is mostly to get around the event
 * in which we need to play a video which player isn't ready yet.
 */
var Player = function () {
  /**
   * @param {Element} el
   */
  function Player(el) {
    _classCallCheck(this, Player);

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
    this.slide = _slide2.default.getSectionFromEl(el).section;
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

    /**
     * Options with which the player is created.
     * @type {Object}
     */
    this.options = {
      videoId: el.dataset.youtubeId,
      playerVars: this.getPlayerVars(el),
      events: {
        onReady: this.onPlayerReady.bind(this)
      }
    };

    /**
     * The iframe in which the video is loaded.
     * @type {Element}
     */
    this.el = el;
    /**
     * Timeout id.
     * @type {?number}
     */
    this.timeout = null;

    this.create();
  }

  /**
   * Destroys the iframe. Saves the current time in case it gets restored.
   */


  _createClass(Player, [{
    key: 'destroy',
    value: function destroy() {
      this.currentTime = this.player.getCurrentTime();
      this.player.destroy();
      this.player = null;
      this.el = this.slide.querySelector('[data-youtube]');
      this.ready = false;
    }

    /**
     * Creates the player.
     */

  }, {
    key: 'create',
    value: function create() {
      this.player = new YT.Player(this.el, this.options);
      this.el = this.player.getIframe();
    }

    /**
     * Player ready callback. Will play the video if it was intended to be played
     * and will also call any pending callbacks.
     */

  }, {
    key: 'onPlayerReady',
    value: function onPlayerReady() {
      this.ready = true;

      // Restoring the current time if saved
      if (this.currentTime) {
        this.player.seekTo(this.currentTime, true);
        this.player.pauseVideo();
        this.currentTime = null;
      }

      if (this.timeout && this.player.getPlayerState() !== 1) {
        this.play();
      }

      if (this.onReadyCb) {
        this.onReadyCb();
        this.onReadyCb = null;
      }
    }

    /**
     * Plays the video.
     */

  }, {
    key: 'play',
    value: function play() {
      var _this = this;

      if (this.ready) {
        this.timeout = setTimeout(function () {
          _this.timeout = null;
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

  }, {
    key: 'pause',
    value: function pause() {
      if (this.player && this.player.pauseVideo && this.player.getPlayerState() === 1) {
        this.player.pauseVideo();
      }
    }

    /**
     * Parses the element to have the proper variables.
     * @param {Element} element
     * @return {Object} Player variables.
     */

  }, {
    key: 'getPlayerVars',
    value: function getPlayerVars(element) {
      var vars = {
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
  }]);

  return Player;
}();

/**
 * Video plugin.
 */


var YouTube = function () {
  /**
   * Grid plugin that shows a grid on top of the WebSlides for easy prototyping.
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  function YouTube(wsInstance) {
    _classCallCheck(this, YouTube);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    this.videos = _dom2.default.toArray(this.ws_.el.querySelectorAll('[data-youtube]'));

    if (this.videos.length) {
      this.inject();
    }
  }

  /**
   * Once the YouTube API is ready this gets called so we can start the videos.
   */


  _createClass(YouTube, [{
    key: 'onYTReady',
    value: function onYTReady() {
      var _this2 = this;

      this.videos.forEach(function (video) {
        var player = new Player(video);

        if (typeof video.dataset.autoplay !== 'undefined') {
          var _Slide$getSectionFrom = _slide2.default.getSectionFromEl(player.el),
              i = _Slide$getSectionFrom.i;

          var slide = _this2.ws_.slides[i - 1];

          slide.player = player;

          slide.el.addEventListener(_slide.Events.ENABLE, YouTube.onSlideEvent);
          slide.el.addEventListener(_slide.Events.DISABLE, YouTube.onSlideEvent);
          slide.el.addEventListener(_slide.Events.ENTER, YouTube.onSlideEvent);
          slide.el.addEventListener(_slide.Events.LEAVE, YouTube.onSlideEvent);

          if (_this2.ws_.currentSlide_ === slide) {
            YouTube.onSectionEnabled(slide);
          }
        }
      });
    }

    /**
     * Injects the YouTube iFrame API into the page.
     */

  }, {
    key: 'inject',
    value: function inject() {
      window.onYouTubeIframeAPIReady = this.onYTReady.bind(this);
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    /**
     * Reacts to any event on the slide.
     * @param {CustomEvent} event
     */

  }], [{
    key: 'onSlideEvent',
    value: function onSlideEvent(event) {
      var slide = event.detail.slide;

      switch (event.type) {
        case _slide.Events.ENABLE:
          YouTube.onSectionEnabled(slide);
          break;
        case _slide.Events.DISABLE:
          YouTube.onSectionDisabled(slide);
          break;
        case _slide.Events.LEAVE:
          slide.player.destroy();
          break;
        case _slide.Events.ENTER:
          slide.player.create();
          break;
      }
    }

    /**
     * On Section enable hook. Will play the video.
     * @param {Slide} slide
     */

  }, {
    key: 'onSectionEnabled',
    value: function onSectionEnabled(slide) {
      if (slide.player.autoplay) {
        slide.player.play();
      }
    }

    /**
     * On Section enable hook. Will pause the video.
     * @param {Slide} slide
     */

  }, {
    key: 'onSectionDisabled',
    value: function onSectionDisabled(slide) {
      slide.player.pause();
    }
  }]);

  return YouTube;
}();

exports.default = YouTube;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NativeCustomEvent = window.CustomEvent;

/**
 * Check for the usage of native support for CustomEvents which is lacking
 * completely on IE.
 * @return {boolean} Whether it can be used or not.
 */
function canIuseNativeCustom() {
  try {
    var p = new NativeCustomEvent('t', {
      detail: {
        a: 'b'
      }
    });
    return 't' === p.type && 'b' === p.detail.a;
  } catch (e) {}

  return false;
}

/**
 * Lousy polyfill for the Custom Event constructor for IE.
 * @param {!string} type The type of the event.
 * @param {?Object} params Additional information for the event.
 * @return {Event}
 * @constructor
 */
var IECustomEvent = function CustomEvent(type, params) {
  var e = document.createEvent('CustomEvent');

  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, undefined);
  }

  return e;
};

var WSCustomEvent = canIuseNativeCustom() ? NativeCustomEvent : IECustomEvent;

exports.default = WSCustomEvent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Swing easing function.
 * @param {number} p The percentage of time that has passed.
 * @return {number}
 */
function swing(p) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}

/**
 * Linear easing function.
 * @param {number} p The percentage of time that has passed.
 * @return {number}
 */
function linear(p) {
  return p;
}

exports.default = { swing: swing, linear: linear };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _easing = __webpack_require__(18);

var _easing2 = _interopRequireDefault(_easing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCROLLABLE_CONTAINER = document.getElementById('webslides');

/**
 * Smoothly scrolls to a given Y position using Easing.Swing. It'll run a
 * callback upon finishing.
 * @param {number} y Offset of the page to scroll to.
 * @param {number} duration Duration of the animation. 500ms by default.
 * @param {function} cb Callback function to call upon completion.
 */
function scrollTo(y) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var delta = y - SCROLLABLE_CONTAINER.scrollTop;
  var startLocation = SCROLLABLE_CONTAINER.scrollTop;
  var increment = 16;

  if (!duration) {
    SCROLLABLE_CONTAINER.scrollTop = y;
    cb();
    return;
  }

  var animateScroll = function animateScroll(elapsedTime) {
    elapsedTime += increment;
    var percent = Math.min(1, elapsedTime / duration);
    var easingP = _easing2.default.swing(percent, elapsedTime * percent, y, delta, duration);

    SCROLLABLE_CONTAINER.scrollTop = Math.floor(startLocation + easingP * delta);

    if (elapsedTime < duration) {
      setTimeout(function () {
        return animateScroll(elapsedTime);
      }, increment);
    } else {
      cb();
    }
  };

  animateScroll(0);
}

/***/ })
/******/ ]);