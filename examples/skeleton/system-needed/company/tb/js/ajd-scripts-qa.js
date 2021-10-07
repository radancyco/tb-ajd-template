// Advanced Job Details (AJD) Template version 1.0
// Last Updated 10/06/2021
//


// Throttle
// Based on http://underscorejs.org/underscore.js

// A (possibly faster) way to get the current timestamp as an integer.
ajdNow = Date.now || function() {
  return new Date().getTime();
};


// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
var ajdThrottle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : ajdNow();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = ajdNow();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

// Function to test if object exists
jQuery.fn.exists = function(){return ($(this).length > 0);};


// Check is browser is IE11 or less
function isIE() {
  var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
  var msie = ua.indexOf('MSIE '); // IE 10 or older
  var trident = ua.indexOf('Trident/'); //IE 11

  return (msie > 0 || trident > 0);
}



(function() { // On Document ready


  // Documentation for scrollToFixed lives here https://github.com/bigspotteddog/ScrollToFixed/blob/master/README.md

  if ( $('.js-ajd-sticky').exists() ) { // Check to see if new js method is being used or not
    $('.js-ajd-sticky').scrollToFixed({
        spacerClass: 'spacer',
        marginTop: function(){ if ( $('.js-ajd-also-sticky').exists() ) { return $('.js-ajd-also-sticky').outerHeight() } else { return 0 } }
    });
  } else { // Old method where the AJD sticky nav had to be on the whole header
    $('#ajd-header.make-sticky').scrollToFixed({
      spacerClass: 'spacer',
      marginTop:  function(){ if ( $('.js-ajd-also-sticky').exists() ) { return $('.js-ajd-also-sticky').outerHeight() } else { return 0 } }
    });
  }




// In page navigation
$('.ajd_navigation__a').on('click', function(e) {
    e.preventDefault();
    if (typeof inPageNavHelper === 'function') {
      inPageNavHelper.removeListeners();
    } 
    // Set variable for section selected
    var href = $(this).attr('href');
    href = href.replace('#', '');
    var selector = document.getElementById(href);
    var sectionOffset = 0;
    var banner =  0;
    var alsosticky = 0;

    // Math needed to scroll just below height of the fixed header If viewing window

    if ( $('.js-ajd-sticky').exists() ) { // Check to see if new js method is being used or not

      //  check if header is sticky if not Add class to header, check height and then remove class to resume normal function otherwise just check height

      if ( $('.js-ajd-sticky').hasClass('scroll-to-fixed-fixed') ) {
        
          banner = $('.js-ajd-sticky.scroll-to-fixed-fixed').outerHeight();

      } else {

        $('.js-ajd-sticky').addClass('scroll-to-fixed-fixed');

        banner = $('.js-ajd-sticky.scroll-to-fixed-fixed').outerHeight();

        $('#ajd-header.make-sticky').removeClass('scroll-to-fixed-fixed');

      }

    } else { // Old method where the AJD sticky nav had to be on the whole header

      //  check if header is sticky if not Add class to header, check height and then remove class to resume normal function otherwise just check height

      if ( $('#ajd-header.make-sticky').hasClass('scroll-to-fixed-fixed') ) {
        
        banner = $('#ajd-header.make-sticky.scroll-to-fixed-fixed').outerHeight();

      } else {

        $('#ajd-header.make-sticky').addClass('scroll-to-fixed-fixed');

        banner = $('#ajd-header.make-sticky.scroll-to-fixed-fixed').outerHeight();

        $('#ajd-header.make-sticky').removeClass('scroll-to-fixed-fixed');

      }

    }

    // If client already has a sticky nav you will need to account for that and offset the scroll
    if ( $('.js-ajd-also-sticky').exists() ) {
      $('.js-ajd-also-sticky').each(function(){
        alsosticky += $(this).outerHeight();
      });
    }

    // If the section has and offset
    if ( selector.getAttribute('data-ajd-offset-scroll') != null ) {
      sectionOffset = selector.getAttribute('data-ajd-offset-scroll');
    }

    // Prevent jumping to focus
    var position = $(window).scrollTop();
    $(selector).attr('tabindex', '-1').focus();
    $(window).scrollTop(position);


    // Scroll Body to selection just under the navigation.
    $('html, body').stop().animate({
       scrollTop: ($(selector).offset().top - sectionOffset - banner - alsosticky)
    }, 1000 );



});

/* ========================================================================
    video lazy loading
    ========================================================================= */
    $('.video-wrapper img').on('click', function() {
        var video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
        $(this).replaceWith(video);
    });



  //
  // Animate andy section with enhance-element class and highlight the navigation
  //


  // Begin: Check Scroll Position

  // Note: To use, just add "enhance-element" class to any element you wish to make interactive

  var $animateElement = $('.enhance-element, .ajd_section');
  var $stateName = 'active actived-once'; //Fix this misspell in version 2, it will require styles and html changes
  var $window = $(window);

  function checkScrollPosition() {

    var windowScrollTopPos = $(window).scrollTop();

    var windowHeight = $(window).height(); // Height of user viewport
    

    var stickyNavHeight = 0;
      
    if ( $('.js-ajd-sticky').exists() ) { // Check to see if new js method is being used or not
      stickyNavHeight = ($('.js-ajd-sticky.scroll-to-fixed-fixed').outerHeight() || 0);
    } else { // Old method where the AJD sticky nav had to be on the whole header
      stickyNavHeight = ( $('.ajd_header.scroll-to-fixed-fixed').outerHeight() || 0);

    }

    var clientNavHeight = 0;

    // If client already has a sticky nav you will need to account for that and offset the scroll
    if ( $('.js-ajd-also-sticky').exists() ) {
      $('.js-ajd-also-sticky').each(function(){
        clientNavHeight += $(this).outerHeight();
      });
    }

    // Top postion and Bottom postion of the viewport, depending of if the sticky nav is active or not
    var windowTopPosition = windowScrollTopPos + stickyNavHeight + clientNavHeight;
    var windowBottomPosition = windowTopPosition + windowHeight - stickyNavHeight - clientNavHeight;

    if (window.location.href.indexOf("?ajd-debug") > 0 ) {    
      console.log('---start of in viewport sizing---')
      console.log('windowHeight: ' + windowHeight)
      console.log('scrollTop: ' + $(window).scrollTop())
      console.log('stickyNavHeight: ' + stickyNavHeight)
      console.log('clientNavHeight: ' + clientNavHeight)
      console.log('windowTopPosition: ' + windowTopPosition)
      console.log('windowBottomPosition: ' + windowBottomPosition)
      console.log('---end of in viewport sizing---')
    }

    // Every scroll remove the active state from in page navigation
    $('.ajd_navigation__li').removeClass('active');



    $.each($animateElement, function() {

        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = ( $element.offset().top );
        var elementBottomPosition = (elementTopPosition + elementHeight);
        var elementId = $element.attr('id');


        // Check to see if current container within viewport

        if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {

          if ( !$element.hasClass('active') ) {

            if ( $element.hasClass('js-ajd-script-animate-chart') ) {
              var chart = $element.find('.js-ci-pie-chart__graph');
              if( typeof ciAnimateGraph == "object" ) {
                chart[0].dispatchEvent(ciAnimateGraph);
              }
            }

          }

          if ( !$element.hasClass('actived-once') ) {

            if ( $element.hasClass('js-ajd-script-animate-once-chart') ) {
              var chart = $element.find('.js-ci-pie-chart__graph');
              if( typeof ciAnimateGraph == "object" ) {
                chart[0].dispatchEvent(ciAnimateGraph);
              }
            }

          }

          // Add active state to elements with the class of .enhance-element
          if ( $element.hasClass('enhance-element') ) {
              $element.addClass($stateName);
          }

          // Add active state to inpage navigation links
          $('.ajd_navigation__a').each(function() {

            if ( $(this).attr('href').indexOf(elementId) != -1 ) {
              $(this).parent('li').addClass('active');
            }

            // If slingular-highlighting class is present then break .each loop
            if ( $('.ajd_navigation').hasClass('singular-highlighting') && $(this).parent('li').hasClass('active') ) {
              return false;
            }

          });







        } else {

            $element.removeClass('active');

        }





    });




  }  // End: Check Scroll Position



    var throttled = ajdThrottle(checkScrollPosition, 100);

    $window.on('scroll resize', throttled);

    $window.trigger('scroll');





  // If the URL does not conatin "?no-checks" then run checks
  if (window.location.href.indexOf("?no-checks") < 0 ) {


    // Check URLs
    // If any links url is #REPLACEME then a red outline will appear


    $('a').each(function() {
      var _this = $(this);
      var href = _this.attr('href');


      if( href === '#REPLACEME') {
        _this.attr('style', 'outline: red 3px solid');
        _this.append( '<p style="margin:0; padding:5px; background:red; color:white; ">URL Needs to be updated</p> ');
      }

    });
    // end Check URLs



    // Check glassdoor background image
    function glassdoorCheck() {
      var glassdoorBG = $('.ajd-glassdoor__link').css('background-image');
      var defaultGD = 'url("https://www.glassdoor.ca/api/widget/horizontalStarRating.htm?e=01")';

      if( glassdoorBG === defaultGD ) {
        $('.ajd-glassdoor__link').append( '<p style="margin:0; padding:5px; background:red; color:white; ">Glassdoor background image needs to be updated</p> ');
      }
    }
    glassdoorCheck();


    // end Check glassdoor background image
  }

// trait circle

function traitsCircle() {
  var traitsCircle = false;
  // Look for the parent div that should contain .ajd-traits__list and ajd-traits__circle
  $('.js-ajd-traits').each(function(){

    traitsCircle = true;
    
    var variableWeights = false;
    // Check to see if variable weights are to be used
    if( $(this).hasClass('js-ajd-traits--weights') ) {
      variableWeights = true;
    }

    // Variables needed for each chart
    var $list = $(this).find('.ajd-traits__list'),
        $circle = $list.siblings('.ajd-traits__circle'),
        $items = $list.children('.ajd-traits__item'),
        start = 0,
        offset = 0,
        total = 0,
        n = 0,
        count =  $items.length;

        if(  variableWeights == true ) {
          var weighIn = $items.map(function() {
            return $(this).find('.js-trait-weight').text()
          }).get();
          var traitName = $items.map(function() {
              return $(this).find('.js-trait-name').text()
          }).get();
        } else {
          var traitName = $items.map(function() {
            return $(this).text()
        }).get();
      }



    // Create Circle sections based on how many items are in the list

    $items.each(function(i, el){
      if(  variableWeights == true ) {
        $circle.append('<div class="ajd-traits__cir-section" data-slice-value="' + weighIn[i] +'" data-trait-name="' + traitName[i] +'"><div class="ajd-traits__cir-fill"></div></div>');
      } else {
        $circle.append('<div class="ajd-traits__cir-section" data-trait-name="' + traitName[i] +'"><div class="ajd-traits__cir-fill"></div></div>');
        total = "100";
      }
    });



    // Determine if there are only two items and add class of big
    $circle.find(".ajd-traits__cir-section").each(function(){

      if(  variableWeights == true ) {
        var item = $(this);
        var value = item.data("slice-value") * 1;
        if(value > 49){
          item.addClass("big");
        }

        total += value
        n++;
      }

    // adjust the rotation of the divs
    }).each(function(index, el){
      var item = $(this);

      if(  variableWeights == true ) {
        var value = Math.round(item.data("slice-value") * 3.6); // because the value is percent
      } else {
        var value =  (100/count) * 3.6; // because the weights are equal
      }

      if(total >= 101 && n == index + 1){
        console.log('Trait Circle: Total percents must be 100% or less')
      } else {
        item.css({
          '-webkit-transform': 'rotate(' + (start+offset) + 'deg)',
          '-moz-transform': 'rotate(' + (start+offset) + 'deg)',
          '-o-transform': 'rotate(' + (start+offset) + 'deg)',
          'transform': 'rotate(' + (start+offset) + 'deg)'
        });

        item.find('.ajd-traits__cir-fill').css({
          '-webkit-transform': 'rotate(' + (value) + 'deg)',
          '-moz-transform': 'rotate(' + (value) + 'deg)',
          '-o-transform': 'rotate(' + (value) + 'deg)',
          'transform': 'rotate(' + (value) + 'deg)'
        });

        start += value;
      }
    });
  });


  // Tool tip for Trait Circle

  function toolTip() {

    if ( !isIE() ) { // If it is not IE

      if ( traitsCircle  == true) {
        $('body').append('<div class="ajd-traits__tooltip"></div>');

        var tooltip = $(".ajd-traits__tooltip");

        $('.ajd-traits__cir-fill').hover(function () {

          var variableWeights = false;

          if( $(this).parent('div').data('slice-value') ) {
            variableWeights = true;
          }

          tooltip.addClass('active');

          if(  variableWeights == true ) {
            tooltip.html( $(this).parent('div').data('trait-name') + " " + $(this).parent('div').data('slice-value') + "%" );
          } else {
            tooltip.html($(this).parent('div').data('trait-name'));
          }
        }, function () {
          tooltip.removeClass('active');
        });
        // use mouse position to move the tool tip.
        $('.ajd-traits__circle').mousemove(ajdThrottle(function (e) {
          tooltip.css({
            left: e.clientX,
            top: e.clientY - 50
          });
        }, 50));
      }
    }

    // end tool tip
  }
  toolTip();

  // end trait circle
}
traitsCircle();



})();  // end on doc ready
