/////////////////////////////////////////////////////////////////////////////////////
// Gain access to forms
/////////////////////////////////////////////////////////////////////////////////////

const formContainer = document.querySelectorAll(".form-container");

/////////////////////////////////////////////////////////////////////////////////////
// Form close buttons
// formContainer[0] = sign up
// formContainer[1] = log in
/////////////////////////////////////////////////////////////////////////////////////

const formCloseBtn = document.querySelectorAll(".form-close-btn");
formCloseBtn[0].addEventListener("click", function () {
  formContainer[0].classList.add("hidden");
  formContainer[1].classList.add("hidden");
});
formCloseBtn[1].addEventListener("click", function () {
  formContainer[0].classList.add("hidden");
  formContainer[1].classList.add("hidden");
});

/////////////////////////////////////////////////////////////////////////////////////
// Display Sign up form
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("sign-up").addEventListener("click", function () {
  formContainer[1].classList.add("hidden");
  formContainer[0].classList.remove("hidden");
});

// BOTTOM Sign up button
document
  .getElementById("btm-signup-btn")
  .addEventListener("click", function () {
    formContainer[0].classList.remove("hidden");
  });

/////////////////////////////////////////////////////////////////////////////////////
// Display Log in form
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("log-in").addEventListener("click", function () {
  formContainer[0].classList.add("hidden");
  formContainer[1].classList.remove("hidden");
});

// BOTTOM Log in button
document.getElementById("btm-login-btn").addEventListener("click", function () {
  formContainer[1].classList.remove("hidden");
});
