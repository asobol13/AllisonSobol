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

// Carousel deal
$(document).ready(function() {
    var $carousel = $(".carousel");

    $carousel.slick({
      slidesToShow: 1,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: "0",
      focusOnSelect: true,
      prevArrow: $(".slick-prev"),
      nextArrow: $(".slick-next"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "40px",
          }
        }
      ]
    });

    // Custom navigation functions
    $(".slick-prev").click(function() {
      $carousel.slick("slickPrev");
    });

    $(".slick-next").click(function() {
      $carousel.slick("slickNext");
      console.log("Next button clicked");
    });
});

// Overlay for about me page
window.addEventListener('scroll', function() {
  const overlay2 = document.querySelector('.overlay2');
  const distanceFromTop = overlay2.getBoundingClientRect().top;

  if (distanceFromTop < window.innerHeight) {
    const opacity = 1 - (distanceFromTop / window.innerHeight);
    overlay2.style.opacity = opacity;
  }
});