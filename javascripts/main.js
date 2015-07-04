$(function() {
  "use strict";

  var topoffset = 50;
  var wheight = $(window).height(); //get the height of the user screen

  $('.fullheight').css('height', wheight);

  //replace img carousel with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //Adjust height of fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the user screen
    $('.fullheight').css('height', wheight);
  });

  //Activate ScrollSpy
  $('body').scrollspy({
    target: 'header .navbar-fixed-top',
    offset: topoffset
  });

  // Add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }

  //Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('.li.active a').attr('href')
    if(hash !== '#featured'){
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });

  //Use smooth scrolling when clicking on navigation
$('.navbar a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') ===
    this.pathname.replace(/^\//,'') &&
    location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top-topoffset+2
      }, 500);
      return false;
    } //target.length
  } //click function
}); //smooth scrolling


  $('.carousel').carousel({
    interval: false
  });

});
