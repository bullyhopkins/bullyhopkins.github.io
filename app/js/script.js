$(function () {

	//Scroll
	var winHeight = $(window).innerHeight();

	$("body").height($('.skroll-wrap').outerHeight());
	$(window).on('scroll',function(){
		$(".skroll-wrap").css('bottom',$(window).scrollTop()*-1);
	});

	//Cлежение руки за курсором
	$(document).mousemove(function(e){
		$('.hand').css({'top': e.pageY - 25, 'left': e.pageX + 3})
	});

	//Включить свет
	// $('.light').on('click', function () {
	// 	$('#preloader').fadeOut(1000);
	// 	$('html, body').css({ 'overflow': 'auto' });
	// 	//Скролл снизу вверх
	// 	$(document).scrollTop($('body').height());
	// });

	document.addEventListener('touchstart', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.hand').css({'top': e.pageY, 'left': e.pageX})
	}, false);

	//MOB MENU
	$('.mob-menu-open').on('click', function () {
		$('.menu-mobile').animate({
			left: 0
		}, 1000);
	});

	//Close Mob Menu
	$('.menu-mob-close').on('click', function () {
		$('.menu-mobile').animate({
			left: 100 + "%"
		}, 1000);
	});

	//Slider skills
	$('.slider-skills').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});

	//Menu
	$('.oscar img').on('click', function () {
		$('.oscar').fadeOut(500);
		$('.call-fix-wrap').fadeOut(400);
		$('.menu').fadeIn(500);
	});

	//Menu Mobile 
	$('.mobile-menu-close').on('click', function () {
		$('.oscar').fadeIn(500);
		$('.call-fix-wrap').fadeIn(400);
		$('.menu').fadeOut(500);
	});

	//Sturtup window
	$('#sturtup-inp').on('click', function (event) {
		event.preventDefault();
		$('.sturtup-window').animate({
			left: 0
		}, 1500);
		setTimeout(noScroll, 2000);
	});

	//Закрытие Sturtup window
	$('.window-back').on('click', function () {
		$('.sturtup-window').animate({
			left: '100%'
		}, 1500);
		$('html, body').css({ 'overflow': 'auto' });
	});


	//Medium-window
	$('#med-inp').on('click', function (event) {
		event.preventDefault();
		$('.medium-window').animate({
			left: 0
		}, 1500);
		setTimeout(noScroll, 2000);
	});

	//Закрытие Medium-window
	$('.medium-window-back').on('click', function () {
		$('.medium-window').animate({
			left: '100%'
		}, 1500);
		$('html, body').css({ 'overflow': 'auto' });
	});


	//Custom Window
	$('.custom-inp').on('click', function (event) {
		$('.custom-window').animate({
			left: 0
		}, 1500);
		setTimeout(noScroll, 2000);
	});

	//Закрытие Custom Window
	$('.custom-window-back').on('click', function () {
		$('.custom-window').animate({
			left: '100%'
		}, 1500);
		$('html, body').css({ 'overflow': 'auto' });
	});
	
	//Модальное окно после выбора пакета
	$('.select-open').on('click', function () {
		$('.package-selected').animate({
			left: 0
		}, 1500);
		$('html, body').css({ 'overflow': 'hidden' });
	});

	$('.collback-mob-inp').on('click', function () {
		$('.package-selected').animate({
			left: 0
		}, 1500);
		$('html, body').css({ 'overflow': 'hidden' });
	});
	
	function noScroll () {
		$('html, body').css({ 'overflow': 'hidden' });
	}

	//Ссылка о компании
	$('.account-agency-inp').on('click', function(e){
		$('html,body').stop().animate({
			scrollTop: $('#red-carpet').offset().top
		}, 800);
		e.preventDefault();
	});

	//Red Carpet
	var $brain = $('.item-brain');
	var $hands = $('.item-hands');
	var $chess = $('.item-chess');
	var $people = $('.item-people');
	var $brainCont = $('.brain-content');
	var $handsCont = $('.hands-content');
	var $chessCont = $('.chess-content');
	var $peopleCont = $('.people-content');

	$brain.hover(function () {
		$('.red-carpet-block .inp-pulse').fadeOut(500);
		$handsCont.toggleClass('carpet-item-none');
		$chessCont.toggleClass('carpet-item-none');
		$peopleCont.toggleClass('carpet-item-none');
		$('.brain-descr').toggleClass('descr-active');
	},
	function () {
		$('.brain-descr').toggleClass('descr-active');
		$handsCont.toggleClass('carpet-item-none');
		$chessCont.toggleClass('carpet-item-none');
		$peopleCont.toggleClass('carpet-item-none');
	});

	$hands.hover(function () {
		$('.red-carpet-block .inp-pulse').fadeOut(500);
		$brainCont.toggleClass('carpet-item-none');
		$chessCont.toggleClass('carpet-item-none');
		$peopleCont.toggleClass('carpet-item-none');
		$('.hands-descr').toggleClass('descr-active');
	},
	function () {
		$('.hands-descr').toggleClass('descr-active');
		$brainCont.toggleClass('carpet-item-none');
		$chessCont.toggleClass('carpet-item-none');
		$peopleCont.toggleClass('carpet-item-none');
	});

	$chess.hover(function () {
		$('.red-carpet-block .inp-pulse').fadeOut(500);
		$brainCont.toggleClass('carpet-item-none');
		$handsCont.toggleClass('carpet-item-none');
		$peopleCont.toggleClass('carpet-item-none');
		$('.chess-descr').toggleClass('descr-active');
	},
	function () {
		$('.chess-descr').toggleClass('descr-active');
		$brainCont.toggleClass('carpet-item-none');
		$handsCont.toggleClass('carpet-item-none');
		$peopleCont.toggleClass('carpet-item-none');
	});

	$people.hover(function () {
		$('.red-carpet-block .inp-pulse').fadeOut(500);
		$brainCont.toggleClass('carpet-item-none');
		$handsCont.toggleClass('carpet-item-none');
		$chessCont.toggleClass('carpet-item-none');
		$('.people-descr').toggleClass('descr-active');
	},
	function () {
		$('.people-descr').toggleClass('descr-active');
		$brainCont.toggleClass('carpet-item-none');
		$handsCont.toggleClass('carpet-item-none');
		$chessCont.toggleClass('carpet-item-none');
	});


	//Paralax Skills
	var skillsItem = $('.skills-item');

	$(document).on('mousemove', function (e) {
		var x = e.pageX;
		var bodyWidth = $('body').width() / 2;
		var mouse = x - bodyWidth ;

		skillsItem.css({
			transform: 'rotateY(' + (x - bodyWidth) / 60 + 'deg)'
		});

		// console.log(mouse);
	});

	//Red Carpet cursor
	$(".red-carpet-block").mousemove(function(e){
		var parentOffset = $(this).offset(); 
		//or $(this).offset(); if you really just want the current element offset
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		$('.cursor-carpet-block').css({
			// display: 'block',
			top: relY + "px",
			left: relX + "px"
		});
		console.log(e.pageX);
 });

});