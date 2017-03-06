/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_event__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



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
     * @param {string} text The desired text to go inside of the element. It defaults
     * to an empty string.
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

      var event = new __WEBPACK_IMPORTED_MODULE_0__custom_event__["a" /* default */](eventType, {
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
  }]);

  return DOM;
}();

/* harmony default export */ __webpack_exports__["a"] = DOM;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = Keys;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UA = window.navigator.userAgent;

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
      return !!UA.match(/iPhone/i);
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

/* harmony default export */ __webpack_exports__["a"] = MobileDetector;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_plugins__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_scroll_to__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var CLASSES = {
  VERTICAL: 'vertical'
};

// Default plugins
var PLUGINS = {
  'clickNav': __WEBPACK_IMPORTED_MODULE_0__plugins_plugins__["a" /* default */].ClickNav,
  'grid': __WEBPACK_IMPORTED_MODULE_0__plugins_plugins__["a" /* default */].Grid,
  'hash': __WEBPACK_IMPORTED_MODULE_0__plugins_plugins__["a" /* default */].Hash,
  'keyboard': __WEBPACK_IMPORTED_MODULE_0__plugins_plugins__["a" /* default */].Keyboard,
  'nav': __WEBPACK_IMPORTED_MODULE_0__plugins_plugins__["a" /* default */].Navigation,
  'scroll': __WEBPACK_IMPORTED_MODULE_0__plugins_plugins__["a" /* default */].Scroll,
  'touch': __WEBPACK_IMPORTED_MODULE_0__plugins_plugins__["a" /* default */].Touch
};

var WebSlides = function () {
  /**
   * Options for WebSlides
   * @param {number|boolean} autoslide If a number is provided, it will allow
   * autosliding by said amount of miliseconds.
   * @param {boolean} changeOnClick If true, it will allow
   * clicking on any place to change the slide.
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
     * Interval ID reference for the autoslide.
     * @type {?number}
     * @private
     */
    this.interval_ = null;
    /**
     * Options dictionary.
     * @type {Object}
     */
    this.options = {
      autoslide: autoslide,
      changeOnClick: changeOnClick,
      minWheelDelta: minWheelDelta,
      scrollWait: scrollWait,
      slideOffset: slideOffset
    };

    if (!this.el) {
      throw new Error('Couldn\'t find the webslides container!');
    }

    // Bootstrapping
    this.removeChildren_();
    this.grabSlides_();
    this.createPlugins_();
    this.initSlides_();
    this.play();
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

        if (!__WEBPACK_IMPORTED_MODULE_1__slide__["a" /* default */].isCandidate(node)) {
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
        var pluginCto = PLUGINS[pluginName];
        _this.plugins[pluginName] = new pluginCto(_this);
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
      __WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* default */].fireEvent(this.el, 'ws:init');
    }

    /**
     * Grabs the slides from the DOM and creates all the Slides modules.
     * @private
     */

  }, {
    key: 'grabSlides_',
    value: function grabSlides_() {
      this.slides = __WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* default */].toArray(this.el.childNodes).map(function (slide, i) {
        return new __WEBPACK_IMPORTED_MODULE_1__slide__["a" /* default */](slide, i);
      });

      this.maxSlide_ = this.slides.length;
    }

    /**
     * Goes to a given slide.
     * @param {!number} slideI The slide index.
     * @param {?boolean} forward Whether we're forcing moving forward/backwards.
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

      this.el.style.overflow = 'none';

      if (!isMovingForward) {
        nextSlide.moveBeforeFirst();
        nextSlide.show();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_scroll_to__["a" /* default */])(this.currentSlide_.el.offsetTop, 0);
      } else {
        nextSlide.show();
      }

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_scroll_to__["a" /* default */])(nextSlide.el.offsetTop, 500, function () {
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
     * Transitions to a slide, without doing the scroll animation.
     * @param {boolean} isMovingForward Whether we're going forward or backwards.
     * @param {Slide} nextSlide Next slide.
     * @param {Function} callback Callback to be called upon finishing. This is a
     * sync function so it'll happen on run time.
     * @private
     */

  }, {
    key: 'transitionToSlide_',
    value: function transitionToSlide_(isMovingForward, nextSlide, callback) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_scroll_to__["a" /* default */])(0, 0);

      if (!isMovingForward) {
        nextSlide.moveBeforeFirst();
      }

      if (this.currentSlide_) {
        if (isMovingForward) {
          this.currentSlide_.moveAfterLast();
        }

        this.currentSlide_.hide();
      }

      nextSlide.show();
      callback.call(this, nextSlide);
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
      this.currentSlide_ = slide;
      this.currentSlideI_ = slide.i;
      this.isMoving = false;

      __WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* default */].fireEvent(this.el, 'ws:slide-change', {
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
     * Those being:
     *  - Navigation
     *  - Hash
     *  - Keyboard
     * @param {!string} key They key under which it'll be stored inside of the
     * instance, inside the plugins dict.
     * @param {!Function} cto Plugin constructor.
     */

  }, {
    key: 'play',


    /**
     * Starts autosliding all the slides if it's not currently doing it and the
     * autoslide option was a number greater than 0.
     * @param {?number} time Amount of milliseconds to wait to go to next slide
     * automatically.
     */
    value: function play(time) {
      time = time || this.options.autoslide;

      if (!this.interval_ && typeof time === 'number' && time > 0) {
        this.interval_ = setInterval(this.goNext.bind(this), time);
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
  }], [{
    key: 'registerPlugin',
    value: function registerPlugin(key, cto) {
      PLUGINS[key] = cto;
    }
  }]);

  return WebSlides;
}();

/* harmony default export */ __webpack_exports__["a"] = WebSlides;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CLASSES = {
  SLIDE: 'slide',
  CURRENT: 'current'
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
      __WEBPACK_IMPORTED_MODULE_0__utils_dom__["a" /* default */].hide(this.el);
      this.el.classList.remove(CLASSES.CURRENT);
    }

    /**
     * Shows the node and adds the class that makes it "active".
     */

  }, {
    key: 'show',
    value: function show() {
      __WEBPACK_IMPORTED_MODULE_0__utils_dom__["a" /* default */].show(this.el);
      this.el.classList.add(CLASSES.CURRENT);
    }

    /**
     * Moves the section to the bottom of the section's list.
     */

  }, {
    key: 'moveAfterLast',
    value: function moveAfterLast() {
      var last = this.parent.childNodes[this.parent.childElementCount - 1];

      this.parent.insertBefore(this.el, last.nextSibling);
    }

    /**
     * Moves the section to the top of the section's list.
     */

  }, {
    key: 'moveBeforeFirst',
    value: function moveBeforeFirst() {
      var first = this.parent.childNodes[0];

      this.parent.insertBefore(this.el, first);
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
  }]);

  return Slide;
}();

/* harmony default export */ __webpack_exports__["a"] = Slide;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLICKABLE_ELS = ['INPUT', 'SELECT', 'OPTION', 'BUTTON', 'A', 'TEXTAREA'];

var ClickNav = function () {
  /**
   * ClickNav plugin that allows to click on the page to get to the next slide.
   * @param {WebSlides} wsInstance The WebSlides instance
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

/* harmony default export */ __webpack_exports__["a"] = ClickNav;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_keys__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Grid = function () {
  /**
   * Grid plugin that shows a grid on top of the WebSlides for easy prototyping.
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  function Grid(wsInstance) {
    _classCallCheck(this, Grid);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    var CSS = 'body.baseline {\n                  background: url(../images/baseline.png) left top .8rem/.8rem;\n                }';
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
      if (event.which === __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].ENTER) {
        document.body.toggleClass('baseline');
      }
    }
  }]);

  return Grid;
}();

/* harmony default export */ __webpack_exports__["a"] = Grid;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
   * Listens to the slide change event and the hash change events.
   * @param wsInstance
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

/* harmony default export */ __webpack_exports__["a"] = Hash;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_keys__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Keyboard = function () {
  /**
   * Keyboard interaction plugin.
   * @param {WebSlides} wsInstance The WebSlides instance
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

      // Check if there's a focused element that might use the keyboard.
      if (document.activeElement) {
        var isContentEditable = document.activeElement.contentEditable !== 'inherit';
        var isInput = ['INPUT', 'SELECT', 'OPTION', 'TEXTAREA'].indexOf(document.activeElement.tagName) > -1;

        if (isInput || isContentEditable) {
          return;
        }
      }

      switch (event.which) {
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].AV_PAGE:
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].SPACE:
          method = this.ws_.goNext;
          break;
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].RE_PAGE:
          method = this.ws_.goPrev;
          break;
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].HOME:
          method = this.ws_.goToSlide;
          argument = 0;
          break;
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].END:
          method = this.ws_.goToSlide;
          argument = this.ws_.maxSlide_ - 1;
          break;
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].DOWN:
          method = this.ws_.isVertical ? this.ws_.goNext : null;
          break;
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].UP:
          method = this.ws_.isVertical ? this.ws_.goPrev : null;
          break;
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].LEFT:
          method = !this.ws_.isVertical ? this.ws_.goPrev : null;
          break;
        case __WEBPACK_IMPORTED_MODULE_0__utils_keys__["a" /* default */].RIGHT:
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

/* harmony default export */ __webpack_exports__["a"] = Keyboard;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Navigation = function () {
  /**
   * The Navigation constructor. It'll create all the nodes needed for the
   * navigation such as the arrows and the counter.
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  function Navigation(wsInstance) {
    _classCallCheck(this, Navigation);

    var arrowLabels = wsInstance.isVertical ? LABELS.VERTICAL : LABELS.HORIZONTAL;
    /**
     * Navigation element.
     * @type {Element}
     */
    this.el = __WEBPACK_IMPORTED_MODULE_0__utils_dom__["a" /* default */].createNode('div', 'navigation');
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
    this.counter = __WEBPACK_IMPORTED_MODULE_0__utils_dom__["a" /* default */].createNode('span', ELEMENT_ID.COUNTER);
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
      var arrow = __WEBPACK_IMPORTED_MODULE_0__utils_dom__["a" /* default */].createNode('a', id, text);
      arrow.href = '#';
      arrow.title = 'Arrow Keys';

      return arrow;
    }
  }]);

  return Navigation;
}();

/* harmony default export */ __webpack_exports__["a"] = Navigation;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__click_nav__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keyboard__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__touch__ = __webpack_require__(13);








