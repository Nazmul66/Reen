//  scrolltop jquery function

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".fa-arrow-up").fadeIn();
        }
        else{
            $(".fa-arrow-up").fadeOut();
        }
    });

    $(".fa-arrow-up").click(function(){
        $('body').animate({scrollTop:0
        
        }, 1000);
    });
});