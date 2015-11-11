// Scrolling up & down home page...
$("#place_1").addClass("active");

$(".page-scroll").on("click", function() {
  event.preventDefault();
  $("#place_1").removeClass("active");
  $("#place_2").removeClass("active");
  $("#place_3").removeClass("active");
  $("#place_4").removeClass("active");
  $(this).addClass("active");
});

$('a[href^="#"]').on('click',function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 0, 'swing');
});


// Collapse hamburger menu from document
$(document).on('click', function() {
  collapseNavBar();
});


// Remove form on overlay when clicking screen
$("#overlay").on('click', function(e) {
  if( !$(e.target).is('form') ) {
    triggerClose();
  }
});

// escape key
$(document).on("keyup", function(e) {
  if (e.keyCode == 27) {
    collapseNavBar();    
    triggerClose();
  }
});

function collapseNavBar() {
  $(".navbar-collapse").removeClass("in");
}

function triggerClose() {
  $("a.close").trigger("click");
}

// for 'Close' link on modals
$("a.close").on("click tap", function(e) {
  e.preventDefault();
  $(this).parent().fadeOut(600);
});

setTimeout(function(){ 
  $(".alert").fadeOut(2000); 
}, 2200 ); 


