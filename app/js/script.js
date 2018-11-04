$(function () {

	//Скролл снизу вверх
	$(document).scrollTop($('body').height());

	//Cлежение руки за курсором
	$(document).mousemove(function(e){
		$('.hand').css({'top': e.pageY - 25, 'left': e.pageX + 3})
	});

	//Включить свет
	$('.inp-light').on('click', function () {
		$('#preloader').fadeOut(1000);
		$('html, body').css({ 'overflow': 'auto' });
	});

	//Skills animation
	// $('.skills-item').hover(function(){
	// 	$('.skills-item-descr').slideToggle(300);
	// },
	// function () {
	// 	$('.skills-item-descr').slideToggle(300);
	// });

	//Menu
	$('.oscar img').on('click', function () {
		$('.oscar').fadeOut(500);
		$('.menu').animate({
			left: 0
		}, 700);
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
	
	function noScroll () {
		$('html, body').css({ 'overflow': 'hidden' });
	}

});