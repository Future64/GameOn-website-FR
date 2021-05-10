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
const formData = document.querySelectorAll(".formData");

// Importation Elements Checkbox
const cities = document.querySelectorAll(".city");
const cgu = document.getElementById("checkbox1");

// Importation DOM error : 
const missFirst = document.getElementById("missFirst");
const missLast = document.getElementById("missLast");
const missEmail = document.getElementById("missEmail");
const missDate = document.getElementById("missDate");
const missQuantity = document.getElementById("missQuantity");

// Importation DOM confirmation 
const closeConf = document.querySelector(".closeConfirmation");
const confirmationbg = document.getElementById("confirmation");

// Create REGEX :
const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const dateValid = /^\d{4}-\d{2}-\d{2}$/;


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


const checkInputNames = () => {
    if (first.value.length <= 2) {
        console.log("Pas bon le prénom");
    } 
    else if (last.value.length <= 2) {
        console.log("Pas bon le nom");
    }
    else {
        console.log("Tout est ok")
    }
}

const checkInputEmail = () => {

}

const checkInputDate = () => {
    
}

const checkInputQty = () => {
    
}

const checkInputCities = () => {
    
}

const checkInputCgu = () => {
    
}

const onClickSubmit = () => {

    checkInputNames();
    // checkInputEmail();
    // checkInputDate();
    // checkInputQty();
    // checkInputCities();
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