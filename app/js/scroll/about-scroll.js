$(function () {

    //Scroll
    $(window).scroll(function () {
        let topWindow = $(window).scrollTop();

        if (topWindow + 300 > $(".one-block").offset().top) {
            $(".about-right").addClass("slideInUp").removeClass("hidden");
            $(".about-left").addClass("slideInLeft").removeClass("hidden");
        }

        if (topWindow + 400 > $(".two-block").offset().top) {
            $(".focus-left").addClass("slideInUp").removeClass("hidden");
            $(".focus-right").addClass("slideInRight").removeClass("hidden");
        }

        if (topWindow + 200 > $(".three-block").offset().top) {
            $(".solutions-right").addClass("slideInUp").removeClass("hidden");
            $(".solutions-left").addClass("slideInLeft").removeClass("hidden");
        }

    });

});