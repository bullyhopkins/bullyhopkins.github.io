$(function () {

    $(".scroll-btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000);
    });

    //Open slider 
    $(".open-slider").on('click', function (e) {
        e.preventDefault();
        let activeSlide = $(this).attr("data-slide");
        $('.slider-works-wrap').fadeIn(400);
        setTimeout(function () {
            $('.slider-works').slick('slickGoTo', activeSlide);
        }, 5);
        //Slider works
        $('.slider-works').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            nextArrow: $('.next'),
            prevArrow: $('.prev'),
            adaptiveHeight: true
        });
    });

    //Close slider
    $(".slider-close, .main-bg-slide").on('click', function (e) {
        e.preventDefault();
        $(".slider-works-wrap").fadeOut(400);
    });

    //Open val-mob-slide2
    $(".open-val-slider").on('click', function (e) {
        let activeSlide = $(this).attr("data-slide");
        $('.val-all-pages').fadeIn(400);
        setTimeout(function () {
            $('.slider-val').slick('slickGoTo', activeSlide);
        }, 5);
        $('.slider-val').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            nextArrow: $('.next-val'),
            prevArrow: $('.prev-val'),
            adaptiveHeight: true
        });
    });

    //Close val-mob-slider
    $(".slider-val-close, .val-bg-slide").on('click', function (e) {
        e.preventDefault();
        $(".val-all-pages").fadeOut(400);
    });

    //Open wood-slider
    $(".wood-all-img").on('click', function (e) {
        let activeSlide = $(this).attr("data-slide");
        $('.wood-all-pages').fadeIn(400);
        setTimeout(function () {
            $('.slider-wood').slick('slickGoTo', activeSlide);
        }, 5);
        $('.slider-wood').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            nextArrow: $('.next-val'),
            prevArrow: $('.prev-val'),
            adaptiveHeight: true
        });
    });

    //Close val-mob-slider
    $(".slider-val-close, .val-bg-slide").on('click', function (e) {
        e.preventDefault();
        $(".wood-all-pages").fadeOut(400);
    });

    //Popup Form
    $(".close-form").on('click', function (e) {
        $('.form-wrap').fadeOut(400);
    });

    //Open form
    $(".open-form").on('click', function (e) {
        e.preventDefault();
        $('.form-wrap').fadeIn(400);
    });

    $(".works-item").mousemove(function(e){
		var parentOffset = $(this).offset(); 
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		$('.red-cursor').css({
			top: relY + "px",
			left: relX + "px"
		});
 	});

});