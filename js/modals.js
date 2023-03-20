// Define an object that maps modal names to their corresponding elements
const modals = {
  jazz: {
    modal: document.querySelector('.modal__songs--jazz'),
    btn: document.querySelector('#jazz'),
  },
  blues: {
    modal: document.querySelector('#bluesModal'),
    btn: document.querySelector('#blues'),
  },
  americana: {
    modal: document.querySelector('#americanaModal'),
    btn: document.querySelector('#americana'),
  },
  original: {
    modal: document.querySelector('#originalModal'),
    btn: document.querySelector('#original'),
  },
};

// Get references to all close buttons and the outer modal
const modalClose = document.querySelectorAll(
  '.modal__close, .modal__close--songs'
);
const outerModal = document.querySelector('.modal__songs--outer');

// Define a function to close all modals
function closeModals() {
  for (const modal of Object.values(modals)) {
    modal.modal.classList.remove('fadeIn');
    modal.modal.classList.add('pointerEvents-none');
  }
  outerModal.classList.remove('fadeIn');
  outerModal.classList.add('pointerEvents-none');
}

// Add event listeners to each modal button to show the corresponding modal
for (const modal of Object.values(modals)) {
  modal.btn.addEventListener('click', function (e) {
    e.preventDefault();
    const yOffset = 10;
    const y =
      modal.modal.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    closeModals();
    modal.modal.classList.add('fadeIn');
    modal.modal.classList.remove('pointerEvents-none');
    outerModal.classList.add('fadeIn');
    outerModal.classList.remove('pointerEvents-none');
  });
  // Add event listener to the modal itself to prevent clicks from propagating
  modal.modal.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}

// Add event listeners to each close button to close all modals
for (const closeBtn of modalClose) {
  closeBtn.addEventListener('click', closeModals);
}

// Add event listener to the document to close all modals when the 'Escape' key is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModals();
  }
});

// Add event listener to the outer modal to close all modals when clicked
outerModal.addEventListener('click', closeModals);
