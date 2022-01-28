const inventory = [
    {
        name: 'Ice Cream #1',
        img : 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        inventory: true,
        ordered: true
    },
    {
        name: 'Ice Cream $2',
        img : 'https://images.unsplash.com/photo-1561845730-208ad5910553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        inventory: true,
        ordered: true
    },
    {
        name: 'Ice Cream 3',
        img : 'https://images.unsplash.com/photo-1485217939211-45a6241d40a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        inventory: true,
        ordered: true
    },
    {
        name: 'Ice Cream 4',
        img : 'https://images.unsplash.com/photo-1626552473087-db08c9bb4843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        inventory: true,
        ordered: true
    }
]

// DOM variables 
const ourMenu = document.querySelector('.our-menu');
const menuItems = document.querySelector('.menu');

const pending = document.querySelector('.being-prepared');


ourMenu.addEventListener('click', showMenu);
pending.addEventListener('click', showMenu)
//functions

function showMenu(){
    pending.classList.toggle('menu')
    menuItems.classList.toggle('menu')
}