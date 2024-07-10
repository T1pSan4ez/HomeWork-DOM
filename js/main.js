//1
// const button = document.getElementById('alert');
//
// button.addEventListener('click', function () {
//     alert("Hello, Palmo.");
// })
//2
// const button = document.getElementById('button-input');
// const input = document.getElementById('input-task-2');
//
// button.addEventListener('click', function () {
//     input.value = "Hello, World!";
// })
//3
// const button = document.getElementById('button-task-3');
// const input = document.getElementById('input-task-3');
//
// button.addEventListener('click', function () {
//     console.log(input.value);
// })
//4
// const button = document.getElementById('button-task-4');
// const firstHeader = document.getElementById('first-head');
// const secondHeader = document.getElementById('second-head');
//
// button.addEventListener('click', function () {
//     let firstHeaderText = firstHeader.textContent;
//     firstHeader.textContent = secondHeader.textContent;
//     secondHeader.textContent = firstHeaderText;
// })
//5
// const button = document.getElementById('button-task-5');
// const textParagraph = document.getElementById('text-task-5');
//
// button.addEventListener('click', function () {
//     if (textParagraph.style.color === 'red'){
//         textParagraph.style.color = 'black';
//     } else {
//         textParagraph.style.color = 'red';
//     }
// })
//6
// const button = document.getElementById('button-task-6');
// const input = document.getElementById('input-task-6');
//
// button.addEventListener('click', function () {
//     input.disabled ? input.disabled  = false : input.disabled  = true;
// })
//7
// const greenButton = document.getElementById('greenSquare');
// const redButton = document.getElementById('redSquare');
//
// function changeColors() {
//     if (greenButton.style.backgroundColor === "green"){
//         greenButton.style.backgroundColor = 'red';
//         redButton.style.backgroundColor = "green";
//     } else {
//         greenButton.style.backgroundColor = "green";
//         redButton.style.backgroundColor = "red";
//     }
// }
//
// greenButton.addEventListener('click', changeColors);
// redButton.addEventListener('click', changeColors);
//8
// const addListButton = document.getElementById('button-task-8');
// const ulList = document.getElementById('unList-8');
// let counter = 1;
//
// addListButton.addEventListener('click', function () {
//     const newItem = document.createElement('li');
//     newItem.textContent = `Element №${counter}`;
//     counter++;
//
//     ulList.appendChild(newItem);
// })
//9
// const addListButton = document.getElementById('button-task-9');
// const getTextArea = document.getElementById('text-Area-9');
// const olList = document.getElementById('ol-list-9');
//
// addListButton.addEventListener('click', function () {
//     const text = getTextArea.value.trim();
//     const itemsText = text.split(',').map(item => item.trim());
//
//     olList.textContent = '';
//
//     itemsText.forEach(item => {
//         if (item !== '') {
//             const newItem = document.createElement('li');
//             newItem.textContent = item;
//             olList.appendChild(newItem);
//         }
//     })
// })
//10
// function checkForm() {
//     let isPassed = true;
//
//     const login = document.getElementById('login').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const age = document.getElementById('age').value.trim();
//     const password = document.getElementById('password').value.trim();
//     const passwordConfirm = document.getElementById('password-confirm').value.trim();
//
//     const loginRegex = /[._\/\\|,]/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
//
//     if (login.length < 4 || login.length > 20 || loginRegex.test(login)) {
//         document.getElementById('login-error').textContent = "Must not be less than 4x and not more than 20 characters, must not contain characters. _ / \\ | ,";
//         document.getElementById('login-error').style.display = 'block';
//         document.getElementById('login').classList.add('error-input');
//
//         isPassed = false;
//     }
//
//     if (!email || !emailRegex.test(email)) {
//         document.getElementById('email-error').textContent = 'Must not be empty and have the format text@text.text';
//         document.getElementById('email-error').style.display = 'block';
//         document.getElementById('email').classList.add('error-input');
//
//         isPassed = false;
//     }
//
//     if (!age || isNaN(age) || Number(age) < 0) {
//         document.getElementById('age-error').textContent = "Must not be empty, only numbers, numbers cannot be negative"
//         document.getElementById('age-error').style.display = 'block';
//         document.getElementById('age').classList.add('error-input');
//
//         isPassed = false;
//     }
//
//     if (!password || !passwordRegex.test(password)) {
//         document.getElementById('password-error').textContent = 'Must not be empty, have at least 6 characters, have at least one capital letter and at least one number';
//         document.getElementById('password-error').style.display = 'block';
//         document.getElementById('password').classList.add('error-input');
//
//         isPassed = false;
//     }
//
//     if (!passwordConfirm || !passwordRegex.test(passwordConfirm) && !passwordConfirm !== password) {
//         document.getElementById('password-confirm-error').textContent = 'Passwords do not match';
//         document.getElementById('password-confirm-error').style.display = 'block';
//         document.getElementById('password-confirm').classList.add('error-input');
//
//         isPassed = false;
//     }
//
//     if (isPassed) {
//         document.getElementById('successful-message').textContent = 'Registration passed!';
//         document.getElementById('successful-message').style.display = 'block';
//         document.getElementById('form-registration').reset();
//
//         document.querySelectorAll(".error-text").forEach(element => {
//             element.style.display = "none";
//         })
//
//         document.querySelectorAll(".error-input").forEach(element => {
//             element.classList.remove("error-input");
//         })
//     }
// }
//
// function clearForm() {
//     document.getElementById('successful-message').style.display = 'none';
//     document.querySelectorAll(".error-text").forEach(element => {
//         element.style.display = "none";
//     })
//
//     document.querySelectorAll(".error-input").forEach(element => {
//         element.classList.remove("error-input");
//     })
//
//     document.getElementById('login').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('age').value = '';
//     document.getElementById('password').value = '';
//     document.getElementById('password-confirm').value = '';
// }
//11
// const buttonsCalculator = document.querySelectorAll('#calculator input[type="button"]');
//
// function buttonClick(event) {
//     const valueButton = event.target.value;
//     let resultText = document.getElementById('result');
//
//     const regex= /^[0-9.+\-*/=c]$/;
//
//     if (!regex.test(valueButton)){
//         return;
//     }
//
//     if (valueButton === 'c') {
//         resultText.value = '';
//     } else if (valueButton === '=') {
//         try {
//             resultText.value = eval(resultText.value).toFixed(2);
//         } catch (error) {
//             resultText.value = "Error";
//         }
//     } else {
//         if (resultText.value === "Error" ){
//             resultText.value = '';
//         }
//         resultText.value += valueButton;
//     }
// }
//
// buttonsCalculator.forEach(function (button) {
//     button.addEventListener('click', buttonClick);
// })
//12
// document.addEventListener('DOMContentLoaded', function() {
//     let addProduct = document.querySelectorAll('.add-product');
//
//     addProduct.forEach(button => {
//         button.addEventListener('click', function() {
//             let product = button.closest('.product');
//             let productName = product.querySelector('h3').textContent;
//
//             addToCart(productName);
//         });
//     });
// });
//
// function addToCart(productName) {
//     let cartItems = document.getElementById('cart-items');
//     let li = document.createElement('li');
//     li.textContent = productName;
//     cartItems.appendChild(li);
// }
//
// function openCartModal() {
//     let modal = document.getElementById('cart-modal');
//
//     modal.style.display = 'block';
// }
//
// function closeCartModal() {
//     let modal = document.getElementById('cart-modal');
//     modal.style.display = 'none';
// }
//
// function clearCart() {
//     let cartItems = document.getElementById('cart-items');
//     cartItems.innerHTML = '';
// }
//
