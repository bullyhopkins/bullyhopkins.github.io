$(function () {

  //Scroll-block
  $('#fullpage').fullpage({
    //options here
    // autoScrolling: true,
    // scrollHorizontally: true,
    loopBottom: true,
    // menu: '.top-block-scroll',
    // paddingTop: 120
    // afterLoad: function (origin, destination) {
    //   if (destination.index == 0) {
    //     $(".head").removeClass("dark-menu");
    //   } else {
    //     $(".head").addClass("dark-menu");
    //   }
    // }
  });

  //Main-menu
  $(".open-menu").on("click", function () {
    // alert(1);
    $(".popup-menu").animate({
      width: "100%",
      padding: "0 20px"
    }, 1000).animate({
      height: "100%"
    }, 1000);
  });

  //Close popup menu
  $(".close-menu").on("click", function () {
    $(".popup-menu").animate({
      height: "10px"
    }, 1000).animate({
      width: "0",
      padding: "0"
    }, 1000);
  });

  particlesJS("particles", {
    "particles": {
      "number": {
        "value": 130,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 1
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 130,
        "color": "#000000",
        "opacity": 0.6,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  const stepsSlider = new Swiper(".steps-right", {
    speed: 400,
    effect: 'flip',
    navigation: {
      nextEl: '.step-next',
      prevEl: '.step-prev',
    },
    on: {
      slideChange: function () {
        // alert(this.activeIndex);
        $(".step-content").removeClass("active-step");
        $(".step-content")[this.activeIndex].classList += " active-step";
      }
    }
  });
});