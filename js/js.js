$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
          // $('.click-btn').click(function(){

          //   $('.modal-hover').css("display","block").animate({opacity: 1},300);
          //   $('#modalWindowApp').css("display","block").animate({opacity: 1},300);
          // });
          // $('.modal-hover').click(function(){
          //   $('#modalWindowApp').animate({opacity: 0},200).css("display","none");
          //   $('.modal-hover').animate({opacity: 0},200).css("display","none");
          // });
          // $('.modal-btn.close').click(function(){
          //   $('#modalWindowApp').animate({opacity: 0},200).css("display","none");
          //   $('.modal-hover').animate({opacity: 0},200).css("display","none");
          // });


          // $('.app-btn').click(function(){

          //   $('.modal-hover').css("display","block").animate({opacity: 1},300);
          //   $('#modalWindowApp').css("display","block").animate({opacity: 1},300);
          // });
          // $('.modal-hover').click(function(){
          //   $('#modalWindowApp').animate({opacity: 0},200).css("display","none");
          //   $('.modal-hover').animate({opacity: 0},200).css("display","none");
          // });
          // $('.modal-btn.close').click(function(){
          //   $('#modalWindowApp').animate({opacity: 0},200).css("display","none");
          //   $('.modal-hover').animate({opacity: 0},200).css("display","none");
          // });


          $('.order-form').click(function(){

            $('.modal-hover').css("display","block").animate({opacity: 1},100);
            $('#modalWindowApp').css("display","block").animate({opacity: 1},100);
            $('.container, footer').addClass("modal-blur");
          });
          $('.modal-hover').click(function(){
            $('#modalWindowApp').animate({opacity: 0},200).css("display","none");
            $('.modal-hover').animate({opacity: 0},200).css("display","none");
            $('.container, footer').removeClass("modal-blur");
          });
          $('.modal-btn.close').click(function(){
            $('#modalWindowApp').animate({opacity: 0},200).css("display","none");
            $('.modal-hover').animate({opacity: 0},200).css("display","none");
            $('.container, footer').removeClass("modal-blur");
          });

         // ----------collapsed menu------
         // $(".cd-stretchy-nav ul li a").mouseenter(function(){
         //    $(this).find("span").css("visibility", "visible");
         //    $(this).find("span").animate({opacity : "1"},150);
         //  });
         //  $(".cd-stretchy-nav ul li a").mouseleave(function(){
         //    $(this).find("span").animate({opacity: "0"},150).css("visibility", "hidden");
         //  });


          $(".cd-stretchy-nav ul li a").mouseenter(function(){
            // $(this).find("span").css("visibility", "visible");
            $(this).find("span").animate({margin : "0 0 0 -5px"},150);
          });
          $(".cd-stretchy-nav ul li a").mouseleave(function(){
            $(this).find("span").animate({margin : "0 0 0 0"},150);
          });


          $(".cd-nav-trigger").click(function(){
            $("span .stretchy-nav-bg").addClass("stretchy-nav-bg-vissible");
          });


          // ================Scroll parallax==========
          $(window).scroll(function(){

            var wScroll = $(this).scrollTop();

            if (wScroll > $('.advantages').offset().top - 600) {

              $('.advantage-item').each(function(i){

                setTimeout(function(){
                  $('.advantage-item').eq(i).addClass('is-showing');
                }, 150 * (i+1));

              });
            }


            if (wScroll > $('.work-type').offset().top - 500) {

              $('.work-type dt').each(function(i){

                setTimeout(function(){
                  $('.work-type dt').eq(i).addClass('is-showing');
                }, 150 * (i+1));

              });

            }

          });
});
