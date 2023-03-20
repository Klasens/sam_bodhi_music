// Get references to the mobile navigation, sub-navigation, and form elements
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelector('.subNav');
const form = document.querySelector('.form');

// Define a function to toggle the visibility of the mobile links
function toggleMobileLinks() {
  mobileLinks.style.display =
    mobileLinks.style.display === 'block' ? 'none' : 'block';
}

// Add an event listener to the mobile navigation element that calls the toggleMobileLinks function when clicked
mobileNav.addEventListener('click', toggleMobileLinks);
