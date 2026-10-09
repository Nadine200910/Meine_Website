const outputParagraph = document.getElementById("output");
console.log(outputParagraph);
const sendenButton = document.getElementById("senden");
console.log(sendenButton);

const nameInput = document.getElementById("name");
console.log(nameInput);
const mailInput = document.getElementById("mail", "name");
console.log(mailInput);

function send() {

    // outputParagraph.innerHTML = nameInput.value;
    // outputParagraph.innerHTML = nameInput.value + " " + mailInput.value;
    outputParagraph.innerHTML = `Mein Name ist: ${nameInput.value}, meine Mailadresse ist: ${mailInput.value} `

}

// Taschenrechner
const inputRechnungParagraph = document.getElementById("inputRechnung");
console.log(inputRechnung);
const outputRechnungParagraph = document.getElementById("outputRechnung");
console.log(outputRechnung);

// Zahlen Buttons
const zahl0Button = parseInt(document.getElementById("zahl0").innerText);
console.log(zahl0Button);
const zahl1Button = parseInt(document.getElementById("zahl1").innerText);
console.log(zahl1Button);
const zahl2Button = parseInt(document.getElementById("zahl2").innerText);
console.log(zahl2Button);
const zahl3Button = parseInt(document.getElementById("zahl3").innerText);
console.log(zahl3Button);
const zahl4Button = parseInt(document.getElementById("zahl4").innerText);
console.log(zahl4Button);
const zahl5Button = parseInt(document.getElementById("zahl5").innerText);
console.log(zahl5Button);
const zahl6Button = parseInt(document.getElementById("zahl6").innerText);
console.log(zahl6Button);
const zahl7Button = parseInt(document.getElementById("zahl7").innerText);
console.log(zahl7Button);
const zahl8Button = parseInt(document.getElementById("zahl8").innerText);
console.log(zahl8Button);
const zahl9Button = parseInt(document.getElementById("zahl9").innerText);
console.log(zahl9Button);

//Zeichen Buttons
const zeichenGeteiltButton = document.getElementById("zeichenGeteilt").innerText;
console.log(zeichenGeteiltButton);
const zeichenMalButton = document.getElementById("zeichenMal").innerText;
console.log(zeichenMalButton);
const zeichenPlusButton = document.getElementById("zeichenPlus").innerText;
console.log(zeichenPlusButton);
const zeichenPunktButton = document.getElementById("zeichenPunkt").innerText;
console.log(zeichenPunktButton);
const zeichenMinusButton = document.getElementById("zeichenMinus").innerText;
console.log(zeichenMinusButton);
const abgebenButton = document.getElementById("abgeben").innerText;
console.log(abgebenButton);

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
    // let abgeben =  zahl9Button + zahl8Button
    // inputRechnungParagraph.innerHTML = abgeben
    let ergebnis = eval(rechnung);

    outputRechnungParagraph.innerText = ergebnis
}
document.getElementById("clear").addEventListener("click", () => {

    rechnung = "";
    inputRechnungParagraph.innerText = "";
    outputRechnungParagraph.innerText = "";

});
