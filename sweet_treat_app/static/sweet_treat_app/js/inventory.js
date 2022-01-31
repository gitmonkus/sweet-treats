// we check if the DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// function runs when its ready
function ready() {
  const removeBtns = document.getElementsByClassName("remove-btn");
  for (let i = 0; i < removeBtns.length; i++) {
    let button = removeBtns[i];
    button.addEventListener("click", removeCartItem);
  }

  let totalUnitsInventory = document.getElementsByClassName("total-units");
  for (let i = 0; i < totalUnitsInventory.length; i++) {
    let input = totalUnitsInventory[i];
    input.addEventListener("change", changeValue);
  }

  let addToCartBtn = document.getElementsByClassName("order-btn");

  for (let i = 0; i < addToCartBtn.length; i++) {
    let button = addToCartBtn[i];
    button.addEventListener("click", addToCartClicked);
  }

  //   IF Unavailable, disable button
  const inStock = document.getElementsByClassName("in-stock");

  for (let i = 0; i < inStock.length; i++) {
    let available = inStock[i];
    if (available.innerText === "Unavailable") {
      //   available.style.background = "var(--font-color)";
      available.classList.add("out-of-stock-header");
      addToCartBtn[i].disabled = "disabled";
    }
  }

  document
    .getElementsByClassName("checkout-btn")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("thank you for your purchase");
  let elementsInsideCart = document.querySelector(".pending-orders");
  while (elementsInsideCart.hasChildNodes()) {
    elementsInsideCart.removeChild(elementsInsideCart.firstChild);
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement;
  let title = shopItem.getElementsByClassName("shop-item")[0].innerText;
  let price = shopItem.getElementsByClassName("price")[0].innerText;
  let imageSrc = shopItem.getElementsByClassName("img-item")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  let cartContainerToAdd = document.createElement("div");
  // cartRow.classList.add('cart-row')
  var pendingOrderesCont = document.getElementsByClassName("pending-orders")[0];
  let checkAllNamesInCart =
    pendingOrderesCont.getElementsByClassName("cart-item-name");
  for (let i = 0; i < checkAllNamesInCart.length; i++) {
    if (checkAllNamesInCart[i].innerText === title) {
      alert("This item is already added to the cart");
      return;
    }
  }

  let HTML = `
  <div class="inventory-item-container-checkout">
        <div class="checkout-items">
        <img class='cart-img'
        src="${imageSrc}"
        alt=""
        />
        <input type="number" class='total-units' value=1> 
        <span class="price-from-cart">${price}</span>
        <p class='cart-item-name'>${title}</p>
        <button class='remove-btn dark-button'>Remove</button>
        </div>
        </div>
    `;
  cartContainerToAdd.innerHTML = HTML;
  pendingOrderesCont.append(cartContainerToAdd);
  cartContainerToAdd
    .getElementsByClassName("remove-btn")[0]
    .addEventListener("click", removeCartItem);
  cartContainerToAdd
    .getElementsByClassName("total-units")[0]
    .addEventListener("change", changeValue);
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.closest(".inventory-item-container-checkout").remove();
  buttonClicked.parentElement.remove();

  updateCartTotal();
}

function changeValue(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("pending-orders")[0];
  let checkOutItems =
    cartItemContainer.getElementsByClassName("checkout-items");
  let total = 0;
  for (let i = 0; i < checkOutItems.length; i++) {
    let cartRow = checkOutItems[i];
    let priceElement = cartRow.getElementsByClassName("price-from-cart")[0];
    let quantityElement = cartRow.getElementsByClassName("total-units")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price-value")[0].innerText =
    "$" + total;
}

/////////////////////////////////////////////////////////////////////////////////////
// User not logged in?
/////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//   if (!localStorage.getItem("token") && !localStorage.getItem("name")) {
//     window.location.href = "index.html";
//   }
// });

/////////////////////////////////////////////////////////////////////////////////////
// Display name from local storage
/////////////////////////////////////////////////////////////////////////////////////
const welcomeNameEl = document.getElementById("welcome-user");
const firstNameEl = localStorage.getItem("name");
welcomeNameEl.textContent = `${firstNameEl}`;

/////////////////////////////////////////////////////////////////////////////////////
// Log out
/////////////////////////////////////////////////////////////////////////////////////
document.getElementById("log-out").addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "index.html";
});

