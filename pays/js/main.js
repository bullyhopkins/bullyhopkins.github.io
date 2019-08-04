$(function () {

    //Selects
    $(".head-top-sel, .head-bottom-sel").select2({
        // minimumResultsForSearch: -1,
        // allowClear: true
    });

    //Warning
    setTimeout(() => {
        $(".warning").animate({
            bottom: 0
        }, 1000);
    }, 2000);

    $(".warn-close").on("click", function () {
        $(".warning").animate({
            bottom: "-500px"
        }, 1000);
    });

    // $(".foot-list-company a, .head-top-menu a, .mob-menu-list a").scrollTo(0, 800, {queue:true});

    //Main links
    $(".foot-list-company a, .head-top-menu a, .mob-menu-list a").on("click", function() {
        if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"")
            && location.hostname == this.hostname) {
                let $target = $(this.hash);
                $target = $target.length && $target || $("[name=" + this.hash.slice(1) +"]");
                if ($target.length) {
                    let targetOffset = $target.offset().top;
                    $("html,body").animate({scrollTop: targetOffset}, 1000);//скорость прокрутки
                    return false;
                }
        }
    });

    //Mob-menu
    $(".open-menu").on("click", function () {
        $(".mob-menu").animate({
            left: 0
        }, 500);
    });

    $(".mob-menu-close").on("click", function () {
        $(".mob-menu").animate({
            left: "-500px"
        }, 500);
    });

    //Slides descr
    $(".bus-click").on("click", function () {
        $(this).children(".bus-list-descr").slideToggle();
        $(this).toggleClass("bus-active");
    });

    //Paralax    

    // Обрабатываем событие перемещения курсора мыши
    $(".top-block").mousemove(function (e) {

        let elem = $(".top-block"), //    Контейнер, в котором будем проводить анимацию
        pos = elem.offset(), //    Позиция элемента
        elem_left = pos.left, // Слева
        elem_top = pos.top, // Сверху
        elem_width = elem.width(), // Ширина элемента
        elem_height = elem.height(), // Высота элемента
        x_center, // Координаты центра по оси X
        y_center; // Координаты центра по оси Y

        // Определяем центр элемента (формула легко гуглится)
        x_center = (elem_width / 2) - (e.pageX - elem_left);
        y_center = (elem_height / 2) - (e.pageY - elem_top);

        // Проходим по всем блокам с изображениями)
        $(".top-right .parallax").each(function () {

            let speed = $(this).attr("data-speed"), //    Определяем скорость 
                xPos = Math.round(-1 * x_center / 40 * speed),// Высчитываем позицию по оси X, движения будут инвертированы (-1). Формула подбиралась на глаз
                yPos = Math.round(-1 * y_center / 40 * speed);   // Высчитываем позицию по оси Y

            // Непосредственно перенос      
            $(this).css("transform", "translate3d(" + xPos + "px, " + yPos + "px, 0px)");

        });
    });

    $(".business").mousemove(function (e) {
        let elem = $(this),
            pos = elem.offset(),
            elem_left = pos.left,
            elem_top = pos.top,
            elem_width = elem.width(),
            elem_height = elem.height(),
            x_center,
            y_center;

        x_center = (elem_width / 2) - (e.pageX - elem_left);
        y_center = (elem_height / 2) - (e.pageY - elem_top);

        $(".business .parallax").each(function () {

            let speed = $(this).attr("data-speed"),
                xPos = Math.round(-1 * x_center / 40 * speed),
                yPos = Math.round(-1 * y_center / 40 * speed);
   
            $(this).css("transform", "translate3d(" + xPos + "px, " + yPos + "px, 0px)");

        });
    });

    $(".top-private").mousemove(function (e) {

        let elem = $(this),
            pos = elem.offset(),
            elem_left = pos.left,
            elem_top = pos.top,
            elem_width = elem.width(),
            elem_height = elem.height(),
            x_center,
            y_center;

        x_center = (elem_width / 2) - (e.pageX - elem_left);
        y_center = (elem_height / 2) - (e.pageY - elem_top);

        $(".top-right .parallax").each(function () {

            let speed = $(this).attr("data-speed"),
                xPos = Math.round(-1 * x_center / 40 * speed),
                yPos = Math.round(-1 * y_center / 40 * speed);
   
            $(this).css("transform", "translate3d(" + xPos + "px, " + yPos + "px, 0px)");

        });
    });

    //Foot-popup
    $(".foot-popup-link span").on("click", function () {
        $(this).parent().addClass("foot-popup-active");
    });

    $(".foot-popup-close").on("click", function () {
        $(".foot-popup-link").removeClass("foot-popup-active");
    });

});