/* harmony default export */ __webpack_exports__["a"] = {
  ClickNav: __WEBPACK_IMPORTED_MODULE_0__click_nav__["a" /* default */],
  Grid: __WEBPACK_IMPORTED_MODULE_1__grid__["a" /* default */],
  Hash: __WEBPACK_IMPORTED_MODULE_2__hash__["a" /* default */],
  Keyboard: __WEBPACK_IMPORTED_MODULE_3__keyboard__["a" /* default */],
  Navigation: __WEBPACK_IMPORTED_MODULE_4__navigation__["a" /* default */],
  Scroll: __WEBPACK_IMPORTED_MODULE_5__scroll__["a" /* default */],
  Touch: __WEBPACK_IMPORTED_MODULE_6__touch__["a" /* default */]
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_mobile_detector__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Scroll = function () {
  /**
   * Scroll handler for the WebSlides.
   * @param {WebSlides} wsInstance The WebSlides instance
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

    if (!__WEBPACK_IMPORTED_MODULE_0__utils_mobile_detector__["a" /* default */].isAny()) {
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

/* harmony default export */ __webpack_exports__["a"] = Scroll;
;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_mobile_detector__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Touch = function () {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  function Touch(wsInstance) {
    _classCallCheck(this, Touch);

    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    /**
     * Start position for the X coord.
     * @type {number}
     * @private
     */
    this.startX_ = 0;

    /**
     * Start position for the Y coord.
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

    if (__WEBPACK_IMPORTED_MODULE_0__utils_mobile_detector__["a" /* default */].isAny()) {
      // Likely IE
      if (window.PointerEvent && (__WEBPACK_IMPORTED_MODULE_0__utils_mobile_detector__["a" /* default */].isWindows() || __WEBPACK_IMPORTED_MODULE_0__utils_mobile_detector__["a" /* default */].isWindowsPhone())) {
        events = EVENTS.pointer;
      } else {
        events = EVENTS.touch;
      }

      this.isEnabled = true;
      document.addEventListener(events.START, this.onStart_.bind(this), false);
      document.addEventListener(events.MOVE, this.onMove_.bind(this), false);
      document.addEventListener(events.MOVE, this.onMove_.bind(this), false);
      document.addEventListener(events.END, this.onStop_.bind(this), false);
    }
  }

  /**
   * Start touch handler. Saves starting points.
   * @param event
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
     * @param event
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
     * @param event
     * @return {*}
     */

  }], [{
    key: 'normalizeEventInfo',
    value: function normalizeEventInfo(event) {
      var x = void 0;
      var y = void 0;
      var touchEvent = { pageX: 0, pageY: 0 };

      if (typeof event.changedTouches !== 'undefined') {
        touchEvent = event.changedTouches[0];
      } else if (typeof event.originalEvent !== 'undefined' && typeof event.originalEvent.changedTouches !== 'undefined') {
        touchEvent = event.originalEvent.changedTouches[0];
      }

      x = event.offsetX || event.layerX || touchEvent.pageX;
      y = event.offsetY || event.layerY || touchEvent.pageY;

      return { x: x, y: y };
    }
  }]);

  return Touch;
}();

/* harmony default export */ __webpack_exports__["a"] = Touch;
;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var NativeCustomEvent = window.CustomEvent;

/**
 * Check for the usage of native support for CustomEvents which is lacking
 * completely on IE.
 * @return {boolean} Whether it can be used or not.
 */
