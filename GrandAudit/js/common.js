// <!-- скрипт анимированная кнопка меню для маленьких экранов -->

$('#toggleMenuBut').click(function () {
    $('#toggleMenuBut').toggleClass("on");
    if ($('.leftMenu').css('left') == '0px') {
        $('.leftMenu').animate({
            left: '-260px'
        }, 500);
    } else {
        $('.leftMenu').animate({
            left: '0px'
        }, 500);
    }
});


$(".smallCircle.leftTop").on('mouseover', function () {
    $(".textBlock h3").removeClass("red");
    $(".textBlock.leftTopText h3").addClass("red");
});
$(".smallCircle.rightTop").on('mouseover', function () {
    $(".textBlock h3").removeClass("red");
    $(".textBlock.rightTopText h3").addClass("red");
});
$(".smallCircle.leftBottom").on('mouseover', function () {
    $(".textBlock h3").removeClass("red");
    $(".textBlock.leftBottomText h3").addClass("red");
});
$(".smallCircle.rightBottom").on('mouseover', function () {
    $(".textBlock h3").removeClass("red");
    $(".textBlock.rightBottomText h3").addClass("red");
});

// ховеры над кругами на главной странице 
$(".leftTop").on("mouseover", function () {
    $(".lt, .rt, .rb, .lb").addClass("disnone");
    $(".lt").removeClass("disnone");
});
$(".rightTop").on("mouseover", function () {
    $(".lt, .rt, .rb, .lb").addClass("disnone");
    $(".rt").removeClass("disnone");
});
$(".leftBottom").on("mouseover", function () {
    $(".lt, .rt, .rb, .lb").addClass("disnone");
    $(".lb").removeClass("disnone");
});
$(".rightBottom").on("mouseover", function () {
    $(".lt, .rt, .rb, .lb").addClass("disnone");
    $(".rb").removeClass("disnone");
});




// анимационные эффекты при прокрутке до нужных элементов
window.onscroll = function () {
    // функция для анимации блоков (универсальная через дата-атрибуты)

    // animBlocks();

    (function animBlocks() {
        $('.animBlock').each(function () {
            var animClass = $(this).data('animclass');
            if ($(document).scrollTop() + $(window).height() - $(this).offset().top > 100) {
                $(this).removeClass("invis").addClass(animClass);
            };
        });
    }());
};


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        // autoWidth:true,
        navText: ['<span class="icon icon-left-open-big"></span>',
            '<span class="icon icon-right-open-big"></span>'
        ],
        responsive: {
            0: {
                items: 1,
                // margin: 50,
            },
            600: {
                items: 2
            },
            991: {
                items: 3,
                // margin: 100,
            }
        }
    });


    // Javascript to enable link to tab
    // var url = document.location.toString();
    var hash = window.location.hash.substring(5);
    // alert(hash);
    // alert(hash);
    if (hash) {
        $('.nav-tabs a[href="#' + hash + '"]').tab('show');
        // $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    };

    // Change hash for page-reload
    // $('.nav-tabs a').on('shown.bs.tab', function (e) {
    //     window.location.hash = e.target.hash;
    // });
});