import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
form.addEventListener('submit',submitData);
form.addEventListener('input', throttle(inputData), 500);

const LS_KEY = "feedback-form-state";
let data = JSON.parse(sessionStorage.getItem(LS_KEY)) || {};

function inputData(event) {
   const {email, message} = event.currentTarget.elements;
    data = {
       email: email.value,
       message: message.value,
    };
    sessionStorage.setItem(LS_KEY, JSON.stringify(data));
}

function submitData (event) {
    event.preventDefault();
    const {email,message} = event.currentTarget.elements;
    data = {
       email: email.value,
       message: message.value,
    };
    if (email.value === '' || message.value === '') {
        return alert(`Треба заповнити всі поля`);
        }
     localStorage.removeItem(LS_KEY);
     event.currentTarget.reset();
     data = {};
}

