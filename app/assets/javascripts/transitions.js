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

// $('a[href^="#"]').on('click',function (e) {
//   e.preventDefault();
//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top
//   }, 0, 'swing');
// });


// Collapse hamburger menu from document
$(document).on('click', function() {
  collapseNavBar();
});

// Prevent scrolling underneath modals
$( document ).ready(function() {
  $("#backbone-app>a, #backbone-app>p>a").on('click', function(){
    $('body').css('overflow', 'hidden');
    var offset = window.pageYOffset;
    $('#entry_form_modal').css({
        'display': 'block',
        'top': offset + 'px'
    });
  });
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
  $('body').css('position', "static");
  $(this).parent().fadeOut(600);
});

setTimeout(function(){ 
  $(".alert").fadeOut(2000); 
}, 2200 );

// for 'Approve' & 'Disapprove' buttons on dashboard
$(".approved-button").on ("click tap", function(e) {
  e.preventDefault();
  $(this).parent().children().hide();
  $($(this).parent().children()[2]).show();
  $($(this).parent().children()[3]).show();
});

$(".disapproved-button").on ("click tap", function(e) {
  e.preventDefault();
  $(this).parent().children().hide();
  $($(this).parent().children()[2]).show();
  $($(this).parent().children()[3]).show();
});

$(".approve-admin").on ("click tap", function(e) {
  e.preventDefault();
  $(this).parent().children().hide();
  $($(this).parent().children()[0]).show();
  $($(this).parent().children()[4]).show();
});

$(".disapprove-admin").on ("click tap", function(e) {
  e.preventDefault();
  $(this).parent().children().hide();
  $($(this).parent().children()[1]).show();
});

$(".mail-to-admin").on ("click tap", function(e) {
  e.preventDefault();
  $(this).parent().children().hide();
  $($(this).parent().children()[5]).show();
});
















