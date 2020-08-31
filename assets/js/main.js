document.addEventListener("touchstart", function () {}, true);

var sectionHeight = $('.section-media').height()

$(window).scroll(function () {
    if ($(window).scrollTop() >= sectionHeight) {
        $('header').css('background-color', '#151F49').removeClass('out').removeClass('topAbsolute')
            .css('position', 'fixed').addClass('active')
    } else if ($(window).scrollTop() >= 400) {
        $('header').addClass('out')
    } else {
        $('header').css('background-color', 'inherit').css('position', 'absolute').addClass('topAbsolute')

    }
});


$(document).ready(function () {

    //Меню

    $('.open-menu').on('click', function () {
        $('.menu-mobile').toggleClass('active')
    });

    $('.overlay-header').on('click', function () {
        $('.menu-mobile').removeClass('active')
        $(this).removeClass('active');
    });

    $('.menu-mobile a').on('click', function () {
        $('.menu-mobile').removeClass('active');
    });


    $('.close-menu').on('click', function () {
        $('.menu-mobile').removeClass('active');
    })

    jQuery(function (a) {
            a(document).mouseup(function (b) {
                var c = a(".menu-mobile");
                c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active"),
                    a(".menu-mobile").removeClass("active"))
            })
        }),



        //Попапы
        jQuery(function (a) {
            a(document).mouseup(function (b) {
                var c = a(".modall-body");
                c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modall"),
                        a(".modall").removeClass("active-modall"),
                        a(".body").removeClass("showing-modal")),
                    $("#playerPopoup").attr('src', '')
            })
        }),

        $('.close').on('click', function () {
            $(".modall").removeClass('active-modall');
            $('.body').removeClass('showing-modal');
            $("#playerPopoup").attr('src', '')
        });

    $('.link-video').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-video").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

});