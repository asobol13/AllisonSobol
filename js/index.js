// Burger menu for mobile
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// Overlay for Certifications
function showOverlay() {
    document.getElementById("overlay").style.display = "inline-block";
}
    function hideOverlay() {
        document.getElementById("overlay").style.display = "none";
    }
