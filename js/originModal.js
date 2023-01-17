'use strict';

const originModal = document.querySelector('.modal__origin');
const originBtn = document.querySelector('.about__link');
const modalClose = document.querySelector('#modalCloseOrigin');
const outerModal = document.querySelector('.about');

originModal.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
});

originBtn.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  originModal.classList.add('fadeIn');
  originModal.classList.remove('pointerEvents-none');
});
outerModal.addEventListener('click', function () {
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
