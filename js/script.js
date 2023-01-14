'use strict';

const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelector('.topnav');
const scrollArrow = document.querySelector('#landingArrow');
const scrollToLanding = document.querySelector('#landingBio');
const contactImages = document.querySelector('.mainContent-contact');

function displayMobileLinks() {
  if (mobileLinks.style.display === 'block') {
    mobileLinks.style.display = 'none';
  } else {
    mobileLinks.style.display = 'block';
  }
}

window.addEventListener('DOMContentLoaded', function () {
  form.classList.add('fade-in');
});
mobileNav.addEventListener('click', displayMobileLinks);
