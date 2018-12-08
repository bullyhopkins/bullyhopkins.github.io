$(function () {

  $('.news-slider').slick({
    dots: true,
    arrows: true,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    slidesToShow: 3,
    slidesToScroll: 3,
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
          arrows: false
        }
      }
    ]
  });

});