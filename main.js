function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_FUS5p9FY/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        document.getElementById("resultLabel").innerHTML = " I can hear - " + results[0].label;
        document.getElementById("resultLabel").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("resultconfidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("resultconfidence").style.color = "rgb(" + r + "," + g + "," + b + ")";

        img1 = document.getElementById("animalImg");


        if (results[0].label == "barking") {
            img1.src = "dog.gif";

        } else if (results[0].label == "hissing") {
            img1.src = "snake.gif";

        } else if (results[0].label == "meowing") {
            img1.src = "cat.gif";

        } else if (results[0].label == "roaring") {
            img1.src = "lion.gif";

        } else {
            img1.src = "listen.gif";

        }

    }
}