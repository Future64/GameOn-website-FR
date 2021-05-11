/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */
/* ----------------DOM ELEMENTS--------------- */
/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */

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

// Create REGEX :
const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const dateValid = /^\d{4}-\d{2}-\d{2}$/;


/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */
/* ----------------LOGIC---------------------- */
/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */

// const noGoodFirst = "";
// missFirst.innerHTML = noGoodFirst;

// const noGoodLast = "";
// missLast.innerHTML = noGoodLast;

// const noGoodEmail = "";
// missEmail.innerHTML = noGoodEmail;

// const noGoodDate = "";
// missDate.innerHTML = noGoodDate;

// const noGoodQty = "";
// missQuantity.innerHTML = noGoodQty;


/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */
/* ----------------FUNCTIONS------------------ */
/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */

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

// check if input last and first are bigger than 2
const checkInputNames = () => {
    if (first.value.length <= 2) {
        console.log("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
        missFirst.innerHTML += "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    } else if (last.value.length <= 2) {
        console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        missLast.innerHTML += "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    } else {
        console.log("Le prénom ainsi que le nom sont correctement écrit.");
        missFirst.innerHTML += "";
    }
}

// check if email is valid with Regex
const checkInputEmail = () => {
    if (emailValid.test(email.value)) {
        console.log("Email bien ecrit")
    } else {
        console.log("Veuillez entrer un email valide.")
        missEmail.innerHTML += "Veuillez entrer un email valide.";
    }
}

// check if date is valid with Regex
const checkInputDate = () => {
    if (dateValid.test(birthdate.value)) {
        console.log("Date bien ecrit")
    } else {
        console.log("Veuillez entrer une date de naissance valide.")
        missDate.innerHTML += "Veuillez entrer une date de naissance valide.";
    }
}

// check if qty is valid with this condition
const checkInputQty = () => {
    if (qty.value >= 1 && qty.value <= 99) {
        console.log("Bonne quantité");
    } else {
        console.log("Veuillez entrer une valeur numérique valide.")
        missQuantity.innerHTML += "Veuillez entrer une valeur numérique valide.";
    }
}

const checkInputCities = () => {
    var location = "";
    for (var i = 0; i < location.length; i++) {
        if (location[i].checked) {
            location = location[i].value;
            break;
        }
    }
    if (location == "") {
        missLocation.innerHTML += "Veuillez choisir une ville.";
    } else {
        console.log("location");
    }
}

const checkInputCgu = () => {

}

const onClickSubmit = () => {

    checkInputNames();
    checkInputEmail();
    checkInputDate();
    checkInputQty();
    checkInputCities();
    // checkInputCgu();
}



/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */
/* ----------------EVENTS--------------------- */
/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal
formClose.forEach((elt) => elt.addEventListener("click", closeModal));

// on récupère l'évènement "event" au click du boutton "submit"
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    onClickSubmit(e);
})































// // Valid first input
// function textValidInput() {
//     if (first.value === '' && first.lenght > 1) {
//         alert("Veuillez remplir le champ Prénom");
//         return false;
//     }
// }

// // Valid last input
// function textValidInput() {
//     if (last.value === '' && last.lenght > 1) {
//         alert("Veuillez remplir le champ Nom");
//         return false;
//     }
// }

// // Valid email input
// function textValidInput() {
//     if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
//         alert("Veuillez remplir le champ email");
//         return false;
//     }
// }

// Valid modal form
// function validfModal() {
//     if (first == null) {
//         console.log("Faut finir de remplir le formulaire");
//     } else if (last == null) {
//         console.log("Faut finir de remplir le formulaire");
//     } else if (email == null) {
//         console.log("Faut finir de remplir le formulaire");
//     } else if (birthdate == null) {
//         console.log("Faut finir de remplir le formulaire");
//     } else if (formData == null) {
//         console.log("Faut finir de remplir le formulaire");
//     } else {
//         console.log("Formulaire validé ! Bravo");
//     }
// }