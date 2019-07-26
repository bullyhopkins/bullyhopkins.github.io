$(function () {

    //Scroll
    $(window).scroll(function () {

        let topWindow = $(window).scrollTop();

        if (topWindow + 300 > $(".bus-one-block").offset().top) {
            $(".top-left").addClass("slideInUp").removeClass("hidden");
            $(".top-right").addClass("slideInLeft").removeClass("hidden");
        }

        if (topWindow + 300 > $(".bus-two-block").offset().top) {
            $(".business-left").addClass("slideInUp").removeClass("hidden");
            $(".business-right").addClass("slideInRight").removeClass("hidden");
        }

        if (topWindow + 200 > $(".bus-three-block").offset().top) {
            $(".cont-left-top").addClass("slideInUp").removeClass("hidden");
            setInterval(() => {
                $(".cont-left-bottom").addClass("slideInUp").removeClass("hidden");
            }, 200);
            setInterval(() => {
                $(".cont-right").addClass("slideInRight").removeClass("hidden");
            }, 400);
        }

    });

});