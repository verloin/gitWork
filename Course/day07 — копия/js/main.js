$('.slider_in01').slick({
  fade: true,
  draggable: false,
  speed: 1000,
  asNavFor: '.slider_in02',
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
});

$('.slider_in02').slick({
  slidesToShow: 6,
  asNavFor: '.slider_in01',
  focusOnSelect: true,
  speed: 1000,
  arrows: false,
  variableWidth: true
});

$('.header_menu-btn').on('click', function(){
  $('.header_menu ul').slideToggle();
});