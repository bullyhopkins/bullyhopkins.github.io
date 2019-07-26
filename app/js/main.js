$(function () {

    setInterval(() => {
        $(".slide1-sub-h").addClass("fadeInDown");
    }, 300);
    setInterval(() => {
        $(".slide1-h").addClass("fadeInDown");
    }, 600);

    $(".main-menu-list a").on("click", function (e) {
        let page = $(this).attr("href");
        $(".page").fadeOut(400);
        if (page == "#slider1") {
            $(".page").fadeOut(400);
            $(page).fadeIn(400);
            $(".slider1").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000
            });
        }
        $(page).fadeIn(400);
        // alert(pages);
        return false;
    });

    $(".main-menu-list li").on("click", function () {
        $(".main-menu-list li").removeClass("active-page");
        $(this).addClass("active-page");
        // alert($(this).addClass("active-page"));
    });

    //Select 
    $(".select").select2({
        minimumResultsForSearch: -1,
        allowClear: true
    });

    // var slider1 = new Swiper (".slider1", {

    // });

    $(".slider1").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(".num-pages-list li").on("click", function () {
        $(".num-pages-list li").removeClass("num-active-page");
        $(this).addClass("num-active-page");
        $(".slider1").slick("slickGoTo", $(this).index());
    });

    $('.slider1').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if (currentSlide == 1) {
            setInterval(() => {
                $(".slide2-sub-h").addClass("fadeInDown");
            }, 200);
            setInterval(() => {
                $(".slide2-h").addClass("fadeInDown");
            }, 400);
        }
        if (currentSlide == 2) {
            setInterval(() => {
                $(".slide3-sub-h").addClass("fadeInDown");
            }, 200);
            setInterval(() => {
                $(".slide3-h").addClass("fadeInDown");
            }, 400);
        }
        if (currentSlide == 3) {
            setInterval(() => {
                $(".slide4-sub-h").addClass("fadeInDown");
            }, 200);
            setInterval(() => {
                $(".slide4-h").addClass("fadeInDown");
            }, 400);
        }
        let pagesNum = $(".num-pages-list li");
        $(".num-pages-list li").removeClass("num-active-page");
        pagesNum[currentSlide].className += " num-active-page";
    });

    //Contacts
    function initMap() {
        var coordinates = {lat: 56.971609, lng: 24.051450},
        
            map = new google.maps.Map(document.getElementById('cont-map'), {
                center: coordinates
            });
    }

});