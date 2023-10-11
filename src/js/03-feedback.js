import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
form.addEventListener('submit',submitData);
form.addEventListener('input', throttle(inputData), 500);

const LS_KEY = "feedback-form-state";
let data = {};

function inputData(event) {
   const {name, value} = event.target;
    data[name] = value.trim();
    sessionStorage.setItem(LS_KEY, JSON.stringify(data));
}

function submitData (event) {
     event.preventDefault();
     sessionStorage.removeItem(LS_KEY);
     event.currentTarget.reset();
     console.log(data);
     data = {};
}

refreshForm();
function refreshForm() {
   try {
      const savedData = sessionStorage.getItem(LS_KEY);
      if (!savedData) return;
      data = JSON.parse(savedData);
      Object.entries(data).forEach(([key, val]) => {
         form.elements[key].value = val;
      });
   } catch ({message}) {
      console.log(message);
   }
}