'use strict';

// Get references to elements
const originModal = document.querySelector('.modal__origin--outer');
const originBtn = document.querySelector('.about__link--container');
const modalClose = document.querySelector('#modalCloseOrigin');
const originModalContent = document.querySelector('.modal__origin');
const originModalInner = document.querySelector('.modal__origin--inner');

// Define a function to close the modal
function closeModal() {
  originModal.classList.remove('fadeIn');
  originModal.classList.add('pointerEvents-none');
}

// Add event listeners
originModalContent.addEventListener('click', (e) => e.stopPropagation());
originBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  originModalInner.scrollIntoView({ behavior: 'smooth' });
  originModal.classList.add('fadeIn');
  originModal.classList.remove('pointerEvents-none');
});
originModal.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});
