$(function () {

    $(".head-descr, .head-h-wrap").addClass("anim-text");

    //Main-menu links
    $(function () {
        $(".top-menu-list a, .m-left-list a").click(function () {
            $(".main-menu").animate({
                height: "10px"
            }, 1000).animate({
                width: "0",
                padding: "0"
            });
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
                && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $("html,body").animate({ scrollTop: targetOffset }, 1500);//скорость прокрутки
                    $("html,body").css("overflow", "auto");
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
        // $("body, html").css("overflow", "hidden");
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
    $(".form-close").on("click", function () {
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
        $("body,html").animate({ scrollTop: top + 50 }, 500);
    });

    // //Stap-slider
    // $(".step-slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     infinite: false,
    //     swipe: false,
    //     nextArrow: ".step-next",
    //     prevArrow: ".step-prev"
    // });

    // $(".arrow").on("click", function () {
    //     // alert(1);
    //     let indexSlide = $(".slick-active").attr("data-slick-index");
    //     let step = $(".step");

    //     step.removeClass("active-step");
    //     step[indexSlide].className += " active-step";

    //     let stepName = $(".active-step").children(".step-name").html();

    //     setTimeout(function () {
    //         if (stepName == "Team buildings, corporate events") {
    //             stepName = "Team buildings";
    //         } else if (stepName == "Fashion shows, presentations") {
    //             stepName = "Fashion shows";
    //         }
    //         $(".step-descr").text(stepName);
    //     }, 0);
    // });

    //About-slider

    let aboutSwipe = new Swiper(".about-slider-wrap", {
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
                // alert(1);
                let aboutContent = $(".about-content");
                aboutContent.removeClass("content-active");
                aboutContent[this.realIndex].classList += " content-active";
                // console.log(this.realIndex);

                //Now-slide
                $(".now-slide-about").text(this.realIndex + 1);
            },
            init: function () {
                let allSlides = $(".swiper-slide").length - 15;
                $(".all-slides-about").text(allSlides);
            }
        }
    });

    //Brands-slider
    let brandSwipe = new Swiper(".brand-slider", {
        loop: true,
        slidesPerView: 4,
        // updateOnImagesReady: true,
        spaceBetween: 30,
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
        autoplay: {
            delay: 2500,
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

    $(".work-slider").on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $slideNow.text(i);
        $slideAll.text(slick.slideCount);
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

    $(".inp-date").mask("99/99/9999", { placeholder: "mm/dd/yyyy" });

    /* FORMS END */

    //Pages-parallax

    {
        var elem = $('.landing'), //    Контейнер, в котором будем проводить анимацию
            pos = elem.offset(), //    Позиция элемента
            elem_left = pos.left, // Слева
            elem_top = pos.top, // Сверху
            elem_width = elem.width(), // Ширина элемента
            elem_height = elem.height(), // Высота элемента
            x_center, // Координаты центра по оси X
            y_center; // Координаты центра по оси Y
    
        // Обрабатываем событие перемещения курсора мыши
        $('.landing').mousemove(function (e) {
    
            // Определяем центр элемента (формула легко гуглится)
            x_center = (elem_width / 2) - (e.pageX - elem_left);
            y_center = (elem_height / 2) - (e.pageY - elem_top);
    
            // Проходим по всем блокам с изображениями)
            $('.landing .parallax').each(function () {
    
                var speed = $(this).attr('data-speed'), //    Определяем скорость 
                    xPos = Math.round(-1 * x_center / 40 * speed),// Высчитываем позицию по оси X, движения будут инвертированы (-1). Формула подбиралась на глаз
                    yPos = 0;   // Высчитываем позицию по оси Y
    
                // Перемещение по оси Y делаем до определенной точки, потом перемещение останавливаем
                // if (yPos < 0)
                //     yPos = -2 * speed;
    
                // Непосредственно перенос      
                $(this).css('transform', 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)');
    
            });
        });
    
        $('.site').mousemove(function (e) {
    
            // Определяем центр элемента (формула легко гуглится)
            x_center = (elem_width / 2) - (e.pageX - elem_left);
            y_center = (elem_height / 2) - (e.pageY - elem_top);
    
            // Проходим по всем блокам с изображениями)
            $('.site .parallax').each(function () {
    
                var speed = $(this).attr('data-speed'), //    Определяем скорость 
                    xPos = Math.round(-1 * x_center / 40 * speed),// Высчитываем позицию по оси X, движения будут инвертированы (-1). Формула подбиралась на глаз
                    yPos = 0;   // Высчитываем позицию по оси Y
    
                // Перемещение по оси Y делаем до определенной точки, потом перемещение останавливаем
                // if (yPos < 0)
                //     yPos = -2 * speed;
    
                // Непосредственно перенос      
                $(this).css('transform', 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)');
    
            });
        });
    
        $('.shop').mousemove(function (e) {
    
            // Определяем центр элемента (формула легко гуглится)
            x_center = (elem_width / 2) - (e.pageX - elem_left);
            y_center = (elem_height / 2) - (e.pageY - elem_top);
    
            // Проходим по всем блокам с изображениями)
            $('.shop .parallax').each(function () {
    
                var speed = $(this).attr('data-speed'), //    Определяем скорость 
                    xPos = Math.round(-1 * x_center / 40 * speed),// Высчитываем позицию по оси X, движения будут инвертированы (-1). Формула подбиралась на глаз
                    yPos = 0;   // Высчитываем позицию по оси Y
    
                // Перемещение по оси Y делаем до определенной точки, потом перемещение останавливаем
                // if (yPos < 0)
                //     yPos = -2 * speed;
    
                // Непосредственно перенос      
                $(this).css('transform', 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)');
    
            });
        });
    }

    // $(".screen-slider").slick({
    //     slidesToShow: 1
    // });

});