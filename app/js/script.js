$(function () {

	//Cлежение руки за курсором
	$(document).mousemove(function(e){
		$('.hand').css({'top': e.pageY - 25, 'left': e.pageX + 3})
	});

	// if ($(window).width() < 1000) {
	// 	$(document).touchstart(function(e){
	// 		$('.hand').css({'top': e.pageY - 25, 'left': e.pageX + 3})
	// 	});
	// }

	//Включить свет
	$('.light').on('click', function () {
		$('#preloader').fadeOut(1000);
		$('html, body').css({ 'overflow': 'auto' });
		//Скролл снизу вверх
		$(document).scrollTop($('body').height());
	});

	// // Skills animation
	// $('.skills-item').hover(function(){
	// 	$('.skills-item-descr').slideToggle(300);
	// },
	// function () {
	// 	$('.skills-item-descr').slideToggle(300);
	// });

	//Menu
	$('.oscar img').on('click', function () {
		$('.oscar').fadeOut(500);
		$('.menu').fadeIn(500);
	});

	//Menu Mobile 
	$('.mobile-menu-close').on('click', function () {
		$('.oscar').fadeIn(500);
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
		event.preventDefault();
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
	
	function noScroll () {
		$('html, body').css({ 'overflow': 'hidden' });
	}

	//Ссылка о компании
	$('.account-agency-inp').on('click', function(e){
		$('html,body').stop().animate({
			scrollTop: $('#red-carpet').offset().top
		}, 1000);
		e.preventDefault();
	});

});