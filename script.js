const inputEmail = document.querySelector(".input-email");
const button = document.querySelector(".Subscribe-btn");
const signUp = document.querySelector(".sign-up-form");
const success = document.querySelector(".success-message");
const emailAddress = document.querySelector(".user-email");
const dismiss = document.querySelector(".dismiss-btn");
const invalid = document.querySelector(".invalid-email");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let address = 0;
let width = 0;

// For email Input
inputEmail.addEventListener("input", () => {
  invalid.style.display = "none";
  address = inputEmail.value;
  console.log(address);
  emailAddress.textContent = address;
});

//Email Validation
function validateEmail(address) {
  return emailRegex.test(address);
}

//Subscribe button
button.addEventListener("click", () => {
  if (validateEmail(address)) {
    signUp.style.display = "none";
    success.style.display = "contents";
  } else {
    invalid.style.display = "contents";
    inputEmail.style.border = "1px solid #ff6257";
    inputEmail.style.backgroundColor = "#ffe8e6";
  }
});

// Dismiss button
dismiss.addEventListener("click", () => {
  width = window.innerWidth;
  console.log(width);
  if (width > 900) {
    // Mobile code
    signUp.style.display = "flex";
  } else {
    // Other code
    signUp.style.display = "contents";
  }
  //signUp.style.display = 'flex';
  success.style.display = "none";
  inputEmail.value = "";
});
