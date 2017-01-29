/*==================================================================
Name: WebSlides
Version: Lite (keyboard shortcuts, no trackpad gestures).
Description: HTML presentations made easy.
URL: https://github.com/jlantunez/WebSlides
Thanks @LuisSacristan for your help :)
-
Based on SimpleSlides, by Jenn Schiffer:
https://github.com/jennschiffer/SimpleSlides
==================================================================== */

jQuery(document).ready(function($){

      var ID = {
        slideshow : 'webslides',
        slide : 'slide',
        counter : 'counter',
        navigation : 'navigation',
        next : 'next',
        previous : 'previous',
        current : 'current',
        verticalClass : 'vertical' // #webslides.vertical - You must add this class to slideshow for vertical sliding
      };
      var easing = 'swing';
      var slideOffset = 50; // minimun number of pixels for sliding
      var verticalDelay = 150; // to avoid 2 slides in a row
      var wheelDetail = -6; // how far the wheel turned for Firefox
      var wheelDelta = 150; // how far the wheel turned for Chrome
      var isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));

      var $slideshow = jQuery('#' + ID.slideshow),
          $navigation = jQuery('<div>').attr('id','navigation'),
          $slides = $slideshow.children('section').addClass(ID.slide),
          $currentSlide,
          $firstSlide = $slides.first(),
          $lastSlide = $slides.last(),
          $auxSlide = null;

      var total = $slides.length;

      var labels = {
        next : $slideshow.hasClass(ID.verticalClass)?'&darr;':'&rarr;',
        previous : $slideshow.hasClass(ID.verticalClass)?'&uarr;':'&larr;',
        separator : ' / '
      };


      // make sure the last slide doesn't page break while printing.
      jQuery('head').append( '<style> .slide:nth-child(' + total + ') { page-break-after: auto }</style>' );

      // remove non-section children (like html comments which wp wraps in <p> tags)
      $slideshow.children().not('section').remove();

      // add navigational arrows and counter
      $navigation.append(jQuery('<a href="#" title="Arrow Keys">').attr('id',ID.previous).html(labels.previous));
      $navigation.append(jQuery('<a href="#" title="Arrow Keys">').attr('id',ID.next).html(labels.next));
      $slideshow.append($navigation);
      $slideshow.append(jQuery('<span>').attr('id',ID.counter));

      var $counter = jQuery('#'+ID.counter),
          $next = jQuery('#'+ID.next),
          $previous = jQuery('#'+ID.previous);
      $navigation.append($counter);


      /*** FUNCTIONS ***/

      var updateCounter = function() {
        // updates the counter
        $counter.text(slidePointer.current + labels.separator + slidePointer.last);
      };

      var updateURL = function() {
        // updates slide state
        var currentURL = document.location.toString();

        if (currentURL.indexOf('#') != 1){
          currentURL = currentURL.substr(0,currentURL.indexOf('#'));
        }

        history.pushState(null, null, '#slide='+ slidePointer.current );
      };

      var hideCurrentSlide = function() {
        // hide the current slide
        if ( $currentSlide ) {
          $currentSlide.hide().removeClass(ID.current);
        }
      };

      $slideshow.data('moving', false);
      var nextSlide = function() {
        var nextSlide;
        if ($slideshow.hasClass(ID.verticalClass) && !isMobile) { // Is vertical
          if ($slideshow.data('moving')) return;
          $slideshow.data('moving', true);
          jQuery('html').css({overflow: 'hidden'});

          nextSlide = $currentSlide.next();
          slidePointer.current = ((slidePointer.current+1)%total);
          if (slidePointer.current === 0) slidePointer.current = total;

          // show next slide
          nextSlide.show().addClass(ID.current);
          // scroll to next slide
          var animated = false;
          jQuery('html, body').animate({scrollTop: nextSlide.offset().top}, 500, easing, function() {
            if (!animated) {
              $currentSlide.hide().removeClass(ID.current);
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

          nextSlide.show().addClass(ID.current);
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

      var previousSlide = function() {
        var prevSlide;
        if ($slideshow.hasClass(ID.verticalClass) && !isMobile) { // Is vertical
          if ($slideshow.data('moving')) return;
          $slideshow.data('moving', true);
          jQuery('html').css({overflow: 'hidden'});

          $currentSlide.before($currentSlide.siblings('.slide').last());

          prevSlide = $currentSlide.prev();

          if (prevSlide.length === 0) return false;
          // show next slide
          prevSlide.show().addClass(ID.current);
          // scroll to next slide
          var animated = false;
          jQuery('html, body').scrollTop($currentSlide.offset().top);
          jQuery('html, body').animate({scrollTop: prevSlide.offset().top}, 500, easing, function() {
            if (!animated) {
              $currentSlide.hide().removeClass(ID.current);
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

          prevSlide.show().addClass(ID.current);
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

      var goToSlide = function(slideNumber) {
        // hide current slide
        hideCurrentSlide();
        moveToSlide = slideNumber-1;

        $currentSlide = $slides.eq(moveToSlide);
        $currentSlide.show().addClass(ID.current);
        jQuery('.slide:lt('+$currentSlide.index()+')').each(function() {
          var $this = jQuery(this);
          $this.siblings('.slide').last().after($this);
        });
        slidePointer.current = slideNumber;

        // update counter
        updateCounter();
      };

      var fireSlideEvent = function(slide) {
        var slideEvent = new window.CustomEvent('slidechanged', {
          detail: { slide: slide || $currentSlide }
        });
        window.dispatchEvent(slideEvent);
      };

      /*** INIT SLIDESHOW ***/

      // Initially hide all slides
      $slides.hide();

      // The first slide is number first, last is slides length
      var slidePointer = {
        current : 1,
        last : $slides.length
      };

      var slideState = parseInt(document.location.hash.replace('#slide=', ''));

      if ( slideState && (slideState > 0 && slideState <= $slides.length )) {
        // if slide= hash state is given and valid, go to that slide
        goToSlide(slideState);
      }
      else {
        // The first slide is the first slide, so make visible and set the counter...
        $currentSlide = $firstSlide.show().addClass(ID.current);
        updateCounter();
      }


      /*** EVENTS ***/

      // "next" arrow clicked => next slide
      $next.click( function(e){
        e.preventDefault();
        nextSlide();
      });

      // "previous" arrow clicked => previous slide
      $previous.click( function(e){
        e.preventDefault();
        previousSlide();
      });

      // Add keyboard shortcuts for changing slides
      jQuery(document).keydown(function(e){
        if (!$slideshow.hasClass(ID.verticalClass) || isMobile) {
          $slideshow.data('iswheel', false);
          if (e.which == 39 || e.which == 32) {
            // right key pressed => next slide
            nextSlide();
            return false;
          }
          else if (e.which == 37) {
            // left or l key pressed => previous slide
            previousSlide();
            return false;
          }
        }
      });

      // Add keyboard shortcuts for changing slides
      jQuery(document).keydown(function(e){
        if ($slideshow.hasClass(ID.verticalClass) && !isMobile) {
          $slideshow.data('iswheel', false);
          if (e.which == 40 || e.which == 32) {
            // right key pressed => next slide
            nextSlide();
            return false;
          }
          else if (e.which == 38) {
            // left or l key pressed => previous slide
            previousSlide();
            return false;
          }
        }
      });

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
          goToSlide(slideObj[0].value);
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

      // Tabs
      jQuery('ul.tabs li').click(function(){
          var $this = jQuery(this);
          var tab_id = $this.attr('data-tab');
          jQuery('ul.tabs li').removeClass('current');
          jQuery('.tab-content').removeClass('current');
          $this.addClass('current');
          jQuery("#"+tab_id).addClass('current');
      });

      /* jQuery plugin */
      $.WebSlides = function () {};

      /* Public goToSlide */
      $.WebSlides.goToSlide = goToSlide;
    });

    // Prototype better, faster. To show the grid/baseline.png, press Enter on keyboard
    $(document).keypress(function(e) {
    if(e.which == 13) {
    $('body').toggleClass('baseline').css('height', $(document).height());
    }
  });
