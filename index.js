const newsletterContainer = document.getElementsByClassName(
  "newsletter-sign-up-container"
)[0];

const form = document.getElementById("newsletter-sign-up-form");

const companyEmail = document.getElementById("companyEmail");

const errorMessage = document.getElementById("errorMessage");

const messageContainer = document.getElementsByClassName(
  "success-message-container"
)[0];

const validatedEmail = document.getElementById("validatedEmail");

const dismissBtn = document.getElementsByClassName("dismiss-btn")[0];

/**
 * ! Email validating function
 **/

function ValidateEmail(input) {
  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

/**
 * ! Form Validation
 **/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (companyEmail.value.trim() === "") {
    errorMessage.innerText = "Email can't be empty!";
    companyEmail.classList.add("error-style");
  } else if (!ValidateEmail(companyEmail.value.trim())) {
    errorMessage.innerText = "Valid email required";
    companyEmail.classList.add("error-style");
  } else {
    errorMessage.innerText = "";
    companyEmail.classList.remove("error-style");
    ManipulateDOM(companyEmail.value.trim());
  }
});

/**
 * ! DOM Manipulation
 **/

function ManipulateDOM(email) {
  // Hide Newsletter Container
  newsletterContainer.style.cssText = "display:none";
  // Show Message Container
  messageContainer.style.cssText = "display:block";
  // With correct email
  validatedEmail.innerText = email;
}

/**
 * ! Reset DOM
 **/

dismissBtn.addEventListener("click", () => {
  // Hide Message Container
  messageContainer.style.cssText = "display:none";
  // Show Newsletter Container
  newsletterContainer.style.cssText = "display:flex";
  // clearing email
  validatedEmail.innerText = "";
});
