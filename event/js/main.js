$(function () {

    $(".head-descr, .head-h-wrap").addClass("anim-text");

    //Scroll top menu
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".two-section").offset().top) {
            $(".top-menu").addClass("top-menu-scroll");
        } else {
            $(".top-menu").removeClass("top-menu-scroll");
        }

        if($(window).scrollTop() > $(".two-section").offset().top - 300) {
            $(".two-h").addClass("anim-text");
            $(".two-descr").addClass("anim-text");
        }
        
        if ($(window).scrollTop() > $(".two-section").offset().top - 100) {
            $(".offer-img-wrap").animate({
                height: "335px"
            }, 1500);

            setTimeout(function () {
                $(".offer-descr-wrap").animate({
                    width: "330px",
                }, 1000);
                $(".offer-descr-wrap").css({
                    border: "2px solid #EDF3FF"
                });
            }, 1500);
        }

        if ($(window).scrollTop() > $(".four-section").offset().top - 300) {
            $(".emotions-h").addClass("anim-text");
            $(".bg-block").addClass("bg-block-anim");
        }

        if ($(window).scrollTop() > $(".five-section").offset().top - 200) {
            $(".step-left-block").addClass("slideUp");
            $(".step-right-block").addClass("slideLeft");
        }

        if ($(window).scrollTop() > $(".six-section").offset().top - 300) {
            $(".impressions").animate({
                opacity: "1"
            }, 2000);
        }

        if ($(window).scrollTop() > $(".seven-section").offset().top - 300) {

            $(".about-h").addClass("anim-text");

            $(".about-left-bottom").addClass("about-before");

            setTimeout(function () {
                $(".about-left-bottom").css("overflow", "visible !important");
            }, 3000);
        }

        if ($(window).scrollTop() > $(".eight-section").offset().top - 300) {
            $(".dif-descr").addClass("anim-text");
        }

        if ($(window).scrollTop() > $(".nine-section").offset().top - 300) {
            $(".prog1").addClass("anim-num1");
            $(".prog2").addClass("anim-num2");
            $(".prog3").addClass("anim-num3");
            $(".prog4").addClass("anim-num4");
            $(".prog5").addClass("anim-num5");
            $(".prog6").addClass("anim-num6");
        }
        
        if ($(window).scrollTop() > $(".twelve-section").offset().top - 300) {
            $(".team-h").addClass("anim-text");
            $(".team-bg-block").animate({
                height: "1081px"
            }, 10000);
            $(".team-img-wrap").animate({
                height: "405px"
            }, 1500);
            $(".team-descr-wrap").addClass("team-descr-anim");
        }

    });

    //Main-menu links
    $(function(){
        $(".top-menu-list a, .m-left-list a").click(function() {
        $(".main-menu").animate({
            height: "10px"
        }, 1000).animate({
            width: "0",
            padding: "0"
        });
        if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"")
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $("[name=" + this.hash.slice(1) +"]");
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $("html,body").animate({scrollTop: targetOffset}, 1500);//скорость прокрутки
                    return false;
                }
            }
        });
    });

    //Popup-menu
    $(".open-menu").on("click", function () {
        $(".main-menu").animate({
            width: "100%",
            padding: "0 20px"
        }, 1000).animate({
            height: "100%"
        }, 1000);
        $("body, html").css("overflow", "hidden");
    });

    //Close popup menu
    $(".close-menu").on("click", function () {
        $(".main-menu").animate({
            height: "10px"
        }, 1000).animate({
            width: "0",
            padding: "0"
        }, 1000);
        $("body, html").css("overflow", "visible");
    });

    //Policy
    $(".policy").on("click", function (e) {
        e.preventDefault;
        $(".policy-popup").fadeIn(400);
    });

    //Open Popups
    $(".open-popup").on("click", function (e) {
        e.preventDefault;
        let idPopup = $(this).attr("href");
        $(idPopup).fadeIn(400);
        $("body, html").css("overflow", "hidden");
    });

    $(".emotions-btn").on("click", function (e) {
        e.preventDefault;
        let idPopup = $(this).attr("href");
        $(idPopup).fadeIn(400);
        $("body, html").css("overflow", "hidden");
    });

    //Close Popups
    $(".close").on("click", function () {
        let popupId = $(this).attr("data-close");
        $("#" + popupId).fadeOut(400);
        $("body, html").css("overflow", "visible");
    });

    $(".popup-bg").on("click", function () {
        $(".form-bg").fadeOut(400);
        $("body, html").css("overflow", "visible");
    });

    //LED links
    $(".spec-item").on("click", function (e) {
        e.preventDefault();
        let id = $(this).attr("href");
        let top = $(id).offset().top;
        $("body,html").animate({scrollTop: top + 50}, 500);
    });

    //Stap-slider
    $(".step-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        swipe: false,
        nextArrow: ".step-next",
        prevArrow: ".step-prev"
    });

    $(".arrow").on("click", function () {
        let indexSlide = $(".slick-active").attr("data-slick-index");
        let step = $(".step");

        step.removeClass("active-step");
        step[indexSlide].className += " active-step";

        let stepName = $(".active-step").children(".step-name").html();
        
        setTimeout(function () {
            if (stepName == "Team buildings, corporate events") {
                stepName = "Team buildings";
            } else if (stepName == "Fashion shows, presentations") {
                stepName = "Fashion shows";
            }
            $(".step-descr").text(stepName);
        },0);
    });

    //About-slider

    let aboutSwipe = new Swiper (".about-slider-wrap", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        updateOnImagesReady: true,
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            920: {
                slidesPerView: 3
            },
            668: {
                slidesPerView: 2
            },
            568: {
                slidesPerView: 1
            }
        },
        on: {
            slideChange: function () {
                let aboutContent = $(".about-content");
                aboutContent.removeClass("content-active");
                aboutContent[this.realIndex].classList += " content-active";
                console.log(this.realIndex);

                //Now-slide
                $(".now-slide-about").text(this.realIndex + 1);
            },
            init: function () {
                let allSlides = $(".swiper-slide").length / 2 + 2;
                $(".all-slides-about").text(allSlides);
            }
        }
    });

    //Work-slider
    
    let $slideNow = $(".now-slide");
    let $slideAll = $(".all-slides");

    $(".work-slider").slick({
        slidesToShow: 2,
        infinite: false,
        nextArrow: ".work-next",
        prevArrow: ".work-prev",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".work-slider").on("init reInit afterChange", function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $slideNow.text(i);
        $slideAll.text(slick.slideCount);
    });

    //Team-slider-mob
    $(".team-wrap").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //Sliders(Page LED)

    $(".floor-list li").hover(function () {

        $(".floor-list li").removeClass("active-floor");
        $(this).addClass("active-floor");

        let floorImg = $(".floor-img");
        let indexFloor = $(this).index();

        floorImg.removeClass("floor-active-slide");
        floorImg[indexFloor].className += " floor-active-slide";
    });
    $(".vinyl-list li").hover(function () {

        $(".vinyl-list li").removeClass("active-floor");
        $(this).addClass("active-floor");

        let vinylImg = $(".vinyl-img");
        let vinylFloor = $(this).index();

        vinylImg.removeClass("vinyl-active-slide");
        vinylImg[vinylFloor].className += " vinyl-active-slide";
    });

    //Range
    $(".foot-range").on("input", function () {
        let sliderPos = this.value / this.max;
        let pixelPosition = this.clientWidth * sliderPos;

        $(".range-result").css("left", pixelPosition + "px");

        $(".range-result").text(this.value + " м²");
    });

    /* FORMS */

    $(".select-foot").select2();

    $("#led-phone, .phone-mask").mask("+1 (999) 999-99-99");

    $(".select").select2();

    $(".inp-date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});

    /* FORMS END */
    
});