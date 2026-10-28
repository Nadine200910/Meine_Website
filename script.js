const searchInput = document.getElementById("searchInput");
const suchenButton = document.getElementById("suchenButton");

    suchenButton.addEventListener("click", () => {
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
        } switch (suchbegriff) {
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
        }       switch (suchbegriff) {
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
        }    switch (suchbegriff) {
            // Tunier
            case "tunierkleidung":
            case "ausrüstung":
            case "was man noch mitnehmen sollte":
            case "dressur":
                document.getElementById(suchbegriff).scrollIntoView();
                break;
        } 
    });

    