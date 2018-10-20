$(function() {

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

});