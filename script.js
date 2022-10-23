'use strict';

const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelector('.topnav');

function displayMobileLinks() {
  console.log('teste');
  if (mobileLinks.style.display === 'block') {
    mobileLinks.style.display = 'none';
  } else {
    mobileLinks.style.display = 'block';
  }
}

mobileNav.addEventListener('click', displayMobileLinks);
