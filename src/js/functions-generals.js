function menu(){
    $(".header--navegacion .btn").on("click", function(){
        $(".header").toggleClass("nav-on");
        
        setTimeout(function(){
            $(".header").toggleClass("sup");
        },100);
        
    });

    // ANCLAS
    $("#navbarNav li").on("click", function () { 
        var nameLi = $(this).attr("id").replace("li-", ""),
            nameSection = $("." + nameLi).offset().top;
        

        setTimeout(function(){
            $("html, body").animate({ scrollTop: nameSection = $("." + nameLi).offset().top - 90 }, 1500);
            $(".header").removeClass("nav-on");
            $(".header").toggleClass("sup");
        },100);
        
        return false;
    });

}

function animLogo(){
     /// ANIMACION LOGO
    
     $(document).scroll(function () {
        var posRow = $(".hero .desc").offset().top - 300;
        var scrolleo = $(window).scrollTop();

        if (scrolleo > posRow) {
          $(".header").addClass("activo");
        } else {
          $(".header").removeClass("activo");
        }
    });
}


function animacion(){
    gsap.registerPlugin(ScrollTrigger);
    
    // HERO

    gsap.to(".banner", {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }, 
    });

    gsap.to(".desc", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
            
        }, 
    });
    
    /// ABOUT HOME

    gsap.to("#card1", {
        yPercent: -120,
        ease: "none",
        y: -50,
        scrollTrigger: {
            trigger: ".about",
            start: "-=500",
            end: "bottom top",
            scrub: true,
            
        }, 
    });

    gsap.to("#card2", {
        yPercent: -10,
        ease: "power1",
        y: -150,
        scrollTrigger: {
            trigger: ".about",
            start: "-=500",
            end: "bottom top",
            scrub: true,
            
        }, 
    });

    gsap.to("#card3", {
        yPercent: -50,
        y: -50,
        ease: "power1",
        scrollTrigger: {
            trigger: ".about",
            start: "-=500",
            end: "bottom top",
            scrub: true,
            
        }, 
    });

    gsap.to(".frase", {
        yPercent: -20,
        y: 100,
        ease: "none",
        scrollTrigger: {
            trigger: ".about",
            start: "top top",
            end: "bottom top",
            scrub: true,
            
        }, 
    });

}

function ellipsis_box(parrafo){
	
    parrafo.each(function(){
        limite_text = $(this).text();
        max_chars = 180;
        if (limite_text.length > max_chars){
            limite = limite_text.substr(0, max_chars)+" ...";
            $(this).text(limite);
        }
    });
}


