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
  let myRegex = /^[a-zA-Z]+$/;
  let myRegexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-]{2,3}$/;
  let myRegexBirth = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  let myLast = document.getElementById('last');
  let myEmail = document.getElementById('email');
  let myBirth = document.getElementById('birthdate');


  /*Prénom*/
  if (myFirst.value.trim() == "") {
    let myError = document.getElementById("error1");
    myError.innerHTML = "Au moins deux caractères sont requis.";
    myError.style.color = "red";
    myFirst.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegex.test(myFirst.value) == false) {
    let myError = document.getElementById("error1");
    myError.innerHTML = "Le prénom ne peut comporter que des lettres et des tirets uniquements.";
    myError.style.color = "red";
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
    myError.style.color = "red";
    myLast.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegex.test(myLast.value) == false) {
    let myError = document.getElementById("error2");
    myError.innerHTML = "Le prénom ne peut comporter que des lettres et des tirets uniquements.";
    myError.style.color = "red";
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
    myError.style.color = "red";
    myEmail.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegexMail.test(myEmail.value) == false) {
    let myError = document.getElementById("error3");
    myError.innerHTML = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
    myError.style.color = "red";
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
    myError.style.color = "red";
    myBirth.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegexBirth.test(myBirth.value) == false) {
    let myError = document.getElementById("error4");
    myError.innerHTML = "Veuillez rentrer une date de naissance valide.";
    myError.style.color = "red";
    myBirth.style.border = "2px solid red";
    test.preventDefault();
  } else if (myRegexBirth.test(myBirth.value) == true) {
    let myError = document.getElementById("error4");
    myError.innerHTML = "";
    myError.style.color = "green";
    myBirth.style.border = "2px solid green";
  }
  

});

