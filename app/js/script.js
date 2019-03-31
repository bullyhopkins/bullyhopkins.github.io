$(function () {

  //Open mob menu
  $('.open-menu').on('click', function () {

    $('.mob-menu-wrap').animate({
      left: "0"
    }, 800);
    
    return false;
  });

  $('.close-menu').on('click', function () {

    $('.mob-menu-wrap').animate({
      left: "-100%"
    }, 800);
    
    return false;
  });


  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.main-next',
    prevArrow: '.main-prev',
    dots: true
    // arrows: false
  });

  $(".goods-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: '.goods-next',
    prevArrow: '.goods-prev',
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

});