/*============================
        Navigation
==============================*/
/*smooth scroll effect*/
$(function() {
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        //get/return id like #about, #home, etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 2000);
    });
});

/*============================
        About
==============================*/
/*wow anomation*/
$(document).ready(function(){
    new WOW().init();
});


/*carousel slider*/
$(document).ready(function(){
    $('#ad').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true 
    });
});

/*============================
        COurses
==============================*/
/*wow anomation*/
$(document).ready(function(){
    new WOW().init();
});
/*carousel slider*/
$(document).ready(function(){
    $('#course-item').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true 
    });
});

/*============================
        Partners
==============================*/
/*wow anomation*/
$(document).ready(function(){
    new WOW().init();
});
/*carousel slider*/
$(document).ready(function(){
    $('#partners-list').owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        responsive: {
            0:{
                items: 3
            },
            767:{
                items: 5
            },
            992: {
                items: 6
            }
        } 
    });
});


/*============================
       Quotes
==============================*/
$(document).ready(function(){
    $('#pro-quotes').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        responsive: {
            0:{
                items: 1
            },
            992: {
                items: 2
            }
        } 
    });
});

/*============================
       stats
==============================*/
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*mobile menu*/
$(document).ready(function(){
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});