/////////////////////////////////////////////////////////////////////////////////////
// On Page Load, check authorization
/////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  checkIfLoggedIn();

  // if (localStorage.getItem("token") && localStorage.getItem("name")) {

  // window.location.href = "inventory.html";
});

/////////////////////////////////////////////////////////////////////////////////////
// Check User Authorization
/////////////////////////////////////////////////////////////////////////////////////

const funObject = {
  name: "fish",
  email: "",
  fish: "salmon",
};

let responseMessage = "";
let responseName = "";
let userId = 0;

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
    userId = json.id;
    // funObject.name = json.name;
    funObject.email = json.email;
    // console.log(json, "THIS IS JSON");
    // console.log(userId);
    // console.log(funObject);
    isLoggedIn();
  } catch (e) {
    console.error(e);
  }
}
/////////////////////////////////////////////////////////////////////////////////////
// User Not logged in?
/////////////////////////////////////////////////////////////////////////////////////
const inventoryLinkEl = document.getElementById("inventory-link");
const logOutEl = document.getElementById("log-out");

function isLoggedIn() {
  if (responseMessage === "Unauthorized") {
    window.location.href = "index.html";
  }
  // else if (responseName === localStorage.getItem("name")) {
  //   signUpEl.classList.add("hidden");
  //   logInEl.classList.add("hidden");
  //   logOutEl.classList.remove("hidden");
  //   inventoryLinkEl.classList.remove("hidden");
  // }
}

/////////////////////////////////////////////////////////////////////////////////////
// Get Current User ID
/////////////////////////////////////////////////////////////////////////////////////

// async function getCurrentUser() {
//   const url = "https://sweettreatsheroku.herokuapp.com/users/current";

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(formDataSerialized),
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")} `,
//       },
//     });
//     const json = await response.json();
//     loginMessageEl.textContent = `${json.message}`;
//     console.log(json, "THIS IS JSON");
//   } catch (e) {
//     console.error(e);
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////
// Update User Database
/////////////////////////////////////////////////////////////////////////////////////

// document
//   .getElementById("update-database")
//   .addEventListener("click", updateUserDatabase);

// async function updateUserDatabase() {
//   const url = `https://sweettreatsheroku.herokuapp.com/users/${userId}`;

//   try {
//     const response = await fetch(url, {
//       method: "PUT",
//       body: JSON.stringify(funObject),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")} `,
//       },
//     });
//     const json = await response.json();
//     console.log(json, "THIS IS JSON");
//   } catch (e) {
//     console.error(e);
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////
// Is input checked
/////////////////////////////////////////////////////////////////////////////////////

// let inventory = {};

// const cardImgText = document.querySelectorAll(".card-img-text");

// const checkTreat = document.querySelectorAll(".check-treat");

// checkTreat[0].addEventListener("change", function () {
//   if (
//     checkTreat[0].checked &&
//     cardImgText[0].classList.contains("out-of-stock")
//   ) {
//     inventory["checked"] = true;
//     inventory["prodName"] = cardImgText[0].textContent;
//     inventory["inStock"] = false;
//     console.log(inventory);
//   } else if (checkTreat[0].checked) {
//     console.log("just checked and in stock");
//   }
// });
// checkTreat[1].addEventListener("change", function () {
//   if (checkTreat[1].checked) {
//     console.log("checked");
//   }
// });
// checkTreat[2].addEventListener("change", function () {
//   if (checkTreat[2].checked) {
//     console.log("checked");
//   }
// });
// checkTreat[3].addEventListener("change", function () {
//   if (checkTreat[3].checked) {
//     console.log("checked");
//   }
// });
// checkTreat[4].addEventListener("change", function () {
//   if (checkTreat[4].checked) {
//     console.log("checked");
//   }
// });
// checkTreat[5].addEventListener("change", function () {
//   if (checkTreat[5].checked) {
//     console.log("checked");
//   }
// });
// checkTreat[6].addEventListener("change", function () {
//   if (checkTreat[6].checked) {
//     console.log("checked");
//   }
// });
// checkTreat[7].addEventListener("change", function () {
//   if (checkTreat[7].checked) {
//     console.log("checked");
//   }
// });
// checkTreat[8].addEventListener("change", function () {
//   if (checkTreat[8].checked) {
//     console.log("checked");
//   }
// });
