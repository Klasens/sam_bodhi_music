'use strict';

const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelector('.topnav');
const contactImages = document.querySelector('.mainContent-contact');
const form = document.querySelector('.form');

function displayMobileLinks() {
  if (mobileLinks.style.display === 'block') {
    mobileLinks.style.display = 'none';
  } else {
    mobileLinks.style.display = 'block';
  }
}

window.addEventListener('DOMContentLoaded', function () {
  form.classList.add('fadeIn');
});
mobileNav.addEventListener('click', displayMobileLinks);
