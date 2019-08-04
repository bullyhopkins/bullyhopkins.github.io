$(function () {
  $(".reg-h").addClass("slideInUp").removeClass("hidden");

  setInterval(() => {
    $(".reg-descr").addClass("slideInUp").removeClass("hidden");
  }, 300);

  setInterval(() => {
    $(".reg-sub-h").addClass("slideInUp").removeClass("hidden");
  }, 500);

  setInterval(() => {
    $(".reg-sub-h").addClass("slideInUp").removeClass("hidden");
    $(".reg-right").addClass("slideInUp").removeClass("hidden");
  }, 500);

  setInterval(() => {
    $(".reg-item1").addClass("slideInUp").removeClass("hidden");
  }, 500);
  setInterval(() => {
    $(".reg-item2").addClass("slideInUp").removeClass("hidden");
  }, 700);
  setInterval(() => {
    $(".reg-item3").addClass("slideInUp").removeClass("hidden");
  }, 900);
  setInterval(() => {
    $(".reg-item4").addClass("slideInUp").removeClass("hidden");
  }, 1100);
  setInterval(() => {
    $(".reg-item5").addClass("slideInUp").removeClass("hidden");
  }, 1300);
  setInterval(() => {
    $(".reg-item6").addClass("slideInUp").removeClass("hidden");
  }, 1500);
  setInterval(() => {
    $(".reg-item7").addClass("slideInUp").removeClass("hidden");
  }, 1700);

  //Scroll
  $(window).scroll(function () {

    let topWindow = $(window).scrollTop();

    // if (topWindow + 300 > $(".reg-one-block").offset().top) {}

  });

});