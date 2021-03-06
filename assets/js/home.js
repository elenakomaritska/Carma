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

  // кнопка ютуб
  $('#play2').on('click', function (e) {
    e.preventDefault();
    $("#playerPopoup").attr('src', '')
    var a = $('#playerPopoup').attr("data-youtube");
    $('#playerPopoup').attr('src', a);
    $('#playerPopoup').show();
    $('#video-cover2').hide();
    $('#play2').hide();
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
  $('#reviews2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    dots: false,
    fade: true,
    cssEase: 'linear',
    nextArrow: $('#next2')
  })

  $('#reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    dots: false,
    fade: true,
    cssEase: 'linear',
    nextArrow: $('#next')
  })


  $('input').focusin(function () {
    $(this).parent('.form-column').addClass('active')
  })

  $('input').focusout(function () {
    $(this).parent('.form-column').removeClass('active')
  })

  $('.errore.active').parent('.form-column').addClass('errore-input')

  $('.show').on('click', function () {
    $(this).toggleClass('active').parent('.action').prev('ul').toggleClass('active')
    $('.show').text('Learn more')
    $('.show.active').text('Roll up')
  })


  var HashValue = location.hash;

  location.hash = '';
  if (HashValue[1] != undefined) {
    $('html, body').animate({
      scrollTop: $(HashValue).offset().top - 60
    }, 'slow');
  };

  //Scroll to id
  function handler(event) {
    var hash = event.target.hash;
    var headerHeight = $('header').height();
    if (hash) {
      event.preventDefault();
      if ($(hash).length) {
        var offset = $(hash).offset().top - $('header').height();
        $('html, body').stop().animate({
          scrollTop: offset
        }, 'slow');
        //console.log(offset);
      }
    }
  }
  //End scroll to id
  $('.nav a').on("click", handler);
})