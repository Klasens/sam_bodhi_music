'use strict';

const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelector('.topnav');
const scrollArrow = document.querySelector('#landingArrow');
const scrollToLanding = document.querySelector('#landingBio');

function displayMobileLinks() {
  if (mobileLinks.style.display === 'block') {
    mobileLinks.style.display = 'none';
  } else {
    mobileLinks.style.display = 'block';
  }
}

mobileNav.addEventListener('click', displayMobileLinks);
scrollArrow.addEventListener('click', function (e) {
  e.preventDefault();
  scrollToLanding.scrollIntoView({ behavior: 'smooth' });
});
