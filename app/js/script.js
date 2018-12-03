$(function () {
  $('.slider-wrap').slick({
    dots: false
  });

  $('.comments-slider').slick({
    slidToShow: 1
  });

  //TABS
  $('.tabs-list li').on('click', function () {
    $('.tabs-list li').each(function (inx, elem) {
      $(elem).removeClass('active-tab');
    });
    $(this).addClass('active-tab');
    return false;
  });

  $('.learn-more-left').on('click', function () {
    $('.sub-trip-item').closest('.sub-trip-item').slideDown();
    $('.learn-more-left').fadeOut(400);
    $('.learn-more').fadeOut(400);
    // $(this)
    //   .addClass('active').siblings().removeClass('active')
    //   .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    return false;
  });

  //Open-mobile-menu
  $('.open-menu-mobile').on('click', function () {
    $('.mobile-menu').animate({
      left: 0
    }, 500);
  });

  //Close mob-menu
  $('.close-mob-menu').on('click', function () {
    $('.mobile-menu').animate({
      left: '-100%'
    }, 500);
  });

});