$(function () {

  //Mob-menu
  $('.open-mob-menu').on('click', function () {
    $('.mob-menu').animate({
      left: 0
    }, 500);
  });

  $('.close-mob-menu').on('click', function () {
    $('.mob-menu').animate({
      left: '-100%'
    }, 500);
  });

  //Sidebar
  $('.bar-open-menu').on('click', function () {
    $('.sidebar-nav').animate({
      right: 0
    });
  });
  $('.close-mob-sidebar').on('click', function () {
    $('.sidebar-nav').animate({
      right: '-100%'
    });
  });

  //Open-catalogue
  $('.catalogue').on('click', function () {
    $('.catalogue-list').slideToggle(400);
  });

  //Sidebar-slide
  $('.open-submenu').on('click', function () {
    $(this).next().slideToggle();
    return false;
  });

  //Sidebar-top-slider
  $('.bar-top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  //Sidebar-plus-slider
  $('.bar-plus-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  //Sidebar-comments-slider
  $('.bar-comments-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  //Sidebar-news-slider
  $('.bar-news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  //Tabs

  $('.tab-list a').on('click', function() {
    $(".tab-list a").removeClass('active-tab');
    $(this).addClass('active-tab');
    $('.content').removeClass('active-cont').eq($(this).index('.tab-list a')).addClass('active-cont');
    return false;
  });

  //Commets-slider
  $('.comments-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //News-slider
  $('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

});