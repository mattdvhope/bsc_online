// switch between Thai & American flags //////////
$(".thai_flag").on("click tap", function() {
  if (sessionStorageAvailable("fragment")) {
    sessionStorage.setItem('language', "thai");    
  }
  var tempScrollTop = $("body").scrollTop();
  $($(this).parent().find( ".thai_flag" )).hide();
  $($(this).parent().find( ".usa_flag" )).show();
  getCorrectPageWhenFlagClicked();
  $("body").scrollTop(tempScrollTop);
});

$(".usa_flag").on("click tap", function() {
  if (sessionStorageAvailable("fragment")) {
    sessionStorage.setItem('language', "english");   
  }
  var tempScrollTop = $("body").scrollTop();
  $($(this).parent().find( ".thai_flag" )).show();
  $($(this).parent().find( ".usa_flag" )).hide();
  getCorrectPageWhenFlagClicked();
  $("body").scrollTop(tempScrollTop);
});

function getCorrectPageWhenFlagClicked() {
  if ($(".front-main-hbs").is(":visible")) {
    App.getFrontMainPage();    
  } else if ($(".entire-vol").is(":visible")) {
    router.navigate("volunteer_info");
    App.getVolunteerPage();    
  }
}

// This is here to prepare the nav bar links for the switch to a different langauge...so that in 'transitions.js', 'scrollTop' will be dynamically populated from sessionStorage////
$(window).load(function() {
  sessionStorage.setItem('#page-top', $("#page-top").offset().top);
  sessionStorage.setItem('#features', $("#features").offset().top);
  sessionStorage.setItem('#process', $("#process").offset().top);
  sessionStorage.setItem('#world-view', $("#world-view").offset().top);
  sessionStorage.setItem('#helping-friends', $("#helping-friends").offset().top);
});
////////////////////





