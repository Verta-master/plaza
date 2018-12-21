jQuery(function($) {
	"use strict";

//Mobile menu
  $('.menu__btn').click(function() {
    $('.menu__wrap').slideToggle();
  });
  
  $('.footer__menu-btn').click(function() {
    $('.footer__list').slideToggle();
  });
  
//scroll to arrow anchors
  $('.promo__link').click(function(event) {
    event.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 500);
  });
});
