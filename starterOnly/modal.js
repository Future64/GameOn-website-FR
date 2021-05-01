/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */
/* ----------------DOM ELEMENTS--------------- */
/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formClose = document.querySelectorAll("#close");
const first = document.getElementById("first").value; // Valid Imput FirstName
const last = document.getElementById("last").value; // Valid Imput LastName
const email = document.getElementById("email").value; // Valid Imput Email
const birthdate = document.getElementById("birthdate").value; // Valid Imput birthdate
const formData = document.querySelectorAll(".formData").value; // Valid Imput number of formData
const newYork = document.getElementById("location1");
const sanFrancisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const btnSubmit = document.querySelectorAll(".btn-submit");

/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */
/* ----------------EVENTS--------------------- */
/* ◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊ */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal
formClose.forEach(elt => elt.addEventListener("click", closeModal));


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
// Valid first or last input
function textValidInput() {
    if (first | last !== null && inputValue.length > 2) return true;
    else return false;
}