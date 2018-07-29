setTimeout(function () {
    $("#me")[0].style.display = "inline-block";
}, 1000);

setTimeout(function () {
    var typed = new Typed('#typed', {
        strings: ['développeur web', 'graphiste', 'entrepreneur', 'photographe', 'vidéaste', 'musicien', 'web designer', 'allié au féminisme', 'perfectionniste', 'vegan', 'sportif', 'inspirateur' ,'foufou', 'visionnaire', 'compositeur', 'amoureux des plantes', 'ambitieux', 'militant', 'ce que je suis', 'Melvin'],
        typeSpeed: 75,
        backDelay: 3000,
        fadeOut: true,
        loop: true
    });
}, 2500);

//##############################################################

$("#panel").mouseenter(function(){
    /*console.log("entered the panel");*/
    
    $("#panelcover1")[0].style.transform = "skew(10deg, 0) translateX(1vw)";
    $("#panelcover2")[0].style.transform = "skew(-3.5deg, 0) translateX(1vw)";
    $("#panelcover3")[0].style.transform = "skew(1deg, 0) translateX(1vw)";
});

$("#panel").mouseleave(function(){
    /*console.log("left the panel");*/
    
    $("#panelcover1")[0].style.transform = "skew(2deg, 0)";
    $("#panelcover2")[0].style.transform = "skew(-4deg, 0)";
    $("#panelcover3")[0].style.transform = "skew(8deg, 0)";
});