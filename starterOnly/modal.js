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

/*Form*/

const myForm = document.getElementById('myForm');
const myFirst = document.getElementById('first');
const myRegex = /^[a-zA-Z]+$/;
const myRegexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-]{2,3}$/;
const myLast = document.getElementById('last');
const myEmail = document.getElementById('email');
const myBirth = document.getElementById('birthdate');
const myNumber = document.getElementById('quantity');
const checkedbox = document.getElementById('checkbox1');
const emptyText = "Veuillez remplir le champ.";
const nameFalse = "Le prénom et le nom ne peuvent comporter que des lettres et des tirets uniquements."
const red = "2px solid red";
const green = "2px solid green";
const mailFalse = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
/*First Name*/
function empty1() {
  let myError = document.getElementById("error1");
    myError.innerHTML = emptyText;
    myFirst.style.border = red;
}
function falseName1() {
  let myError = document.getElementById("error1");
    myError.innerHTML = nameFalse;
    myFirst.style.border = red;
}
function good1() {
  let myError = document.getElementById("error1");
    myError.innerHTML = "";
    myFirst.style.border = green;
}
/*Name*/
function empty2() {
  let myError = document.getElementById("error2");
    myError.innerHTML = emptyText;
    myLast.style.border = red;
}
function falseName2() {
  let myError = document.getElementById("error2");
    myError.innerHTML = nameFalse;
    myLast.style.border = red;
}
function good2() {
  let myError = document.getElementById("error2");
    myError.innerHTML = "";
    myLast.style.border = green;
}
/*Email*/
function empty3() {
  let myError = document.getElementById("error3");
    myError.innerHTML = mailFalse;
    myEmail.style.border = red;
}
function falseMail() {
  let myError = document.getElementById("error3");
    myError.innerHTML = mailFalse;
    myEmail.style.border = red;
}
function good3() {
  let myError = document.getElementById("error3");
    myError.innerHTML = "";
    myEmail.style.border = green;
}
/*Birthday*/
function empty4() {
  let myError = document.getElementById("error4");
    myError.innerHTML = "Veuillez rentrer votre date de naissance.";
    myBirth.style.border = red;
}
function good4() {
  let myError = document.getElementById("error4");
    myError.innerHTML = "";
    myBirth.style.border = green;
}
 /*Number of tournaments*/
function empty5() {
  let myError = document.getElementById("error5");
    myError.innerHTML = "Veuillez indiquez votre nombre de tournois.";
    myNumber.style.border = red;
}
function good5() {
  let myError = document.getElementById("error5");
    myError.innerHTML = "";
    myNumber.style.border = green;
}
/*Cities*/
function empty6() {
  let myError = document.getElementById("error6");
    myError.innerHTML = "Veuillez choisir une ville.";
}
function good6() {
  let myError = document.getElementById("error6");
  myError.innerHTML = "";
}

/*Submit*/
myForm.addEventListener('submit', function(submit) {
  
  /*First Name*/
  if (myFirst.value.trim() == "") {
    empty1();
    submit.preventDefault();
  } else if (myRegex.test(myFirst.value) == false) {
    falseName1();
    submit.preventDefault();
  } else if (myRegex.test(myFirst.value) == true) {
    good1();
  }

  /*Name*/
  if (myLast.value.trim() == "") {
    empty2();
    submit.preventDefault();
  } else if (myRegex.test(myLast.value) == false) {
    falseName2();
    submit.preventDefault();
  } else if (myRegex.test(myLast.value) == true) {
    good2();
  }

  /*Email*/
  if (myEmail.value.trim() == "") {
    empty3();
    submit.preventDefault();
  } else if (myRegexMail.test(myEmail.value) == false) {
    falseMail();
    submit.preventDefault();
  } else if (myRegexMail.test(myEmail.value) == true) {
    good3();
  }

  /*Birthday*/
  if (myBirth.value.trim() == "") {
    empty4();
    submit.preventDefault();
  } else {
    good4();
  }

  /*Number of tournaments*/
  if (myNumber.value.trim() == "") {
    empty5();
    submit.preventDefault();
  } else {
    good5();
  }

  /*Cities*/
  const checked_Radios = document.querySelector('input[name = "location"]:checked');
  if(checked_Radios != null){
    good6();
    } else {
      empty6();
      submit.preventDefault();
    } 

  /*Conditions*/
  if (checkedbox.checked == false) {
    let myError = document.getElementById("error7");
    myError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    submit.preventDefault();
  } else {
    let myError = document.getElementById("error7");
    myError.innerHTML = "";
    } 

});

/*First Name change*/
myFirst.addEventListener('change', function(change) {
  if (myFirst.value.trim() == "") {
    empty1();
  } else if (myRegex.test(myFirst.value) == false) {
    falseName1();
  } else if (myRegex.test(myFirst.value) == true) {
    good1();
  }
});

/*Name change*/
myLast.addEventListener('change', function(change) {
  if (myLast.value.trim() == "") {
    empty2();
  } else if (myRegex.test(myLast.value) == false) {
    falseName2();
  } else if (myRegex.test(myLast.value) == true) {
    good2();
  }
});

 /*Email change*/
myEmail.addEventListener('change', function(change) {
  if (myEmail.value.trim() == "") {
    empty3();
  } else if (myRegexMail.test(myEmail.value) == false) {
    falseMail();
  } else if (myRegexMail.test(myEmail.value) == true) {
    good3();
  }
});

/*Birthday change*/
myBirth.addEventListener('change', function(change) {
  if (myBirth.value.trim() == "") {
    empty4();
  } else {
    good4();
  }
});

 /*Number of tournaments*/
myNumber.addEventListener('change', function(change) {
  if (myNumber.value.trim() == "") {
    empty5();
  } else {
    good5();
  }
});
  

  

  

  

  

  

  

  



