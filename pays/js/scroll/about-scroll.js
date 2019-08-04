$(function () {
    $(".about-left").addClass("slideInUp").removeClass("hidden");
    $(".about-h").addClass("slideInUp").removeClass("hidden");
    setInterval(() => {
        $(".about-descr").addClass("slideInUp").removeClass("hidden");
    }, 300);

    //Scroll
    $(window).scroll(function () {
        let topWindow = $(window).scrollTop();

        if (topWindow + 600 > $(".two-block").offset().top) {
            $(".focus-h").addClass("slideInUp").removeClass("hidden");
            $(".focus-right").addClass("slideInUp").removeClass("hidden");
            setInterval(() => {
                $(".focus-descr").addClass("slideInUp").removeClass("hidden");
            }, 300);
        }

        if (topWindow + 400 > $(".three-block").offset().top) {
            $(".solution-h").addClass("slideInUp").removeClass("hidden");
            $(".solutions-left").addClass("slideInUp").removeClass("hidden");
            setInterval(() => {
                $(".solution-descr").addClass("slideInUp").removeClass("hidden");
            }, 300);
        }

    });

});