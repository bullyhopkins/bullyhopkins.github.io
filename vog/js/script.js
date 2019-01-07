$(function () {

  //SHADOW-HEAD
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('header').addClass('header-shadow');
    } else {
      $('header').removeClass('header-shadow');
    }
  });

  //LINKS
  $(".anchor").on("click", function (event) {
    var id  = $(this).attr('href'),
        top = $(id).offset().top - $('header').height();
    $('body,html').animate({scrollTop: top}, 1000);
    event.preventDefault();
  });

  //Mob-menu
  $('.open-mobile-menu').on('click', function () {
    $('.mobile-menu').animate({
      left: 0
    }, 500);
  });

  $('.close-mob-menu').on('click', function () {
    $('.mobile-menu').animate({
      left: '-100%'
    }, 500);
  });

  //POPUP
  $('.top-btn').on('click', function () {
    $('.popup').fadeIn(300);
    return false;
  });

  $('.close-popup').on('click', function () {
    $('.popup').fadeOut(300);
    return false;
  });

  $('.am-sel').selectmenu();
  $('.lang-sel').selectmenu();

  $('.news-slider').slick({
    dots: true,
    arrows: true,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
          // arrows: false
        }
      }
    ]
  });

  $('.comments-slider').slick({
    dots: true,
    arrows: true,
    nextArrow: $('.next-com'),
    prevArrow: $('.prev-com'),
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          // arrows: false
        }
      }
    ]
  });

});