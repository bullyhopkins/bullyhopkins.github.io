var list = $('#sidebar .nav');
var parts = $('#wrapper .part');

// массив значений нижних границ частей
var botPos = parts.map(function(){
    return $(this).offset().top + $(this).height();
}).get();
// сравниваем значение текущей прокрутки страницы
// со значениями з массива (выше) и возвращает индекс
Array.prototype.getIndex = function(s) {
    var i = 0;
    for(i; i < this.length; i++){
        if(s <  this[i]) {
            return i;
        }
    }
};
// Меняем активный пункт в списке сайдбара при скролле
$(document).on('scroll',function(e){
    list.removeClass('active');
    list.eq(botPos.getIndex($(this).scrollTop())).addClass('active');
});
// По клику на пунк меню, скроллим до нужной части
list.click(function(){
    var toPos = parts.eq($(this).index()).offset().top;
    $('html,body').animate({
        scrollTop: toPos
    }, 650);
});
