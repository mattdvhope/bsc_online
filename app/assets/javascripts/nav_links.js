// Change out nav link list when changing pages

// $($("a[href$='volunteer_info']").parent().parent().children().last().find( "ul" )).hide();

$(document).on("click tap", "a[href$='volunteer_info']", function() {

  $($("div.navbar-collapse>").find("a[href$='#features']")).hide()
  $($("div.navbar-collapse>").find("a[href$='#process']")).hide()
  $($("div.navbar-collapse>").find("a[href$='#world-view']")).hide()
  $($("div.navbar-collapse>").find("a[href$='#helping-friends']")).hide()

    // if (sessionStorageAvailable("fragment")) {
    //   sessionStorage.setItem('language', "thai");    
    // }
    // var tempScrollTop = $("body").scrollTop();
    // $($(this).parent().find( ".thai_flag" )).hide();
    // $($(this).parent().find( ".usa_flag" )).show();
    // getCorrectPageWhenFlagClicked();
    // $("body").scrollTop(tempScrollTop);

});

