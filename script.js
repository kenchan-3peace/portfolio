$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elementTop = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if ($(window).width() >= 768) {
        buffer = 100;
      } else {
        buffer = -200;
      }
      if (scroll > elementTop - windowHeight + buffer){
        $(this).addClass('scrollin');
      }
    });
  });
});