$(function(){

	$('.info h1').attr('id', 'anim_head');
	$(".design #zoom_04b").elevateZoom({zoomWindowPosition: 11});
	$(".design-two #zoom_04b").elevateZoom({zoomWindowPosition: 1});

	$('.design img').on('click', function() {
		$('.layout-layer').fadeIn(600);
	});

});