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

const signUpEl = document.getElementById("sign-up");
signUpEl.addEventListener("click", function () {
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

const logInEl = document.getElementById("log-in");
logInEl.addEventListener("click", function () {
  formContainer[0].classList.add("hidden");
  formContainer[1].classList.remove("hidden");
});

// BOTTOM Log in button
document.getElementById("btm-login-btn").addEventListener("click", function () {
  formContainer[1].classList.remove("hidden");
});

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// NEW API STUFF ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
// Log out
/////////////////////////////////////////////////////////////////////////////////////
document.getElementById("log-out").addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "index.html";
});

/////////////////////////////////////////////////////////////////////////////////////
// Register Form
/////////////////////////////////////////////////////////////////////////////////////

const registerForm = document.getElementById("register");
// json response message
const registerMessageEl = document.getElementById("register-message");
registerForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const url = "https://sweettreatsheroku.herokuapp.com/users/register";

  const formData = new FormData(registerForm);
  const formDataSerialized = Object.fromEntries(formData);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formDataSerialized),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(formDataSerialized);
    const json = await response.json();
    registerMessageEl.textContent = `${json.message}`;
    if (json.message === "Registration successful") {
      formContainer[0].classList.add("hidden");
      formContainer[1].classList.remove("hidden");
    }
    // console.log(json, "THIS IS JSON");
  } catch (e) {
    console.error(e);
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// Login Form
/////////////////////////////////////////////////////////////////////////////////////

const loginForm = document.getElementById("login");
// json response message
const loginMessageEl = document.getElementById("login-message");
loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const url = "https://sweettreatsheroku.herokuapp.com/users/authenticate";

  const formData = new FormData(loginForm);
  const formDataSerialized = Object.fromEntries(formData);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formDataSerialized),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(formDataSerialized);
    const json = await response.json();
    loginMessageEl.textContent = `${json.message}`;
    // console.log(json, "THIS IS JSON");

    if (json.token) {
      loginSuccessful(json.token, json.name);
    }
  } catch (e) {
    console.error(e);
  }
});

// Add token and name to local storage and redirect user to window.location.href

function loginSuccessful(token, name) {
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
  window.location.href = "inventory.html";
}

/////////////////////////////////////////////////////////////////////////////////////
// On Page Load, check authorization
/////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("token") && localStorage.getItem("name")) {
    checkIfLoggedIn();
  }
  //

  // window.location.href = "inventory.html";
});

/////////////////////////////////////////////////////////////////////////////////////
// Check User Authorization
/////////////////////////////////////////////////////////////////////////////////////
let responseMessage = "";
let responseName = "";
async function checkIfLoggedIn() {
  const url = "https://sweettreatsheroku.herokuapp.com/users/current";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")} `,
      },
    });
    const json = await response.json();
    responseMessage = json.message;
    responseName = json.name;
    // console.log(json, "THIS IS JSON");
    isLoggedIn();
  } catch (e) {
    console.error(e);
  }
}
/////////////////////////////////////////////////////////////////////////////////////
// User logged in already?
/////////////////////////////////////////////////////////////////////////////////////
const inventoryLinkEl = document.getElementById("inventory-link");
const logOutEl = document.getElementById("log-out");

function isLoggedIn() {
  // if (responseMessage === "Unauthorized") {
  //   return;
  // } else
  if (responseName === localStorage.getItem("name")) {
    signUpEl.classList.add("hidden");
    logInEl.classList.add("hidden");
    logOutEl.classList.remove("hidden");
    inventoryLinkEl.classList.remove("hidden");
  }
}
