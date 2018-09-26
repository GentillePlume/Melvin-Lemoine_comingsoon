// ##################################################
//                    TYPED.JS
// ##################################################

setTimeout(function() {
  var typed = new Typed('#typed', {
    strings: ['développeur web', 'graphiste', 'entrepreneur', 'photographe', 'vidéaste', 'musicien', 'web designer', 'allié au féminisme', 'perfectionniste', 'vegan', 'sportif', 'inspirateur', 'foufou', 'visionnaire', 'compositeur', 'amoureux des plantes', 'ambitieux', 'militant', 'ce que je suis', 'Melvin'],
    typeSpeed: 75,
    backDelay: 3000,
    fadeOut: true,
    loop: true,
    showCursor: false
  });
}, 2500);

// ##################################################
//         HOME BACKGROUND STYLES ANIMATIONS
// ##################################################

for (i = 0; i < $(".home__style").length; i++) {
  $(".home__style")[i].style.animationDuration = Math.floor((Math.random() * 15) + 5) + "s";
}

// ##################################################
//              CHANGE PAGE FUNCTION
// ##################################################

$("header").click(function() {

  for (i = 0; i < $(".home__style").length; i++) {
    $(".home__style")[i].style.opacity = 0;
  }

  // NAVIGATION BAR
  $("#networks")[0].style.animationName = "fadeOutDown";

  // PROFIL CONTENT
  $(".profil__image")[0].style.animationName = "fadeOut";
  $(".profil__name")[0].style.animationName = "fadeOutDown";
  $(".profil__desc")[0].style.animationName = "fadeOutDown";

  // STATUS BOX
  $(".status__line")[0].style.animationName = "fadeOutDown";
  $(".status__image")[0].style.animationName = "bounceOut";
  $(".status__title")[0].style.animationName = "fadeOutRight";
  $(".status__desc")[0].style.animationName = "fadeOutRight";

  // HEADER
  $(".header__img")[0].style.animationName = "fadeOut";
  $(".header__p")[0].style.animationName = "fadeOut";

  setTimeout(function() {
    $(".header__arrow_container")[0].style.display = "flex";

    $(".header__arrow")[0].style.display = "inline-block";

  }, 1000);

  // HIDE ELEMENTS
  setTimeout(function() {
    $("#status")[0].style.visibility = "hidden";

    $(".profil__image")[0].style.display = "none";
    $(".profil__name")[0].style.display = "none";
    $(".profil__desc")[0].style.display = "none";

    for (i = 0; i < $(".home__style").length; i++) {
      $(".home__style")[i].style.visibility = "hidden";
    }

    $(".header__img")[0].style.display = "none";
    $(".header__p")[0].style.display = "none";

    // SITES
    for (i = 0; i < $(".site").length; i++) {
      $(".site")[i].style.display = "flex";
    }
  }, 1000);



})

// ##################################################
//                  SITES DATA
// ##################################################