// function getCorrectPageWhenFlagClicked() {
//   if ($(".front-main-hbs").is(":visible")) {
//     App.getFrontMainPage();    
//   } else if ($(".entire-vol").is(":visible")) {
//     router.navigate("volunteer_info");
//     App.getVolunteerPage();    
//   }
// }

// function displayHomeNavLinks() {
//   $($("div.navbar-collapse>").find("a[href$='#features']")).show();
//   $($("div.navbar-collapse>").find("a[href$='#get-started']")).show();
//   $($("div.navbar-collapse>").find("a[href$='#holistic']")).show();
//   $($("div.navbar-collapse>").find("a[href$='#helping-friends']")).show();
//   $($("div.navbar-collapse>").find("a[href$='#volunteer-steps']")).hide();
// }

// function displayVolunteerNavLinks() {
//   $($("div.navbar-collapse>").find("a[href$='#features']")).hide();
//   $($("div.navbar-collapse>").find("a[href$='#get-started']")).hide();
//   $($("div.navbar-collapse>").find("a[href$='#holistic']")).hide();
//   $($("div.navbar-collapse>").find("a[href$='#helping-friends']")).hide();
//   $($("div.navbar-collapse>").find("a[href$='#volunteer-steps']")).show();
// }

// // This is here to prepare the nav bar links for the switch to a different langauge...so that in 'transitions.js', 'scrollTop' will be dynamically populated from sessionStorage////
// $(window).load(function() {
//   if ($(".front-main-hbs").is(":visible")) {
//     sessionStorage.setItem('#page-top', $("#page-top").offset().top);
//     sessionStorage.setItem('#features', $("#features").offset().top);
//     sessionStorage.setItem('#get-started', $("#get-started").offset().top);
//     sessionStorage.setItem('#holistic', $("#holistic").offset().top);
//     sessionStorage.setItem('#helping-friends', $("#helping-friends").offset().top);
//   } 
// });
// ////////////////////


