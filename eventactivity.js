const menu = document.querySelector('#menu');
const sideNav = document.querySelector('#sideNav');
const close = document.querySelector('#close')

menu.addEventListener('click', () =>{
    sideNav.classList.add('show');
})


close.addEventListener('click', () =>{
    sideNav.classList.remove('show');
})
