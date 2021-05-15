/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                 DOM ELEMENTS                */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Import DOM modal Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formClose = document.querySelectorAll("#close");
const btnSubmit = document.querySelector(".btn-submit");

// Import DOM input
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const qty = document.getElementById("quantity");

// const location = document.querySelectorAll("location");

// Import Elements Checkbox
const newYork = document.getElementById("location1");
const sanFransisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const cities = [newYork, sanFransisco, seattle, chicago, boston, portland];
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

// Import DOM confirmation 
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



/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                    EVENTS                   */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal
formClose.forEach((elt) => elt.addEventListener("click", closeModal));

// on récupère l'évènement "event" au click du boutton "submit"
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    onClickSubmit(e);
})



/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                  FUNCTIONS                  */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Start modal
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}


//       ––––––––––––––––––––       \\ 
// ----- CHECK INPUT FUNCTION ----- \\


// check if input last and first are bigger than 2
const checkInputNames = () => {
    if (first.value.length <= 2) {
        console.log(noGoodFirst);
        missFirst.innerHTML += noGoodFirst;
    } else if (last.value.length <= 2) {
        console.log(noGoodLast);
        missLast.innerHTML += noGoodLast;
    } else {
        console.log(first.value);
        console.log(last.value);
        missFirst.innerHTML += "";
    }
}

// check if email is valid with Regex
const checkInputEmail = () => {
    if (emailValid.test(email.value)) {
        console.log(email.value);
    } else {
        console.log(noGoodEmail)
        missEmail.innerHTML += noGoodEmail;
    }
}

// check if date is valid with Regex
const checkInputDate = () => {
    if (dateValid.test(birthdate.value)) {
        console.log(birthdate.value);
    } else {
        console.log(noGoodDate);
        missDate.innerHTML += noGoodDate;
    }
}

// check if qty is valid with this condition
const checkInputQty = () => {
    if (qty.value >= 1 && qty.value <= 99) {
        console.log(qty.value);
    } else {
        console.log(noGoodQty)
        missQuantity.innerHTML += noGoodQty;
    }
}

// check if cities[tab] is checked with this condition ????
const checkInputCities = () => {

    for (var i = 0; i < cities.length; i++) {
        if (cities[i].checked == true) {
            cities.checked = cities[i].value;
        }
    }
    if (cities.value == false || cities.checked == undefined) {
        missLocation.innerHTML += noGoodCity;
        console.log(noGoodCity);
    } else {
        console.log(cities.checked);
        missLocation.innerHTML += "";
    }
}

// check if checkbox1 is checked with this condition
const checkInputCgu = () => {

    if (cgu.checked == true) {
        console.log("CGU OK");
        missConditions.innerHTML += "";
    } else {
        missConditions.innerHTML += noGoodConditions;
        console.log(noGoodConditions);
    }
}

// check if checkbox2 is checked with this condition
const checkInputEvt = () => {

    if (nextEvent.checked == true) {
        console.log("Oui je veux être prévenu des prochains évènements.");
    } else {
        console.log("Non je veux ne veut pas être prévenu des prochains évènements.");
    }
}


//       –––––––––––––––––––       \\ 
// ----- VALIDATION FUNCTION ----- \\  

// Message validation of form
const validForm = () => {
    confirmationbg.style.display = "flex"
}

// Form main validation
const onClickSubmit = () => {
    checkInputNames();
    checkInputEmail();
    checkInputDate();
    checkInputQty();
    checkInputCities();
    checkInputCgu();
    checkInputEvt();
    validForm();
}