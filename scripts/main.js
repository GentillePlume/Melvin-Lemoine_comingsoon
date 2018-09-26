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
