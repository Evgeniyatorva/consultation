//slider__header

$('.slider__content').slick({
	prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prev.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/slider/next.png"></button>'
});


//slider__trust

$('#slider').slick({
	slidesToShow: 6,
 	slidesToScroll: 1,
 	responsive: [
 	{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
        {
     breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }
],
	prevArrow: '<button type="button" class="slick-prev"><img src="img/trust__slider/prev.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/trust__slider/next.png"></button>'
});

$(".trust__slider .slick-next").addClass("next2");
$(".trust__slider .slick-prev").addClass("prev2");


//mobile menu

$(document).ready(function(){
  $('.mobile-menu').click(function(){
    $('.menu').slideToggle(1500);
    return false
  });
});