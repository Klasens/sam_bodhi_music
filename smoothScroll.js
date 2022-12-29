'use strict';
scrollArrow.addEventListener('click', function (e) {
  e.preventDefault();
  scrollToLanding.scrollIntoView({ behavior: 'smooth' });
});
