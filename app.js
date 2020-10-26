const name = document.querySelector('#name');
const zip = document.querySelector('#zip');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

name.addEventListener('blur', validateName);
zip.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);



function validateName() {
  const re = /^[a-zA-Z]{2,10}$/;
  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
    name.style.borderColor = 'red';
  } else {
    name.classList.remove('is-invalid');
    name.style.borderColor = 'green';
  }
}

function validateZip() {
  const re = /^\d{5,5}$/;
  if(!re.test(zip.value)) {
    zip.classList.add('is-invalid');
    zip.style.borderColor = 'red';
  } else {
    zip.classList.remove('is-invalid');
    zip.style.borderColor = 'green';
  }
}

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
    email.style.borderColor = 'red';
  } else {
    email.classList.remove('is-invalid');
    email.style.borderColor = 'green';
  }
}


function validatePhone() {
  const re = /^(\+[0-9]{11,13})$/;
  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
    phone.style.borderColor = 'red';
  } else {
    phone.classList.remove('is-invalid');
    phone.style.borderColor = 'green';
  }
}


