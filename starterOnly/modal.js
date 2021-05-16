/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                 DOM ELEMENTS                */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Import DOM modal Elements :
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formClose = document.querySelectorAll("#close");
const btnSubmit = document.querySelector(".btn-submit");

// Import DOM input :
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const qty = document.getElementById("quantity");

// Import Elements Checkbox :
const newYork = document.getElementById("location1");
const sanFransisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const cgu = document.getElementById("checkbox1");
const nextEvent = document.getElementById("checkbox2");

// Importation DOM error : 
const missFirst = document.getElementById("missFirst");
const missLast = document.getElementById("missLast");
const missEmail = document.getElementById("missEmail");
const missDate = document.getElementById("missBirthdate");
const missQuantity = document.getElementById("missQuantity");
const missLocation = document.getElementById("missLocation");
const missConditions = document.getElementById("missConditions");

// Import DOM confirmation :
const closeConf = document.querySelector(".closeConfirmation");
const confirmationbg = document.getElementById("confirmation");



/* ººººººººººººººººººººººººººººººººººººººººººº */
/*            INITIALISATION VARIABLE          */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Create ERROR MESSAGE :
const noGoodFirst = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const noGoodLast = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const noGoodEmail = "Veuillez entrer un email valide.";
const noGoodDate = "Veuillez entrer une date de naissance valide.";
const noGoodQty = "Veuillez entrer une valeur numérique valide.";
const noGoodCity = "Veuillez choisir une ville.";
const noGoodConditions = "Veillez cocher la case pour valider le formulaire.";

// Create REGEX :
const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const dateValid = /^\d{4}-\d{2}-\d{2}$/;

// Create counter :
let nbValidForm = 7;

// Create message for final counter in "checkValidForm" function :
const nbValidationText = "/7 de champs validés";

// Create array for gather each location :
const cities = [newYork, sanFransisco, seattle, chicago, boston, portland];

// Create cguText :
let cguText = "Accepté";

// Create variable for input border color change :
const colorBorderNoGood = "#f45265 solid 3px";
const colorBorderGood = "#279e7a solid 3px";

// Create variable for titles of the input value in console :
const prenomTitre = "Prénom: ";
const nomTitre = "Nom: ";
const emailTitre = "Email: ";
const dateTitre = "Date de naissance: ";
const tournoisTitre = "Nombres de tournois participé: ";
const villeTitre = "Ville: ";
const cguTitre = "Condition générale d'utilisation: ";

/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                    EVENTS                   */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// launch modal event :
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal :
formClose.forEach((elt) => elt.addEventListener("click", closeModal));

// we get the event "event" at the click of the button "submit" :
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    onClickSubmit(e);
})



/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                  FUNCTIONS                  */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Start modal :
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// launch modal form :
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form :
function closeModal() {
    modalbg.style.display = "none";
}


//       ––––––––––––––––       \\ 
// ----- DISPLAY FUNCTION ----- \\

// Display error message in console and under the input :
const displayError = (name, missName, noGoodName) => {
    console.error(noGoodName);
    missName.innerHTML += noGoodName;
    name.style.border = colorBorderNoGood;
    nbValidForm--;
}

// Display valid message in console with input value :
const displayValid = (name, missName, title) => {
    console.log(title + name.value || name.checked);
    missName.innerHTML += "";
    name.style.border = colorBorderGood;
}


//       ––––––––––––––––––––       \\ 
// ----- CHECK INPUT FUNCTION ----- \\

// check if input first is bigger than 2 :
const checkInputFirst = () => {
    if (first.value.length <= 2) {
        displayError(first, missFirst, noGoodFirst);
    } else {
        displayValid(first, missFirst, prenomTitre);
    }
}

// check if input last is bigger than 2 :
const checkInputLast = () => {
    if (last.value.length <= 2) {
        displayError(last, missLast, noGoodLast);
    } else {
        displayValid(last, missLast, nomTitre);
    }
}

// check if email is valid with Regex :
const checkInputEmail = () => {
    if (emailValid.test(email.value)) {
        displayValid(email, missEmail, emailTitre);
    } else {
        displayError(email, missEmail, noGoodEmail);
    }
}

// check if date is valid with Regex :
const checkInputDate = () => {
    if (dateValid.test(birthdate.value)) {
        displayValid(birthdate, missDate, dateTitre);
    } else {
        displayError(birthdate, missDate, noGoodDate);
    }
}

// check if qty is valid with this condition :
const checkInputQty = () => {
    if (qty.value >= 1 && qty.value <= 99) {
        displayValid(qty, missQuantity, tournoisTitre);
    } else {
        displayError(qty, missQuantity, noGoodQty);
    }
}

// check if cities[tab] is checked with this condition :
const checkInputCities = () => {

    for (var i = 0; i < cities.length; i++) {
        if (cities[i].checked == true) {
            cities.checked = cities[i].value;
        }
    }
    if (cities.value == false || cities.checked == undefined) {
        missLocation.innerHTML += noGoodCity;
        console.error(noGoodCity);
        nbValidForm--;
    } else {
        console.log("Ville: " + cities.checked);
        missLocation.innerHTML += "";
    }
}

// check if checkbox1 is checked with this condition :
const checkInputCgu = () => {

    if (cgu.checked == true) {
        console.log("Condition générale d'utilisation: " + cguText);
        missConditions.innerHTML += "";

    } else {
        missConditions.innerHTML += noGoodConditions;
        console.error(noGoodConditions);
        nbValidForm--;
    }
}

// check if checkbox2 is checked with this condition :
const checkInputEvt = () => {

    if (nextEvent.checked == true) {
        console.log("Oui je veux être prévenu des prochains évènements.");
    } else {
        console.log("Non je ne veut pas être prévenu des prochains évènements.");
    }
}


//       –––––––––––––––––––       \\ 
// ----- VALIDATION FUNCTION ----- \\  

// Validation message of form :
const checkValidForm = () => {
    console.log(nbValidForm + nbValidationText);
    if (nbValidForm <= 6) {
        confirmationbg.style.display = "none";
    } else {
        confirmationbg.style.display = "flex";
    }
}

// Form main validation :
const onClickSubmit = () => {
    checkInputFirst();
    checkInputLast();
    checkInputEmail();
    checkInputDate();
    checkInputQty();
    checkInputCities();
    checkInputCgu();
    checkInputEvt();
    checkValidForm();
}