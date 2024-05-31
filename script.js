
$(function () {
    var webStorage = function () {
      if (sessionStorage.getItem('access')) {
        
        $(".start").addClass('is-active');
      } else {
        sessionStorage.setItem('access', 'true'); 
        $(".start_logo").addClass('is-active'); 
        setTimeout(function () {
          $(".start").addClass('is-active');
          $(".start_logo").removeClass('is-active');
        }, 3000); 
      }
    }
    webStorage();
  });


// header //

$(document).ready(function() {
    var scrollPosition;

    $(".header_icon_hmb").click(function() {
        if ($("body").hasClass("no-scroll")) {
            $("body").removeClass("no-scroll").css({
                position: '',
                top: ''
            });
            window.scrollTo(0, scrollPosition);
        } else {
            scrollPosition = window.pageYOffset;
            $("body").addClass("no-scroll").css({
                position: 'fixed',
                top: -scrollPosition + 'px'
            });
        }
        $(".header_wrap").toggleClass("change");
    });
});



$(document).ready(function() {

    const imageArea = document.getElementById('imageArea');
    const images = ['image/header_nav_img1.png', 'image/header_nav_img2.png', 'image/header_nav_img3.png'];

    const imageNo = Math.floor(Math.random() * images.length);
    imageArea.src = images[imageNo];
});

  
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
});



// productsボタン //

$(document).ready(function(){
    $(".products_menu_btn").click(function(){
        var category = $(this).data("category");
        $("[class^='products_all_']").hide();
        $(".products_all_" + category).show();
        $(".products_menu_btn").removeClass("select");
        $(this).addClass("select");
    });
});

// newsスライダー //
$(function() {
    $('.news_list').slick({
        slidesToShow: 2.9,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: false,
        speed: 300,
        prevArrow: $('.view_all_btn'),
        nextArrow: $('.view_all_btn_next'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.6, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 1120,
            settings: {
                slidesToShow: 2.3, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 990,
            settings: {
                slidesToShow: 2.1, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 880,
            settings: {
                slidesToShow: 2, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 840,
            settings: {
                slidesToShow: 1.9, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 2, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 650,
            settings: {
                slidesToShow: 1.6, 
                variableWidth: false, 
                speed: 300,
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.4, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 450,
            settings: {
                slidesToShow: 1.3, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 380,
            settings: {
                slidesToShow: 1.1, 
                variableWidth: false, 
                speed: 300,
            }
        },{
            breakpoint: 320,
            settings: {
                slidesToShow: 1, 
                variableWidth: false, 
                speed: 300,
            }
        }]
    });
});


$('.news_list').on('setPosition', function(){
    $('.slick-list').css('overflow', 'visible');
});




// news view_allボタン //

$(document).ready(function() {
    $(".view_all a").hover(function() {
        $(".view_all span").addClass("none");
    }, function() {
        $(".view_all span").removeClass("none");
    });
});





    $('.news_list').on('afterChange', function(event, slick, currentSlide) {
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;


        if (currentSlide === 0) {
            $('.view_all_btn').removeClass('enabled');
        } else {
            $('.view_all_btn').addClass('enabled');
        }
        
    });

    $('.view_all_btn_next').on('click', function() {
        if ($('.view_all_btn_next').hasClass('enabled')) {
            $('.view_all_btn').addClass('enabled');
        }
    });



// faqボタン //

$(function() {
    $(".faq_detail_list_item.q.q-1").click(function() {
        $(".faq_detail_list_item.a-1").slideToggle("");
    });
});

$(function() {
    $(".faq_detail_list_item.q.q-2").click(function() {
        $(".faq_detail_list_item.a-2").slideToggle("");
    });
});

$(function() {
    $(".faq_detail_list_item.q.q-3").click(function() {
        $(".faq_detail_list_item.a-3").slideToggle("");
    });
});


$(document).ready(function() {
    $('.faq_detail_list_item').click(function() {
        var secondSpan = $(this).find('span:nth-of-type(2)');
        secondSpan.toggleClass('open');
    });
});

        
// spのbrand スライダー //
$(function(){
    function sliderSetting(){
        var width = $(window).width();
        if(width <= 768){
            $('.brand_list').not('.slick-initialized').slick({
                centerMode: false,
                arrows:true,
                infinite: true,
                dots:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0px',
            });
        } else {
            $('.slide.slick-initialized').slick('unslick');
        }
    }
    sliderSetting();
    $(window).resize(function(){
        sliderSetting();
    });
});


// spのproducts ドロップダウンメニュー //
$(document).ready(function(){
    $("select").change(function(){
        var selectedOption = $(this).val();
        $("[class^='products_all_']").hide();
        $(".products_all_" + selectedOption).show();
    });
});



// フェードイン//

$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.fadein').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('scrollin');
            }
        });
    });

    $(window).trigger('scroll');
});


// スムーススクロール //
$(function(){
    $('a[href^="#"]').click(function(){
      var adjust = 0;
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });