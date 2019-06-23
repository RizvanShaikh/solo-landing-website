 // when browser on loading this function should be started
 $(window).on("load", function () {
     // it hides gif image 
     $("#status").fadeOut();
     // it hides preloder white background & after hiding u can see content
     $("#preloader").delay(350).fadeOut();
 });

 //======================================
 // for owl slider we need 1) owl.theme.default.min.css 
 //                         2)owl.carousel.min.css
 //                         3)owl.carousel.min.js
 /*=======================================
   owl script    team
  =====================================*/

 $(function () {

     $("#team-members").owlCarousel({
         item: 2,
         autoplay: true,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true,
         nav: true,
         dots: false,
         navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
         // responsive: {
         //   // responsive for 0 up
         //   0: {
         //     item:1
         //   }
         //   // responsive for 480 up
         //   480: {
         //      item:2
         //   }
         // }

     });

 });

 /*=======================================
        to get progress bar to be progressive 
         progress bar with waypoint
  http://imakewebthings.com/waypoints for scroll 
  =====================================*/

 $(function () {

     $("#progress-elements").waypoint(function () {

         $(".progress-bar").each(function () {

             $(this).animate({
                 width: $(this).attr('aria-valuenow') + "%"
             }, 1000);
         });
         this.destroy();
     }, {
         offset: 'bottom-in-view'
     });
 });

 /*=======================================
 for responsive tab of creativity,strategy,design,development
  http://www.jellekralt.github.io
  or https://github.com/jellekralt/Responsive-Tabs 
         Responsive Tab
  =====================================*/

 $(function () {
     $("#services-tabs").responsiveTabs({
         animation: 'slide'
     });
 });

 /*=======================================
  to of section 06   suffale
  http://www.https://isotope.metafizzy.co/
  =====================================*/
 // here we used windows on load method instead of document.ready method beause windows onload method 
 // let img and other things to be loaded and then it will process on it 
 $(window).on('load', function () {
     //initaialize the isotop
     $("#isotope-container").isotope({

     });
     // filters items on button click  video 84
     $("#isotope-filters").on('click', 'button', function () {
         // get filter value
         var filterValue = $(this).attr('data-filter');
         // alert("you clicked" + filterValue);
         // it will filter current related value given in filterValue
         $("#isotope-container").isotope({
             filter: filterValue
         });
         //active button
         $("#isotope-filters").find('.active').removeClass('active');
         $(this).addClass('active');
     });
 });

 /*=======================================
                 megnifier
   https://dimsemenov.com/plugins/magnific-popup/
  =====================================*/
 // including this jquery magnific-popup will appear good. wanna see difference comment below jquery and see difference
 $(function () {

     $("#portfolio-wrapper").magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {
             enabled: true
         }
     });
 });

 /*=======================================
    section 07  Testimonial
  owl caousel is used for sliding purpose
  =====================================*/
 // $(function() {

 //      $("#testimonial-slider").owlCarousel({
 //      	item:1,
 //      	autoplay:true,
 //      	smartSpeed:700,
 //      	loop:true,
 //      	autoplayHoverPause:true,
 //      	nav:true,
 //      	dots:false,
 //      	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
 //      });


 //      });
 /*=======================================
 |     |     |counter up plugin =>years of experience,projects done,award received etc
  =====================================*/

 $(function () {

     $(".counter").counterUp({
         delay: 10,
         time: 2000
     });
 });
 /*=======================================
|     |     |clients section 
 =====================================*/
 $(function () {
     $("#clients-list").owlCarousel({
         item: 6,
         autoplay: true,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true,
         nav: true,
         dots: false,
         navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
         // responsive: {
         // responsive for 0 up
         //   0: {
         //     item:2
         //   }
         //   // responsive for 480 up
         //   480: {
         //      item:3
         //   }
         // responsive for 768 up
         //   768: {
         //      item:6
         //   }
         // }
     });
 });
 /*=======================================
 |     |     | Google Map 
 https://developers.google.com/maps/documentation/javascript/get-api-key
 for latitue & longitude visit https://www.latlong.net/
   =======================================*/
 $(window).on("load", function () {
     // Map variable
     var addressString = "Jamli Mohalla, 123, Pirajpol, Alaiya Pada, Teen Limdi, Khambhat, Gujarat 388620,India";
     var myLatlng = {
         lat: 22.307770,
         lng: 72.615330
     };

     //1. Render Map
     var map = new google.maps.Map(document.getElementById("map"), {
         zoom: 11,
         center: myLatlng
     });

     // 2 Add Marker
     var marker = new google.maps.Marker({
         position: myLatlng,
         map: map,
         title: "Click To See Address"
     });

     // 3 Add Info window
     var infowindow = new google.maps.infoWindow({
         content: addressString
     });
     // show info when user click on marker
     marker.addListener('click', function () {
         infowindow.open(map, marker);
     });

     // Resize function for google map to take center
     google.maps.event.addDomListener(window, 'resize', function () {
         // alert ('screen just resized');
         var center = map.getCenter();
         google.maps.event.trigger(map, 'resize');
         map.setCenter();
     });
 });
 /*==============================================
 |     |      |  Scroll Navigation bar 
 ==============================================*/
 /*show & hide navigation*/
 $(function () {
     // show hide nav call on page load (it is hoing to happen on page load)
     showHideNav();
     $(window).scroll(function () {
         // alert ("you just scrolled");
         // window on scroll call (it is hoing to happen on page scroll)
         showHideNav();
     });

     function showHideNav() {
         if ($(window).scrollTop() > 50) {

             // alert ("your scroll position greater  than 50px = " + $(window).scrollTop());
           // by writing addClass it will add class of white-nav-top  in the HTML by 50px
             $("nav").addClass("white-nav-top");

             $(".navbar-brand img").attr("src", "image/shopnix.png");

             // Show Back to Top Button
             $("#back-to-top").fadeIn();
         } else {
             // alert ("your scroll position lessthan  than 50px = " + $(window).scrollTop());
             $("nav").removeClass("white-nav-top");

             $(".navbar-brand img").attr("src", "image/shopnix.png");

             // Hide Back to Top Button
             $("#back-to-top").fadeOut();
         }
     }
 });
 // smooth scrolling easing effect
 // http://gsgd.co.uk/sandbox/jquery/easing/
 $(function () {

     $("a.smooth-scroll").click(function (event) {
      // it will stop the default action from the happning
         event.preventDefault();
         // get section id like #about,#services,#work,#team etc.
         var section_id = $(this).attr("href");
         $("html,body").animate({
             scrollTop: $(section_id).offset().top - 64
         }, 1250, "easeInOutExpo");
        // above easeinoutexpo is from esing plugin visit about website
     });

 });
 /*==============================================
 |     |      |  Mobile Menu
 ==============================================*/
 $(function () {
     // Show Mobile Nav
     $("#mobile-nav-open-btn").click(function () {
         // alert("you just clicked");
         $("#mobile-nav").css("height", "100%");

     });
     // Hide Mobile Nav
     $("#mobile-nav-close-btn,#mobile-nav a").click(function () {
         // alert("you just clicked");
         $("#mobile-nav").css("height", "0%");
     });

 });
 /*==============================================
 |     |      |  Animation
 ==============================================*/
 // animate on scroll
 $(function () {
     new WOW().init();
 });
 // homeanimation on load
 $(function () {
     $("#home-heading-1").addClass("animated fadeInDown");
     $("#home-heading-2").addClass("animated fadeInLeft");
     $("#home-text").addClass("animated zoomIn");
     $("#home-btn").addClass("animated zoomIn");
     $("#arrow-down i").addClass("animated fadeInDown infinite");
 });