$(function () {

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

    //Scroll top menu
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".two-section").offset().top) {
            $(".top-menu").addClass("top-menu-scroll");
        } else {
            $(".top-menu").removeClass("top-menu-scroll");
        }
    });

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
    });

    //Close popup menu
    $(".close-menu").on("click", function () {
        $(".main-menu").animate({
            height: "10px"
        }, 1000).animate({
            width: "0",
            padding: "0"
        }, 1000);
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
    });

    //Close Popups
    $(".close").on("click", function () {
        let popupId = $(this).attr("data-close");
        $("#" + popupId).fadeOut(400);
    });

    /* FORMS */

    $(".select-foot").select2();

    $("#led-phone, .phone-mask").mask("+1 (999) 999-99-99");

    $(".select").select2();

    $(".inp-date").mask("99/99/9999", { placeholder: "mm/dd/yyyy" });

    /* FORMS END */

});