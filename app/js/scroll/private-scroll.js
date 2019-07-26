$(function () {

    //Scroll
    $(window).scroll(function () {

        let topWindow = $(window).scrollTop();

        if (topWindow + 300 > $(".priv-one-block").offset().top) {
            $(".top-left").addClass("slideInUp").removeClass("hidden");
            $(".top-right").addClass("slideInLeft").removeClass("hidden");
        }

        if (topWindow + 400 > $(".priv-two-block").offset().top) {
            setInterval(() => {
                $(".card3-wrap").removeClass("hidden");
            }, 200);
            setInterval(() => {
                $(".card2-wrap").removeClass("hidden");
            }, 400);
            setInterval(() => {
                $(".card1-wrap").removeClass("hidden");
            }, 600);
            setInterval(() => {
                $(".private-left").addClass("slideInLeft").removeClass("hidden");
            }, 800);
        }

        if (topWindow + 200 > $(".priv-three-block").offset().top) {
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