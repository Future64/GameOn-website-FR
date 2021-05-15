/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                     INITIALISATION VARIABLE */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Create ERROR MESSAGE :
const noGoodFirst = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const noGoodLast = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const noGoodEmail = "Veuillez entrer un email valide.";
const noGoodDate = "Veuillez entrer une date de naissance valide.";
const noGoodQty = "Veuillez entrer une valeur numérique valide.";
const noGoodCity = "Veuillez choisir une ville.";

// Create REGEX :
const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const dateValid = /^\d{4}-\d{2}-\d{2}$/;


/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                                DOM ELEMENTS */
/* ººººººººººººººººººººººººººººººººººººººººººº */

// Importation DOM modal Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formClose = document.querySelectorAll("#close");
const btnSubmit = document.querySelector(".btn-submit");

// Importation DOM input
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const qty = document.getElementById("quantity");
const formData = document.querySelectorAll(".formData");
// const location = document.querySelectorAll("location");

// Importation Elements Checkbox
const cities = document.querySelectorAll(".city");
const cgu = document.getElementById("checkbox1");

// Importation DOM error : 
const missFirst = document.getElementById("missFirst");
const missLast = document.getElementById("missLast");
const missEmail = document.getElementById("missEmail");
const missDate = document.getElementById("missBirthdate");
const missQuantity = document.getElementById("missQuantity");
const missLocation = document.getElementById("missLocation");

// Importation DOM confirmation 
const closeConf = document.querySelector(".closeConfirmation");
const confirmationbg = document.getElementById("confirmation");



/* ººººººººººººººººººººººººººººººººººººººººººº */
/*                                      EVENTS */
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
/*                                   FUNCTIONS */
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


/* ----- CHECK INPUT FUNCTION ----- */

// check if input last and first are bigger than 2
const checkInputNames = () => {
    if (first.value.length <= 2) {
        console.log(noGoodFirst);
        missFirst.innerHTML += noGoodFirst;
    } else if (last.value.length <= 2) {
        console.log(noGoodLast);
        missLast.innerHTML += noGoodLast;
    } else {
        console.log("Le prénom ainsi que le nom sont correctement écrit.");
        missFirst.innerHTML += "";
    }
}

// check if email is valid with Regex
const checkInputEmail = () => {
    if (emailValid.test(email.value)) {
        console.log("Email bien ecrit");
    } else {
        console.log(noGoodEmail)
        missEmail.innerHTML += noGoodEmail;
    }
}

// check if date is valid with Regex
const checkInputDate = () => {
    if (dateValid.test(birthdate.value)) {
        console.log("Date bien ecrit");
    } else {
        console.log(noGoodDate);
        missDate.innerHTML += noGoodDate;
    }
}

// check if qty is valid with this condition
const checkInputQty = () => {
    if (qty.value >= 1 && qty.value <= 99) {
        console.log("Bonne quantité");
    } else {
        console.log(noGoodQty)
        missQuantity.innerHTML += noGoodQty;
    }
}

// check if location is checked with this condition
const checkInputCities = () => {
    var location = "";
    for (var i = 0; i < location.length; i++) {
        if (location[i].checked) {
            location = location[i].value;
            break;
        }
    }
    if (location == "") {
        missLocation.innerHTML += noGoodCity;
    } else {
        console.log(location);
        missLocation.innerHTML += "";
    }
}

const checkInputCgu = () => {

}

/* ----- VALIDATION FUNCTION ----- */

// Form main validation
const onClickSubmit = () => {
    checkInputNames();
    checkInputEmail();
    checkInputDate();
    checkInputQty();
    checkInputCities();
    // checkInputCgu();
}