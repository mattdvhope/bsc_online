$( document ).ready(function() {

  $('#my-link').click(function (event) {
    alert('Hooray!');
    // $(this).css("color", "red");
    event.preventDefault(); // Prevent link from following its href
  });

});



