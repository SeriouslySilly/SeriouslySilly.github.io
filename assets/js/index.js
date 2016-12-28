//fading brand-heading
$(window).scroll(function(){
  $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 500);
});

//smooth scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

//hamburger animation
$(document).ready(function () {
        $(".navbar-toggle").on("click", function () {
            $(this).toggleClass("active");
        });
    });

//close hamburger on click
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

//headline zoomingIn on load
    var yourElement = "#headline";
    var yourEffect = "zoomIn";
    var effectClass = "animated " + yourEffect;
    $( document ).ready(function() {
      $(yourElement).show().addClass(effectClass).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
    });

//reference carousel
$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });
});



