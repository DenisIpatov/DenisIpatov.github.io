// верхняя карусель
$('#owl1').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    dots: false,
    nav: true,
    navText: ['<span class="glyphicon glyphicon-chevron-left"></span>',
        '<span class="glyphicon glyphicon-chevron-right"></span>'
    ],
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 700,
    navSpeed: 700,
    dotsSpeed: 700,
    dragEndSpeed: 700,
});
// карусель в низу экрана
$('#owl2').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: true,
    navText: ['<span class="glyphicon glyphicon-chevron-left"></span>',
        '<span class="glyphicon glyphicon-chevron-right"></span>'
    ],
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    animateOut: 'fadeOutLeft',
    animateIn: 'fadeInRight',
    responsive: {
        0: {
            mouseDrag: true,
            items: 3,
            slideBy: 3,
        },
        991: {
            items: 4,
            slideBy: 4,
            mouseDrag: false,
        }
    }
});
$('#owl3').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    dots: false,
    nav: true,
    navText: ['<span class="glyphicon glyphicon-chevron-left"></span>',
        '<span class="glyphicon glyphicon-chevron-right"></span>'
    ],
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3,
            slideBy: 3,
        },
        992: {
            items: 4,
            slideBy: 4,
        }
    }
});
$('#owl4').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    dots: false,
    nav: true,
    navText: ['<span class="glyphicon glyphicon-chevron-left"></span>',
        '<span class="glyphicon glyphicon-chevron-right"></span>'
    ],
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        769: {
            items: 3,
        }
    }
});
// эта часть для эффектов на иконках (когда меняется слайд, чтобы на иконке отображалось (становилась черной))
var owl = $('#owl1');
// Listen to owl events:
owl.on('translate.owl.carousel', function (event) {
    var index;
    //почему-то index текущего кадра больше на 2 (2,3,4,5) вместо (0,1,2,3), а при перетаксивании мышкой первый кадр становится шестым, поэтому проверка
    if (event.item.index == 6) {
        index = 0;
    } else {
        index = event.item.index - 2
    }
    $(".slideIcons").removeClass("active");
    $(".slideIcons[data-item=" + index + "]").addClass("active");
});


// скрипт при нажатии на иконки слайдера (смена слайдера)
$(".slideIcons").on("click", function () {
    var dataItem = $(this).attr("data-item");
    $(".slideIcons").removeClass("active");
    $(this).addClass("active");
    $('.owl-carousel').trigger('to.owl.carousel', [dataItem, 700]);
});

