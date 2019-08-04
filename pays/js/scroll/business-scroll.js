$(function () {

    $(".top-h").addClass("slideInUp").removeClass("hidden");
    setInterval(() => {
        $(".top-descr").addClass("slideInUp").removeClass("hidden");
    }, 300);
    setInterval(() => {
        $(".top-btn-wrap").addClass("slideInUp").removeClass("hidden");
    }, 600);
    $(".top-right").addClass("slideInLeft").removeClass("hidden");

    //Scroll
    $(window).scroll(function () {
        
        let topWindow = $(window).scrollTop();

        if (topWindow + 300 > $(".bus-two-block").offset().top) {
            $(".bus-h").addClass("slideInUp").removeClass("hidden");
            $(".business-right").addClass("slideInUp").removeClass("hidden");
            setInterval(() => {
                $(".bus-list").addClass("slideInUp").removeClass("hidden");
            }, 200);
        }

        if (topWindow + 300 > $(".bus-three-block").offset().top) {
            $(".cont-h-top").addClass("slideInUp").removeClass("hidden");
            setInterval(() => {
                $(".cont-descr-top").addClass("slideInUp").removeClass("hidden");
            }, 200);
            setInterval(() => {
                $(".cont-h-bottom").addClass("slideInUp").removeClass("hidden");
                $(".cont-right").addClass("slideInUp").removeClass("hidden");
            }, 400);
            setInterval(() => {
                $(".cont-descr-bottom").addClass("slideInUp").removeClass("hidden");
            }, 600);
        }

    });

});