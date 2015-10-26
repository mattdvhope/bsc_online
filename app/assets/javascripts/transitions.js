$(document).ready(function() {

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
      }, 300, 'swing');
  });

  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') ) {
          $(this).collapse('hide');
      }
  });

});

