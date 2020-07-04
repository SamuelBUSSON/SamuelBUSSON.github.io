$(document).ready(function () {
    'use strict';
    //********* page loader js




    setTimeout(function () {
        $('.loader_bg').fadeToggle();
        $('[lang="fr"]').show();
        $('[lang="en"]').hide();
    }, 1000);



      //********* carrousel

    function Timer(timeout) {
    var self = this;
    this.interval = timeout ? timeout : 1000;   // Default

    this.run = function (runnable) {
        setInterval(function () { runnable(self); }, this.interval);
    };
}

    var url_images =
    [
      "url(./images/home/home.jpg)",
      "url(./images/portfolio/Palette.png)",
      "url(./images/portfolio/JouteCeleste.jpg)"
    ]

    var index_images = 0;

    setInterval(function(){
      index_images++;
      if(index_images > url_images.length-1){
        index_images = 0;
      }
      $('.banner-area').css("background-image", url_images[index_images]);
      $('.banner-area').addClass("banner-area-fadeout");
    },2000);

/*
    var class_value = ["banner-area-fadeout", "banner-area-fadein"];
    var class_index = 0;

    setInterval(function(){
      $('.banner-area').removeClass(class_value[class_index%2]);
      class_index++;
      $('.banner-area').addClass(class_value[class_index%2]);
    },1500);*/

    //********* end carrousel

    //********* typed js

    var element = $(".text-affect");

    $(function(){
       element.typed({
           strings: ["Développeur", "Passionné", "Shaders ♥"],
           loop: true,
           typeSpeed: 90
       });
    });

    $('.bar-percentage[data-percentage]').each(function() {
        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));
        progress.text(percentage + '%');
        progress.siblings().children().css('width', percentage + '%');
    });

    //*********wow js

    new WOW().init();

    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    $(document).on('click', '.languages', function (e) {
      switch (e.target.id) {
        case 'fr':
            console.log("Fr");
            $('[lang="fr"]').show();
            $('[lang="en"]').hide();
          break;
        case 'eng':
            console.log("Eng");
            $('[lang="fr"]').hide();
            $('[lang="en"]').show();
          break;
        default:
            console.log(e.target.id);
      }
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //************ smooth scroll js

    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });

    $('.view').on("click", function (e) {
      $("#modalImg").prop('src', "images/portfolio/loader.gif");
      $("#modalImg").prop('src', ($(this).children(".Mimg").data("src")));
      $("#modalTitle").text($(this).children(".Mtext").data("title"));
      $("#modalText").html($(this).children(".Mtext").html());
    });


    //****** magnific popup
/*
      $('.view').on("click", function (e) {
        console.log($(this).data('link'));
      });

    $('.view').magnificPopup({
      items: {
        src : "inline-test",
        midClick: true,
        type: "inline"
      },
      gallery: {
          enabled: true
      },
      zoom: {
          enabled: true,
          duration: 300
      },
      callbacks: {
        elementParse: function(item) {
          // Function will fire for each target element
          // "item.el" is a target DOM element (if present)
          // "item.src" is a source that you may modify

          console.log(item.el); // Do whatever you want with "item" object
          console.log(item.src); // Do whatever you want with "item" object

        }
      }
    });*/

    //*** Services carousel

    $("#services-carousel").owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 800,
        paginationSpeed: 800,
        smartSpeed: 500,
        autoplay: true,
        singleItem: true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            680:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //************* Owl Carousel

    $("#testimonial-slider").owlCarousel({
        items: 1,

        itemsDesktop: [1000, 1],

        itemsDesktopSmall: [979, 1],

        itemsTablet: [768, 1],

        pagination: true,

        navigation: false,

        slideSpeed: 1000,

        singleItem: false,

        autoplay: true,

        loop: true
    });




});
