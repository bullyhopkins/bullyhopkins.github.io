$(function() {
	/* POPUP */
	$('.header-callback-inp').on('click', function () {

		$('.window-registration').bPopup({
			closeClass:'window-close'
		});

	});

	$('.personal-account').on('click', function () {

		$('.log-in').bPopup({
			closeClass:'window-close'
		});

	});
	/* POPUP END */

	/* SLICK SLIDER */
	
	$('.company-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.company-sl-prev'),
		nextArrow: $('.company-sl-next'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					arrows: false
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	/* SLICK SLIDER END */
});