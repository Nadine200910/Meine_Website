const searchInput = document.getElementById("searchInput");
const suchenButtonPferde = document.getElementById("suchenButtonPferde");
const suchenButtonRassen = document.getElementById("suchenButtonRassen");
const suchenButtonAbzeichen = document.getElementById("suchenButtonAbzeichen");
const suchenButtonTurnier = document.getElementById("suchenButtonTurnier");
function pferdSuchen() {
    suchenButtonPferde.addEventListener("click", () => {
        const suchbegriff = searchInput.value.trim().toLowerCase();
        switch (suchbegriff) {
            // Schulpferde
            case "floh":
            case "gummibär":
            case "morgana":
            case "mary":
            case "berkady":
            case "benga":
            case "mimi":
            case "ka":
            case "seaby":
            case "clowny":
            case "quanti":
                document.getElementById(suchbegriff).scrollIntoView();
                break;
        }
    });
}
function rasseSuchen() {
    suchenButtonRassen.addEventListener("click", () => {
        const suchbegriff = searchInput.value.trim().toLowerCase();
        switch (suchbegriff) {
            // Rassen
            case "trakener":
            case "oldenburger":
            case "hannoveraner":
            case "deutsches_reitpony":
            case "shetlandpony":
            case "holsteiner":
            case "friese":
                document.getElementById(suchbegriff).scrollIntoView();
                break;
        }
    });

}
function abzeichenSuchen() {
    suchenButtonAbzeichen.addEventListener("click", () => {
        const suchbegriff = searchInput.value.trim().toLowerCase();
        switch (suchbegriff) {
            // Abzeichen
            case "ra10":
            case "ra9":
            case "ra8":
            case "ra7":
            case "ra6":
            case "ra5":
            case "ra4":
            case "ra3":
            case "ra2":
            case "ra1":
                document.getElementById(suchbegriff).scrollIntoView();
                break;
        }
    });
}
function tunierSuchen() {
    suchenButtonTurnier.addEventListener("click", () => {
        const suchbegriff = searchInput.value.trim().toLowerCase();
        switch (suchbegriff) {
            // Tunier
            case "tunierkleidung":
            case "ausrüstung":
            case "was man noch mitnehmen sollte":
            case "dressur":
                document.getElementById(suchbegriff).scrollIntoView();
                break;
        }
    });
}

//Arrays


let pferde = [
    {
        name: "Trakehner",
        herkunft: "Ostpreußen",
        grösse: "160-170 cm",
        verwendung: "Dressur, Springen, Vielseitigkeit, Freizeit"
    },
    {
        name: "Oldenburger",
        herkunft: "Deutschland",
        grösse: "165-180 cm",
        verwendung: "Dressur, Springen, Sportpferd"
    },
    {
        name: "Hannoveraner",
        herkunft: "Deutschland",
        grösse: "160-175 cm",
        verwendung: "Dressur, Springen, Vielseitigkeit"
    },
    {
        name: "Holsteiner",
        herkunft: "Schleswig-Holstein",
        grösse: "165-175 cm",
        verwendung: "Vor allem Springreiten, auch Dressur"
    },
    {
        name: "Friese",
        herkunft: "Niederlande",
        grösse: "155-170 cm",
        verwendung: "Kutschfahren, Dressur, Freizeit, Shows"
    },
    {
        name: "Deutsches Reitpony",
        herkunft: "Deutschland",
        grösse: "138-148 cm",
        verwendung: "Kinder- und Jugendsport, Dressur, Springen"
    },
    {
        name: "Shetlandpony",
        herkunft: "Shetlandinseln",
        grösse: "80-107 cm",
        verwendung: "Freizeit, Kinderreiten, Fahren, Begleitpony"
    }
];

let liste = document.getElementById("itemList1");

for (let i = 0; i < pferde.length; i++) {
    let li = document.createElement("li");

    li.innerHTML = `
        <h3>${pferde[i].name}</h3>
        <p><strong>Herkunft:</strong> ${pferde[i].herkunft}</p>
        <p><strong>Größe:</strong> ${pferde[i].grösse}</p>
        <p><strong>Verwendung:</strong> ${pferde[i].verwendung}</p>
    `;

    liste.appendChild(li);
}
