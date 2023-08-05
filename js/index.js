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

// Scroll Reveal for about page
const sr = ScrollReveal();

sr.reveal('.element-item', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 0,
  opacity: 0,
  scale: 1,
});
