'use strict';

const mobileNav = document.getElementById('navBar__mobile');
const mobileLinks = document.querySelector('.sunNav');
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
