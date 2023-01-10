'use strict';

const originModal = document.querySelector('.origin-modal');
const originBtn = document.querySelector('.about-origin');
const modalClose = document.querySelector('.modal-close--origin');
const outerModal = document.querySelector('.mainContent');

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
