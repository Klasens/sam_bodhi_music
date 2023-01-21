'use strict';

const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelector('.subNav');
const form = document.querySelector('.form');

function displayMobileLinks() {
  if (mobileLinks.style.display === 'block') {
    mobileLinks.style.display = 'none';
  } else {
    mobileLinks.style.display = 'block';
  }
}

mobileNav.addEventListener('click', displayMobileLinks);
