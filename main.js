$(window).on('scroll',function(){
   if($(window).scrollTop()){
     $('nav').addClass('danger');
     $('#lio').addClass('lio');
   }
   else{
     $('nav').removeClass('danger');
     $('#lio').removeClass('lio');
   }   
 });


var typing = new Typed (".typing" ,{

strings : [ "Web Developer", "Blogger", "Web Designer", "Freelancer"],
typeSpeed: 150,
backSpeed:80,
loop:true
});

var typing = new Typed (".footer_vedant" ,{

strings : [ "Vedant",],
typeSpeed:500,
backSpeed:300,
loop:true
});

var preload = document.getElementById('preloader');
 function myfunload(){
 preload.style.display = 'none';
};

 $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
