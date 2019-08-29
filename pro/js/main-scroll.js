$(function () {

  $(window).scroll(function () {
    scrollPage();
  });

  //Scroll

  function scrollPage() {
    if ($(window).scrollTop() + 70 > $(".services").offset().top) {
      $(".top-menu").addClass("top-menu-scroll");
    } else {
      $(".top-menu").removeClass("top-menu-scroll");
    }

    if ($(window).scrollTop() > $(".two-section").offset().top - 300) {
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

    // if ($(window).scrollTop() > $(".five-section").offset().top - 200) {
    //     $(".step-left-block").addClass("slideUp");
    //     $(".step-right-block").addClass("slideLeft");
    // }

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

    if ($(window).scrollTop() > $(".twelve-section").offset().top - 300) {
      $(".team-h").addClass("anim-text");
      $(".team-bg-block").animate({
        height: "1081px"
      }, 10000);
      $(".team-img-wrap").animate({
        height: "305px"
      }, 1500);
      $(".team-descr-wrap").addClass("team-descr-anim");
    }
  }

  scrollPage();

});