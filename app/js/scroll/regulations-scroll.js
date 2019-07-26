$(function () {

  //Scroll
  $(window).scroll(function () {

    let topWindow = $(window).scrollTop();

    if (topWindow + 300 > $(".reg-one-block").offset().top) {

      $(".reg-left-top").addClass("slideInUp").removeClass("hidden");

      setInterval(() => {
        $(".reg-left-bottom").addClass("slideInUp").removeClass("hidden");
      }, 300);

      setInterval(() => {
        $(".reg-right").addClass("slideInRight").removeClass("hidden");
      }, 500);
      
    }

  });

});