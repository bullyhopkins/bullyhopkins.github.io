$(function () {

    //Открытие и закрытие меню
    $(".menu-btn").on("click", function () {
        $(".main-menu").fadeIn(400);
    });
    
    $(".close-wrap").on("click", function () {
        $(".main-menu").fadeOut(400);
    });

    //Закрытие формы
    $('.close-form').on('click', function () {
        $('.page').fadeOut(400);
        $('body, html').css('overflow', 'auto');
    });

    //Открытие страницы команды из страницы "О компании"
    $('.about-btn').on('click', function () {
        $('.page').fadeOut(400);
        $('.team-page').fadeIn(400);
        $('body').css('overflow', 'hidden');
    });

    //Открытие брифа из страницы training(youtube)
    $('.free-btn').on('click', function () {
        $('.form-page').fadeIn(400);
    });

    //Текущая дата
    function clock () {
        let d = new Date();
        let dd = d.getDate(); //День
        let mm = d.getMonth()+1; //Месяц
        let yy = d.getFullYear() - 2000; //Год
        let hrs = d.getHours(); //Часы
        let min = d.getMinutes(); //Минуты
        if(dd < 10) {dd = "0" + dd}
        if(mm < 10) {mm = "0" + mm}
        if(hrs < 10) {hrs = "0" + hrs}
        if(min < 10) {min = "0" + min}
        let dateNow = dd + "." + mm + "." + yy;
        let timeNow = hrs + ":" + min;
        $('.data').text(dateNow);
        $('.time').text(timeNow);
    }

    clock();
    setInterval(clock, 20000);

    //Seven-chart
    let chart = document.getElementById('chart'),
        ctx = chart.getContext('2d');

    chart.height = 100;
    chart.width = 200;

    
    function chartAnim (x, y) {
        ctx.beginPath();
        ctx.moveTo(0, 83);
        ctx.lineTo(x, y); //40, 40
        ctx.lineTo(x + 40, y + 40);
        ctx.lineTo(x + 80, y - 20);
        ctx.lineTo(x + 120, y + 20);
        ctx.lineTo(x + 157, y - 39);
        ctx.lineTo(x + 157, y - 20);
        ctx.moveTo(x + 157, y - 39);
        ctx.lineTo(x + 140, y - 30);
        ctx.lineWidth = 3;
        ctx.stroke();

        // setTimeout("chartAnim()", 500);
        // setTimeout("chartAnim", 500);
    }

    chartAnim(40, 40);

    //Открытие страниц
    $(".menu a").on("click", function (e) {
        e.preventDefault();
        $('body, html').css('overflow', 'hidden');
        let linkPage = $(this).attr("class");
        if (linkPage == "main") {
            $('.page').fadeOut(400);
            $('body, html').css('overflow', 'auto');
        }
        $('.page').fadeOut(400);
        $('.'+linkPage+'-page').fadeIn(400);
        $(".main-menu").fadeOut(400);
        if(linkPage == "training") {
            $(".training-slider").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrow: false,
                nextArrow: '.next',
                prevArrow: '.prev',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
        if(linkPage == "cases") {
            $(".cases-slider").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrow: false,
                nextArrow: '.cases-next',
                prevArrow: '.cases-prev',
                asNavFor: '.slide-now',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]
            });
            $('.slide-now').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.cases-slider',
                dots: false,
                arrows: false,
                centerMode: true,
                focusOnSelect: true
            });
        }
        if(linkPage == "news") {

            var params = {
                theme: "light-2"
            };
            
            // Инициализируем при загрузки DOM
            initScrollbar($('.news-content-wrap'), params);
            
            // Инициализируем/разгрушаем по изменению окна браузера
            $(window).on('resize', function() {
                initScrollbar($('.news-content-wrap'), params);
            });
            
            function initScrollbar($selector, options) {
            // Если ширина окна меньше чем 992 px
            if ($(window).width() < 992) {
                // Если на этом селекторе уже был инициализирован плагин, то разрушим его
                // Если нет, то ничего не делаем
                if ($selector.data('mCS')) $selector.mCustomScrollbar('destroy');
            } else {
                // Если ширина окна больше 992 px, То инициализируем плагин
                $selector.mCustomScrollbar(options || {});
            }
            }
        }
    });

    //Страницы услуг
    $('.amenities-item a').on('click', function (e) {
        e.preventDefault();
        $('body, html').css('overflow', 'hidden');
        let linkPage = $(this).attr("class");
        $('.page').fadeOut(400);
        $('.'+linkPage+'-page').fadeIn(400);
    });

    //Бриф
    $(".sub-amen-btn").on('click', function (e) {
        e.preventDefault();
        $(".form-page").fadeIn(400);
    });
    $(".brif-menu").on('click', function (e) {
        e.preventDefault();
        $(".form-page").fadeIn(400);
    });

    //Main Page
    //Мигающаая кнопка
    $(".scroll-img-wrap").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
    });

    //Диалоги
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $(".two-frame").offset().top - 300){
            // $(".two-text1").addClass("dialog-all");
            $(".two-text1").addClass("dialogs-anim");
            setTimeout(function () {
                $(".two-text2").addClass("dialogs-anim2");
            }, 500);
            setTimeout(function () {
                $(".two-text3").addClass("dialogs-anim3");
            }, 1000);
            setTimeout(function () {
                $(".two-text4").addClass("dialogs-anim4");
            }, 1500);
            // setTimeout(function () {
            //     $(".two-text1").removeClass("dialog-all");
            // }, 1000);
        }
        if ($(this).scrollTop() >= $(".three-frame").offset().top - 300) {
            $(".three-text1").addClass("dialog-anim5");
            setTimeout(function () {
                $(".three-text2").addClass("dialog-anim6");
            }, 500);
        }
        if ($(this).scrollTop() >= $(".four-frame").offset().top - 300) {
            $(".four-logo").addClass("logo-anim");
        }
        if ($(this).scrollTop() >= $(".five-frame").offset().top - 300) {
            $(".question1").addClass("question-anim");
            setTimeout(function () {
                $(".question2").addClass("question-anim");
            }, 200);
            setTimeout(function () {
                $(".question3").addClass("question-anim");
            }, 400);
            setTimeout(function () {
                $(".question4").addClass("question-anim");
            }, 600);
            setTimeout(function () {
                $(".question5").addClass("question-anim");
            }, 800);
        }
        if ($(this).scrollTop() >= $(".six-frame").offset().top - 500) {
            $(".six-left-top").animate({
                left: "78px"
            }, 2000);
            $(".six-left-bottom").animate({
                left: 0
            }, 2000);
            setTimeout(function () {
                $(".six-middle").animate({
                    top: 0
                }, 1000);
            }, 1000);
            setTimeout(function () {
                $(".six-right").animate({
                    right: 0
                }, 1000);
            }, 1200);
        }
        if ($(this).scrollTop() >= $(".seven-frame").offset().top - 500) {
            $('#chart').animate({
                "width": '200px'
            }, 2000);
        }
    });

    //Types
    new TypeIt('.type-effect', {
        strings: "To be continued...",
        cursor: false,
        loop: false,
        waitUntilVisible: true
    }).go();

    new TypeIt('.type-seven', {
        strings: "1 + 1 = Win",
        cursor: false,
        loop: false,
        waitUntilVisible: true
    }).go();

    new TypeIt('.type-eight-one', {
        strings: ["KPI"],
        cursor: false,
        speed: 500,
        loop: false,
        waitUntilVisible: true
    }).go();

    new TypeIt('.type-eight-two', {
        strings: ["Гарантия результата"],
        cursor: false,
        loop: false,
        waitUntilVisible: true
    }).go();

    //News Tab
 
    $('.years').on('click', function() {
        $(".years").removeClass('active-tab');
        $(this).addClass('active-tab');
        $('.content-item').removeClass('active').eq($(this).index('.years')).addClass('active');
    });

    //News detailed
    $(".news-detailed").on("click", function () {

        $(this).fadeOut(400);

        $(this).parent(".news-right").addClass("col-lg-12").children(".news-text").css({
            "height": "auto",
            "width": "100% !importent",
            "padding": "15px"
        });

        $(this).parent(".news-right").prev().addClass("col-lg-8");
    });

    //Bread crumb
    $('.amen-sab-h').on('click', function () {
        $('.page').fadeOut(400);
        $('.amenities-page').fadeIn(400);
    });

    $('.amin-main-page').on('click', function () {
        $('.page').fadeOut(400);
        $('body, html').css('overflow', 'auto');
    });

    //Cases-btns
    $(".cases-play").on('click', function () {
        $('.cases-slider').slick('autoplay', true);
        $('.slide-now').slick('autoplay', true);
    });

});