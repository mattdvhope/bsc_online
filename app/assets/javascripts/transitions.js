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
$("#overlay").on('click', function(e) {
  if( !$(e.target).is('form') ) {
    triggerClose();
  }
});

// Remove overlay form with escape key
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
  // $('body').css('overflow','scroll'); // scrolling on body resumed when modal is closed
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
$(window).on('scroll', function () {
  if ($(window).width() > 1000) {
    if ($(window).scrollTop() < 100) {
        $('.navbar-brand > img').stop().animate({width: "160px"}, 80);   
    } else {
        $('.navbar-brand > img').stop().animate({width: "55px"}, 50);
    }
  }
});

/////// Radio buttons ////////
// de-select, grayout & disable selectors for class schedules on application form modal
$( document ).ready(function() {
  var button1 = document.getElementById("sched-opt-one");
  var button2 = document.getElementById("sched-opt-two");

  $("#sched-opt-one, #sched-opt-two").on("click", function() {
    if (button1.checked){ // if #five-weeks selected
      $('#five-weeks').prop('disabled', false);
      $('#five-weeks').removeClass("grayout").addClass("blackin");
      $('#one-whole-week').val('select_option');
      $('#one-whole-week').prop('disabled', 'disabled');
      $('#one-whole-week').removeClass("blackin").addClass("grayout");
    }
    else if (button2.checked) { // if #one-whole-week selected
      $('#one-whole-week').prop('disabled', false);
      $('#one-whole-week').removeClass("grayout").addClass("blackin");
      $('#five-weeks').val('select_option');
      $('#five-weeks').prop('disabled', 'disabled');
      $('#five-weeks').removeClass("blackin").addClass("grayout");
    }
  });
});

// Uncheck other radio button(s) in '#payment-options' fieldset in application_form.hbs when new button is clicked; This allows for different names between them.
$( document ).ready(function() {
  $('.radio-pay_at_center').on("change", function() {
    $('.radio-pay_by_transfer').prop('checked', false);
  });
  $('.radio-pay_by_transfer').on("change", function() {
    $('.radio-pay_at_center').prop('checked', false);
  });
});
/////// Radio buttons ////////


/////// modal ////////
// Open modal & prevent scrolling underneath bootstrap modals
$( document ).ready(function() {
  $("a.modal-initiator").on("click", function() {
    // $('#applicationmodal').modal();
    currentScrollTopUnderModal = $(window).scrollTop();
    $('html').addClass('noscroll').css('top', '-' + currentScrollTopUnderModal + 'px');
  });

  $(".close-modal").on("click", function() {
    dealWithClosingModal();
  });

  $(document).on("keyup", function(e) {
    if (e.keyCode == 27) {
      dealWithClosingModal();
    }
  });

  $("#applicationmodal").on('click', function(event) {
    var applFormViewDiv = document.getElementById("application-form-modal");
    if (!$.contains( applFormViewDiv, event.target )) { // if clicking OUTSIDE the modal div
      dealWithClosingModal();
    }
  });

  function dealWithClosingModal() {
    resumeScrollingAferModal();
    $('#applicationmodal').modal('hide');
  }

  function resumeScrollingAferModal() {
console.log($('#applicationmodal').hasClass('in'));
    $('html').removeClass('noscroll');
    if ($('#applicationmodal').hasClass('in')) { // for some reason, sometimes the '$(window).scrollTop();' does not get defined on initial page load
      $(window).scrollTop(currentScrollTopUnderModal);
    } else {
      $(window).scrollTop(870);
    }
  }

});
/////// modal ////////