// анимационные эффекты при прокрутке до нужных элементов
window.onscroll = function () {
    // функция для анимации блоков (универсальная через дата-атрибуты)

    // animBlocks();

    (function animBlocks() {
        $('.animBlock').each(function () {
            var offSet = $(this).data('offset');
            var animClass = $(this).data('animclass');
            if ($(document).scrollTop() + $(window).height() - $(this).offset().top > offSet) {
                $(this).removeClass("invisible").addClass(animClass);
            };
        });
    }());

    if ($('.anim-block').length) {
        if ($(document).scrollTop() + $(window).height() - $('.anim-block').offset().top > 100) {
            scaleDivs();
        };
    };
    if ($('.animBlock2').length) {
        if ($(document).scrollTop() + $(window).height() - $('.animBlock2').offset().top > 100) {
            slideDivs();
        };
    };
    if ($('.fading').length) {
        if ($(document).scrollTop() + $(window).height() - $('.fading').offset().top > 200) {
            fadingDivs();
        };
    };

    if ($('.fading2').length) {
        if ($(document).scrollTop() + $(window).height() - $('.fading2').offset().top > 200) {
            fading2Divs();
        };
    };
    if ($('.question').length) {
        if ($(document).scrollTop() + $(window).height() - $('.question').offset().top > 200) {
            zoomDivs();
        };
    };
    if ($('footer').length) {
        if ($(document).scrollTop() + $(window).height() - $('footer').offset().top > 300) {
            footerDivs();
        };
    };
    if ($('.offer').length) {
        if ($(document).scrollTop() + $(window).height() - $('.offer').offset().top > 50) {
            $('.offer p:first').addClass("animated slideInDown");
            setTimeout(function () {
                $('.offer h2:first').removeClass("invisible").addClass("animated slideInDown");
            }, 300);
        };
        if ($(document).scrollTop() + $(window).height() - $('.offer img').offset().top > 100) {
            $('.offer img').addClass("animated fadeIn");
        };
        if ($(document).scrollTop() + $(window).height() - $('.offer h2:last').offset().top > 50) {
            $('.offer h2:last').addClass("animated slideInDown");
            setTimeout(function () {
                $('.offer p:last').removeClass("invisible").addClass("animated slideInDown");
                $('.offer a').removeClass("invisible").addClass("animated slideInUp");
            }, 300);

        };

    };
    if ($('.blueFon').length) {
        if ($(document).scrollTop() + $(window).height() - $('.blueFon').offset().top > 100) {
            blueFonFade();
        };
    };
    if ($('#calcul').length) {
        if ($(document).scrollTop() + $(window).height() - $('#calcul').offset().top > 100) {
            calculAnim();
        };
    };


    if ($(document).scrollTop() > 400) {
        fixedMenu();
    } else {
        unfixedMenu();
    };
    if ($('.astra').length) {
        if ($(document).scrollTop() + $(window).height() - $('.astra').offset().top > 100) {
            astraMove();
        };
    };

    if ($('#free').length) {
        if ($(document).scrollTop() + $(window).height() - $('#free').offset().top > 100) {
            if ($('.fading').length) {
                var elem = $('.fading');
                elem.each(function (i) {
                    $(this).delay(250 * i).queue(function () {
                        $(this).removeClass("invisible").addClass('animated fadeIn');
                    });
                });
            };
        };
    };

    if ($('#dogovor').length) {
        if ($(document).scrollTop() + $(window).height() - $('#dogovor').offset().top > 100) {
            if ($('#dogovor .zooming').length) {
                var elem = $('#dogovor .zooming');
                elem.each(function (i) {
                    $(this).delay(250 * i).queue(function () {
                        $(this).removeClass("invisible").addClass('animated zoomingStart fadeIn ');
                    });
                });
            };
        };
    };

    function astraMove() {
        var scrTop = $(document).scrollTop();
        $('.anim-down-scroll').css({
            "transform": "translateY(" + scrTop / 6 + "px)"
        });
    };

    function scaleDivs() {
        var elem = $('.scale-block');
        elem.addClass('scaling');
    };

    function slideDivs() {
        $("#slideLeftFirst").addClass('animated slideInLeft');
        $("#slideRightFirst").addClass('animated slideInRight');
        setTimeout(function () {
            $("#slideLeftSecond").removeClass("hidden").addClass('animated slideInLeft');
            $("#slideRightSecond").removeClass("hidden").addClass('animated slideInRight');
        }, 300);
    };

    function fadingDivs() {
        $(".fading").addClass('animFade');
    };

    function fading2Divs() {
        $(".fading2").addClass('animFade');
    };

    function zoomDivs() {
        $(".wrapForm").addClass('animated zoomIn');
        var elem = $('.wrapForm .form-group');
        elem.each(function (i) {
            $(this).delay(250 * i).queue(function () {
                $(this).removeClass("invisible").addClass('animated zoomIn');
            });
        });
    };

    function footerDivs() {
        $("#animLeftBlock").removeClass("invisible").addClass("animated slideInLeft");
        $("#animBottomBlock").removeClass("invisible").addClass("animated slideInUp");
        $("#animRightBlock").removeClass("invisible").addClass("animated slideInRight");
        $(".animFooterUp").removeClass("invisible").addClass("animated slideInUp");
    };

    function fixedMenu() {
        if (!$(".menuTop2").hasClass("view")) {
            $(".menuTop2").addClass("view");
        };
    };

    function unfixedMenu() {
        if ($(".menuTop2").hasClass("view")) {
            $(".menuTop2").removeClass("view");
        };
    };

    function blueFonFade() {
        $(".blueFon").addClass("animated fadeIn");
    };



    function calculAnim() {
        $("#calcul h2").addClass('animated slideInDown');
        $("#calcul .calculBlocks").addClass('animated zoomIn');
        $("#calcul a[type='button']").addClass('animated slideInUp');

    };


};

$(document).ready(function () {
    $(".astras").removeClass("scaleAstra");
    if ($('#holod .scale-block').length) {
        $(".scale-block").addClass("scaling");
        $(".slideReady").addClass("animated slideInUp");
    };

    if ($('.animOnLoad').length) {
        $('.animOnLoad').each(function () {
            var animClass = $(this).data('animclass');
            $(this).removeClass("invisible").addClass(animClass);
        });
    };
    if ($('#service .zooming').length) {
        var elem = $('#service .zooming');
        elem.each(function (i) {
            $(this).delay(300 * i).queue(function () {
                $(this).removeClass("invisible").addClass('zoomingStart animated fadeIn');            });
        });
    };
    

});