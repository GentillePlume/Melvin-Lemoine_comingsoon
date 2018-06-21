setTimeout(function () {
    $("#me")[0].style.display = "inline-block";
    setTimeout(function () {
        $("#me")[0].style.animationName = "Iam";
    }, 1050);
}, 1000);

setTimeout(function () {
    var typed = new Typed('#typed', {
        strings: ['développeur web', 'graphiste', 'entrepreneur', 'photographe', 'vidéaste', 'musicien', 'web designer', 'féministe', 'perfectionniste', 'vegan', 'sportif', 'foufou', 'visionnaire', 'compositeur', 'amoureux des plantes', 'différent', 'serviable', 'ambitieux', 'militant pour un monde meilleur', 'ce que je suis'],
        typeSpeed: 75,
        backDelay: 3000,
        fadeOut: true,
        loop: true
    });
}, 2500);