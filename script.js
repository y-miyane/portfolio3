
$(document).ready(function() {
    $(".header_icon_hmb").click(function() {
      $(".header_wrap").toggleClass("open");
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


