/*==================================================================
Name: WebSlides
Version: 0.1.1 (trackpad gestures and keyboard shortcuts).
Date: 2017-02-11
Description: HTML presentations made easy.
URL: https://github.com/jlantunez/WebSlides
Thanks @LuisSacristan for your help :)
-
Based on SimpleSlides, by Jenn Schiffer:
https://github.com/jennschiffer/SimpleSlides
==================================================================== */

jQuery.fn.webslides = function(options) {

  var obj = {};
  var $this = jQuery(this);

  // Private vars
  var easing = 'swing';
  var slideOffset = 50; // minimun number of pixels for sliding
  var verticalDelay = 150; // to avoid 2 slides in a row
  var wheelDetail = -3; // how far the wheel turned for Firefox
  var wheelDelta = 150; // how far the wheel turned for Chrome
  var isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));

  var $slideshow,
      $navigation,
      $slides,
      $counter,
      $next,
      $previous,
      $currentSlide,
      $firstSlide,
      $lastSlide,
      $auxSlide = null,
      slidePointer;

  var total = 0;

  var labels = {};

  /**
   * Init function
   * @param {Object} settings Plugin settings
   * @param {string} id Container HTML ID
   * @param {string} class Slide class
   * @param {string} counter Counter container ID
   * @param {string} navigation Navigation container ID
   * @param {string} next Next HTML element ID
   * @param {string} previous Previous HTML element ID
   * @param {string} current Current HTML element ID
   * @param {string} verticalClass Vertical class
   */
  var init = function(_options) {
    obj.settings = {
      class : 'slide',
      counter : 'counter',
      navigation : 'navigation',
      next : 'next',
      previous : 'previous',
      current : 'current',
      verticalClass : 'vertical' // #webslides.vertical - You must add this class to slideshow for vertical sliding
    };

    // Allow overriding the default config
    $.extend( obj.settings, _options );

    setup();
    run();
    initClickEvents();
    initKeyEvents();
    initMouseWheel();
    initTouchEvents();
    initHash();
  }

  var setup = function() {
    $slideshow = $this;
    $navigation = jQuery('<div>').attr('id', obj.settings.navigation);
    $slides = $slideshow.children('section').addClass(obj.settings.class);
    $firstSlide = $slides.first();
    $lastSlide = $slides.last();

    total = $slides.length;

    labels = {
      next : $slideshow.hasClass(obj.settings.verticalClass)?'&darr;':'&rarr;',
      previous : $slideshow.hasClass(obj.settings.verticalClass)?'&uarr;':'&larr;',
      separator : ' / '
    };

    // make sure the last slide doesn't page break while printing.
    jQuery('head').append( '<style> .slide:nth-child(' + total + ') { page-break-after: auto }</style>' );

    // remove non-section children (like html comments which wp wraps in <p> tags)
    $slideshow.children().not('section').remove();

    // add navigational arrows and counter
    $navigation.append(jQuery('<a href="#" title="Arrow Keys">').attr('id',obj.settings.previous).html(labels.previous));
    $navigation.append(jQuery('<a href="#" title="Arrow Keys">').attr('id',obj.settings.next).html(labels.next));
    $slideshow.append($navigation);
    $slideshow.append(jQuery('<span>').attr('id',obj.settings.counter));

    $counter = jQuery('#'+obj.settings.counter),
    $next = jQuery('#'+obj.settings.next),
    $previous = jQuery('#'+obj.settings.previous);

    $navigation.append($counter);

    $slideshow.data('moving', false);
  };

  /**
   * Starts sliders
   */
  var run = function() {
    // Initially hide all slides
    $slides.hide();

    // The first slide is number first, last is slides length
    slidePointer = {
      current : 1,
      last : $slides.length
    };

    var slideState = parseInt(document.location.hash.replace('#slide=', ''));

    if ( slideState && (slideState > 0 && slideState <= $slides.length )) {
      // if slide= hash state is given and valid, go to that slide
      obj.goToSlide(slideState);
    }
    else {
      // The first slide is the first slide, so make visible and set the counter...
      $currentSlide = $firstSlide.show().addClass(obj.settings.current);
      updateCounter();
    }
  };

  /**
   * Init click events
   */
  var initClickEvents = function() {
    // "next" arrow clicked => next slide
    $next.click( function(e){
      e.preventDefault();
      obj.nextSlide();
    });

    // "previous" arrow clicked => previous slide
    $previous.click( function(e){
      e.preventDefault();
      obj.previousSlide();
    });
  }


  /**
   * Init keypress events
   */
  var initKeyEvents = function() {
    // Add keyboard shortcuts for changing slides
    jQuery(document).keydown(function(e){
      if (!$slideshow.hasClass(obj.settings.verticalClass) || isMobile) {
        $slideshow.data('iswheel', false);
        if (e.which == 39 || e.which == 32) {
          // right key pressed => next slide
          obj.nextSlide();
          return false;
        }
        else if (e.which == 37) {
          // left or l key pressed => previous slide
          obj.previousSlide();
          return false;
        }
      }
    });

    // Add keyboard shortcuts for changing slides
    jQuery(document).keydown(function(e){
      if ($slideshow.hasClass(obj.settings.verticalClass) && !isMobile) {
        $slideshow.data('iswheel', false);
        if (e.which == 40 || e.which == 32) {
          // right key pressed => next slide
          obj.nextSlide();
          return false;
        }
        else if (e.which == 38) {
          // left or l key pressed => previous slide
          obj.previousSlide();
          return false;
        }
      }
    });
  }


  /**
   * Init mouse wheel
   */
  var initMouseWheel = function() {
    // Mouse wheel
    jQuery(window).bind('mousewheel DOMMouseScroll', function(event){
      $slideshow.data('iswheel', true);
      if ($slideshow.hasClass(obj.settings.verticalClass) && !isMobile) {
        if (event.originalEvent.wheelDelta > wheelDelta || event.originalEvent.detail <= wheelDetail) {
          // Scroll up
          obj.previousSlide();
        } else if (event.originalEvent.wheelDelta < -wheelDelta || event.originalEvent.detail >= -wheelDetail) {
          // scroll down
          obj.nextSlide();
        }
      }
    });
  }

  /**
   * Init touch events
   */
  var initTouchEvents = function() {
    // Touch
    jQuery(window).on("touchstart", function(ev) {
      var e = ev.originalEvent;
      $slideshow.data('touchYStart', e.touches[0].screenY);
      $slideshow.data('touchXStart', e.touches[0].screenX);
      $slideshow.data('touchYEnd', e.touches[0].screenY);
      $slideshow.data('touchXEnd', e.touches[0].screenX);
    });
    jQuery(window).on("touchmove", function(ev) {
      var e = ev.originalEvent;
      $slideshow.data('touchYEnd', e.touches[0].screenY);
      $slideshow.data('touchXEnd', e.touches[0].screenX);
    });
    jQuery(window).on("touchend", function(ev) {
      $slideshow.data('iswheel', false);
      var e = ev.originalEvent;
      var diffX = $slideshow.data('touchXStart') - $slideshow.data('touchXEnd');
      var diffY = $slideshow.data('touchYStart') - $slideshow.data('touchYEnd');
      if ((!$slideshow.hasClass(obj.settings.verticalClass) || isMobile) && Math.abs(diffX) > Math.abs(diffY)) {
        if(diffX < -slideOffset) {
          obj.previousSlide();
          // Scroll up
        } else if(diffX > slideOffset) {
          // scroll down
          obj.nextSlide();
        }
      }
    });
  }

  /**
   * Init hash
   */
  var initHash = function() {
    /**
     *  Bind the event HashChange when the prev/next history button was clicked
    */
    jQuery(window).bind("hashchange", function () {
      if (hasHash()) {
        goToSlideIfSlideHashChange();
      } else {
        window.location.reload();
      }
    });

    function hasHash() {
      return window.location.hash ? true : false;
    }

    function goToSlideIfSlideHashChange() {
      var paramsArr = getArrayOfHashParams();
      var slideObj = $.grep(paramsArr, function (e) {
        return (e.key == "slide");
      });
      if (slideObj.length == 1) {
        obj.goToSlide(slideObj[0].value);
      }
    }

    function getArrayOfHashParams() {
      var hash = window.location.hash.replace('#', '').split('&');
      var paramsArr = new Array([]);
      for (var i = 0; i < hash.length; i++) {
        var itemArray = hash[i].split('=');
        var action = new Object({});
        action.key = itemArray[0];
        action.value = itemArray[1];
        paramsArr.push(action);
      }
      return paramsArr;
    }
  }

  /*** FUNCTIONS ***/

  /**
   * Updates slider counter
   */
  var updateCounter = function() {
    // updates the counter
    $counter.text(slidePointer.current + labels.separator + slidePointer.last);
  };

  /**
   * Updates current URL with counter position
   */
  var updateURL = function() {
    // updates slide state
    var currentURL = document.location.toString();

    if (currentURL.indexOf('#') != 1){
      currentURL = currentURL.substr(0,currentURL.indexOf('#'));
    }

    history.pushState(null, null, '#slide='+ slidePointer.current );
  };

  /**
   * Hides current Slide
   */
  var hideCurrentSlide = function() {
    // hide the current slide
    if ( $currentSlide ) {
      $currentSlide.hide().removeClass(obj.settings.current);
    }
  };

  /**
   * Goes to next slide
   */
  obj.nextSlide = function() {
    var nextSlide;
    if ($slideshow.hasClass(obj.settings.verticalClass) && !isMobile) { // Is vertical
      if ($slideshow.data('moving')) return;
      $slideshow.data('moving', true);
      jQuery('html').css({overflow: 'hidden'});

      nextSlide = $currentSlide.next();
      slidePointer.current = ((slidePointer.current+1)%total);
      if (slidePointer.current === 0) slidePointer.current = total;

      // show next slide
      nextSlide.show().addClass(obj.settings.current);
      // scroll to next slide
      var animated = false;
      jQuery('html, body').animate({scrollTop: nextSlide.offset().top}, 500, easing, function() {
        if (!animated) {
          $currentSlide.hide().removeClass(obj.settings.current);
          $currentSlide.siblings('.slide').last().after($currentSlide);
          $currentSlide = nextSlide;

          // update counter
          updateCounter();

          // update url
          updateURL();

          // fire slide event
          fireSlideEvent();

          jQuery('html').css({overflow: 'auto'});
          setTimeout(function() {$slideshow.data('moving', false);}, $slideshow.data('iswheel')?verticalDelay:0);
        }
        animated = true;
      });
    } else { // Is landscape
      jQuery("html, body").animate({ scrollTop: 0 }, 0);
      // hide current slide
      hideCurrentSlide();

      // get the next slide
      nextSlide = $currentSlide.next();

      nextSlide.show().addClass(obj.settings.current);
      $currentSlide.siblings('.slide').last().after($currentSlide);
      $currentSlide = nextSlide;
      slidePointer.current = ((slidePointer.current+1)%total);
      if (slidePointer.current == 0) slidePointer.current = total;

      // update counter
      updateCounter();

      // update url
      updateURL();

      // fire slide event
      fireSlideEvent();
    }
  };

  /**
   * Goes to previous slide
   */
  obj.previousSlide = function() {
    var prevSlide;
    if ($slideshow.hasClass(obj.settings.verticalClass) && !isMobile) { // Is vertical
      if ($slideshow.data('moving')) return;
      $slideshow.data('moving', true);
      jQuery('html').css({overflow: 'hidden'});

      $currentSlide.before($currentSlide.siblings('.slide').last());

      prevSlide = $currentSlide.prev();

      if (prevSlide.length === 0) return false;
      // show next slide
      prevSlide.show().addClass(obj.settings.current);
      // scroll to next slide
      var animated = false;
      jQuery('html, body').scrollTop($currentSlide.offset().top);
      jQuery('html, body').animate({scrollTop: prevSlide.offset().top}, 500, easing, function() {
        if (!animated) {
          $currentSlide.hide().removeClass(obj.settings.current);
          $currentSlide = prevSlide;

          // not the last slide => go to the next one and increment the counter
          $currentSlide = prevSlide;
          slidePointer.current = slidePointer.current== 1? total : (slidePointer.current-1);

          // update counter
          updateCounter();

          // update url
          updateURL();

          // fire slide event
          fireSlideEvent();

          jQuery('html').css({overflow: 'auto'});
          setTimeout(function() {$slideshow.data('moving', false);}, $slideshow.data('iswheel')?verticalDelay:0);
        }
        animated = true;
      });

    } else { // Is landscape
      jQuery("html, body").animate({ scrollTop: 0 }, 0);
      // hide current slide
      hideCurrentSlide();

      // get the previous slide
      $currentSlide.before($currentSlide.siblings('.slide').last());
      prevSlide = $currentSlide.prev();

      prevSlide.show().addClass(obj.settings.current);
      $currentSlide = prevSlide;
      slidePointer.current = slidePointer.current== 1? total : (slidePointer.current-1);

      // update counter
      updateCounter();

      // update URL
      updateURL();

      // fire slide event
      fireSlideEvent();
    }
  };


  /**
   * Goes to a specific slide
   *
   * @param {number} slideNumber Where to go
   */
  obj.goToSlide = function(slideNumber) {
    // hide current slide
    hideCurrentSlide();
    moveToSlide = slideNumber-1;

    $currentSlide = $slides.eq(moveToSlide);
    $currentSlide.show().addClass(obj.settings.current);
    jQuery('.slide:lt('+$currentSlide.index()+')').each(function() {
      var $this = jQuery(this);
      $this.siblings('.slide').last().after($this);
    });
    slidePointer.current = slideNumber;

    // update counter
    updateCounter();
  };

  /**
   * Fires slide event
   */
  var fireSlideEvent = function(slide) {
    var slideEvent = new window.CustomEvent('slidechanged', {
      detail: { slide: slide || $currentSlide }
    });
    window.dispatchEvent(slideEvent);
  };

  // Init plugin
  init(options);

  // Return same object
  return obj;
}
