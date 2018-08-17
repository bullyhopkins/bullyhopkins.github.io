$(function(){

	$('.info h1').attr('id', 'anim_head');
	$(".design #zoom_04b").elevateZoom({zoomWindowPosition: 11});
	$(".design-two #zoom_04b").elevateZoom({zoomWindowPosition: 1});

	$('.one-list').on('click', function() {

		$('.one-list ul li').each(function(i, el) {

			setTimeout(function() {
			$(el).addClass("active");
			}, 500 + (i * 500));

		});

	});

});