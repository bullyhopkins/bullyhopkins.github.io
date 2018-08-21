$(function(){

	/******Scroll********/

	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		var $menuHeight = $('.top-menu').innerHeight();
		$("html, body").animate({scrollTop: $(_href).offset().top - $menuHeight +"px"}, 1000);
		return false;
	});

	/******Scroll End********/

	/******Paralax********/

	$('#about-us').enllax();
	$('.info-work').enllax();

	/******Paralax End********/


	//Плавное появление блоков при сролле 

	$('.pluses h2').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInLeftBig',
		offset: 200
	});

	$('.plus').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated rotateInUpRight',
		offset: 200
	});

	$('.info-work h2').addClass("hidden").viewportChecker({
		classToAdd: 'visible jackInTheBox animated',
		offset: 100
	});

	$('.info-work p').addClass("hidden").viewportChecker({
		classToAdd: 'visible jackInTheBox animated',
		offset: 100
	});

	$('.info-about-us').addClass("hidden").viewportChecker({
		classToAdd: 'visible bounceInLeft animated',
		offset: 300
	});

	$('.bully').addClass("hidden").viewportChecker({
		classToAdd: 'visible bounceInLeft animated',
		offset: 400
	});

	$('.nono').addClass("hidden").viewportChecker({
		classToAdd: 'visible bounceInRight animated',
		offset: 400
	});

	//Анимации при скролле КОНЕЦ

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

});