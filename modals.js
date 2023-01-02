'use strict';

const jazzBtn = document.querySelector('#jazz');
const jazzModal = document.querySelector('#jazzModal');
const americanaBtn = document.querySelector('#americana');
const americanaModal = document.querySelector('#americanaModal');
const originalBtn = document.querySelector('#original');
const originalModal = document.querySelector('#originalModal');

//modal close
const modalClose = document.querySelectorAll('.modal-close');

jazzBtn.addEventListener('click', function () {
  jazzModal.classList.add('fadeIn');
  jazzModal.classList.remove('pointerEvents-none');
});
americanaBtn.addEventListener('click', function () {
  americanaModal.classList.add('fadeIn');
  americanaModal.classList.remove('pointerEvents-none');
});
originalBtn.addEventListener('click', function () {
  originalModal.classList.add('fadeIn');
  originalModal.classList.remove('pointerEvents-none');
});

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function () {
    jazzModal.classList.remove('fadeIn');
    jazzModal.classList.add('pointerEvents-none');
    americanaModal.classList.remove('fadeIn');
    americanaModal.classList.add('pointerEvents-none');
    originalModal.classList.remove('fadeIn');
    originalModal.classList.add('pointerEvents-none');
  });
}
