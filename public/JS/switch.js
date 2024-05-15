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
})
