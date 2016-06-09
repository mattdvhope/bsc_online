// Scrolling up & down pages with nav links/////////
$("#place_1").addClass("active");

$(".page-scroll").on("click", function(e) { // to remove coloring from previously clicked nav links
  e.preventDefault();
  $("#place_1").removeClass("active");
  $("#place_2").removeClass("active");
  $("#place_3").removeClass("active");
  $("#place_4").removeClass("active");
  $("#place_5").removeClass("active");
  $("#place_6").removeClass("active");
  $(this).addClass("active");
});

// Collapse hamburger menu from document
$(document).on('click', function() {
  collapseNavBar();
});

// Remove overlay form when clicking screen
// $("#overlay").on('click', function(e) {
//   if( !$(e.target).is('form') ) {
//     triggerClose();
//   }
// });

// If someone presses the esc kep w/in a nested modal, this will ensure that the page is not fixed/frozen for scrolling.
// $(document).on("keydown", function(e) {
//   if (e.keyCode == 27) {
//     location.reload();
//   }
// });

function collapseNavBar() {
  $(".navbar-collapse").removeClass("in");
}

// function triggerClose() {
//   // $('body').css('overflow','scroll'); // scrolling on body resumed when modal is closed
//   $("a.close").trigger("click");
// }


// for 'Close' link on modals
// $("a.close").on("click tap", function(e) {
//   e.preventDefault();
//   $('body').css('position', "static");
//   $(this).parent().fadeOut(600);
// });

setTimeout(function(){ 
  $(".alert").fadeOut(2000); 
}, 2200 );


// for 'Approve' & 'Disapprove' buttons on leader dashboard
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
/// for 'Approve' & 'Disapprove' buttons on leader dashboard///



// Maintain scroll position when flag clicked; see nav_bar.hbs, 
$(document).on('scroll', function () {
  var num = $(window).scrollTop();
  sessionStorage.setItem("scrollTopPos", num);
});


// Re-render footer when window size changes
$(window).on('resize', function() {
  App.getFooter();
  $(window).scrollTop(sessionStorage.getItem("scrollTopPos"));
});




// Animate size of logo on nav bar for desktop screens (not mobile)
// $(window).on('scroll', function () {
//   if ($(window).width() > 550) {
//     if ($(window).scrollTop() < 100) {
//         $('.navbar-brand > img').stop().animate({width: "160px"}, 80);   
//     } else {
//         $('.navbar-brand > img').stop().animate({width: "55px"}, 50);
//     } 
//   } else {
//     $('.navbar-brand > img').css("width", "55px");
//   }
// });












