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
});