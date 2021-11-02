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
const closeBtn = document.querySelectorAll("#close")
const formData = document.querySelectorAll(".formData");
const validateModal = document.querySelector("#validateUp");
const validateBtn = document.querySelectorAll(".btn-close");
const validateCloseBtn = document.querySelectorAll(".closeValidateBtn");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// close modal form
closeBtn.forEach((btn) => btn.addEventListener("click", closemodal));

function closemodal() {
  modalbg.style.display = "none";
};

// ValidateModal

function validate() {
  closemodal();
  validateModal.style.display = "block";
};

validateBtn.forEach((btn) => btn.addEventListener("click", closeValidate));
validateCloseBtn.forEach((btn) => btn.addEventListener("click", closeValidate));

function closeValidate() {
  location.reload();
};


/*Form*/

const myForm = document.getElementById('myForm');
const myFirst = document.getElementById('first');
const myRegex = /^[a-zA-Z]+[a-zA-Z]$/;
const myRegexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-]{2,3}$/;
const myLast = document.getElementById('last');
const myEmail = document.getElementById('email');
const myBirth = document.getElementById('birthdate');
const myNumber = document.getElementById('quantity');
const checkedbox = document.getElementById('checkbox1');
const emptyText = "Veuillez remplir le champ.";
const nameFalse = "Le prénom et le nom ne peuvent comporter que des lettres et des tirets uniquement et au moins deux caractères."
const red = "2px solid red";
const green = "2px solid green";
const mailFalse = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
const myCheck = document.querySelector("#checkbox1");

/*First Name*/
function emptyFirstName() {
  let myError = document.getElementById("errorFirstName");
    myError.innerHTML = emptyText;
    myFirst.style.border = red;
}
function falseFirstName() {
  let myError = document.getElementById("errorFirstName");
    myError.innerHTML = nameFalse;
    myFirst.style.border = red;
}
function goodFirstName() {
  let myError = document.getElementById("errorFirstName");
    myError.innerHTML = "";
    myFirst.style.border = green;
}
/*Name*/
function emptyLastName() {
  let myError = document.getElementById("errorLastName");
    myError.innerHTML = emptyText;
    myLast.style.border = red;
}
function falseLastName() {
  let myError = document.getElementById("errorLastName");
    myError.innerHTML = nameFalse;
    myLast.style.border = red;
}
function goodLastName() {
  let myError = document.getElementById("errorLastName");
    myError.innerHTML = "";
    myLast.style.border = green;
}
/*Email*/
function emptyMail() {
  let myError = document.getElementById("errorMail");
    myError.innerHTML = mailFalse;
    myEmail.style.border = red;
}
function falseMail() {
  let myError = document.getElementById("errorMail");
    myError.innerHTML = mailFalse;
    myEmail.style.border = red;
}
function goodMail() {
  let myError = document.getElementById("errorMail");
    myError.innerHTML = "";
    myEmail.style.border = green;
}
/*Birthday*/
function emptyBirth() {
  let myError = document.getElementById("errorBirth");
    myError.innerHTML = "Veuillez rentrer votre date de naissance.";
    myBirth.style.border = red;
}
function goodBirth() {
  let myError = document.getElementById("errorBirth");
    myError.innerHTML = "";
    myBirth.style.border = green;
}
 /*Number of tournaments*/
function emptyTournaments() {
  let myError = document.getElementById("errorTournaments");
    myError.innerHTML = "Veuillez indiquez votre nombre de tournois.";
    myNumber.style.border = red;
}
function goodTournaments() {
  let myError = document.getElementById("errorTournaments");
    myError.innerHTML = "";
    myNumber.style.border = green;
}
/*Cities*/
function emptyCities() {
  let myError = document.getElementById("errorCities");
    myError.innerHTML = "Veuillez choisir une ville.";
}
function goodCities() {
  let myError = document.getElementById("errorCities");
  myError.innerHTML = "";
}

/*Submit*/
myForm.addEventListener('submit', function(submit) {
  
  /*First Name*/
  if (myFirst.value.trim() == "") {
    emptyFirstName();
    submit.preventDefault();
  } else if (myRegex.test(myFirst.value) == false) {
    falseFirstName();
    submit.preventDefault();
  } else if (myRegex.test(myFirst.value) == true) {
    goodFirstName();
  }

  /*Name*/
  if (myLast.value.trim() == "") {
    emptyLastName();
    submit.preventDefault();
  } else if (myRegex.test(myLast.value) == false) {
    falseLastName();
    submit.preventDefault();
  } else if (myRegex.test(myLast.value) == true) {
    goodLastName();
  }

  /*Email*/
  if (myEmail.value.trim() == "") {
    emptyMail();
    submit.preventDefault();
  } else if (myRegexMail.test(myEmail.value) == false) {
    falseMail();
    submit.preventDefault();
  } else if (myRegexMail.test(myEmail.value) == true) {
    goodMail();
  }

  /*Birthday*/
  if (myBirth.value.trim() == "") {
    emptyBirth();
    submit.preventDefault();
  } else {
    goodBirth();
  }

  /*Number of tournaments*/
  if (myNumber.value.trim() == "") {
    emptyTournaments();
    submit.preventDefault();
  } else {
    goodTournaments();
  }

  /*Cities*/
  const checked_Radios = document.querySelector('input[name = "location"]:checked');
  if (checked_Radios != null){
    goodCities();
    } else {
      emptyCities();
      submit.preventDefault();
    } 

  /*Conditions*/
  if (checkedbox.checked == false) {
    let myError = document.getElementById("errorCheck");
    myError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    submit.preventDefault();
  } else {
    let myError = document.getElementById("errorCheck");
    myError.innerHTML = "";
    }

});



/*First Name change*/
myFirst.addEventListener('change', function() {
  if (myFirst.value.trim() == "") {
    emptyFirstName();
  } else if (myRegex.test(myFirst.value) == false) {
    falseFirstName();
  } else if (myRegex.test(myFirst.value) == true) {
    goodFirstName();
  }
});

/*Name change*/
myLast.addEventListener('change', function() {
  if (myLast.value.trim() == "") {
    emptyLastName();
  } else if (myRegex.test(myLast.value) == false) {
    falseLastName();
  } else if (myRegex.test(myLast.value) == true) {
    goodLastName();
  }
});

 /*Email change*/
myEmail.addEventListener('change', function() {
  if (myEmail.value.trim() == "") {
    emptyMail();
  } else if (myRegexMail.test(myEmail.value) == false) {
    falseMail();
  } else if (myRegexMail.test(myEmail.value) == true) {
    goodMail();
  }
});

/*Birthday change*/
myBirth.addEventListener('change', function() {
  if (myBirth.value.trim() == "") {
    emptyBirth();
  } else {
    goodBirth();
  }
});

 /*Number of tournaments change*/
myNumber.addEventListener('change', function() {
  if (myNumber.value.trim() == "") {
    emptyTournaments();
  } else {
    goodTournaments();
  }
});


/*Conditions change*/
myCheck.addEventListener('change', function() {
  if (checkedbox.checked == false) {
    let myError = document.getElementById("errorCheck");
    myError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    let myError = document.getElementById("errorCheck");
    myError.innerHTML = "";
    }
});


  

  

  

  

  

  

  

  



