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

	/*******Detailed-list End******/

	$('#open-detail-list-works').on('click', function(){
		$('.detailed-list').toggleClass('active-list');
	});

	/*******Detailed-list End******/

	/*******Modal personal-account******/

	$('.p-a').on('click', function(){
		$('#modal-login').fadeIn(500);
	});

	$('.close-modal_p-a').on('click', function(){
		$('#modal-login').fadeOut(500);
	});

	/*******Modal personal-account End******/


	/********Open-mobile-amenities********/

	$('.open-mobile-amenities').on('click', function(){
		$('.open-mobile-amenities').css('display','none');
		$('.amenities .mobile-amenities .none').slideDown(500);
	});

	/********Open-mobile-amenities End********/

	/********Open-mobile-Stock********/

	$('.open-mobile-stock').on('click', function(){
		$('.open-mobile-stock').css('display','none');
		$('.stock .mobile-stock .none-stock').slideDown(500);
	});

	/********Open-mobile-Stock End********/


	/**********Scroll**********/
 
	$("#popup-menu").mCustomScrollbar({
		theme:"dark-3"
	});

	/********Scroll End********/

	/**********Scroll-table**********/

	$('.price-table-dry').mCustomScrollbar({
		theme:"minimal-dark"
	});

	/********Scroll-table End********/
 
	$("#popup-menu").mCustomScrollbar({
		theme:"dark-3"
	});

	/********Scroll End********/

	$('.open-list').on('click', function(){

		$(this).next().slideToggle(400);

	});

	$('.slider-one').owlCarousel({
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


	$('.workers-slider').owlCarousel({
		dots:false,
		autoplay: true,
		autoplayTimeout: 3000,
		loop:true,
		margin:10,
		nav:false,
		center:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})

	$('.comments-slider').owlCarousel({
		dots:false,
		loop:true,
		margin:10,
		nav:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		center:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})


	$('.stock-list').owlCarousel({
		dots:false,
		loop:true,
		margin:10,
		nav:false,
		autoplay:true,
		autoWidth:true,
		center:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		}
	})

	/************Slider-One***********/
	var owl=$(".slider-one");
	owl.owlCarousel();
	
	$(".slider-wrap .next").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".slider-wrap .prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});
	/************Slider-One End***********/

	/***********Begin mask-phone********/
	$(".phone-mask").mask("+7 (999) 999-99-99");
	/***********End mask-phone********/

	/**********Begin questions-answer*********/
	$('.questions-answer .q-a .questions').on('click', function(){

		$(this).next().stop(true, true).slideToggle(700);

	});
	/********End questions-answer********/

});