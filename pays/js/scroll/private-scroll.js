$(function () {

    $(".top-h").addClass("slideInUp").removeClass("hidden");
    setInterval(() => {
        $(".top-descr").addClass("slideInUp").removeClass("hidden");
    }, 300);
    setInterval(() => {
        $(".top-btn-wrap").addClass("slideInUp").removeClass("hidden");
    }, 600);
    $(".top-right").addClass("slideInLeft").removeClass("hidden");

    scrollPage();

    //Scroll
    $(window).scroll(scrollPage);

    function scrollPage () {
        let topWindow = $(window).scrollTop();

        if (topWindow + 400 > $(".priv-two-block").offset().top) {
            setInterval(() => {
                $(".card3-wrap").removeClass("hidden");
                $(".priv-right-mob").addClass("slideInUp").removeClass("hidden");
            }, 200);
            setInterval(() => {
                $(".card2-wrap").removeClass("hidden");
                $(".bus-h").addClass("slideInUp").removeClass("hidden");
            }, 400);
            setInterval(() => {
                $(".card1-wrap").removeClass("hidden");
                $(".bus-list").addClass("slideInUp").removeClass("hidden");
            }, 600);
        }

        if (topWindow + 200 > $(".priv-three-block").offset().top) {
            $(".cont-h-top").addClass("slideInUp").removeClass("hidden");
            setInterval(() => {
                $(".cont-descr-top").addClass("slideInUp").removeClass("hidden");
                $(".cont-right").addClass("slideInUp").removeClass("hidden");
            }, 100);
            setInterval(() => {
                $(".cont-h-bottom").addClass("slideInUp").removeClass("hidden");
            }, 200);
            setInterval(() => {
                $(".cont-descr-bottom").addClass("slideInUp").removeClass("hidden");
            }, 300);
        }
    }

});