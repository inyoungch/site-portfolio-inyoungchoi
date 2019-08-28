//nav
$(function() {

	"use strict";

    var wind = $(window);


    // scrollIt
    // $.scrollIt({
    //   upKey: 38,                // key code to navigate to the next section
    //   downKey: 40,              // key code to navigate to the previous section
    //   easing: 'swing',         // the easing function for animation
    //   scrollTime: 600,          // how long (in ms) the animation takes
    //   activeClass: 'active',    // class given to the active nav element
    //   onPageChange: null,       // function(pageIndex) that is called when page is changed
    //   topOffset: -60            // offste (in px) for fixed top navigation
    // });


    // close navbar-collapse when a  clicked
    $(".nav-link").on('click', function () {
        $(".navbar-collapse").removeClass("in").addClass("collapse");
    });


    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default"),
            h_hight = $(".home-wrap").outerHeight();

        if(bodyScroll > h_hight){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
	});

  })

  var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
