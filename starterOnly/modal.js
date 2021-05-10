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
const newYork = document.getElementById("location1");
const sanFrancisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

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
const nameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+)?$/;
const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const dateValid = /^\d{4}-\d{2}-\d{2}$/;


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

const onClickSubmit = () => {

    if (first == null) {
        let name = first.value;
        checkInputText(name);
    } else {
        missFirst += document.innerHTML("Trop nul c'est vide!")
    }
    if (last == null) {
        let namel = first.value;
        checkInputText(namel);
    } else {
        console.log("2 - Formulaire problème!");
    }
}

const checkInputText = (name) => {
    if (name.length <= 2) {
        console.log("Pas bon");
    } else {
        console.log([name]);
    }
}





























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