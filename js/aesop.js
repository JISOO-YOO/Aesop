
$(document).ready(function(){

  $('.slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: function(slider, i) { 
        // console.log($(slider.$slides[i]).html());
        return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>'},

    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



//   nav 메뉴창 on

  var gnb = $('.gnb')
  var nw = $('.navWrap')
  var btn = $('.navBtn')
  var btnc = $('.navBtn_close')

//   btn.click(function(){
//     if(gnb.toggleClass('on')){
//         gnb.removeClass('on');
//         gnb.css({left:0, display:'block'});
//         btn.css({display:'none'});
//         btnc.css({display:'block'});
//     } else {
//         gnb.toggleClass('on');
//         btnc.css({ display:'none'});
//     }
// });

btn.click(function(){
    $(this).toggleClass('open');
    $('.gnb').toggleClass('visible');
});


// $('.navBtn span').click(function(){
//     gnb.css({right:0});
// });
// $('.nav_close').click(function(){
//     gnb.css({right:'100%'});
// });




//parallax - 메인비주얼 
$(function(){
    var mt = $('.maintitle');
    var offset = 600;
    var mt_ost = mt.offset().top - offset;
    var winT = $(window).scrollTop();
    

    //패럴랙스 스크롤
    $(window).scroll(function(){
        //메인비주얼,타이틀
        if($(this).scrollTop() > mt_ost ) {
            mt.addClass('animate');
            $('.mainTitle').addClass('animate');
            $('.visual .mainVisual .bg').addClass('animate');
            $('.title p').addClass('animate');
        } 
        //베스트 
        if($(window).scrollTop() > $('.bestInner h3').offset().top - offset) {
            $('.bestInner h3').addClass('animate');
        }
        if($(window).scrollTop() > $('#best').offset().top - offset) {
            $('#best').addClass('animate');
        }
        //브랜드스토리
        if($(window).scrollTop() > $('.brandInner .brandLeft').offset().top - offset){
            $('.brandInner .brandLeft').addClass('animate');
        }
        if($(window).scrollTop() > $('.brandInner .title h3').offset().top-offset) {
            $('.brandInner .title h3').addClass('animate');
        }
        if($(window).scrollTop() > $('.brandInner .none').offset().top - offset) {
            $('.brandInner .none').addClass('animate');
        }
        if($(window).scrollTop() > $('.brandInner a').offset().top-offset) {
            $('.brandInner a').addClass('animate');
        }
        if($(window).scrollTop() > $('.brandInner .brandBox span').offset().top - offset) {
            $('.brandInner .brandBox span').addClass('animate');
        }
        if($(window).scrollTop() >= $('.brandInner .brandVideo video').offset().top - offset) {
            $('.brandInner .brandVideo video').addClass('animate');
        }
        if($(window).scrollTop() >= $('.brandInner .pc_brandstoryText').offset().top - offset) {
            $('.brandInner .pc_brandstoryText').addClass('animate');
        }
        //기프트가이드
        if($(window).scrollTop() >= $('.giftInner .giftRight').offset().top - offset) {
            $('.giftInner .giftRight').addClass('animate');
        }
        if($(window).scrollTop() >= $('.giftRight .title h3').offset().top - offset) {
            $('.giftRight .title h3').addClass('animate');
        }
        if($(window).scrollTop() >= $('.giftRight p').offset().top - offset) {
            $('.giftRight p').addClass('animate');
        }
        if($(window).scrollTop() >= $('.giftInner a').offset().top - offset) {
            $('.giftInner a').addClass('animate');
        }
        if($(window).scrollTop() >= $('.giftInner .giftBox span').offset().top - offset) {
            $('.giftInner .giftBox span').addClass('animate');
        }
        if($(window).scrollTop() >= $('.giftInner .giftVideo video').offset().top - offset) {
            $('.giftInner .giftVideo video').addClass('animate');
        }
        //스토어 로케이터
        if($(window).scrollTop() >= $('.storeInner .storeLeft').offset().top - offset) {
            $('.storeInner .storeLeft').addClass('animate');
        }
        if($(window).scrollTop() >= $('.storeInner .title h3').offset().top - offset) {
            $('.storeInner .title h3').addClass('animate');
        }
        if($(window).scrollTop() >= $('.storeInner .none').offset().top - offset) {
            $('.storeInner .none').addClass('animate');
        }
        if($(window).scrollTop() >= $('.storeInner a').offset().top - offset) {
            $('.storeInner a').addClass('animate');
        }
        if($(window).scrollTop() >= $('.storeInner .storeBox span').offset().top - offset) {
            $('.storeInner .storeBox span').addClass('animate');
        }
        if($(window).scrollTop() >= $('.storeInner .storeVideo video').offset().top - offset) {
            $('.storeInner .storeVideo video').addClass('animate');
        }
        if($(window).scrollTop() >= $('.storeInner .pcText').offset().top - offset) {
            $('.storeInner .pcText').addClass('animate');
        }
        // 격언
        if($(window).scrollTop() >= $('#wisely .wiselyInner').offset().top - offset) {
            $('#wisely .wiselyInner').addClass('animate');
        }
        if($(window).scrollTop() >= $('.wiselyInner h3').offset().top - offset) {
            $('.wiselyInner h3').addClass('animate');
        }
        if($(window).scrollTop() >= $('.wiselyInner p').offset().top - offset) {
            $('.wiselyInner p').addClass('animate');
        }
        //푸터
        if($(window).scrollTop() >= $('.footer').offset().top - 640) {
            $('.footer').addClass('animate');
        }
        if($(window).scrollTop() >= $('.footerInner a').offset().top - 710) {
            $('.footerInner a').addClass('animate');
        }
        if($(window).scrollTop() >= $('.footerInner h2').offset().top - 700) {
            $('.footerInner h2').addClass('animate');
        }
        if($(window).scrollTop() >= $('.footerInner .markWrap').offset().top - 720) {
            $('.footerInner .markWrap').addClass('animate');
        }
        if($(window).scrollTop() >= $('.footer .pc p').offset().top-offset) {
            $('.footer .pc p').addClass('animate');
        }
    });
});



// $(function(){
//     $(window).scroll(function(){
        
//         // var offset = 400;
//         var mt_ost = mt.offset().top - 400;
//         var ost = offset().top - offset;
//         var winTop = $(window).scrollTop()

//         mt.each(function(){
//             var mt = $('.maintitle')

//             if(winTop >= $(this).ost) {
//                 $(this).addClass('animate')
//             }
//         })
//     })
// })


//parallax - 베스트 
// $(function(){
//     var best = $('#best');
//     var offset = 400;
//     var best_ost = best.offset().top - offset;
//     var ost = offset().top - offset;

//     $(window).scroll(function(){
//         if($(this).scrollTop() > best_ost ) {
//             best.addClass('animate');
//         } 
//     });
// });


// $(window).scroll(function(){
//     var wst = $(this);
//     scrollAni(wst,'.brandLeft');
//     parallax(wst,'.brandLeft');
// });
  
  
});








      
// You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object