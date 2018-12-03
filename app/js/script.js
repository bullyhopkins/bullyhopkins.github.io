$(function () {
  $('.slider-wrap').slick({
    dots: false
  });

  $('.comments-slider').slick({
    slidToShow: 1
  });

  //TABS
  $('.tabs-list li').on('click', function () {
    $(this)
      .addClass('active-tab').siblings().removeClass('active-tab')
      .closest('.trip-item').find('.trip-tabs-content').removeClass('active-content').eq($(this).index()).addClass('active-content');
    // $('.tabs-list li').each(function (inx, elem) {
    //   $(elem).removeClass('active-tab');
    // });

    // $('.trip-tabs-content').removeClass('active');

    // var tab = this.attr('data-tab');

    
    // $(this).addClass('active-tab');

    // $('.'+tab).addClass('active');

    return false;
  });

  //Slide-trip-item
  $('.learn-more-left').on('click', function () {
    $(this).parentsUntil('.trip-item').children('.sub-trip-item').slideDown();
    $(this).parentsUntil('.trip-item').children('.learn-more').fadeOut(400);
    $(this).fadeOut(400);
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