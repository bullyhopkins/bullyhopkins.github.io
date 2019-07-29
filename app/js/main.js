$(function () {

    //Mob-menu
    $(".open-mob-menu").on("click", function () {
        $(".mob-menu").animate({
            right: 0
        }, 500);
    });

    $(".close-menu").on("click", function () {
        $(".mob-menu").animate({
            right: "-100%"
        }, 500);
    });

    setInterval(() => {
        $(".slide1-sub-h").addClass("fadeInDown");
    }, 300);
    setInterval(() => {
        $(".slide1-h").addClass("fadeInDown");
    }, 600);

    var slider1 = new Swiper(".slider1-wrap", {
        // loop: true,
        // slidesPerView: "10%",
        // loopedSlides: 4,
        speed: 600,
        spaceBetween: 0,
        uniqueNavElements: true,
        on: {
            slideChange: function () {
                if (slider1.activeIndex == 1) {
                    setInterval(() => {
                        $(".slide2-sub-h").addClass("fadeInDown");
                    }, 200);
                    setInterval(() => {
                        $(".slide2-h").addClass("fadeInDown");
                    }, 400);
                }
                if (slider1.activeIndex == 2) {
                    setInterval(() => {
                        $(".slide3-sub-h").addClass("fadeInDown");
                    }, 200);
                    setInterval(() => {
                        $(".slide3-h").addClass("fadeInDown");
                    }, 400);
                }
                if (slider1.activeIndex == 3) {
                    setInterval(() => {
                        $(".slide4-sub-h").addClass("fadeInDown");
                    }, 200);
                    setInterval(() => {
                        $(".slide4-h").addClass("fadeInDown");
                    }, 400);
                }

                //Slides Navigation
                $(".num-pages-list li").removeClass("num-active-page");
                $(".num-pages-list li")[slider1.activeIndex].className += " num-active-page";
            }
        },
        autoplay: {
            delay: 3000,
        },
    });

    $(".num-pages-list li").on("click", function () {
        $(".num-pages-list li").removeClass("num-active-page");
        $(this).addClass("num-active-page");
        slider1.slideTo($(this).index());
    });

    $(".main-menu-list a, .mob-menu-list a").on("click", function (e) {
        let page = $(this).attr("href");
        if ($(this).hasClass("active-page")) {
            return false;
        }
        $(".page").fadeOut(400);
        $("." + page).fadeIn(400);
        $(".main-menu-list a, .mob-menu-list a").removeClass("active-page");
        $(this).addClass("active-page");
        return false;
    });

    // $(".main-menu-list li").on("click", function () {
        
    //     // alert($(this).addClass("active-page"));
    // });

    //Select 
    $(".select").select2({
        minimumResultsForSearch: -1,
        allowClear: true
    });

    //Contacts
    function initMap() {
        var coordinates = {lat: 56.971609, lng: 24.051450},
        
            map = new google.maps.Map(document.getElementById('cont-map'), {
                center: coordinates
            });
    }

});