$(window).resize(function () {

  if ($(window).width() >= 1024) {
    $('.title-align').matchHeight({
      byRow: false
    });
    $('.list-align').matchHeight({
      byRow: false
    });
    $('.text-align').matchHeight({
      byRow: false
    });
  }
  if ($(window).width() > 1439) {
    $('.text-align').matchHeight({
      remove: true
    });
  }
})

if ($(window).width() >= 1024) {
  $('.title-align').matchHeight({
    byRow: false
  });
  $('.list-align').matchHeight({
    byRow: false
  });
  $('.text-align').matchHeight({
    byRow: false
  });
}
if ($(window).width() > 1439) {
  $('.text-align').matchHeight({
    remove: true
  });
}


$(document).ready(function () {

  // кнопка ютуб
  $('#play').on('click', function (e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $('#player').show();
    $('#video-cover').hide();
    $('#play').hide();
  })

  // Счетчик
  function countup(className) {
    var countBlockTop = $(".section-market .list").offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll(function () {
      if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
        show = false;

        $('.' + className).spincrement({
          from: 1,
        });
      }
    })
  }
  $(function () {
    countup("count", $(".section-market.count").text());
  });

  //slider-media

  $('.section-media .list-media').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 600,
    dots: false,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      }
    ]
  })


  //slider section-reviews
  $('.section-reviews .list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    dots: false,
    fade: true,
    cssEase: 'linear',
    nextArrow: $('.next')
  })


  $('input').focusin(function () {
    $(this).parent('.form-column').addClass('active')
  })

  $('input').focusout(function () {
    $(this).parent('.form-column').removeClass('active')
  })

  $('.errore.active').parent('.form-column').addClass('errore-input')

  $(".go-to").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - $('.header').height();
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
})