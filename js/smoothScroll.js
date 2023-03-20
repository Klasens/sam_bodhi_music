// Get references to the scroll arrow and landing section
const scrollArrow = document.querySelector('#landingArrow');
const scrollToLanding = document.querySelector('#about');

// Define a function to smoothly scroll to the landing section
function smoothScrollToLanding(e) {
  e.preventDefault();
  scrollToLanding.scrollIntoView({ behavior: 'smooth' });
}

// Add an event listener to the scroll arrow to trigger the smooth scroll
scrollArrow.addEventListener('click', smoothScrollToLanding);
