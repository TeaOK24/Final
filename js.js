/*Карта мира*/

/*США*/
let elem1 = document.querySelector('.window_map-USA')
let text1 = document.querySelector('.window_map-a1')




elem1.addEventListener('mouseover', function () {
    text1.classList.add("main_Map-light");
})

elem1.addEventListener('mouseleave', function () {
    text1.classList.remove("main_Map-light");
})


/*Мексика*/
let elem2 = document.querySelector('.window_map-Mexica')
let text2 = document.querySelector('.window_map-a2')




elem2.addEventListener('mouseover', function () {
    text2.classList.add("main_Map-light");
})

elem2.addEventListener('mouseleave', function () {
    text2.classList.remove("main_Map-light");
})

/*Европа*/
let elem3 = document.querySelector('.window_map-Europa')
let text3 = document.querySelector('.window_map-a3')




elem3.addEventListener('mouseover', function () {
    text3.classList.add("main_Map-light");
})

elem3.addEventListener('mouseleave', function () {
    text3.classList.remove("main_Map-light");
})

/*Африка*/
let elem4 = document.querySelector('.window_map-Africa')
let text4 = document.querySelector('.window_map-a4')




elem4.addEventListener('mouseover', function () {
    text4.classList.add("main_Map-light");
})

elem4.addEventListener('mouseleave', function () {
    text4.classList.remove("main_Map-light");
})

/*Россия*/
let elem5 = document.querySelector('.window_map-Russia')
let text5 = document.querySelector('.window_map-a5')




elem5.addEventListener('mouseover', function () {
    text5.classList.add("main_Map-light");
})

elem5.addEventListener('mouseleave', function () {
    text5.classList.remove("main_Map-light");
})

/*Китай*/
let elem6 = document.querySelector('.window_map-China')
let text6 = document.querySelector('.window_map-a6')




elem6.addEventListener('mouseover', function () {
    text6.classList.add("main_Map-light");
})

elem6.addEventListener('mouseleave', function () {
    text6.classList.remove("main_Map-light");
})

/*Корея*/
let elem7 = document.querySelector('.window_map-Korea')
let text7 = document.querySelector('.window_map-a7')




elem7.addEventListener('mouseover', function () {
    text7.classList.add("main_Map-light");
})

elem7.addEventListener('mouseleave', function () {
    text7.classList.remove("main_Map-light");
})

/*Япония*/
let elem8 = document.querySelector('.window_map-Japanese')
let text8 = document.querySelector('.window_map-a8')




elem8.addEventListener('mouseover', function () {
    text8.classList.add("main_Map-light");
})

elem8.addEventListener('mouseleave', function () {
    text8.classList.remove("main_Map-light");
})


/*Ссылки на главной странице на еду*/

/*Первая еда*/
let cuisine1 = document.querySelector('.firstcuisine')
let maincousine1 = document.querySelector('.main_LinksCousine1')
let cousinetitle = document.querySelector('.main_Linkstitle')


cuisine1.addEventListener('click', function () {
    cousinetitle.classList.add('main_LinksCousineNone')
    maincousine1.classList.toggle('main_LinksCousineNone')
    maincousine2.classList.add('main_LinksCousineNone')
    maincousine3.classList.add('main_LinksCousineNone')
    maincousine4.classList.add('main_LinksCousineNone')
    maincousine5.classList.add('main_LinksCousineNone')
    maincousine6.classList.add('main_LinksCousineNone')

})

/*Вторая еда*/
let cuisine2 = document.querySelector('.secondcuisine')
let maincousine2 = document.querySelector('.main_LinksCousine2')


cuisine2.addEventListener('click', function () {
    cousinetitle.classList.add('main_LinksCousineNone')
    maincousine1.classList.add('main_LinksCousineNone')
    maincousine2.classList.toggle('main_LinksCousineNone')
    maincousine3.classList.add('main_LinksCousineNone')
    maincousine4.classList.add('main_LinksCousineNone')
    maincousine5.classList.add('main_LinksCousineNone')
    maincousine6.classList.add('main_LinksCousineNone')
})

/*Третья еда*/
let cuisine3 = document.querySelector('.thirdcuisine')
let maincousine3 = document.querySelector('.main_LinksCousine3')


