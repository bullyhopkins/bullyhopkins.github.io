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

  //PAGE-PRODUCT

  //Product-slider
  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-now'
  });
  $('.slider-now').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product-slider',
    nextArrow: '.next-now',
    prevArrow: '.prev-now',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.tabs-list a').on('click', function () {
    let linkTab = $(this).attr('href');
    $('.tabs-list li').removeClass('active-tab');
    $(this).parent().addClass('active-tab');
    $('.content').fadeOut(400);
    $('.'+linkTab).fadeIn(400);
    return false;
  });

  $(".product-slider1").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $(".product-slider2").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //PAGE-WORKS
  $('.lightzoom').lightzoom({
    speed: 400,
    viewTitle: false,
    isOverlayClickClosing: true
  });

  //PAGE-CONTACTS
  $(".slider-comments").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //PAGE-CATALOGUE
  $('.sidebar-list a').on('click', function () {
    // if ($(this).children(".list-arrow"))
    $(this).children(".list-arrow").toggleClass('active-list');
    $(this).next(".sub-list").slideToggle();
    return false;
  });

  $('.catalog-content .type-item').on('click', function () {
    $('.type-item img').removeClass('catalog-active-select');
    $(this).children('img').toggleClass('catalog-active-select');
  });
  $('.catalog-content .material-item').on('click', function () {
    $('.material-item img').removeClass('catalog-active-select');
    $(this).children('img').toggleClass('catalog-active-select');
  });
});