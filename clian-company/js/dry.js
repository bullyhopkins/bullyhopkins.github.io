$(function(){

	/*******Oopen-price-table********/

	$('.open-price-table').on('click', function(){
		$('.mCSB_container').fadeIn();
		$(this).next().fadeIn(500);
		$('#blackout').fadeIn(500);
	});

	$('.close-master-table').on('click', function(){

		$('.mCustomScrollbar').fadeOut();
		$(this).parent().fadeOut(500);
		$('#blackout').fadeOut(300);

	});

	/********Open-price-table End********/

});