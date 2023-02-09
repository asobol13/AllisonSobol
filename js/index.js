// burger menu for mobile
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// overlay
function myFunction() {
    document.getElementById("cert1").value = document.getElementById("overlay").value;
}