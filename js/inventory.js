const inventory = [
    {
        name: 'Ice Cream #1',
        img : 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        inventory: 10,
        inStock: true,
        getsOrderd(num){
            this.inventory - num
        }
    },
    {
        name: 'Ice Cream #2',
        img : 'https://images.unsplash.com/photo-1561845730-208ad5910553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        inventory: 12,
        oinStock: true,
        getsOrderd(num){
            this.inventory - num
        }
    },
    {
        name: 'Ice Cream #3',
        img : 'https://images.unsplash.com/photo-1485217939211-45a6241d40a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        inventory: 20,
        inStock: true,
        getsOrderd(num){
            this.inventory - num
        }
    },
    {
        name: 'Ice Cream #4',
        img : 'https://images.unsplash.com/photo-1626552473087-db08c9bb4843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        inventory: 40,
        inStock: true,
        getsOrderd(num){
            this.inventory - num
        }
    }
]






































// //DOM elements 
// const orderBtn = document.querySelectorAll('.order-btn');
// const pendingOrdersCont = document.querySelector('.pending-orders');
// const making = document.querySelector('.making');
// const pickup = document.querySelector('.pickup');

// let orderAmount = 1;


// //inventory left 
// const inventoryLeft = document.querySelectorAll('.inventory-left')
// const inventoryLeftArr = Array.from(inventoryLeft);

// orderBtn.forEach(e => {
//     e.addEventListener('click', ordered)
// })

// let cloneElement;
// //variables for the functions 
// function ordered(){
//     //we clone the element from inventory and store it into a variable
//     cloneElement = this.parentElement.cloneNode(true);
//     //store the btn into a value
//     let btn = cloneElement.querySelector('.order-btn');
//     //we change the button text to cancel
//     btn.innerText = 'Cancel';
//     //we change the class name;
//     btn.className = 'cancel-btn';
//     //we display the container 
//     making.style.display = 'block'
//     //append it to the container 
//     pendingOrdersCont.appendChild(cloneElement);
// }




// // //store in a varible
// // let orderBtbn = this;
// // //we delete the order btn
// // orderBtbn.innerText = 'Order Again'
// // //we change the class to order again
// // orderBtbn.className = 'orderAgain'
// // //we find all the btn with the new className and store it into a variabl
// // //this is a node
// // let orderAgainBtn = document.querySelectorAll('.orderAgain');
// // // next steps when this button is clicked and it already in the order being preprid section 
// // // we need add to th value

// // let valueOfInventory;
// // orderAgainBtn.forEach(e =>{
// //     e.addEventListener('click', function(){
// //         let x = cloneElement.querySelectorAll('.inventoryNum');
// //         valueOfInventory = parseInt(e.parentElement.querySelector('.inventory-left').value) -1;
// //         let etoNumber;
// //         x.forEach(e => {
// //             etoNumber = parseInt(e.value)
// //         })

// //         let ifOrderedAggain = valueOfInventory + etoNumber;
// //         console.log(valueOfInventory);
// //     })
// // })   