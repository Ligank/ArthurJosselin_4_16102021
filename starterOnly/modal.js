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
  const myFirst = document.getElementById('first');
  const myRegex = /^[a-zA-Z]+$/;
  const myRegexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-]{2,3}$/;
  const myLast = document.getElementById('last');
  const myEmail = document.getElementById('email');
  const myBirth = document.getElementById('birthdate');
  const myNumber = document.getElementById('quantity');
  const checked_Radios = document.querySelector('input[name = "location"]:checked');
  const checkedbox = document.getElementById('checkbox1');


  /*Prénom*/
  if (myFirst.value.trim() == "") {
    let myError = document.getElementById("error1");
    myError.innerHTML = "Au moins deux caractères sont requis.";
    myFirst.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegex.test(myFirst.value) == false) {
    let myError = document.getElementById("error1");
    myError.innerHTML = "Le prénom ne peut comporter que des lettres et des tirets uniquements.";
    myFirst.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegex.test(myFirst.value) == true) {
    let myError = document.getElementById("error1");
    myError.innerHTML = "";
    myFirst.style.border = "2px solid green";
  }

  /*Nom*/
  if (myLast.value.trim() == "") {
    let myError = document.getElementById("error2");
    myError.innerHTML = "Au moins deux caractères sont requis.";
    myLast.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegex.test(myLast.value) == false) {
    let myError = document.getElementById("error2");
    myError.innerHTML = "Le prénom ne peut comporter que des lettres et des tirets uniquements.";
    myLast.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegex.test(myLast.value) == true) {
    let myError = document.getElementById("error2");
    myError.innerHTML = "";
    myLast.style.border = "2px solid green";
  }

  /*Email*/
  if (myEmail.value.trim() == "") {
    let myError = document.getElementById("error3");
    myError.innerHTML = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
    myEmail.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegexMail.test(myEmail.value) == false) {
    let myError = document.getElementById("error3");
    myError.innerHTML = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
    myEmail.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegexMail.test(myEmail.value) == true) {
    let myError = document.getElementById("error3");
    myError.innerHTML = "";
    myEmail.style.border = "2px solid green";
  }

  /*Date de naissance*/
  if (myBirth.value.trim() == "") {
    let myError = document.getElementById("error4");
    myError.innerHTML = "Veuillez rentrer votre date de naissance.";
    myBirth.style.border = "2px solid red";
    test.preventDefault();
  } else {
    let myError = document.getElementById("error4");
    myError.innerHTML = "";
    myBirth.style.border = "2px solid green";
  }

  /*Nombre de tournois*/
  if (myNumber.value.trim() == "") {
    let myError = document.getElementById("error5");
    myError.innerHTML = "Veuillez indiquez votre nombre de tournois.";
    myNumber.style.border = "2px solid red";
    test.preventDefault();
  } else {
    let myError = document.getElementById("error5");
    myError.innerHTML = "";
    myNumber.style.border = "2px solid green";
  }

  /*Villes*/
  if(checked_Radios != null){
    let myError = document.getElementById("error6");
    myError.innerHTML = "";
    } else {
    let myError = document.getElementById("error6");
    myError.innerHTML = "Veuillez choisir une ville.";
    test.preventDefault();
    } 

  /*Conditions*/
  if (checkedbox.checked == false) {
    let myError = document.getElementById("error7");
    myError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    test.preventDefault();
  } else {
    let myError = document.getElementById("error7");
    myError.innerHTML = "";
    } 

});

