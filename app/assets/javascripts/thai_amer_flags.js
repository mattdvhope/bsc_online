// switch between Thai & American flags //////////
$(".thai_flag").on("click tap", function(e) {
  e.preventDefault();
  if (sessionStorageAvailable("fragment")) {
    sessionStorage.setItem('language', "thai");    
  }
  var tempScrollTop = $(window).scrollTop();
  $($(this).parent().find( ".thai_flag" )).hide();
  $($(this).parent().find( ".usa_flag" )).show();
  getCorrectPageWhenFlagClicked();
  $(window).scrollTop(tempScrollTop);
});

$(".usa_flag").on("click tap", function(e) {
  e.preventDefault();
  if (sessionStorageAvailable("fragment")) {
    sessionStorage.setItem('language', "english");    
  }
  var tempScrollTop = $(window).scrollTop();
  $($(this).parent().find( ".thai_flag" )).show();
  $($(this).parent().find( ".usa_flag" )).hide();
  getCorrectPageWhenFlagClicked();
  $(window).scrollTop(tempScrollTop);
});

function getCorrectPageWhenFlagClicked() {
  if ($(".front-main-hbs").is(":visible")) {
    App.getFrontMainPage();    
  } else if ($(".entire-vol").is(":visible")) {
    router.navigate("volunteer_info");
    App.getVolunteerPage();    
  }
}


