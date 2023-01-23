//outer containers
const outerModal = document.querySelector('.modal__songs--outer');

//btns
const jazzBtn = document.querySelector('#jazz');
const jazzModal = document.querySelector('.modal__songs--jazz');
const bluesBtn = document.querySelector('#blues');
const bluesModal = document.querySelector('#bluesModal');
const americanaBtn = document.querySelector('#americana');
const americanaModal = document.querySelector('#americanaModal');
const originalBtn = document.querySelector('#original');
const originalModal = document.querySelector('#originalModal');

//modal close
const modalClose = document.querySelectorAll('.modal__close');
const modalCloseTwo = document.querySelectorAll('.modal__close--songs');

jazzModal.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
});
bluesModal.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
});
americanaModal.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
});
originalModal.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
});

jazzBtn.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  jazzModal.classList.add('fadeIn');
  jazzModal.classList.remove('pointerEvents-none');
  outerModal.classList.add('fadeIn');
  outerModal.classList.remove('pointerEvents-none');
});
bluesBtn.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  bluesModal.classList.add('fadeIn');
  bluesModal.classList.remove('pointerEvents-none');
  outerModal.classList.add('fadeIn');
  outerModal.classList.remove('pointerEvents-none');
});
americanaBtn.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  americanaModal.classList.add('fadeIn');
  americanaModal.classList.remove('pointerEvents-none');
  outerModal.classList.add('fadeIn');
  outerModal.classList.remove('pointerEvents-none');
});
originalBtn.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  originalModal.classList.add('fadeIn');
  originalModal.classList.remove('pointerEvents-none');
  outerModal.classList.add('fadeIn');
  outerModal.classList.remove('pointerEvents-none');
});

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function () {
    jazzModal.classList.remove('fadeIn');
    jazzModal.classList.add('pointerEvents-none');
    bluesModal.classList.remove('fadeIn');
    bluesModal.classList.add('pointerEvents-none');
    americanaModal.classList.remove('fadeIn');
    americanaModal.classList.add('pointerEvents-none');
    originalModal.classList.remove('fadeIn');
    originalModal.classList.add('pointerEvents-none');
  });
}

for (let i = 0; i < modalCloseTwo.length; i++) {
  modalCloseTwo[i].addEventListener('click', function () {
    jazzModal.classList.remove('fadeIn');
    jazzModal.classList.add('pointerEvents-none');
    bluesModal.classList.remove('fadeIn');
    bluesModal.classList.add('pointerEvents-none');
    americanaModal.classList.remove('fadeIn');
    americanaModal.classList.add('pointerEvents-none');
    originalModal.classList.remove('fadeIn');
    originalModal.classList.add('pointerEvents-none');
    outerModal.classList.remove('fadeIn');
    outerModal.classList.add('pointerEvents-none');
  });
}

// outerModalTwo.addEventListener('click', function () {
//   jazzModal.classList.remove('fadeIn');
//   jazzModal.classList.add('pointerEvents-none');
//   bluesModal.classList.remove('fadeIn');
//   bluesModal.classList.add('pointerEvents-none');
//   americanaModal.classList.remove('fadeIn');
//   americanaModal.classList.add('pointerEvents-none');
//   originalModal.classList.remove('fadeIn');
//   originalModal.classList.add('pointerEvents-none');
// });

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    jazzModal.classList.remove('fadeIn');
    jazzModal.classList.add('pointerEvents-none');
    bluesModal.classList.remove('fadeIn');
    bluesModal.classList.add('pointerEvents-none');
    americanaModal.classList.remove('fadeIn');
    americanaModal.classList.add('pointerEvents-none');
    originalModal.classList.remove('fadeIn');
    originalModal.classList.add('pointerEvents-none');
    outerModal.classList.remove('fadeIn');
    outerModal.classList.add('pointerEvents-none');
  }
});

outerModal.addEventListener('click', function () {
  jazzModal.classList.remove('fadeIn');
  jazzModal.classList.add('pointerEvents-none');
  bluesModal.classList.remove('fadeIn');
  bluesModal.classList.add('pointerEvents-none');
  americanaModal.classList.remove('fadeIn');
  americanaModal.classList.add('pointerEvents-none');
  originalModal.classList.remove('fadeIn');
  originalModal.classList.add('pointerEvents-none');
  outerModal.classList.remove('fadeIn');
  outerModal.classList.add('pointerEvents-none');
});
