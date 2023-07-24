// Initialize ScrollReveal
ScrollReveal().reveal('.jumbotron-content', {
  duration: 1000,
  delay: 200,
  origin: 'top',
  distance: '30px',
  easing: 'ease-in-out',
});

ScrollReveal().reveal('.project-box__wrapper', {
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
  easing: 'ease-in-out',
  interval: 200,
});

ScrollReveal().reveal('.tech-icons', {
  duration: 1000,
  origin: 'left',
  distance: '30px',
  easing: 'ease-in-out',
});

ScrollReveal().reveal('.section', {
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
  easing: 'ease-in-out',
  interval: 200,
});

ScrollReveal().reveal('.contact-moi', {
  duration: 1000,
  origin: 'top',
  distance: '30px',
  easing: 'ease-in-out',
});

ScrollReveal().reveal('.footer', {
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
  easing: 'ease-in-out',
});



// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (const anchorLink of anchorLinks) {
    anchorLink.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 100; // Adjust this value to account for your fixed header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  }
});


// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

  // Dark mode toggle button event listener
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', toggleDarkMode);
});

// Function to show/hide the Back to Top button
function toggleBackToTopButton() {
  const backToTopButton = document.querySelector('.back-to-top-btn');
  if (window.scrollY >= 300) {
    backToTopButton.style.opacity = '1';
  } else {
    backToTopButton.style.opacity = '0';
  }
}

// Function to scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event listener to show/hide the Back to Top button
window.addEventListener('scroll', toggleBackToTopButton);

