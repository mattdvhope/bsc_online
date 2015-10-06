$("h3.answer").click(function() {
  $(this).closest("div").children("h3").children("a").removeClass("brown");
  $(this).children().addClass("brown");
});

