$(function(){

	/******* Fixed Menu******/

	$('.open-menu').on('click', function(){

		$('#popup-menu').fadeIn(400);

	});

	$('#popup-menu .head-popup-menu .close-menu').on('click', function(){

		$('#popup-menu').fadeOut(400);

	});

	$('li.submenu').on('click', function(){

		$(this).children('ul').slideToggle(500);

	});

	/*******Fixed Menu End******/

	$('.type-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoWidth:true,
		center:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

	$('.add-work-slider').owlCarousel({
		dots:false,
		loop:true,
		margin:10,
		nav:false,
		autoWidth:true,
		center:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

	$('.person-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoWidth:true,
		center:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	})

});