function canIuseNativeCustom() {
  try {
    var p = new NativeCustomEvent('t', { detail: { a: 'b' } });
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

/* harmony default export */ __webpack_exports__["a"] = WSCustomEvent;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = { swing: swing, linear: linear };

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__easing__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollTo;


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
    var easingP = __WEBPACK_IMPORTED_MODULE_0__easing__["a" /* default */].swing(percent, elapsedTime * percent, y, delta, duration);

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

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_webslides__ = __webpack_require__(3);

__webpack_require__(4);

window.WebSlides = __WEBPACK_IMPORTED_MODULE_0__modules_webslides__["a" /* default */];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODNhNzllYzQ1N2Y2OWEwOTY5MDUiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMvbW9iaWxlLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL2pzL21vZHVsZXMvd2Vic2xpZGVzLmpzIiwid2VicGFjazovLy8uL3Njc3MvZnVsbC5zY3NzIiwid2VicGFjazovLy8uL2pzL21vZHVsZXMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGx1Z2lucy9jbGljay1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGx1Z2lucy9ncmlkLmpzIiwid2VicGFjazovLy8uL2pzL3BsdWdpbnMvaGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wbHVnaW5zL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL2pzL3BsdWdpbnMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wbHVnaW5zL3BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGx1Z2lucy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGx1Z2lucy90b3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9qcy91dGlscy9jdXN0b20tZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMvZWFzaW5nLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzL3Njcm9sbC10by5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mdWxsLmpzIl0sIm5hbWVzIjpbIkRPTSIsInRhZyIsImlkIiwidGV4dCIsIm5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImVsIiwic3R5bGUiLCJkaXNwbGF5IiwidGFyZ2V0IiwiZXZlbnRUeXBlIiwiZXZlbnRJbmZvIiwiZXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiaXRlcmFibGUiLCJzbGljZSIsImNhbGwiLCJLZXlzIiwiRU5URVIiLCJTUEFDRSIsIlJFX1BBR0UiLCJBVl9QQUdFIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIlVBIiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiTW9iaWxlRGV0ZWN0b3IiLCJtYXRjaCIsImlzQW5kcm9pZCIsImlzQmxhY2tCZXJyeSIsImlzaU9TIiwiaXNPcGVyYSIsImlzV2luZG93cyIsImlzV2luZG93c1Bob25lIiwiQ0xBU1NFUyIsIlZFUlRJQ0FMIiwiUExVR0lOUyIsIlBsdWdpbnMiLCJDbGlja05hdiIsIkdyaWQiLCJIYXNoIiwiS2V5Ym9hcmQiLCJOYXZpZ2F0aW9uIiwiU2Nyb2xsIiwiVG91Y2giLCJXZWJTbGlkZXMiLCJhdXRvc2xpZGUiLCJjaGFuZ2VPbkNsaWNrIiwibWluV2hlZWxEZWx0YSIsInNjcm9sbFdhaXQiLCJzbGlkZU9mZnNldCIsImdldEVsZW1lbnRCeUlkIiwiaXNNb3ZpbmciLCJzbGlkZXMiLCJjdXJyZW50U2xpZGVJXyIsImN1cnJlbnRTbGlkZV8iLCJtYXhTbGlkZV8iLCJpc1ZlcnRpY2FsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwbHVnaW5zIiwiaW50ZXJ2YWxfIiwib3B0aW9ucyIsIkVycm9yIiwicmVtb3ZlQ2hpbGRyZW5fIiwiZ3JhYlNsaWRlc18iLCJjcmVhdGVQbHVnaW5zXyIsImluaXRTbGlkZXNfIiwicGxheSIsIm9uSW5pdF8iLCJub2RlcyIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwiU2xpZGUiLCJpc0NhbmRpZGF0ZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwbHVnaW5DdG8iLCJwbHVnaW5OYW1lIiwiZmlyZUV2ZW50IiwidG9BcnJheSIsIm1hcCIsInNsaWRlIiwic2xpZGVJIiwiZm9yd2FyZCIsImlzVmFsaWRJbmRleFNsaWRlXyIsImlzTW92aW5nRm9yd2FyZCIsIm5leHRTbGlkZSIsInRvdWNoIiwiaXNFbmFibGVkIiwic2Nyb2xsVHJhbnNpdGlvblRvU2xpZGVfIiwib25TbGlkZUNoYW5nZV8iLCJ0cmFuc2l0aW9uVG9TbGlkZV8iLCJjYWxsYmFjayIsIm92ZXJmbG93IiwibW92ZUJlZm9yZUZpcnN0Iiwic2hvdyIsInNjcm9sbFRvIiwib2Zmc2V0VG9wIiwiaGlkZSIsIm1vdmVBZnRlckxhc3QiLCJzZXRUaW1lb3V0IiwiY3VycmVudFNsaWRlMCIsImN1cnJlbnRTbGlkZSIsIm5leHRJbmRleCIsImdvVG9TbGlkZSIsInByZXZJbmRleCIsInNsaWRlTnVtYmVyIiwiaGFzaCIsImNvbnN0cnVjdG9yIiwiZ2V0U2xpZGVOdW1iZXIiLCJ0aW1lIiwic2V0SW50ZXJ2YWwiLCJnb05leHQiLCJiaW5kIiwiY2xlYXJJbnRlcnZhbCIsImtleSIsImN0byIsIlNMSURFIiwiQ1VSUkVOVCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJhZGQiLCJyZW1vdmUiLCJsYXN0IiwiY2hpbGRFbGVtZW50Q291bnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImZpcnN0Iiwibm9kZVR5cGUiLCJ0YWdOYW1lIiwiQ0xJQ0tBQkxFX0VMUyIsIndzSW5zdGFuY2UiLCJ3c18iLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja18iLCJpbmRleE9mIiwiZGF0YXNldCIsInByZXZlbnROYXYiLCJDU1MiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0eXBlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwib25LZXlQcmVzc18iLCJ3aGljaCIsImJvZHkiLCJ0b2dnbGVDbGFzcyIsIkhBU0giLCJzbGlkZVJlZ2V4Iiwib25IYXNoQ2hhbmdlXyIsIm5ld1NsaWRlSW5kZXgiLCJzZXRTbGlkZU51bWJlciIsInJlc3VsdHMiLCJsb2NhdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwibnVtYmVyIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsIm1ldGhvZCIsImFyZ3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlzQ29udGVudEVkaXRhYmxlIiwiY29udGVudEVkaXRhYmxlIiwiaXNJbnB1dCIsImdvUHJldiIsIkVMRU1FTlRfSUQiLCJOQVYiLCJORVhUIiwiUFJFViIsIkNPVU5URVIiLCJMQUJFTFMiLCJIT1JJWk9OVEFMIiwiYXJyb3dMYWJlbHMiLCJjcmVhdGVOb2RlIiwibmV4dCIsImNyZWF0ZUFycm93IiwicHJldiIsImNvdW50ZXIiLCJiaW5kRXZlbnRzXyIsIm9uU2xpZGVDaGFuZ2VkXyIsIm9uQnV0dG9uQ2xpY2tlZF8iLCJjdXJyZW50IiwibWF4IiwidXBkYXRlQ291bnRlciIsInByZXZlbnREZWZhdWx0IiwiYXJyb3ciLCJocmVmIiwidGl0bGUiLCJzY3JvbGxDb250YWluZXJfIiwiaXNHb2luZ1VwXyIsImlzR29pbmdMZWZ0XyIsInRpbWVvdXRfIiwiaXNBbnkiLCJvbk1vdXNlV2hlZWxfIiwid2hlZWxEZWx0YVkiLCJkZWx0YVkiLCJ3aGVlbERlbHRhWCIsImRlbHRhWCIsImlzSG9yaXpvbnRhbE1vdmVtZW50IiwiTWF0aCIsImFicyIsIkVWRU5UUyIsIlNUQVJUIiwiTU9WRSIsInBvaW50ZXIiLCJzdGFydFhfIiwic3RhcnRZXyIsImVuZFhfIiwiZW5kWV8iLCJldmVudHMiLCJQb2ludGVyRXZlbnQiLCJvblN0YXJ0XyIsIm9uTW92ZV8iLCJvblN0b3BfIiwiaW5mbyIsIm5vcm1hbGl6ZUV2ZW50SW5mbyIsIngiLCJ5IiwiZGlmZlgiLCJkaWZmWSIsInRvdWNoRXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwiY2hhbmdlZFRvdWNoZXMiLCJvcmlnaW5hbEV2ZW50Iiwib2Zmc2V0WCIsImxheWVyWCIsIm9mZnNldFkiLCJsYXllclkiLCJOYXRpdmVDdXN0b21FdmVudCIsIkN1c3RvbUV2ZW50IiwiY2FuSXVzZU5hdGl2ZUN1c3RvbSIsInAiLCJhIiwiZSIsIklFQ3VzdG9tRXZlbnQiLCJwYXJhbXMiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwidW5kZWZpbmVkIiwiV1NDdXN0b21FdmVudCIsInN3aW5nIiwiY29zIiwiUEkiLCJsaW5lYXIiLCJTQ1JPTExBQkxFX0NPTlRBSU5FUiIsImR1cmF0aW9uIiwiY2IiLCJkZWx0YSIsInNjcm9sbFRvcCIsInN0YXJ0TG9jYXRpb24iLCJpbmNyZW1lbnQiLCJhbmltYXRlU2Nyb2xsIiwiZWxhcHNlZFRpbWUiLCJwZXJjZW50IiwibWluIiwiZWFzaW5nUCIsIkVhc2luZ3MiLCJmbG9vciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUdBOzs7O0lBR3FCQSxHOzs7Ozs7OztBQUNuQjs7Ozs7Ozs7OytCQVNrQkMsRyxFQUF5QjtBQUFBLFVBQXBCQyxFQUFvQix1RUFBZixFQUFlO0FBQUEsVUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUN6QyxVQUFNQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCTCxHQUF2QixDQUFiO0FBQ0FHLFdBQUtGLEVBQUwsR0FBVUEsRUFBVjs7QUFFQSxVQUFJQyxJQUFKLEVBQVU7QUFDUkMsYUFBS0csV0FBTCxHQUFtQkosSUFBbkI7QUFDRDs7QUFFRCxhQUFPQyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7eUJBSVlJ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QUNiRCx5QkFBcUJJLFNBQXJCLEdBQWlDbEMsQ0FBakM7QUFDQWdDO0FBQ0E7QUFDRDs7QUFFRCxNQUFNSyxnQkFBZ0IsU0FBaEJBLGFBQWdCLGNBQWU7QUFDbkNDLG1CQUFlRixTQUFmO0FBQ0EsUUFBTUcsVUFBVXpELEtBQUswRCxHQUFMLENBQVMsQ0FBVCxFQUFZRixjQUFjUCxRQUExQixDQUFoQjtBQUNBLFFBQU1VLFVBQVUsd0RBQUFDLENBQVFoQixLQUFSLENBQ2RhLE9BRGMsRUFFZEQsY0FBY0MsT0FGQSxFQUdkdkMsQ0FIYyxFQUlkaUMsS0FKYyxFQUtkRixRQUxjLENBQWhCOztBQU9BRCx5QkFBcUJJLFNBQXJCLEdBQWlDcEQsS0FBSzZELEtBQUwsQ0FBV1IsZ0JBQ3ZDTSxVQUFVUixLQURrQixDQUFqQzs7QUFHQSxRQUFJSyxjQUFjUCxRQUFsQixFQUE0QjtBQUMxQnpKLGlCQUFXO0FBQUEsZUFBTStKLGNBQWNDLFdBQWQsQ0FBTjtBQUFBLE9BQVgsRUFBNkNGLFNBQTdDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xKO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkFLLGdCQUFjLENBQWQ7QUFDRCxDOzs7Ozs7Ozs7QUMzQ0Q7QUFDQSxtQkFBQU8sQ0FBUSxDQUFSOztBQUVBdlAsT0FBT3NCLFNBQVAsR0FBbUIsbUVBQW5CLEMiLCJmaWxlIjoid2Vic2xpZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3N0YXRpYy9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODNhNzllYzQ1N2Y2OWEwOTY5MDUiLCJpbXBvcnQgV1NDdXN0b21FdmVudCBmcm9tICcuL2N1c3RvbS1ldmVudCc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFN0YXRpYyBjbGFzcyBmb3IgRE9NIGhlbHBlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5vZGUgd2l0aCBvcHRpb25hbCBwYXJhbWV0ZXJzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIG5hbWUgb2YgdGhlIHRhZyBvZiB0aGUgbmVlZGVkIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBkZXNpcmVkIGlkIGZvciB0aGUgZWxlbWVudC4gSXQgZGVmYXVsdHMgdG8gYW5cclxuICAgKiBlbXB0eSBzdHJpbmcuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIGRlc2lyZWQgdGV4dCB0byBnbyBpbnNpZGUgb2YgdGhlIGVsZW1lbnQuIEl0IGRlZmF1bHRzXHJcbiAgICogdG8gYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZU5vZGUodGFnLCBpZCA9ICcnLCB0ZXh0ID0gJycpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBub2RlLmlkID0gaWQ7XHJcblxyXG4gICAgaWYgKHRleHQpIHtcclxuICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlcyBhbiBlbGVtZW50IHNldHRpbmcgdGhlIGRpc3BsYXkgdG8gbm9uZS5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIEVsZW1lbnQgdG8gYmUgaGlkZGVuLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBoaWRlKGVsKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd3MgYW4gZWxlbWVudCBieSByZW1vdmluZyB0aGUgZGlzcGxheSBwcm9wZXJ0eS4gVGhpcyBpcyBvbmx5IGludGVuZGVkXHJcbiAgICogdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIERPTS5oaWRlLlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgRWxlbWVudCB0byBiZSBzaG93bi5cclxuICAgKi9cclxuICBzdGF0aWMgc2hvdyhlbCkge1xyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgYSBjdXN0b20gZXZlbnQgb24gdGhlIGdpdmVuIHRhcmdldC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSBldmVudCB0eXBlLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudEluZm8gT3B0aW9uYWwgcGFyYW1ldGVyIHRvIHByb3ZpZGUgYWRkaXRpb25hbCBkYXRhXHJcbiAgICogdG8gdGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmaXJlRXZlbnQodGFyZ2V0LCBldmVudFR5cGUsIGV2ZW50SW5mbyA9IHt9KSB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBXU0N1c3RvbUV2ZW50KGV2ZW50VHlwZSwge1xyXG4gICAgICBkZXRhaWw6IGV2ZW50SW5mb1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgYW4gaXRlcmFibGUgdG8gYW4gYXJyYXkuXHJcbiAgICogQHBhcmFtIHsqfSBpdGVyYWJsZSBFbGVtZW50IHRvIGNvbnZlcnQgdG8gYXJyYXlcclxuICAgKiBAcmV0dXJuIHtBcnJheX0gdGhlIGVsZW1lbnQgY2FzdGVkIHRvIGFuIGFycmF5LlxyXG4gICAqL1xyXG4gIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlKSB7XHJcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbChpdGVyYWJsZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzL2RvbS5qcyIsImNvbnN0IEtleXMgPSB7XHJcbiAgRU5URVI6IDEzLFxyXG4gIFNQQUNFOiAzMixcclxuICBSRV9QQUdFOiAzMyxcclxuICBBVl9QQUdFOiAzNCxcclxuICBFTkQ6IDM1LFxyXG4gIEhPTUU6IDM2LFxyXG4gIExFRlQ6IDM3LFxyXG4gIFVQOiAzOCxcclxuICBSSUdIVDogMzksXHJcbiAgRE9XTjogNDBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtleXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzL2tleXMuanMiLCJjb25zdCBVQSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlRGV0ZWN0b3Ige1xyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBBbmRyb2lkIG9yIG5vdC5cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc0FuZHJvaWQoKSB7XHJcbiAgICByZXR1cm4gISFVQS5tYXRjaCgvQW5kcm9pZC9pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBCbGFja0JlcnJ5IG9yIG5vdC5cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc0JsYWNrQmVycnkoKSB7XHJcbiAgICByZXR1cm4gISFVQS5tYXRjaCgvQmxhY2tCZXJyeS9pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBpT1Mgb3Igbm90LlxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzaU9TKCkge1xyXG4gICAgcmV0dXJuICEhVUEubWF0Y2goL2lQaG9uZS9pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBPcGVyYSBvciBub3QuXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNPcGVyYSgpIHtcclxuICAgIHJldHVybiAhIVVBLm1hdGNoKC9PcGVyYSBNaW5pL2kpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgZGV2aWNlIGlzIFdpbmRvd3Mgb3Igbm90LlxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzV2luZG93cygpIHtcclxuICAgIHJldHVybiAhIVVBLm1hdGNoKC9JRU1vYmlsZS9pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBXaW5kb3dzIFBob25lIG9yIG5vdC5cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc1dpbmRvd3NQaG9uZSgpIHtcclxuICAgIHJldHVybiAhIVVBLm1hdGNoKC9XaW5kb3dzIFBob25lL2kpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgZGV2aWNlIGlzIGFueSBtb2JpbGUgZGV2aWNlIG9yIG5vdC5cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc0FueSgpIHtcclxuICAgIHJldHVybiBNb2JpbGVEZXRlY3Rvci5pc0FuZHJvaWQoKSB8fFxyXG4gICAgTW9iaWxlRGV0ZWN0b3IuaXNCbGFja0JlcnJ5KCkgfHxcclxuICAgIE1vYmlsZURldGVjdG9yLmlzaU9TKCkgfHxcclxuICAgIE1vYmlsZURldGVjdG9yLmlzT3BlcmEoKSB8fFxyXG4gICAgTW9iaWxlRGV0ZWN0b3IuaXNXaW5kb3dzKCkgfHxcclxuICAgIE1vYmlsZURldGVjdG9yLmlzV2luZG93c1Bob25lKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzL21vYmlsZS1kZXRlY3Rvci5qcyIsImltcG9ydCBQbHVnaW5zIGZyb20gJy4uL3BsdWdpbnMvcGx1Z2lucyc7XHJcbmltcG9ydCBTbGlkZSBmcm9tICcuL3NsaWRlJztcclxuaW1wb3J0IERPTSBmcm9tICcuLi91dGlscy9kb20nO1xyXG5pbXBvcnQgc2Nyb2xsVG8gZnJvbSAnLi4vdXRpbHMvc2Nyb2xsLXRvJztcclxuXHJcbmNvbnN0IENMQVNTRVMgPSB7XHJcbiAgVkVSVElDQUw6ICd2ZXJ0aWNhbCdcclxufTtcclxuXHJcbi8vIERlZmF1bHQgcGx1Z2luc1xyXG5jb25zdCBQTFVHSU5TID0ge1xyXG4gICdjbGlja05hdic6IFBsdWdpbnMuQ2xpY2tOYXYsXHJcbiAgJ2dyaWQnOiBQbHVnaW5zLkdyaWQsXHJcbiAgJ2hhc2gnOiBQbHVnaW5zLkhhc2gsXHJcbiAgJ2tleWJvYXJkJzogUGx1Z2lucy5LZXlib2FyZCxcclxuICAnbmF2JzogUGx1Z2lucy5OYXZpZ2F0aW9uLFxyXG4gICdzY3JvbGwnOiBQbHVnaW5zLlNjcm9sbCxcclxuICAndG91Y2gnOiBQbHVnaW5zLlRvdWNoXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJTbGlkZXMge1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgZm9yIFdlYlNsaWRlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfGJvb2xlYW59IGF1dG9zbGlkZSBJZiBhIG51bWJlciBpcyBwcm92aWRlZCwgaXQgd2lsbCBhbGxvd1xyXG4gICAqIGF1dG9zbGlkaW5nIGJ5IHNhaWQgYW1vdW50IG9mIG1pbGlzZWNvbmRzLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hhbmdlT25DbGljayBJZiB0cnVlLCBpdCB3aWxsIGFsbG93XHJcbiAgICogY2xpY2tpbmcgb24gYW55IHBsYWNlIHRvIGNoYW5nZSB0aGUgc2xpZGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbldoZWVsRGVsdGEgQ29udHJvbHMgdGhlIGFtb3VudCBvZiBuZWVkZWQgc2Nyb2xsIHRvXHJcbiAgICogdHJpZ2dlciBuYXZpZ2F0aW9uLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxXYWl0IENvbnRyb2xzIHRoZSBhbW91bnQgb2YgdGltZSB0byB3YWl0IHRpbGxcclxuICAgKiBuYXZpZ2F0aW9uIGNhbiBvY2N1ciBhZ2FpbiB3aXRoIHNjcm9sbC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2xpZGVPZmZzZXQgQ29udHJvbHMgdGhlIGFtb3VudCBvZiBuZWVkZWQgdG91Y2ggZGVsdGEgdG9cclxuICAgKiB0cmlnZ2VyIG5hdmlnYXRpb24uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgYXV0b3NsaWRlID0gZmFsc2UsXHJcbiAgICBjaGFuZ2VPbkNsaWNrID0gZmFsc2UsXHJcbiAgICBtaW5XaGVlbERlbHRhID0gNDAsXHJcbiAgICBzY3JvbGxXYWl0ID0gNDUwLFxyXG4gICAgc2xpZGVPZmZzZXQgPSA1MFxyXG4gIH0gPSB7fSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXZWJTbGlkZSBlbGVtZW50LlxyXG4gICAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vic2xpZGVzJyk7XHJcbiAgICAvKipcclxuICAgICAqIE1vdmluZyBmbGFnLlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogU2xpZGUncyBhcnJheS5cclxuICAgICAqIEB0eXBlIHs/QXJyYXk8U2xpZGU+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNsaWRlcyA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIEN1cnJlbnQgc2xpZGUncyBpbmRleC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZUlfID0gLTE7XHJcbiAgICAvKipcclxuICAgICAqIEN1cnJlbnQgc2xpZGUgcmVmZXJlbmNlLlxyXG4gICAgICogQHR5cGUgez9TbGlkZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuY3VycmVudFNsaWRlXyA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIE1heCBzbGlkZSBpbmRleC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1heFNsaWRlXyA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIGxheW91dCBpcyBnb2luZyB0byBiZSB2ZXJ0aWNhbCBvciBob3Jpem9udGFsLlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNWZXJ0aWNhbCA9IHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTRVMuVkVSVElDQUwpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQbHVnaW4ncyBkaWN0aW9uYXJ5LlxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5wbHVnaW5zID0ge307XHJcbiAgICAvKipcclxuICAgICAqIEludGVydmFsIElEIHJlZmVyZW5jZSBmb3IgdGhlIGF1dG9zbGlkZS5cclxuICAgICAqIEB0eXBlIHs/bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5pbnRlcnZhbF8gPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25zIGRpY3Rpb25hcnkuXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIGF1dG9zbGlkZSxcclxuICAgICAgY2hhbmdlT25DbGljayxcclxuICAgICAgbWluV2hlZWxEZWx0YSxcclxuICAgICAgc2Nyb2xsV2FpdCxcclxuICAgICAgc2xpZGVPZmZzZXRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzLmVsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGRuXFwndCBmaW5kIHRoZSB3ZWJzbGlkZXMgY29udGFpbmVyIScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJvb3RzdHJhcHBpbmdcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW5fKCk7XHJcbiAgICB0aGlzLmdyYWJTbGlkZXNfKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBsdWdpbnNfKCk7XHJcbiAgICB0aGlzLmluaXRTbGlkZXNfKCk7XHJcbiAgICB0aGlzLnBsYXkoKTtcclxuICAgIC8vIEZpbmlzaGVkXHJcbiAgICB0aGlzLm9uSW5pdF8oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGVsZW1lbnRzIGluc2lkZSBvZiB0aGUgbWFpbiBjb250YWluZXIgdGhhdCBhcmUgbm90XHJcbiAgICogZWxpZ2libGUgdG8gYmUgYSBTbGlkZSBFbGVtZW50LlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVtb3ZlQ2hpbGRyZW5fKCkge1xyXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmVsLmNoaWxkTm9kZXM7XHJcbiAgICBsZXQgaSA9IG5vZGVzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcclxuXHJcbiAgICAgIGlmICghU2xpZGUuaXNDYW5kaWRhdGUobm9kZSkpIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFsbCB0aGUgcmVnaXN0ZXJlZCBwbHVnaW5zIGFuZCBzdG9yZSB0aGUgaW5zdGFuY2VzIGluc2lkZSBvZiB0aGVcclxuICAgKiB0aGUgd2Vic2xpZGUgaW5zdGFuY2UuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBjcmVhdGVQbHVnaW5zXygpIHtcclxuICAgIE9iamVjdC5rZXlzKFBMVUdJTlMpLmZvckVhY2gocGx1Z2luTmFtZSA9PiB7XHJcbiAgICAgIGNvbnN0IHBsdWdpbkN0byA9IFBMVUdJTlNbcGx1Z2luTmFtZV07XHJcbiAgICAgIHRoaXMucGx1Z2luc1twbHVnaW5OYW1lXSA9IG5ldyBwbHVnaW5DdG8odGhpcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCBvbmNlIHRoZSBXZWJTbGlkZSBpbnN0YW5jZSBoYXMgZmluaXNoZWQgaW5pdGlhbGlzaW5nLlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQGZpcmVzIFdlYlNsaWRlI3dzOmluaXRcclxuICAgKi9cclxuICBvbkluaXRfKCkge1xyXG4gICAgRE9NLmZpcmVFdmVudCh0aGlzLmVsLCAnd3M6aW5pdCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR3JhYnMgdGhlIHNsaWRlcyBmcm9tIHRoZSBET00gYW5kIGNyZWF0ZXMgYWxsIHRoZSBTbGlkZXMgbW9kdWxlcy5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGdyYWJTbGlkZXNfKCkge1xyXG4gICAgdGhpcy5zbGlkZXMgPSBET00udG9BcnJheSh0aGlzLmVsLmNoaWxkTm9kZXMpXHJcbiAgICAgICAgLm1hcCgoc2xpZGUsIGkpID0+IG5ldyBTbGlkZShzbGlkZSwgaSkpO1xyXG5cclxuICAgIHRoaXMubWF4U2xpZGVfID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR29lcyB0byBhIGdpdmVuIHNsaWRlLlxyXG4gICAqIEBwYXJhbSB7IW51bWJlcn0gc2xpZGVJIFRoZSBzbGlkZSBpbmRleC5cclxuICAgKiBAcGFyYW0gez9ib29sZWFufSBmb3J3YXJkIFdoZXRoZXIgd2UncmUgZm9yY2luZyBtb3ZpbmcgZm9yd2FyZC9iYWNrd2FyZHMuXHJcbiAgICogVGhpcyBwYXJhbWV0ZXIgaXMgdXNlZCBvbmx5IGZyb20gdGhlIGdvTmV4dCwgZ29QcmV2IGZ1bmN0aW9ucyB0byBhZGp1c3QgdGhlXHJcbiAgICogc2Nyb2xsIGFuaW1hdGlvbnMuXHJcbiAgICovXHJcbiAgZ29Ub1NsaWRlKHNsaWRlSSwgZm9yd2FyZCA9IG51bGwpIHtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRJbmRleFNsaWRlXyhzbGlkZUkpICYmXHJcbiAgICAgICAgIXRoaXMuaXNNb3ZpbmcgJiZcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZUlfICE9PSBzbGlkZUkpIHtcclxuICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XHJcbiAgICAgIGxldCBpc01vdmluZ0ZvcndhcmQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChmb3J3YXJkICE9PSBudWxsKSB7XHJcbiAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZm9yd2FyZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGVJXyA+PSAwKSB7XHJcbiAgICAgICAgICBpc01vdmluZ0ZvcndhcmQgPSBzbGlkZUkgPiB0aGlzLmN1cnJlbnRTbGlkZUlfO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXh0U2xpZGUgPSB0aGlzLnNsaWRlc1tzbGlkZUldO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlXyAhPT0gbnVsbCAmJiB0aGlzLmlzVmVydGljYWwgJiZcclxuICAgICAgICAoIXRoaXMucGx1Z2lucy50b3VjaCB8fCAhdGhpcy5wbHVnaW5zLnRvdWNoLmlzRW5hYmxlZCkpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbFRyYW5zaXRpb25Ub1NsaWRlXyhcclxuICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkLCBuZXh0U2xpZGUsIHRoaXMub25TbGlkZUNoYW5nZV8pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRvU2xpZGVfKFxyXG4gICAgICAgICAgICBpc01vdmluZ0ZvcndhcmQsIG5leHRTbGlkZSwgdGhpcy5vblNsaWRlQ2hhbmdlXyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYW5zaXRpb25zIHRvIGEgc2xpZGUsIGRvaW5nIHRoZSBzY3JvbGwgYW5pbWF0aW9uLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNNb3ZpbmdGb3J3YXJkIFdoZXRoZXIgd2UncmUgZ29pbmcgZm9yd2FyZCBvciBiYWNrd2FyZHMuXHJcbiAgICogQHBhcmFtIHtTbGlkZX0gbmV4dFNsaWRlIE5leHQgc2xpZGUuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIHVwb24gZmluaXNoaW5nLiBUaGlzIGlzIGFuXHJcbiAgICogYXN5bmMgZnVuY3Rpb24gc28gaXQnbGwgaGFwcGVuIG9uY2UgdGhlIHNjcm9sbCBhbmltYXRpb24gZmluaXNoZXMuXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAc2VlIHNjcm9sbFRvXHJcbiAgICovXHJcbiAgc2Nyb2xsVHJhbnNpdGlvblRvU2xpZGVfKGlzTW92aW5nRm9yd2FyZCwgbmV4dFNsaWRlLCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5lbC5zdHlsZS5vdmVyZmxvdyA9ICdub25lJztcclxuXHJcbiAgICBpZiAoIWlzTW92aW5nRm9yd2FyZCkge1xyXG4gICAgICBuZXh0U2xpZGUubW92ZUJlZm9yZUZpcnN0KCk7XHJcbiAgICAgIG5leHRTbGlkZS5zaG93KCk7XHJcbiAgICAgIHNjcm9sbFRvKHRoaXMuY3VycmVudFNsaWRlXy5lbC5vZmZzZXRUb3AsIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dFNsaWRlLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUbyhuZXh0U2xpZGUuZWwub2Zmc2V0VG9wLCA1MDAsICgpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50U2xpZGVfLmhpZGUoKTtcclxuXHJcbiAgICAgIGlmIChpc01vdmluZ0ZvcndhcmQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZV8ubW92ZUFmdGVyTGFzdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVsLnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2suY2FsbCh0aGlzLCBuZXh0U2xpZGUpOyB9LCAxNTApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFuc2l0aW9ucyB0byBhIHNsaWRlLCB3aXRob3V0IGRvaW5nIHRoZSBzY3JvbGwgYW5pbWF0aW9uLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNNb3ZpbmdGb3J3YXJkIFdoZXRoZXIgd2UncmUgZ29pbmcgZm9yd2FyZCBvciBiYWNrd2FyZHMuXHJcbiAgICogQHBhcmFtIHtTbGlkZX0gbmV4dFNsaWRlIE5leHQgc2xpZGUuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIHVwb24gZmluaXNoaW5nLiBUaGlzIGlzIGFcclxuICAgKiBzeW5jIGZ1bmN0aW9uIHNvIGl0J2xsIGhhcHBlbiBvbiBydW4gdGltZS5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHRyYW5zaXRpb25Ub1NsaWRlXyhpc01vdmluZ0ZvcndhcmQsIG5leHRTbGlkZSwgY2FsbGJhY2spIHtcclxuICAgIHNjcm9sbFRvKDAsIDApO1xyXG5cclxuICAgIGlmICghaXNNb3ZpbmdGb3J3YXJkKSB7XHJcbiAgICAgIG5leHRTbGlkZS5tb3ZlQmVmb3JlRmlyc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50U2xpZGVfKSB7XHJcbiAgICAgIGlmIChpc01vdmluZ0ZvcndhcmQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZV8ubW92ZUFmdGVyTGFzdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZV8uaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRTbGlkZS5zaG93KCk7XHJcbiAgICBjYWxsYmFjay5jYWxsKHRoaXMsIG5leHRTbGlkZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuZXZlciBhIHNsaWRlIGlzIGNoYW5nZWQsIHRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQuIEl0IHVwZGF0ZXMgdGhlXHJcbiAgICogcmVmZXJlbmNlcyB0byB0aGUgY3VycmVudCBzbGlkZSwgZGlzYWJsZXMgdGhlIG1vdmluZyBmbGFnIGFuZCBmaXJlc1xyXG4gICAqIGEgY3VzdG9tIGV2ZW50LlxyXG4gICAqIEBwYXJhbSB7U2xpZGV9IHNsaWRlIFRoZSBzbGlkZSB3ZSdyZSB0cmFuc2l0aW9uaW5nIHRvLlxyXG4gICAqIEBmaXJlcyBXZWJTbGlkZSN3czpzbGlkZS1jaGFuZ2VcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIG9uU2xpZGVDaGFuZ2VfKHNsaWRlKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZV8gPSBzbGlkZTtcclxuICAgIHRoaXMuY3VycmVudFNsaWRlSV8gPSBzbGlkZS5pO1xyXG4gICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xyXG5cclxuICAgIERPTS5maXJlRXZlbnQodGhpcy5lbCwgJ3dzOnNsaWRlLWNoYW5nZScsIHtcclxuICAgICAgc2xpZGVzOiB0aGlzLm1heFNsaWRlXyxcclxuICAgICAgY3VycmVudFNsaWRlMDogdGhpcy5jdXJyZW50U2xpZGVJXyxcclxuICAgICAgY3VycmVudFNsaWRlOiB0aGlzLmN1cnJlbnRTbGlkZUlfICsgMVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHb2VzIHRvIHRoZSBuZXh0IHNsaWRlLlxyXG4gICAqL1xyXG4gIGdvTmV4dCgpIHtcclxuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmN1cnJlbnRTbGlkZUlfICsgMTtcclxuXHJcbiAgICBpZiAobmV4dEluZGV4ID49IHRoaXMubWF4U2xpZGVfKSB7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nb1RvU2xpZGUobmV4dEluZGV4LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdvZXMgdG8gdGhlIHByZXZpb3VzIHNsaWRlLlxyXG4gICAqL1xyXG4gIGdvUHJldigpIHtcclxuICAgIGxldCBwcmV2SW5kZXggPSB0aGlzLmN1cnJlbnRTbGlkZUlfIC0gMTtcclxuXHJcbiAgICBpZiAocHJldkluZGV4IDwgMCkge1xyXG4gICAgICBwcmV2SW5kZXggPSB0aGlzLm1heFNsaWRlXyAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nb1RvU2xpZGUocHJldkluZGV4LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gbnVtYmVyIGlzIGEgdmFsaWQgaW5kZXggdG8gZ28gdG8uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGluZGV4IHRvIGNoZWNrLlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgeW91IGNhbiBtb3ZlIHRvIHRoYXQgc2xpZGUgb3Igbm90LlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgaXNWYWxpZEluZGV4U2xpZGVfKGkpIHtcclxuICAgIHJldHVybiBpID49IDAgJiYgaSA8IHRoaXMubWF4U2xpZGVfO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdCB0aGUgc2hvd24gc2xpZGUgb24gbG9hZC4gSXQnbGwgZmV0Y2ggaXQgZnJvbSB0aGUgSGFzaCBpZiBwcmVzZW50XHJcbiAgICogYW5kLCBvdGhlcndpc2UsIGl0J2xsIGRlZmF1bHQgdG8gdGhlIGZpcnN0IG9uZS5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBzZWUgSGFzaC5nZXRTbGlkZU51bWJlclxyXG4gICAqL1xyXG4gIGluaXRTbGlkZXNfKCkge1xyXG4gICAgbGV0IHNsaWRlTnVtYmVyID0gdGhpcy5wbHVnaW5zLmhhc2guY29uc3RydWN0b3IuZ2V0U2xpZGVOdW1iZXIoKTtcclxuXHJcbiAgICAvLyBOb3QgdmFsaWRcclxuICAgIGlmIChzbGlkZU51bWJlciA9PT0gbnVsbCB8fFxyXG4gICAgICAgIHNsaWRlTnVtYmVyID49IHRoaXMubWF4U2xpZGVfKSB7XHJcbiAgICAgIHNsaWRlTnVtYmVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBLZWVwaW5nIHRoZSBvcmRlclxyXG4gICAgaWYgKHNsaWRlTnVtYmVyICE9PSAwKSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgd2hpbGUoaSA8IHNsaWRlTnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXNbaV0ubW92ZUFmdGVyTGFzdCgpO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ29Ub1NsaWRlKHNsaWRlTnVtYmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhIHBsdWdpbiB0byBiZSBsb2FkZWQgd2hlbiB0aGUgaW5zdGFuY2UgaXMgY3JlYXRlZC4gSXQgYWxsb3dzXHJcbiAgICogKG9uIHB1cnBvc2UpIHRvIHJlcGxhY2UgZGVmYXVsdCBwbHVnaW5zLlxyXG4gICAqIFRob3NlIGJlaW5nOlxyXG4gICAqICAtIE5hdmlnYXRpb25cclxuICAgKiAgLSBIYXNoXHJcbiAgICogIC0gS2V5Ym9hcmRcclxuICAgKiBAcGFyYW0geyFzdHJpbmd9IGtleSBUaGV5IGtleSB1bmRlciB3aGljaCBpdCdsbCBiZSBzdG9yZWQgaW5zaWRlIG9mIHRoZVxyXG4gICAqIGluc3RhbmNlLCBpbnNpZGUgdGhlIHBsdWdpbnMgZGljdC5cclxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gY3RvIFBsdWdpbiBjb25zdHJ1Y3Rvci5cclxuICAgKi9cclxuICBzdGF0aWMgcmVnaXN0ZXJQbHVnaW4oa2V5LCBjdG8pIHtcclxuICAgIFBMVUdJTlNba2V5XSA9IGN0bztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBhdXRvc2xpZGluZyBhbGwgdGhlIHNsaWRlcyBpZiBpdCdzIG5vdCBjdXJyZW50bHkgZG9pbmcgaXQgYW5kIHRoZVxyXG4gICAqIGF1dG9zbGlkZSBvcHRpb24gd2FzIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwLlxyXG4gICAqIEBwYXJhbSB7P251bWJlcn0gdGltZSBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgdG8gZ28gdG8gbmV4dCBzbGlkZVxyXG4gICAqIGF1dG9tYXRpY2FsbHkuXHJcbiAgICovXHJcbiAgcGxheSh0aW1lKSB7XHJcbiAgICB0aW1lID0gdGltZSB8fCB0aGlzLm9wdGlvbnMuYXV0b3NsaWRlO1xyXG5cclxuICAgIGlmICghdGhpcy5pbnRlcnZhbF8gJiYgdHlwZW9mIHRpbWUgPT09ICdudW1iZXInICYmIHRpbWUgPiAwKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxfID0gc2V0SW50ZXJ2YWwodGhpcy5nb05leHQuYmluZCh0aGlzKSwgdGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyBhdXRvc2xpZGluZyBhbGwgdGhlIHNsaWRlcy5cclxuICAgKi9cclxuICBzdG9wKCkge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxfKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbF8pO1xyXG4gICAgICB0aGlzLmludGVydmFsXyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vZHVsZXMvd2Vic2xpZGVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Njc3MvZnVsbC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBET00gZnJvbSAnLi4vdXRpbHMvZG9tJztcclxuXHJcbmNvbnN0IENMQVNTRVMgPSB7XHJcbiAgU0xJREU6ICdzbGlkZScsXHJcbiAgQ1VSUkVOVDogJ2N1cnJlbnQnXHJcbn07XHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3IgdGhlIFNsaWRlIHNlY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZSB7XHJcbiAgLyoqXHJcbiAgICogQm9vdHN0cmFwcyB0aGUgc2xpZGUgYnkgc2F2aW5nIHNvbWUgZGF0YSwgYWRkaW5nIGEgY2xhc3MgYW5kIGhpZGluZyBpdC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFNlY3Rpb24gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaSBaZXJvIGJhc2VkIGluZGV4IG9mIHRoZSBzbGlkZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2VjdGlvbidzIHBhcmVudC5cclxuICAgICAqIEB0eXBlIHtOb2RlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnBhcmVudCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaSA9IGk7XHJcblxyXG4gICAgdGhpcy5lbC5pZCA9ICdzZWN0aW9uLScgKyAoaSArIDEpO1xyXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKENMQVNTRVMuU0xJREUpO1xyXG5cclxuICAgIC8vIEhpZGUgc2xpZGVzIGJ5IGRlZmF1bHRcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZXMgdGhlIG5vZGUgYW5kIHJlbW92ZXMgdGhlIGNsYXNzIHRoYXQgbWFrZXMgaXQgXCJhY3RpdmVcIi5cclxuICAgKi9cclxuICBoaWRlKCkge1xyXG4gICAgRE9NLmhpZGUodGhpcy5lbCk7XHJcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NFUy5DVVJSRU5UKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIHRoZSBub2RlIGFuZCBhZGRzIHRoZSBjbGFzcyB0aGF0IG1ha2VzIGl0IFwiYWN0aXZlXCIuXHJcbiAgICovXHJcbiAgc2hvdygpIHtcclxuICAgIERPTS5zaG93KHRoaXMuZWwpO1xyXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKENMQVNTRVMuQ1VSUkVOVCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlcyB0aGUgc2VjdGlvbiB0byB0aGUgYm90dG9tIG9mIHRoZSBzZWN0aW9uJ3MgbGlzdC5cclxuICAgKi9cclxuICBtb3ZlQWZ0ZXJMYXN0KCkge1xyXG4gICAgY29uc3QgbGFzdCA9IHRoaXMucGFyZW50LmNoaWxkTm9kZXNbdGhpcy5wYXJlbnQuY2hpbGRFbGVtZW50Q291bnQgLSAxXTtcclxuXHJcbiAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgbGFzdC5uZXh0U2libGluZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlcyB0aGUgc2VjdGlvbiB0byB0aGUgdG9wIG9mIHRoZSBzZWN0aW9uJ3MgbGlzdC5cclxuICAgKi9cclxuICBtb3ZlQmVmb3JlRmlyc3QoKSB7XHJcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMucGFyZW50LmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIGZpcnN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYSB2YWxpZCBjYW5kaWRhdGUgdG8gYmUgYSBzbGlkZSBieSBlbnN1cmluZ1xyXG4gICAqIGl0J3MgYSBcInNlY3Rpb25cIiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgaXMgY2FuZGlkYXRlIG9yIG5vdC5cclxuICAgKi9cclxuICBzdGF0aWMgaXNDYW5kaWRhdGUoZWwpIHtcclxuICAgIHJldHVybiBlbC5ub2RlVHlwZSA9PT0gMSAmJiBlbC50YWdOYW1lID09PSAnU0VDVElPTic7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vZHVsZXMvc2xpZGUuanMiLCJjb25zdCBDTElDS0FCTEVfRUxTID0gW1xyXG4gICdJTlBVVCcsXHJcbiAgJ1NFTEVDVCcsXHJcbiAgJ09QVElPTicsXHJcbiAgJ0JVVFRPTicsXHJcbiAgJ0EnLFxyXG4gICdURVhUQVJFQSdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWNrTmF2IHtcclxuICAvKipcclxuICAgKiBDbGlja05hdiBwbHVnaW4gdGhhdCBhbGxvd3MgdG8gY2xpY2sgb24gdGhlIHBhZ2UgdG8gZ2V0IHRvIHRoZSBuZXh0IHNsaWRlLlxyXG4gICAqIEBwYXJhbSB7V2ViU2xpZGVzfSB3c0luc3RhbmNlIFRoZSBXZWJTbGlkZXMgaW5zdGFuY2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih3c0luc3RhbmNlKSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtXZWJTbGlkZXN9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLndzXyA9IHdzSW5zdGFuY2U7XHJcblxyXG4gICAgaWYgKHdzSW5zdGFuY2Uub3B0aW9ucy5jaGFuZ2VPbkNsaWNrKSB7XHJcbiAgICAgIHRoaXMud3NfLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrXy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWN0cyB0byB0aGUgY2xpY2sgZXZlbnQuIEl0IHdpbGwgZ28gdG8gdGhlIG5leHQgc2xpZGUgdW5sZXNzIHRoZSBlbGVtZW50XHJcbiAgICogaGFzIGEgZGF0YS1wcmV2ZW50LW5hdiBhdHRyaWJ1dGUgb3IgaXMgb24gdGhlIGxpc3Qgb2YgQ0xJQ0tBQkxFX0VMUy5cclxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFRoZSBjbGljayBldmVudC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIG9uQ2xpY2tfKGV2ZW50KSB7XHJcbiAgICBpZiAoQ0xJQ0tBQkxFX0VMUy5pbmRleE9mKGV2ZW50LnRhcmdldC50YWdOYW1lKSA8IDAgJiZcclxuICAgICAgdHlwZW9mIGV2ZW50LnRhcmdldC5kYXRhc2V0LnByZXZlbnROYXYgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMud3NfLmdvTmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wbHVnaW5zL2NsaWNrLW5hdi5qcyIsImltcG9ydCBLZXlzIGZyb20gJy4uL3V0aWxzL2tleXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XHJcbiAgLyoqXHJcbiAgICogR3JpZCBwbHVnaW4gdGhhdCBzaG93cyBhIGdyaWQgb24gdG9wIG9mIHRoZSBXZWJTbGlkZXMgZm9yIGVhc3kgcHJvdG90eXBpbmcuXHJcbiAgICogQHBhcmFtIHtXZWJTbGlkZXN9IHdzSW5zdGFuY2UgVGhlIFdlYlNsaWRlcyBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdzSW5zdGFuY2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1dlYlNsaWRlc31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMud3NfID0gd3NJbnN0YW5jZTtcclxuXHJcbiAgICBjb25zdCBDU1MgPSBgYm9keS5iYXNlbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvYmFzZWxpbmUucG5nKSBsZWZ0IHRvcCAuOHJlbS8uOHJlbTtcclxuICAgICAgICAgICAgICAgIH1gO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuXHJcbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuXHJcbiAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCl7XHJcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IENTUztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKENTUykpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5UHJlc3NfLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWN0cyB0byB0aGUga2V5ZG93biBldmVudC4gSXQgcmVhY3RzIHRvIEVOVEVSIGtleSB0byB0b2dnbGUgdGhlIGNsYXNzLlxyXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgVGhlIGtleSBldmVudC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIG9uS2V5UHJlc3NfKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuRU5URVIpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS50b2dnbGVDbGFzcygnYmFzZWxpbmUnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGx1Z2lucy9ncmlkLmpzIiwiY29uc3QgSEFTSCA9ICcjc2xpZGUnO1xyXG5jb25zdCBzbGlkZVJlZ2V4ID0gLyNzbGlkZT0oXFxkKykvO1xyXG5cclxuLyoqXHJcbiAqIFN0YXRpYyBjbGFzcyB3aXRoIG1ldGhvZHMgdG8gbWFuaXB1bGF0ZSBhbmQgZXh0cmFjdCBpbmZvIGZyb20gdGhlIGhhc2ggb2ZcclxuICogdGhlIFVSTC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc2gge1xyXG4gIC8qKlxyXG4gICAqIExpc3RlbnMgdG8gdGhlIHNsaWRlIGNoYW5nZSBldmVudCBhbmQgdGhlIGhhc2ggY2hhbmdlIGV2ZW50cy5cclxuICAgKiBAcGFyYW0gd3NJbnN0YW5jZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdzSW5zdGFuY2UpIHtcclxuICAgIHRoaXMud3NfID0gd3NJbnN0YW5jZTtcclxuXHJcbiAgICB3c0luc3RhbmNlLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3dzOnNsaWRlLWNoYW5nZScsIEhhc2gub25TbGlkZUNoYW5nZV8pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLm9uSGFzaENoYW5nZV8uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaGFzaGNoYW5nZSBldmVudCBoYW5kbGVyLCBtYWtlcyB0aGUgV2ViU2xpZGUgaW5zdGFuY2UgbmF2aWdhdGUgdG8gdGhlXHJcbiAgICogbmVlZGVkIHNsaWRlLlxyXG4gICAqL1xyXG4gIG9uSGFzaENoYW5nZV8oKSB7XHJcbiAgICBjb25zdCBuZXdTbGlkZUluZGV4ID0gSGFzaC5nZXRTbGlkZU51bWJlcigpO1xyXG5cclxuICAgIGlmIChuZXdTbGlkZUluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMud3NfLmdvVG9TbGlkZShuZXdTbGlkZUluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBvblNsaWRlQ2hhbmdlXyhldmVudCkge1xyXG4gICAgSGFzaC5zZXRTbGlkZU51bWJlcihldmVudC5kZXRhaWwuY3VycmVudFNsaWRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHNsaWRlIG51bWJlciBmcm9tIHRoZSBoYXNoIGJ5IGEgcmVnZXggbWF0Y2hpbmcgYCNzbGlkZT1gIGFuZCBnZXRzXHJcbiAgICogdGhlIG51bWJlciBhZnRlciBpdC4gSWYgdGhlIG51bWJlciBpcyBpbnZhbGlkIG9yIGxlc3MgdGhhbiAwLCBpdCB3aWxsXHJcbiAgICogcmV0dXJuIG51bGwgYXMgYW4gaW52YWxpZCB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIHs/bnVtYmVyfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRTbGlkZU51bWJlcigpIHtcclxuICAgIGxldCByZXN1bHRzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaChzbGlkZVJlZ2V4KTtcclxuICAgIGxldCBzbGlkZSA9IDA7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0cykpIHtcclxuICAgICAgc2xpZGUgPSBwYXJzZUludChyZXN1bHRzWzFdLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBzbGlkZSAhPT0gJ251bWJlcicgfHwgc2xpZGUgPCAwIHx8ICFBcnJheS5pc0FycmF5KHJlc3VsdHMpKSB7XHJcbiAgICAgIHNsaWRlID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNsaWRlLS07IC8vIENvbnZlcnQgdG8gMCBpbmRleFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzbGlkZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEl0IHdpbGwgdXBkYXRlIHRoZSBoYXNoIChpZiBpdCdzIGRpZmZlcmVudCkgc28gaXQgcmVmbGVjdHMgdGhlIHNsaWRlXHJcbiAgICogbnVtYmVyIGJlaW5nIHZpc2libGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBUaGUgbnVtYmVyIG9mIHRoZSBzbGlkZSB3ZSdyZSB0cmFuc2l0aW9uaW5nIHRvLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBzZXRTbGlkZU51bWJlcihudW1iZXIpIHtcclxuICAgIGlmIChIYXNoLmdldFNsaWRlTnVtYmVyKCkgIT09IChudW1iZXIgLSAxKSkge1xyXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7XHJcbiAgICAgICAgc2xpZGVJOiBudW1iZXIgLSAxXHJcbiAgICAgIH0sIGBTbGlkZSAke251bWJlcn1gLCBgJHtIQVNIfT0ke251bWJlcn1gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGx1Z2lucy9oYXNoLmpzIiwiaW1wb3J0IEtleXMgZnJvbSAnLi4vdXRpbHMva2V5cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XHJcbiAgLyoqXHJcbiAgICogS2V5Ym9hcmQgaW50ZXJhY3Rpb24gcGx1Z2luLlxyXG4gICAqIEBwYXJhbSB7V2ViU2xpZGVzfSB3c0luc3RhbmNlIFRoZSBXZWJTbGlkZXMgaW5zdGFuY2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih3c0luc3RhbmNlKSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtXZWJTbGlkZXN9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLndzXyA9IHdzSW5zdGFuY2U7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlQcmVzc18uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhY3RzIHRvIHRoZSBrZXlkb3duIGV2ZW50LiBJdCByZWFjdHMgdG8gdGhlIGFycm93cyBhbmQgc3BhY2Uga2V5XHJcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBsYXlvdXQgb2YgdGhlIHBhZ2UuXHJcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBUaGUga2V5IGV2ZW50LlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgb25LZXlQcmVzc18oZXZlbnQpIHtcclxuICAgIGxldCBtZXRob2Q7XHJcbiAgICBsZXQgYXJndW1lbnQ7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhIGZvY3VzZWQgZWxlbWVudCB0aGF0IG1pZ2h0IHVzZSB0aGUga2V5Ym9hcmQuXHJcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBpc0NvbnRlbnRFZGl0YWJsZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcclxuICAgICAgICAgICAgLmNvbnRlbnRFZGl0YWJsZSAhPT0gJ2luaGVyaXQnO1xyXG4gICAgICBjb25zdCBpc0lucHV0ID0gWydJTlBVVCcsICdTRUxFQ1QnLCAnT1BUSU9OJywgJ1RFWFRBUkVBJ11cclxuICAgICAgICAgICAgLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50YWdOYW1lKSA+IC0xO1xyXG5cclxuICAgICAgaWYgKGlzSW5wdXQgfHwgaXNDb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XHJcbiAgICAgIGNhc2UgS2V5cy5BVl9QQUdFOlxyXG4gICAgICBjYXNlIEtleXMuU1BBQ0U6XHJcbiAgICAgICAgbWV0aG9kID0gdGhpcy53c18uZ29OZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtleXMuUkVfUEFHRTpcclxuICAgICAgICBtZXRob2QgPSB0aGlzLndzXy5nb1ByZXY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS2V5cy5IT01FOlxyXG4gICAgICAgIG1ldGhvZCA9IHRoaXMud3NfLmdvVG9TbGlkZTtcclxuICAgICAgICBhcmd1bWVudCA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS2V5cy5FTkQ6XHJcbiAgICAgICAgbWV0aG9kID0gdGhpcy53c18uZ29Ub1NsaWRlO1xyXG4gICAgICAgIGFyZ3VtZW50ID0gdGhpcy53c18ubWF4U2xpZGVfIC0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLZXlzLkRPV046XHJcbiAgICAgICAgbWV0aG9kID0gdGhpcy53c18uaXNWZXJ0aWNhbCA/IHRoaXMud3NfLmdvTmV4dCA6IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS2V5cy5VUDpcclxuICAgICAgICBtZXRob2QgPSB0aGlzLndzXy5pc1ZlcnRpY2FsID8gdGhpcy53c18uZ29QcmV2IDogbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLZXlzLkxFRlQ6XHJcbiAgICAgICAgbWV0aG9kID0gIXRoaXMud3NfLmlzVmVydGljYWwgPyB0aGlzLndzXy5nb1ByZXYgOiBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtleXMuUklHSFQ6XHJcbiAgICAgICAgbWV0aG9kID0gIXRoaXMud3NfLmlzVmVydGljYWwgPyB0aGlzLndzXy5nb05leHQgOiBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXRob2QpIHtcclxuICAgICAgbWV0aG9kLmNhbGwodGhpcy53c18sIGFyZ3VtZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGx1Z2lucy9rZXlib2FyZC5qcyIsImltcG9ydCBET00gZnJvbSAnLi4vdXRpbHMvZG9tJztcclxuXHJcbmNvbnN0IEVMRU1FTlRfSUQgPSB7XHJcbiAgTkFWOiAnbmF2aWdhdGlvbicsXHJcbiAgTkVYVDogJ25leHQnLFxyXG4gIFBSRVY6ICdwcmV2aW91cycsXHJcbiAgQ09VTlRFUjogJ2NvdW50ZXInXHJcbn07XHJcblxyXG5jb25zdCBMQUJFTFMgPSB7XHJcbiAgVkVSVElDQUw6IHtcclxuICAgIE5FWFQ6ICfihpMnLFxyXG4gICAgUFJFVjogJ+KGkSdcclxuICB9LFxyXG4gIEhPUklaT05UQUw6IHtcclxuICAgIE5FWFQ6ICfihpInLFxyXG4gICAgUFJFVjogJ+KGkCdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAvKipcclxuICAgKiBUaGUgTmF2aWdhdGlvbiBjb25zdHJ1Y3Rvci4gSXQnbGwgY3JlYXRlIGFsbCB0aGUgbm9kZXMgbmVlZGVkIGZvciB0aGVcclxuICAgKiBuYXZpZ2F0aW9uIHN1Y2ggYXMgdGhlIGFycm93cyBhbmQgdGhlIGNvdW50ZXIuXHJcbiAgICogQHBhcmFtIHtXZWJTbGlkZXN9IHdzSW5zdGFuY2UgVGhlIFdlYlNsaWRlcyBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdzSW5zdGFuY2UpIHtcclxuICAgIGNvbnN0IGFycm93TGFiZWxzID0gd3NJbnN0YW5jZS5pc1ZlcnRpY2FsID9cclxuICAgICAgICBMQUJFTFMuVkVSVElDQUwgOiBMQUJFTFMuSE9SSVpPTlRBTDtcclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGlvbiBlbGVtZW50LlxyXG4gICAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZWwgPSBET00uY3JlYXRlTm9kZSgnZGl2JywgJ25hdmlnYXRpb24nKTtcclxuICAgIC8qKlxyXG4gICAgICogTmV4dCBidXR0b24uXHJcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5uZXh0ID0gTmF2aWdhdGlvbi5jcmVhdGVBcnJvdyhFTEVNRU5UX0lELk5FWFQsIGFycm93TGFiZWxzLk5FWFQpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcmV2IGJ1dHRvbi5cclxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLnByZXYgPSBOYXZpZ2F0aW9uLmNyZWF0ZUFycm93KEVMRU1FTlRfSUQuUFJFViwgYXJyb3dMYWJlbHMuUFJFVik7XHJcbiAgICAvKipcclxuICAgICAqIENvdW50ZXIgRWxlbWVudC5cclxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmNvdW50ZXIgPSBET00uY3JlYXRlTm9kZSgnc3BhbicsIEVMRU1FTlRfSUQuQ09VTlRFUik7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtXZWJTbGlkZXN9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLndzXyA9IHdzSW5zdGFuY2U7XHJcblxyXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLm5leHQpO1xyXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnByZXYpO1xyXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNvdW50ZXIpO1xyXG5cclxuICAgIHRoaXMud3NfLmVsLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xyXG4gICAgdGhpcy5iaW5kRXZlbnRzXygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCBhbGwgZXZlbnRzIGZvciB0aGUgbmF2aWdhdGlvbi5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGJpbmRFdmVudHNfKCkge1xyXG4gICAgdGhpcy53c18uZWwuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ3dzOnNsaWRlLWNoYW5nZScsIHRoaXMub25TbGlkZUNoYW5nZWRfLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrZWRfLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrZWRfLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgY291bnRlciBpbnNpZGUgdGhlIG5hdmlnYXRpb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjdXJyZW50IEN1cnJlbnQgc2xpZGUgbnVtYmVyLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gbWF4IE1heCBzbGlkZSBudW1iZXIuXHJcbiAgICovXHJcbiAgdXBkYXRlQ291bnRlcihjdXJyZW50LCBtYXgpIHtcclxuICAgIHRoaXMuY291bnRlci50ZXh0Q29udGVudCA9IGAke2N1cnJlbnR9IC8gJHttYXh9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gYXJyb3cgdG8gbmF2aWdhdGUuXHJcbiAgICogQHBhcmFtIHshU3RyaW5nfSBpZCBEZXNpcmVkIElEIGZvciB0aGUgYXJyb3cuXHJcbiAgICogQHBhcmFtIHshU3RyaW5nfSB0ZXh0IERlc2lyZWQgdGV4dCBmb3IgdGhlIGFycm93LlxyXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IFRoZSBhcnJvdyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVBcnJvdyhpZCwgdGV4dCkge1xyXG4gICAgY29uc3QgYXJyb3cgPSBET00uY3JlYXRlTm9kZSgnYScsIGlkLCB0ZXh0KTtcclxuICAgIGFycm93LmhyZWYgPSAnIyc7XHJcbiAgICBhcnJvdy50aXRsZSA9ICdBcnJvdyBLZXlzJztcclxuXHJcbiAgICByZXR1cm4gYXJyb3c7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTbGlkZSBDaGFuZ2UgZXZlbnQgaGFuZGxlci4gV2lsbCB1cGRhdGUgdGhlIHRleHQgb24gdGhlIG5hdmlnYXRpb24uXHJcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnRcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIG9uU2xpZGVDaGFuZ2VkXyhldmVudCkge1xyXG4gICAgdGhpcy51cGRhdGVDb3VudGVyKGV2ZW50LmRldGFpbC5jdXJyZW50U2xpZGUsIGV2ZW50LmRldGFpbC5zbGlkZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBjbGlja3Mgb24gdGhlIG5leHQvcHJldiBidXR0b25zLlxyXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIG9uQnV0dG9uQ2xpY2tlZF8oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLm5leHQpIHtcclxuICAgICAgdGhpcy53c18uZ29OZXh0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndzXy5nb1ByZXYoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGx1Z2lucy9uYXZpZ2F0aW9uLmpzIiwiaW1wb3J0IENsaWNrTmF2IGZyb20gJy4vY2xpY2stbmF2JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcclxuaW1wb3J0IEhhc2ggZnJvbSAnLi9oYXNoJztcclxuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4va2V5Ym9hcmQnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4vc2Nyb2xsJztcclxuaW1wb3J0IFRvdWNoIGZyb20gJy4vdG91Y2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIENsaWNrTmF2LFxyXG4gIEdyaWQsXHJcbiAgSGFzaCxcclxuICBLZXlib2FyZCxcclxuICBOYXZpZ2F0aW9uLFxyXG4gIFNjcm9sbCxcclxuICBUb3VjaFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wbHVnaW5zL3BsdWdpbnMuanMiLCJpbXBvcnQgTW9iaWxlRGV0ZWN0b3IgZnJvbSAnLi4vdXRpbHMvbW9iaWxlLWRldGVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbCB7XHJcbiAgLyoqXHJcbiAgICogU2Nyb2xsIGhhbmRsZXIgZm9yIHRoZSBXZWJTbGlkZXMuXHJcbiAgICogQHBhcmFtIHtXZWJTbGlkZXN9IHdzSW5zdGFuY2UgVGhlIFdlYlNsaWRlcyBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdzSW5zdGFuY2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1dlYlNsaWRlc31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMud3NfID0gd3NJbnN0YW5jZTtcclxuICAgIC8qKlxyXG4gICAgICogV2hlcmUgdGhlIHNjcm9sbCBpcyBnb2luZyB0byBoYXBwZW4uIFRoZSBXZWJTbGlkZXMgZWxlbWVudC5cclxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5zY3JvbGxDb250YWluZXJfID0gd3NJbnN0YW5jZS5lbDtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBtb3ZlbWVudCBpcyBoYXBwZW5pbmcgdXAgb3IgZG93bi5cclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5pc0dvaW5nVXBfID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgbW92ZW1lbnQgaXMgaGFwcGVuaW5nIGxlZnQgb3IgcmlnaHQuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNHb2luZ0xlZnRfID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFRpbWVvdXQgaWQgaG9sZGVyLlxyXG4gICAgICogQHR5cGUgez9udW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLnRpbWVvdXRfID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIU1vYmlsZURldGVjdG9yLmlzQW55KCkpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lcl8uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ3doZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxfLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBpZiAoIXdzSW5zdGFuY2UuaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgd3NJbnN0YW5jZS5lbC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICd3czpzbGlkZS1jaGFuZ2UnLCB0aGlzLm9uU2xpZGVDaGFuZ2VfLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIHNsaWRlcyBjaGFuZ2UsIHNldCBhbiBpbm5lciB0aW1lb3V0IHRvIGF2b2lkIHByZW1hdHVyZWx5XHJcbiAgICogY2hhbmdpbmcgdG8gdGhlIG5leHQgc2xpZGUgYWdhaW4uXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBvblNsaWRlQ2hhbmdlXygpIHtcclxuICAgIHRoaXMudGltZW91dF8gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHsgdGhpcy50aW1lb3V0XyA9IG51bGw7IH0sXHJcbiAgICAgICAgdGhpcy53c18ub3B0aW9ucy5zY3JvbGxXYWl0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWN0cyB0byB0aGUgd2hlZWwgZXZlbnQuIERldGVjdHMgd2hldGhlciBpcyBnb2luZyB1cCBvciBkb3duIGFuZCBkZWNpZGVzXHJcbiAgICogaWYgaXQgbmVlZHMgdG8gbW92ZSB0aGUgc2xpZGUgYmFzZWQgb24gdGhlIGFtb3VudCBvZiBkZWx0YS5cclxuICAgKiBAcGFyYW0ge1doZWVsRXZlbnR9IGV2ZW50IFRoZSBXaGVlbCBFdmVudC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIG9uTW91c2VXaGVlbF8oZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLndzXy5pc01vdmluZyB8fCB0aGlzLnRpbWVvdXRfKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRlbHRhWTogd2hlZWxEZWx0YVksIGRlbHRhWDogd2hlZWxEZWx0YVggfSA9IGV2ZW50O1xyXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IHRoaXMud3NfLmlzVmVydGljYWw7XHJcbiAgICBjb25zdCBpc0hvcml6b250YWxNb3ZlbWVudCA9IE1hdGguYWJzKHdoZWVsRGVsdGFYKSA+IE1hdGguYWJzKHdoZWVsRGVsdGFZKTtcclxuICAgIHRoaXMuaXNHb2luZ1VwXyA9IHdoZWVsRGVsdGFZIDwgMDtcclxuICAgIHRoaXMuaXNHb2luZ0xlZnRfID0gd2hlZWxEZWx0YVggPCAwO1xyXG5cclxuXHJcbiAgICAvLyBJZiB3ZSdyZSBtYWlubHkgbW92aW5nIGhvcml6b250YWxseSwgcHJldmVudCBkZWZhdWx0XHJcbiAgICBpZiAoaXNIb3Jpem9udGFsTW92ZW1lbnQpIHtcclxuICAgICAgaWYgKCFpc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiB3ZSdyZSBtb3ZpbmcgaG9yaXpvbnRhbGx5IGJ1dCB0aGlzIGlzIHZlcnRpY2FsLCByZXR1cm4gdG8gYXZvaWRcclxuICAgICAgICAvLyB1bndhbnRlZCBuYXZpZ2F0aW9uLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChNYXRoLmFicyh3aGVlbERlbHRhWSkgPj0gdGhpcy53c18ub3B0aW9ucy5taW5XaGVlbERlbHRhIHx8XHJcbiAgICAgICAgTWF0aC5hYnMod2hlZWxEZWx0YVgpID49IHRoaXMud3NfLm9wdGlvbnMubWluV2hlZWxEZWx0YSkge1xyXG4gICAgICBpZiAoKGlzSG9yaXpvbnRhbE1vdmVtZW50ICYmIHRoaXMuaXNHb2luZ0xlZnRfKSB8fFxyXG4gICAgICAgICAgKCFpc0hvcml6b250YWxNb3ZlbWVudCAmJiB0aGlzLmlzR29pbmdVcF8pKSB7XHJcbiAgICAgICAgdGhpcy53c18uZ29QcmV2KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53c18uZ29OZXh0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wbHVnaW5zL3Njcm9sbC5qcyIsImltcG9ydCBNb2JpbGVEZXRlY3RvciBmcm9tICcuLi91dGlscy9tb2JpbGUtZGV0ZWN0b3InO1xyXG5cclxuY29uc3QgRVZFTlRTID0ge1xyXG4gIHRvdWNoOiB7XHJcbiAgICBTVEFSVDogJ3RvdWNoc3RhcnQnLFxyXG4gICAgTU9WRTogJ3RvdWNobW92ZScsXHJcbiAgICBFTkQ6ICd0b3VjaGVuZCdcclxuICB9LFxyXG4gIHBvaW50ZXI6IHtcclxuICAgIFNUQVJUOiAncG9pbnRlcmRvd24nLFxyXG4gICAgTU9WRTogJ3BvaW50ZXJtb3ZlJyxcclxuICAgIEVORDogJ3BvaW50ZXJ1cCdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtXZWJTbGlkZXN9IHdzSW5zdGFuY2UgVGhlIFdlYlNsaWRlcyBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdzSW5zdGFuY2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1dlYlNsaWRlc31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMud3NfID0gd3NJbnN0YW5jZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHBvc2l0aW9uIGZvciB0aGUgWCBjb29yZC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0WF8gPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgcG9zaXRpb24gZm9yIHRoZSBZIGNvb3JkLlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnRZXyA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBwb3NpdGlvbiBmb3IgdGhlIFggY29vcmQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5lbmRYXyA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBwb3NpdGlvbiBmb3IgdGhlIFkgY29vcmQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5lbmRZXyA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIGlzIGVuYWJsZWQgb3Igbm90LiBPbmx5IGVuYWJsZWQgZm9yIHRvdWNoIGRldmljZXMuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNFbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGV2ZW50cztcclxuXHJcbiAgICBpZiAoTW9iaWxlRGV0ZWN0b3IuaXNBbnkoKSkge1xyXG4gICAgICAvLyBMaWtlbHkgSUVcclxuICAgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQgJiYgKFxyXG4gICAgICAgICAgTW9iaWxlRGV0ZWN0b3IuaXNXaW5kb3dzKCkgfHwgTW9iaWxlRGV0ZWN0b3IuaXNXaW5kb3dzUGhvbmUoKSkpIHtcclxuICAgICAgICBldmVudHMgPSBFVkVOVFMucG9pbnRlcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudHMgPSBFVkVOVFMudG91Y2g7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuU1RBUlQsIHRoaXMub25TdGFydF8uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5NT1ZFLCB0aGlzLm9uTW92ZV8uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5NT1ZFLCB0aGlzLm9uTW92ZV8uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5FTkQsIHRoaXMub25TdG9wXy5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0b3VjaCBoYW5kbGVyLiBTYXZlcyBzdGFydGluZyBwb2ludHMuXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBvblN0YXJ0XyhldmVudCkge1xyXG4gICAgY29uc3QgaW5mbyA9IFRvdWNoLm5vcm1hbGl6ZUV2ZW50SW5mbyhldmVudCk7XHJcblxyXG4gICAgdGhpcy5zdGFydFhfID0gaW5mby54O1xyXG4gICAgdGhpcy5zdGFydFlfID0gaW5mby55O1xyXG4gICAgdGhpcy5lbmRYXyA9IGluZm8ueDtcclxuICAgIHRoaXMuZW5kWV8gPSBpbmZvLnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIHRvdWNoIGhhbmRsZXIuIFNhdmVzIGVuZCBwb2ludHMuXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBvbk1vdmVfKGV2ZW50KSB7XHJcbiAgICBjb25zdCBpbmZvID0gVG91Y2gubm9ybWFsaXplRXZlbnRJbmZvKGV2ZW50KTtcclxuXHJcbiAgICB0aGlzLmVuZFhfID0gaW5mby54O1xyXG4gICAgdGhpcy5lbmRZXyA9IGluZm8ueTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgdG91Y2ggaGFuZGxlci4gQ2hlY2tzIGlmIGl0IG5lZWRzIHRvIG1ha2UgYW55IGFjdGlvbnMuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBvblN0b3BfKCkge1xyXG4gICAgY29uc3QgZGlmZlggPSB0aGlzLnN0YXJ0WF8gLSB0aGlzLmVuZFhfO1xyXG4gICAgY29uc3QgZGlmZlkgPSB0aGlzLnN0YXJ0WV8gLSB0aGlzLmVuZFlfO1xyXG5cclxuICAgIC8vIEl0J3MgYW4gaG9yaXpvbnRhbCBkcmFnXHJcbiAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gTWF0aC5hYnMoZGlmZlkpKSB7XHJcbiAgICAgIGlmIChkaWZmWCA8IC10aGlzLndzXy5vcHRpb25zLnNsaWRlT2Zmc2V0KSB7XHJcbiAgICAgICAgdGhpcy53c18uZ29QcmV2KCk7XHJcbiAgICAgIH0gZWxzZSBpZihkaWZmWCA+IHRoaXMud3NfLm9wdGlvbnMuc2xpZGVPZmZzZXQpIHtcclxuICAgICAgICB0aGlzLndzXy5nb05leHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTm9ybWFsaXplcyBhbiBldmVudCB0byBkZWFsIHdpdGggZGlmZmVyZW5jZXMgYmV0d2VlbiBQb2ludGVyRXZlbnQgYW5kXHJcbiAgICogVG91Y2hFdmVudC5cclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKiBAcmV0dXJuIHsqfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBub3JtYWxpemVFdmVudEluZm8oZXZlbnQpIHtcclxuICAgIGxldCB4O1xyXG4gICAgbGV0IHk7XHJcbiAgICBsZXQgdG91Y2hFdmVudCA9IHsgcGFnZVggOiAwLCBwYWdlWSA6IDB9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgZXZlbnQuY2hhbmdlZFRvdWNoZXMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgdG91Y2hFdmVudCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgdHlwZW9mIGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgdG91Y2hFdmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgeCA9IGV2ZW50Lm9mZnNldFggfHwgZXZlbnQubGF5ZXJYIHx8IHRvdWNoRXZlbnQucGFnZVg7XHJcbiAgICB5ID0gZXZlbnQub2Zmc2V0WSB8fCBldmVudC5sYXllclkgfHwgdG91Y2hFdmVudC5wYWdlWTtcclxuXHJcbiAgICByZXR1cm4geyB4LCB5IH07XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wbHVnaW5zL3RvdWNoLmpzIiwiY29uc3QgTmF0aXZlQ3VzdG9tRXZlbnQgPSB3aW5kb3cuQ3VzdG9tRXZlbnQ7XHJcblxyXG4vKipcclxuICogQ2hlY2sgZm9yIHRoZSB1c2FnZSBvZiBuYXRpdmUgc3VwcG9ydCBmb3IgQ3VzdG9tRXZlbnRzIHdoaWNoIGlzIGxhY2tpbmdcclxuICogY29tcGxldGVseSBvbiBJRS5cclxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBpdCBjYW4gYmUgdXNlZCBvciBub3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBjYW5JdXNlTmF0aXZlQ3VzdG9tICgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcCA9IG5ldyBOYXRpdmVDdXN0b21FdmVudCgndCcsIHsgZGV0YWlsOiB7IGE6ICdiJyB9IH0pO1xyXG4gICAgcmV0dXJuICAndCcgPT09IHAudHlwZSAmJiAnYicgPT09IHAuZGV0YWlsLmE7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb3VzeSBwb2x5ZmlsbCBmb3IgdGhlIEN1c3RvbSBFdmVudCBjb25zdHJ1Y3RvciBmb3IgSUUuXHJcbiAqIEBwYXJhbSB7IXN0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiB0aGUgZXZlbnQuXHJcbiAqIEBwYXJhbSB7P09iamVjdH0gcGFyYW1zIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gZm9yIHRoZSBldmVudC5cclxuICogQHJldHVybiB7RXZlbnR9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuY29uc3QgSUVDdXN0b21FdmVudCA9IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KHR5cGUsIHBhcmFtcykge1xyXG4gIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuXHJcbiAgaWYgKHBhcmFtcykge1xyXG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCB1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGU7XHJcbn07XHJcblxyXG5jb25zdCBXU0N1c3RvbUV2ZW50ID0gY2FuSXVzZU5hdGl2ZUN1c3RvbSgpID8gTmF0aXZlQ3VzdG9tRXZlbnQgOiBJRUN1c3RvbUV2ZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV1NDdXN0b21FdmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdXRpbHMvY3VzdG9tLWV2ZW50LmpzIiwiLyoqXHJcbiAqIFN3aW5nIGVhc2luZyBmdW5jdGlvbi5cclxuICogQHBhcmFtIHtudW1iZXJ9IHAgVGhlIHBlcmNlbnRhZ2Ugb2YgdGltZSB0aGF0IGhhcyBwYXNzZWQuXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHN3aW5nIChwKSB7XHJcbiAgcmV0dXJuIDAuNSAtIE1hdGguY29zKHAgKiBNYXRoLlBJKSAvIDI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaW5lYXIgZWFzaW5nIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gcCBUaGUgcGVyY2VudGFnZSBvZiB0aW1lIHRoYXQgaGFzIHBhc3NlZC5cclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gbGluZWFyKHApIHtcclxuICByZXR1cm4gcDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBzd2luZywgbGluZWFyIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzL2Vhc2luZy5qcyIsImltcG9ydCBFYXNpbmdzIGZyb20gJy4vZWFzaW5nJztcclxuXHJcbmxldCBTQ1JPTExBQkxFX0NPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJzbGlkZXMnKTtcclxuXHJcbi8qKlxyXG4gKiBTbW9vdGhseSBzY3JvbGxzIHRvIGEgZ2l2ZW4gWSBwb3NpdGlvbiB1c2luZyBFYXNpbmcuU3dpbmcuIEl0J2xsIHJ1biBhXHJcbiAqIGNhbGxiYWNrIHVwb24gZmluaXNoaW5nLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSBPZmZzZXQgb2YgdGhlIHBhZ2UgdG8gc2Nyb2xsIHRvLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbi4gNTAwbXMgYnkgZGVmYXVsdC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB1cG9uIGNvbXBsZXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUbyh5LCBkdXJhdGlvbiA9IDUwMCwgY2IgPSAoKSA9PiB7fSkge1xyXG4gIGNvbnN0IGRlbHRhID0geSAtIFNDUk9MTEFCTEVfQ09OVEFJTkVSLnNjcm9sbFRvcDtcclxuICBjb25zdCBzdGFydExvY2F0aW9uID0gU0NST0xMQUJMRV9DT05UQUlORVIuc2Nyb2xsVG9wO1xyXG4gIGNvbnN0IGluY3JlbWVudCA9IDE2O1xyXG5cclxuICBpZiAoIWR1cmF0aW9uKSB7XHJcbiAgICBTQ1JPTExBQkxFX0NPTlRBSU5FUi5zY3JvbGxUb3AgPSB5O1xyXG4gICAgY2IoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVTY3JvbGwgPSBlbGFwc2VkVGltZSA9PiB7XHJcbiAgICBlbGFwc2VkVGltZSArPSBpbmNyZW1lbnQ7XHJcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5taW4oMSwgZWxhcHNlZFRpbWUgLyBkdXJhdGlvbik7XHJcbiAgICBjb25zdCBlYXNpbmdQID0gRWFzaW5ncy5zd2luZyhcclxuICAgICAgcGVyY2VudCxcclxuICAgICAgZWxhcHNlZFRpbWUgKiBwZXJjZW50LFxyXG4gICAgICB5LFxyXG4gICAgICBkZWx0YSxcclxuICAgICAgZHVyYXRpb24pO1xyXG5cclxuICAgIFNDUk9MTEFCTEVfQ09OVEFJTkVSLnNjcm9sbFRvcCA9IE1hdGguZmxvb3Ioc3RhcnRMb2NhdGlvbiArXHJcbiAgICAgICAgKGVhc2luZ1AgKiBkZWx0YSkpO1xyXG5cclxuICAgIGlmIChlbGFwc2VkVGltZSA8IGR1cmF0aW9uKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gYW5pbWF0ZVNjcm9sbChlbGFwc2VkVGltZSksIGluY3JlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVTY3JvbGwoMCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdXRpbHMvc2Nyb2xsLXRvLmpzIiwiaW1wb3J0IFdlYlNsaWRlcyBmcm9tICcuL21vZHVsZXMvd2Vic2xpZGVzJztcclxucmVxdWlyZSgnLi4vc2Nzcy9mdWxsLnNjc3MnKTtcclxuXHJcbndpbmRvdy5XZWJTbGlkZXMgPSBXZWJTbGlkZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Z1bGwuanMiXSwic291cmNlUm9vdCI6IiJ9