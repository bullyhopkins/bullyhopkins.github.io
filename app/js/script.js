$(function () {
  $('.slider-wrap').slick({
    dots: true
  });

  $('.comments-slider').slick({
    slidToShow: 1
  });

  $('.tabs-list li').on('click', function () {
    $('.tabs-list li').each(function (inx, elem) {
      $(elem).removeClass('active-tab');
    });
    $(this).addClass('active-tab');
    return false;
  });

  $('.learn-more-left').on('click', function () {
    $('.sub-trip-item').slideDown();
    return false;
  });

});