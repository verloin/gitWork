$(function(){

	$('.about_slider, .news_slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
	});
});