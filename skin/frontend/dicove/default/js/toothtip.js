$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 250,
    minSlides: 5,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 10
  });
  $('.slider2').bxSlider({
    slideWidth: 250,
    minSlides: 6,
    maxSlides: 6,
    moveSlides: 1,
    slideMargin: 10
  });
});