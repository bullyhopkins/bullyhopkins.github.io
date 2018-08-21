
$(document).ready(function(){
  // Осуществляет переход на 0 слайд карусели 
  $(".slide-one").click(function(){
    $("#myCarousel2").carousel(0);
  });
  // Осуществляет переход на 1 слайд карусели 
  $(".slide-two").click(function(){
    $("#myCarousel2").carousel(1);
  });
  // Осуществляет переход на 2 слайд карусели 
  $(".slide-three").click(function(){
    $("#myCarousel2").carousel(2);
  });
});