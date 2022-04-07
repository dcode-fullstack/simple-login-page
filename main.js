// // Single elements
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));



// // Multiple elements

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));


// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// items.forEach(function (item) {
//     console.log(item);
// })

//const ul = document.querySelector('.items');

//ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hi';
// ul.children[1].textContent = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.backgroundColor = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = 'Hello Brother';
//     document.querySelector('.items').style.color = 'red';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // msg.classList.remove('error');
    // msg.innerHTML = '';

    if (nameInput.value === '' || emailInput.value === '') {

        msg.classList.add('error');
        msg.innerHTML = 'Please enter the fields';
        setTimeout(() => msg.innerHTML = '', 3000);
        setTimeout(() => msg.classList.remove('error'), 3000);

        // setTimeout(function () {
        //     return msg.innerHTML = '';
        // }, 3000);
        // setTimeout(function () {
        //     return msg.classList.remove('error');
        // }, 3000);

    } else {
        const li = document.createElement('li');
        // li.innerHTML = '<h1>Name: ' + nameInput.value + '<br> Email: ' + emailInput.value + '</h1>';
        // document.getElementById('users').appendChild(li);

        li.appendChild(document.createTextNode(`${nameInput.value} :/n ${emailInput.value}`));
        userList.appendChild(li);

        // Clear fields

        nameInput.value = '';
        emailInput.value = '';
    }
}