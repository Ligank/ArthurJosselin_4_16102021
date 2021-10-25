function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const CloseBtn = document.querySelectorAll(".close")
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

CloseBtn.forEach((btn) => btn.addEventListener("click", closemodal));

function closemodal() {
  modalbg.style.display = "none";
}


/*Formulaire*/

let myForm = document.getElementById('myForm');


myForm.addEventListener('submit', function(test) {
  let myFirst = document.getElementById('first');

  if (myFirst.value.trim() == "") {
    test.preventDefault();
  }
  

});

