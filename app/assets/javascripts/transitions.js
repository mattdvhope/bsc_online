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
$(".volunteer-approval").on("click tap", function(e) {
  e.preventDefault();
  console.log($(this).text());
  $(this).parent().children().last().remove(); // remove 'Disapprove' button
  $(this).text('APPROVED-click to edit');
});

$(".volunteer-disapproval").on("click tap", function(e) {
  e.preventDefault();
  $(this).parent().children().first().remove(); // remove 'Approve' button
  $(this).text('DISAPPROVED-click to edit');
});

$(".restore-approval-disapproval").on("click tap", function(e) {
  e.preventDefault();
  $(this).parent().append($('<a>', {
    class: 'btn btn-success volunteer-approval',
    'data-remote': 'true',
    text: 'Approve',
    href: "/users/" + $(this).data('id') + "/approve_volunteer"
  }));
  $(this).parent().append(" ");
  $(this).parent().append($('<a>', {
    class: 'btn btn-danger volunteer-disapproval',
    'data-remote': 'true',
    text: 'Disapprove',
    href: "/users/" + $(this).data('id') + "/disapprove_volunteer"
  }));
  $(this).remove();

// change below... NOT DRY!!!!!!!  ALSO NOT WORKING CORRECTLY...link disappears after second time through...PROBABLY A SCOPING ISSUE!!!!!
  $(".volunteer-approval").on("click tap", function(e) {
    e.preventDefault();
    console.log($(this).text());
    $(this).parent().children().last().remove(); // remove 'Disapprove' button
    $(this).text('APPROVED-click to edit');
  });

  $(".volunteer-disapproval").on("click tap", function(e) {
    e.preventDefault();
    $(this).parent().children().first().remove(); // remove 'Approve' button
    $(this).text('DISAPPROVED-click to edit');
  });

});
















