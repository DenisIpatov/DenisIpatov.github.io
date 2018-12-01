$(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: (top - 65)}, 1000);
    });
});

$(window).scroll(function(){
    $(".navbar-nav a").each(function () {
        var hash = $(this).attr('href');
        if  ($(window).scrollTop() > ($(hash).offset().top - 130)) {
            $('.nav-item').removeClass('active');
            $('.nav-item').has('a[href="'+ hash +'"]').addClass('active');
    }
});
});