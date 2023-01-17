'use strict';
const scrollArrow = document.querySelector('#landingArrow');
const scrollToLanding = document.querySelector('#about');
scrollArrow.addEventListener('click', function (e) {
  e.preventDefault();
  scrollToLanding.scrollIntoView({ behavior: 'smooth' });
});
