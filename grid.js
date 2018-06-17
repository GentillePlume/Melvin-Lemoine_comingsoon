//Loop iteration calcul
var iteration = Math.pow(100 / 10, 2);

//Creation of all the boxes
for (i = 0; i < iteration; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    newDiv.style.width = 10 + "vw";
    newDiv.style.height = 10 + "vh";
    document.getElementsByTagName('body')[0].appendChild(newDiv);
    console.log("Boucle done");
}

$(".pixel").mouseenter(function () {

    var target = this;

    target.style.transition = "none";
    console.log('%ctransition removed', 'color: red');

    setTimeout(function () {
        target.style.transition = "background-color 2s ease-out 0s";
        console.log('%ctransition setted', 'color: green');
    }, .1);
});