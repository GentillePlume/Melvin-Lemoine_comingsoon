function reset_builder(iteration) {
    console.log("reset_builder launched");
    if ($(".pixel").length != 0) {
        for (i = 0; i < iteration; i++) {
            $("div").remove(".pixel");
            console.log("Remove boucle done");
            console.log("number of pixels : " + $(".pixel").length);
        }
    }
}

//Creation of all the boxes
function builder(w, h, iteration) {
    for (i = 0; i < iteration; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        newDiv.style.width = w + "vw";
        newDiv.style.height = h + "vh";
        document.getElementsByTagName('body')[0].appendChild(newDiv);
        console.log("Boucle done");
    }
    var pixelWidth = $(".pixel").width();
    var pixelHeight = $(".pixel").height();
}

var statut;
function databuild() {
    var screen_Width = $(window).width();
    var screen_Height = $(window).height();

    var h = 10;
    var w = 10;

    var iteration;

    if (screen_Width >= screen_Height * 2 - 0) {
        console.log("DOUBLE");

        w = w / 2;
        iteration = (w * h) * 4;

        if (statut == "simple") {
            reset_builder(iteration);
            console.log("statut changed to double");
        }

        statut = "double";
        console.log("statut : " + statut);

        if ($(".pixel").length == 0) {
            builder(w, h, iteration);
        }

    } else {
        console.log("SIMPLE");

        iteration = w * h;

        if (statut == "double") {
            reset_builder(iteration);
            console.log("statut changed to simple");
        }

        statut = "simple";
        console.log("statut : " + statut);

        if ($(".pixel").length == 0) {
            builder(w, h, iteration);
        }

    }
}

$(document).ready(databuild());
$(window).resize(function () {
    console.log("%cRESIZED", 'background-color: blue; color: white');
    databuild();
});


$(".pixel").mouseenter(function () {
    console.log("ENTERED IN A PIXEL");

    var target = this;

    target.style.transition = "none";
    console.log('%ctransition removed', 'color: red');

    setTimeout(function () {
        target.style.transition = "background-color 2s ease-out 0s";
        console.log('%ctransition setted', 'color: green');
    }, .1);
});