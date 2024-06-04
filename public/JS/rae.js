// смена формы добавления

// Африкаская
let african_btn = document.querySelector('.african_btn')
let african = document.querySelector('.african')


african_btn.addEventListener('click', function () {
    african.classList.toggle('none');
    american.classList.add('none');
    china.classList.add('none');
    europa.classList.add('none');
    japan.classList.add('none');
    korea.classList.add('none');
    mexico.classList.add('none');
    russian.classList.add('none');
});

// Американская
let american_btn = document.querySelector('.american_btn')
let american = document.querySelector('.american')


american_btn.addEventListener('click', function () {
    african.classList.add('none');
    american.classList.toggle('none');
    china.classList.add('none');
    europa.classList.add('none');
    japan.classList.add('none');
    korea.classList.add('none');
    mexico.classList.add('none');
    russian.classList.add('none');
});

// Китайская
let china_btn = document.querySelector('.china_btn')
let china = document.querySelector('.china')


china_btn.addEventListener('click', function () {
    african.classList.add('none');
    american.classList.add('none');
    china.classList.toggle('none');
    europa.classList.add('none');
    japan.classList.add('none');
    korea.classList.add('none');
    mexico.classList.add('none');
    russian.classList.add('none');
});

// Европейская
let europa_btn = document.querySelector('.europa_btn')
let europa = document.querySelector('.europa')


europa_btn.addEventListener('click', function () {
    african.classList.add('none');
    american.classList.add('none');
    china.classList.add('none');
    europa.classList.toggle('none');
    japan.classList.add('none');
    korea.classList.add('none');
    mexico.classList.add('none');
    russian.classList.add('none');
});

// Японская

let japan_btn = document.querySelector('.japan_btn')
let japan = document.querySelector('.japan')


japan_btn.addEventListener('click', function () {
    african.classList.add('none');
    american.classList.add('none');
    china.classList.add('none');
    europa.classList.add('none');
    japan.classList.toggle('none');
    korea.classList.add('none');
    mexico.classList.add('none');
    russian.classList.add('none');
});

// Корейская

let korea_btn = document.querySelector('.korea_btn')
let korea = document.querySelector('.korea')


korea_btn.addEventListener('click', function () {
    african.classList.add('none');
    american.classList.add('none');
    china.classList.add('none');
    europa.classList.add('none');
    japan.classList.add('none');
    korea.classList.toggle('none');
    mexico.classList.add('none');
    russian.classList.add('none');
});

// Мексиканская

let mexico_btn = document.querySelector('.mexico_btn')
let mexico = document.querySelector('.mexico')


mexico_btn.addEventListener('click', function () {
    african.classList.add('none');
    american.classList.add('none');
    china.classList.add('none');
    europa.classList.add('none');
    japan.classList.add('none');
    korea.classList.add('none');
    mexico.classList.toggle('none');
    russian.classList.add('none');
});

// Русская

let russian_btn = document.querySelector('.russian_btn')
let russian = document.querySelector('.russian')


russian_btn.addEventListener('click', function () {
    african.classList.add('none');
    american.classList.add('none');
    china.classList.add('none');
    europa.classList.add('none');
    japan.classList.add('none');
    korea.classList.add('none');
    mexico.classList.add('none');
    russian.classList.toggle('none');
});

// Обычные блюда

// Хлеб и выпечка

let breadPastries_btn = document.querySelector('.breadPastries_btn')
let breadPastries = document.querySelector('.breadPastries')


russian_btn.addEventListener('click', function () {
    breadPastries.classList.toggle('none');
    salads.classList.add('none');
    side_dishes.classList.add('none');
    soups.classList.add('none');
    spicy.classList.add('none');
    vegetarian.classList.add('none');
});

// Салаты

let salads_btn = document.querySelector('.salads_btn')
let salads = document.querySelector('.salads')


salads_btn.addEventListener('click', function () {
    breadPastries.classList.add('none');
    salads.classList.toggle('none');
    side_dishes.classList.add('none');
    soups.classList.add('none');
    spicy.classList.add('none');
    vegetarian.classList.add('none');
});


// Гарниры

let side_dishes_btn = document.querySelector('.side_dishes_btn')
let side_dishes = document.querySelector('.side_dishes')


side_dishes_btn.addEventListener('click', function () {
    breadPastries.classList.add('none');
    salads.classList.add('none');
    side_dishes.classList.toggle('none');
    soups.classList.add('none');
    spicy.classList.add('none');
    vegetarian.classList.add('none');
});


// Супы

let soups_btn = document.querySelector('.soups_btn')
let soups = document.querySelector('.soups')


soups_btn.addEventListener('click', function () {
    breadPastries.classList.add('none');
    salads.classList.add('none');
    side_dishes.classList.add('none');
    soups.classList.toggle('none');
    spicy.classList.add('none');
    vegetarian.classList.add('none');
});


// Острая кухня

let spicy_btn = document.querySelector('.spicy_btn')
let spicy = document.querySelector('.spicy')


spicy_btn.addEventListener('click', function () {
    breadPastries.classList.add('none');
    salads.classList.add('none');
    side_dishes.classList.add('none');
    soups.classList.add('none');
    spicy.classList.toggle('none');
    vegetarian.classList.add('none');
});


// Вегетарианские блюда

let vegetarian_btn = document.querySelector('.vegetarian_btn')
let vegetarian = document.querySelector('.vegetarian')


vegetarian_btn.addEventListener('click', function () {
    breadPastries.classList.add('none');
    salads.classList.add('none');
    side_dishes.classList.add('none');
    soups.classList.add('none');
    spicy.classList.add('none');
    vegetarian.classList.toggle('none');
});
