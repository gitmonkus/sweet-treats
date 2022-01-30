// we check if the DOM is fully loaded 
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// function runs when its ready
function ready(){
    const removeBtns = document.getElementsByClassName('remove-btn');
    for (let i = 0; i < removeBtns.length; i++) {
        let button = removeBtns[i]
        button.addEventListener('click', removeCartItem)
    }

    let totalUnitsInventory = document.getElementsByClassName('total-units')
    for (let i = 0; i < totalUnitsInventory.length; i++) {
        let input = totalUnitsInventory[i]
        input.addEventListener('change', changeValue)
    }

    let addToCartBtn = document.getElementsByClassName('order-btn')
    for (let i = 0; i < addToCartBtn.length; i++) {
        let button = addToCartBtn[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('checkout-btn')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked(){
    alert('thank you for your purchase');
    let elementsInsideCart = document.querySelector('.pending-orders')
    while(elementsInsideCart.hasChildNodes()){
        elementsInsideCart.removeChild(elementsInsideCart.firstChild)
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement;
    let title = shopItem.getElementsByClassName('shop-item')[0].innerText
    let price = shopItem.getElementsByClassName('price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('img-item')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}


function addItemToCart(title, price, imageSrc) {
    let cartContainerToAdd = document.createElement('div')
    // cartRow.classList.add('cart-row')
    var pendingOrderesCont = document.getElementsByClassName('pending-orders')[0];
    let checkAllNamesInCart = pendingOrderesCont.getElementsByClassName('cart-item-name');
    for (let i = 0; i < checkAllNamesInCart.length; i++) {
            if (checkAllNamesInCart[i].innerText === title) {
                alert('This item is already added to the cart')
                return
            }
        }

    let HTML = 
    `
        <div class="checkout-items">
        <img class='cart-img'
        src="${imageSrc}"
        alt=""
        />
        <input type="number" class='total-units' value=3> 
        <span class="price-from-cart">${price}</span>
        <p class='cart-item-name'>${title}</p>
        <button class='remove-btn'>Remove</button>
        </div>
    `
    cartContainerToAdd.innerHTML = HTML
    pendingOrderesCont.append(cartContainerToAdd);
    cartContainerToAdd.getElementsByClassName('remove-btn')[0].addEventListener('click', removeCartItem)
    cartContainerToAdd.getElementsByClassName('total-units')[0].addEventListener('change', changeValue)
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateCartTotal()
}


function changeValue(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('pending-orders')[0]
    let checkOutItems = cartItemContainer.getElementsByClassName('checkout-items')
    let total = 0;
    for (let i = 0; i < checkOutItems.length; i++) {
        let cartRow = checkOutItems[i]
        let priceElement = cartRow.getElementsByClassName('price-from-cart')[0]
        let quantityElement = cartRow.getElementsByClassName('total-units')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-price-value')[0].innerText = '$' + total;
}