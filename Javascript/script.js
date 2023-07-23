// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll(".section");
//   let currentSection = 0;
//   let isScrolling = false;

//   function scrollToSection(index) {
//     if (index < 0 || index >= sections.length) return;

//     const targetSection = sections[index];
//     targetSection.scrollIntoView({ behavior: "smooth" });
//   }

//   function handleScroll() {
//     if (!isScrolling) {
//       isScrolling = true;

//       // Wait for 100ms to prevent multiple scrolls firing at once
//       setTimeout(function () {
//         const delta = (window.innerHeight * 0.7) / Math.abs(window.innerHeight * 0.7);
//         currentSection -= delta;
//         scrollToSection(Math.round(currentSection));

//         isScrolling = false;
//       }, 100);
//     }
//   }

//   window.addEventListener("wheel", handleScroll);
// });


// const menuIcon = document.querySelector(".menu-icon");
// const menuItems = document.querySelector(".menu-items");

// menuIcon.addEventListener("click", () => {
//   menuItems.classList.toggle("collapsed");
// });

