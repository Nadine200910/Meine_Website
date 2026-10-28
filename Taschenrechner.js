// E-Mail
const outputParagraph = document.getElementById("output");
const sendenButton = document.getElementById("senden");

const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail", "name");

function send() {
    outputParagraph.innerHTML = `Mein Name ist: ${nameInput.value}, meine Mailadresse ist: ${mailInput.value} `

}
// Taschenrechner
const inputRechnungParagraph = document.getElementById("inputRechnung");
const outputRechnungParagraph = document.getElementById("outputRechnung");

//Zahlen Buttons
function zahlen() {
    const zahl0Button = parseInt(document.getElementById("zahl0").innerText);
    const zahl1Button = parseInt(document.getElementById("zahl1").innerText);
    const zahl2Button = parseInt(document.getElementById("zahl2").innerText);
    const zahl3Button = parseInt(document.getElementById("zahl3").innerText);
    const zahl4Button = parseInt(document.getElementById("zahl4").innerText);
    const zahl5Button = parseInt(document.getElementById("zahl5").innerText);
    const zahl6Button = parseInt(document.getElementById("zahl6").innerText);
    const zahl7Button = parseInt(document.getElementById("zahl7").innerText);
    const zahl8Button = parseInt(document.getElementById("zahl8").innerText);
    const zahl9Button = parseInt(document.getElementById("zahl9").innerText);
}

//Zeichen Buttons
function zeichen() {
    const zeichenGeteiltButton = document.getElementById("zeichenGeteilt").innerText;
    const zeichenMalButton = document.getElementById("zeichenMal").innerText;
    const zeichenPlusButton = document.getElementById("zeichenPlus").innerText;
    const zeichenPunktButton = document.getElementById("zeichenPunkt").innerText;
    const zeichenMinusButton = document.getElementById("zeichenMinus").innerText;
    const abgebenButton = document.getElementById("abgeben").innerText;
}

let rechnung = "";

document.querySelectorAll("button").forEach(button => {

    if (button.id !== "abgeben") {

        button.addEventListener("click", () => {
            rechnung = rechnung + button.innerText.trim();
            inputRechnungParagraph.innerText = rechnung;
        });
    }
});

function abgeben() {
   console.log(rechnung)
    let ergebnis = eval(rechnung);
    outputRechnungParagraph.innerText = ergebnis;
};

document.getElementById("clear").addEventListener("click", () => {

    rechnung = "";
    inputRechnungParagraph.innerText = "";
    outputRechnungParagraph.innerText = "";
});

