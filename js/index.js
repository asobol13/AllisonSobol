// burger menu for mobile
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// overlay
function showOverlay() {
    document.getElementById("overlay").style.display = "block";
}
    function hideOverlay() {
        document.getElementById("overlay").style.display = "none";
    }