cuisine3.addEventListener('click', function () {
    cousinetitle.classList.add('main_LinksCousineNone')
    maincousine1.classList.add('main_LinksCousineNone')
    maincousine2.classList.add('main_LinksCousineNone')
    maincousine3.classList.toggle('main_LinksCousineNone')
    maincousine4.classList.add('main_LinksCousineNone')
    maincousine5.classList.add('main_LinksCousineNone')
    maincousine6.classList.add('main_LinksCousineNone')
})

/*Четвертая еда*/
let cuisine4 = document.querySelector('.fourthcuisine')
let maincousine4 = document.querySelector('.main_LinksCousine4')


cuisine4.addEventListener('click', function () {
    cousinetitle.classList.add('main_LinksCousineNone')
    maincousine1.classList.add('main_LinksCousineNone')
    maincousine2.classList.add('main_LinksCousineNone')
    maincousine3.classList.add('main_LinksCousineNone')
    maincousine4.classList.toggle('main_LinksCousineNone')
    maincousine5.classList.add('main_LinksCousineNone')
    maincousine6.classList.add('main_LinksCousineNone')
})

/*Четвертая еда*/
let cuisine5 = document.querySelector('.fifthcuisine')
let maincousine5 = document.querySelector('.main_LinksCousine5')


cuisine5.addEventListener('click', function () {
    cousinetitle.classList.add('main_LinksCousineNone')
    maincousine1.classList.add('main_LinksCousineNone')
    maincousine2.classList.add('main_LinksCousineNone')
    maincousine3.classList.add('main_LinksCousineNone')
    maincousine4.classList.add('main_LinksCousineNone')
    maincousine5.classList.toggle('main_LinksCousineNone')
    maincousine6.classList.add('main_LinksCousineNone')

})

/*Четвертая еда*/
let cuisine6 = document.querySelector('.sixthcuisine')
let maincousine6 = document.querySelector('.main_LinksCousine6')


cuisine6.addEventListener('click', function () {
    cousinetitle.classList.add('main_LinksCousineNone')
    maincousine1.classList.add('main_LinksCousineNone')
    maincousine2.classList.add('main_LinksCousineNone')
    maincousine3.classList.add('main_LinksCousineNone')
    maincousine4.classList.add('main_LinksCousineNone')
    maincousine5.classList.add('main_LinksCousineNone')
    maincousine6.classList.toggle('main_LinksCousineNone')
})



/*
if (document.querySelector(".main_LinksCousine2").classList.contains("main_LinksCousineNone")) {
    maincousine1.classList.add('main_LinksCousineNone')
}
*/

/*Слайдер*/

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

/*Навигация*/

/*Немного о нас*/

let cir1 = document.querySelector('.navigation-btn1')
let nav1 = document.querySelector('.navigation_a1')


cir1.addEventListener('mouseover', function () {
    nav1.classList.add("navigation_none");
})

cir1.addEventListener('mouseleave', function () {
    nav1.classList.remove("navigation_none");
})


/*Фото*/

let cir2 = document.querySelector('.navigation-btn2')
let nav2 = document.querySelector('.navigation_a2')


cir2.addEventListener('mouseover', function () {
    nav2.classList.add("navigation_none");
})

cir2.addEventListener('mouseleave', function () {
    nav2.classList.remove("navigation_none");
})

/*Популярное*/

let cir3 = document.querySelector('.navigation-btn3')
let nav3 = document.querySelector('.navigation_a3')


cir3.addEventListener('mouseover', function () {
    nav3.classList.add("navigation_none");
})

cir3.addEventListener('mouseleave', function () {
    nav3.classList.remove("navigation_none");
})

/*Блюда*/

let cir4 = document.querySelector('.navigation-btn4')
let nav4 = document.querySelector('.navigation_a4')


cir4.addEventListener('mouseover', function () {
    nav4.classList.add("navigation_none");
})

cir4.addEventListener('mouseleave', function () {
    nav4.classList.remove("navigation_none");
})

/*Национльнная кухня*/

let cir5 = document.querySelector('.navigation-btn5')
let nav5 = document.querySelector('.navigation_a5')


cir5.addEventListener('mouseover', function () {
    nav5.classList.add("navigation_none");
})

cir5.addEventListener('mouseleave', function () {
    nav5.classList.remove("navigation_none");
})
