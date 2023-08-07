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

// scroll activated
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // Add active class for effect
      observer.unobserve(entry.target);
    }
  });
});

const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(fadeIn => {
      observer.observe(fadeIn);
    });