function modales(){

    var $modal= $('#modal1');
    $('#card1').on('click', function (e) {
        $modal.css({top: e.clientY, left: e.clientX, transform: 'scale(0.1, 0.1)'});
        $modal.modal();
        $modal.css({top: '', left: '', transform: ''});
        
    });

    $("#modal1 .close").on('click', function (e) {
        $modal.css({top: $modal.clientY, left: $modal.clientX, transform: 'scale(0, 0)'});
        $("body").removeClass("modal-open");

        setTimeout(function(){
            $modal.modal('hide');
            $modal.css({top: '', left: '', transform: ''});
        },500);
        
    });

    var $moda2= $('#modal2');
    $('#card2').on('click', function (e) {
        $moda2.css({top: e.clientY, left: e.clientX, transform: 'scale(0.1, 0.1)'});
        $moda2.modal();
        $moda2.css({top: '', left: '', transform: ''});
    });

    $("#modal2 .close").on('click', function (e) {
        $moda2.css({top: $moda2.clientY, left: $moda2.clientX, transform: 'scale(0, 0)'});
        $("body").removeClass("modal-open");

        setTimeout(function(){
            $moda2.modal('hide');
            $moda2.css({top: '', left: '', transform: ''});
        },500);
        
    });

    var $moda3= $('#modal3');
    $('#card3').on('click', function (e) {
        $moda3.css({top: e.clientY, left: e.clientX, transform: 'scale(0.1, 0.1)'});
        $moda3.modal();
        $moda3.css({top: '', left: '', transform: ''});
    });

    $("#modal3 .close").on('click', function (e) {
        $moda3.css({top: e.clientY, left: e.clientX, transform: 'scale(0, 0)'});
        $("body").removeClass("modal-open");

        setTimeout(function(){
            $moda3.modal('hide');
            $moda3.css({top: '', left: '', transform: ''});
        },500);
    });

    /// PAGINADOR

    $("#modal1 .prev").on("click", function(){
        $modal.css({transform: 'translateX(-100%)'});
        $moda3.css({transform: 'translateX(100%)'});
        $moda3.modal('show');
        
        setTimeout(function(){
            $modal.modal('hide');
            $moda3.css({transform: 'translateX(0%)'});
            $moda3.css({transform: ''});
            $("body").addClass("modal-open");
        },400);
    });

    $("#modal2 .prev").on("click", function(){
        $moda2.css({transform: 'translateX(-100%)'});
        $modal.css({transform: 'translateX(100%)'});
        $modal.modal('show');
        
        setTimeout(function(){
            $moda2.modal('hide');
            $modal.css({transform: 'translateX(0%)'});
            $modal.css({transform: ''});
            $("body").addClass("modal-open");
        },400);
    });

    $("#modal3 .prev").on("click", function(){
        $moda3.css({transform: 'translateX(-100%)'});
        $moda2.css({transform: 'translateX(100%)'});
        $moda2.modal('show');
        
        setTimeout(function(){
            $moda3.modal('hide');
            $moda2.css({transform: 'translateX(0%)'});
            $moda2.css({transform: ''});
            $("body").addClass("modal-open");
        },400);
    });


    //next

    $("#modal1 .next").on("click", function(){
        $modal.css({transform: 'translateX(100%)'});
        $moda2.css({transform: 'translateX(-100%)'});
        $moda2.modal('show');
        
        setTimeout(function(){
            $modal.modal('hide');
            $moda2.css({transform: 'translateX(0%)'});
            $moda2.css({transform: ''});
            $("body").addClass("modal-open");
        },400);
    });
    $("#modal2 .next").on("click", function(){
        $moda2.css({transform: 'translateX(100%)'});
        $moda3.css({transform: 'translateX(-100%)'});
        $moda3.modal('show');
        
        setTimeout(function(){
            $moda2.modal('hide');
            $moda3.css({transform: 'translateX(0%)'});
            $moda3.css({transform: ''});
            $("body").addClass("modal-open");

        },400);
    });
    $("#modal3 .next").on("click", function(){
        $moda3.css({transform: 'translateX(100%)'});
        $modal.css({transform: 'translateX(-100%)'});
        $modal.modal('show');
        
        setTimeout(function(){
            $moda3.modal('hide');
            $modal.css({transform: 'translateX(0%)'});
            $modal.css({transform: ''});
            $("body").addClass("modal-open");
        },400);
    });
}

function slider(){
    var mySwiper1 = new Swiper(".sliderRefes", {
        direction: 'horizontal',
        loop:true,
        updateOnWindowResize: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true,
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        breakpoints:{
            320: {
                allowTouchMove:true,
                freeMode: false,
            },
            992: {
                allowTouchMove:false,
            }
        }
    });
}

var mediaquery992 = window.matchMedia("(max-width: 992px)");

$(function() {
    menu();

    if ( window.location.pathname == "/" || window.location.href.indexOf("index") > -1  ) {
        animacion();
        animLogo();
        modales();
        ellipsis_box($(".episodios__sec p"));
    }

    if ( window.location.href.indexOf("detalle") > -1 ) {
        slider();
        ellipsis_box($(".episodios__sec p"));
    }

    if ( window.location.href.indexOf("episodios") > -1 ) {
        if(mediaquery992.matches) {
            ellipsis_box($(".episodios__main p"));
        }
    }
    
});