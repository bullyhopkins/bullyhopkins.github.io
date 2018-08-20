$(function(){

	$('.menu ul li').each(function(i, el) {

		setTimeout(function() {
		$(el).addClass("menu-anim");
		}, 500 + (i * 500));

	});


	$('.slider-works').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		variableWidth: true,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});


	/*******Open Ask********/

	$('.ask-answer').on('click', function(){

		$(this).children('p').stop(true, true).slideToggle(700);

	});

	/*********Open Ask End*********/
});