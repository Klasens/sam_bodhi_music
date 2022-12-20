'use strict';

const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelector('.topnav');
const scrollArrow = document.querySelector('#landingArrow');
const scrollToLanding = document.querySelector('#landingBio');
const contactImages = document.querySelector('.mainContent-contact');
const form = document.querySelector('.contactForm');

function displayMobileLinks() {
  if (mobileLinks.style.display === 'block') {
    mobileLinks.style.display = 'none';
  } else {
    mobileLinks.style.display = 'block';
  }
}

window.addEventListener('DOMContentLoaded', function () {
  console.log('test');
  form.classList.add('fade-in');
});
mobileNav.addEventListener('click', displayMobileLinks);
scrollArrow.addEventListener('click', function (e) {
  e.preventDefault();
  scrollToLanding.scrollIntoView({ behavior: 'smooth' });
});
