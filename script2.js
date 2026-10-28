//Punkte
const punkteInput = document.getElementById("punkte");
const ausgabeParagraph = document.getElementById("ausgabe");

const abgabeButton = document.getElementById("abgabe");

function abgabe() {

    let punkte = Number(punkteInput.value);
    if (punkte < 0 || punkte > 100 || isNaN(punkte)) {
        ausgabeParagraph.innerHTML = "Bitte eine Zahl zwischen 0 und 100 eingeben!";
        return;
    }
    if (punkte <= 29) {
        ausgabeParagraph.innerHTML = `Mit den Punkten ${punkte}, haben Sie die Note: 6`;
    }
    else if (punkte <= 49) {
        ausgabeParagraph.innerHTML = `Mit den Punkten ${punkte}, haben Sie die Note: 5`;
    }
    else if (punkte <= 66) {
        ausgabeParagraph.innerHTML = `Mit den Punkten ${punkte}, haben Sie die Note: 4`;
    }
    else if (punkte <= 80) {
        ausgabeParagraph.innerHTML = `Mit den Punkten ${punkte}, haben Sie die Note: 3`;
    }
    else if (punkte <= 91) {
        ausgabeParagraph.innerHTML = `Mit den Punkten ${punkte}, haben Sie die Note: 2`;
    }
    else if (punkte <= 100) {
        ausgabeParagraph.innerHTML = `Mit den Punkten ${punkte}, haben Sie die Note: 1`;
    }
}
