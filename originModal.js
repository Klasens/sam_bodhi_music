'use strict';

const originModal = document.querySelector('.origin-modal');
const originBtn = document.querySelector('.about-origin');
const modalClose = document.querySelector('.modal-close--origin');

originBtn.addEventListener('click', function () {
  originModal.classList.add('fadeIn');
  originModal.classList.remove('pointerEvents-none');
});

modalClose.addEventListener('click', function () {
  originModal.classList.remove('fadeIn');
  originModal.classList.add('pointerEvents-none');
});
