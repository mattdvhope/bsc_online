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
console.log($(this).attr);
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 0, 'swing');
});


// Collapse hamburger menu from document
$(document).on('click', function() {
  collapseNavBar();
});


// Prevent scrolling underneath modals
$( document ).ready(function() {
  $("#backbone-app>a, #backbone-app>p>a").on('click', function(){
    $('body').css('overflow','hidden'); // scrolling stopped on body when modal opened
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
  $('body').css('overflow','scroll'); // scrolling on body resumed when modal is closed
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
  hideButton(this, 0);
  hideButton(this, 1);
  showButton(this, 2);
  showButton(this, 3);
  hideButton(this, 4);
  hideButton(this, 5);
  hideButton(this, 6);
});

$(".disapproved-button").on ("click tap", function(e) {
  e.preventDefault();
  hideButton(this, 0);
  hideButton(this, 1);
  showButton(this, 2);
  showButton(this, 3);
  hideButton(this, 4);
  hideButton(this, 5);
  hideButton(this, 6);
});

$(".approve-admin").on ("click tap", function(e) {
  e.preventDefault();
  showButton(this, 0);
  hideButton(this, 1);
  hideButton(this, 2);
  hideButton(this, 3);
  showButton(this, 4);
  hideButton(this, 5);
  hideButton(this, 6);
});

$(".disapprove-admin").on ("click tap", function(e) {
  e.preventDefault();
  hideButton(this, 0);
  showButton(this, 1);
  hideButton(this, 2);
  hideButton(this, 3);
  hideButton(this, 4);
  hideButton(this, 5);
  hideButton(this, 6);
});

$(".mail-to-admin").on ("click tap", function(e) {
  e.preventDefault();
  hideButton(this, 0);
  hideButton(this, 1);
  hideButton(this, 2);
  hideButton(this, 3);
  hideButton(this, 4);
  showButton(this, 5);
  $($(this).parent().children()[6]).show().fadeOut(10000);
});

function hideButton(element, index) {
  $($(element).parent().children()[index]).hide();
}

function showButton(element, index) {
  $($(element).parent().children()[index]).show();
}













