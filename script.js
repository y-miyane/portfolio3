
// header //

$(document).ready(function() {
    $(".header_icon_hmb").click(function() {
      $(".header_wrap").toggleClass("open");
      $("body").toggleClass("no-scroll");
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


// faqボタン //

$(function() {
    $(".faq_detail_list_item__btn.a-btn-1").click(function() {
        $(".faq_detail_list_item.a-1").slideToggle("");
    });
});

$(function() {
    $(".faq_detail_list_item__btn.a-btn-2").click(function() {
        $(".faq_detail_list_item.a-2").slideToggle("");
    });
});

$(function() {
    $(".faq_detail_list_item__btn.a-btn-3").click(function() {
        $(".faq_detail_list_item.a-3").slideToggle("");
    });
});


$(document).ready(function() {
    $('.faq_detail_list_item__btn').click(function() {
        var secondSpan = $(this).find('span:nth-of-type(2)');
        secondSpan.toggleClass('open');
    });
});


