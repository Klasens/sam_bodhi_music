'use strict';
const form = document.querySelector('#form');
const formFirstName = document.querySelector('#formFirstName');
const formLastName = document.querySelector('#formLastName');
const formEmail = document.querySelector('#formEmail');
const formSubject = document.querySelector('#formSubject');
const formMessage = document.querySelector('#formMessage');
const formSubmit = document.querySelector('#formSubmit');

function sendContact() {
  let firstNameValue = formFirstName.value;
  let lastNameValue = formLastName.value;
  let emailValue = formEmail.value;
  let subjectValue = formSubject.value;
  let messageValue = formMessage.value;
  const mail = {
    firstNameValue,
    lastNameValue,
    emailValue,
    subjectValue,
    messageValue,
  };
  const url = 'https://localhost:300/contact.html/send';
  fetch(url, {
    // returns a promise
    method: 'post', // specify method as post
    body: mail, // specify body as mail to send to request
  })
    .then((response) => response.json()) // converting promise to JSON
    .then((res) => console.log(res)) // view the response from server
    .catch((error) => console.log(error));

  console.log('test');
  console.log(mail);
}

// formSubmit.addEventListener('click', function (e) {
//   e.preventDefault();
//   sendContact();
// });
