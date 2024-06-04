// смена формы авторизации и регистрации

let now = document.querySelector('.now')
let nowAgain = document.querySelector('.nowAgain')
let formLog = document.querySelector('.formLog')
let formReg = document.querySelector('.formReg')


now.addEventListener('click', function () {
    formLog.classList.add('none')
    formReg.classList.toggle('none')
})

nowAgain.addEventListener('click', function () {
    formReg.classList.add('none')
    formLog.classList.toggle('none')
});

// // Получаем данные формы
// const formData = new FormData(document.getElementById('formReg'));

// // Отправляем запрос
// document.getElementById('button1').onclick = registration;

// function registration() {
//     fetch('/api/user/registration', {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => {
//             return response.text();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
//     alert("123123")
// };