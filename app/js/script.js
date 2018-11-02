$(function () {

	//Cлежение руки за курсором
	$(document).mousemove(function(e){
		$('.hand').css({'top': e.pageY - 25, 'left': e.pageX + 3})
	});

	//Включить свет
	$('.inp-light').on('click', function () {
		$('#preloader').fadeOut(1000);
		$('html, body').css({ 'overflow': 'auto' });
	});

});