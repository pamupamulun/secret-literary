$(function() {
  $('.hamburger').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('active');
  });
});

$(window).on('load', function () {
  $('#loader').fadeOut(200, function () {
    $('#main-content').fadeIn(200, function () {
      AOS.init({
        once: false,
        duration: 600,
        easing: 'ease-in-out',
      });
    });
  });
});