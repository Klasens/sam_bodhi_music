'use strict';

const originModal = document.querySelector('.modal__origin--outer');
const originBtn = document.querySelector('.about__link--container');
const modalClose = document.querySelector('#modalCloseOrigin');
const originModalContent = document.querySelector('.modal__origin');

originModalContent.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
});

originBtn.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  originModalContent.scrollIntoView({ behavior: 'smooth' });
  originModal.classList.add('fadeIn');
  originModal.classList.remove('pointerEvents-none');
});
originModal.addEventListener('click', function () {
  originModal.classList.remove('fadeIn');
  originModal.classList.add('pointerEvents-none');
});

modalClose.addEventListener('click', function () {
  originModal.classList.remove('fadeIn');
  originModal.classList.add('pointerEvents-none');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    originModal.classList.remove('fadeIn');
    originModal.classList.add('pointerEvents-none');
  }
});
