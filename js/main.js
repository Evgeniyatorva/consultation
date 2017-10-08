//slider__header

$('.slider__content').slick({
	prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prev.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/slider/next.png"></button>'
});


//slider__trust

$('#slider').slick({
	slidesToShow: 6,
  slidesToScroll: 1,
	prevArrow: '<button type="button" class="slick-prev"><img src="img/trust__slider/prev.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/trust__slider/next.png"></button>'
});

$("#slider .slick-next").addClass("next2");
$("#slider .slick-prev").addClass("prev2");