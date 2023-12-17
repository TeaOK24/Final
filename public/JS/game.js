let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  interval = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = '00:00:00';
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
});









/* Считываем все боксы в массив
const boxes = Array.from(document.querySelectorAll(".cells"));
const items = Array.from(document.querySelectorAll(".draggable"));


items.forEach((item) => {
// Обработчик начала перетаскивания элемента
item.addEventListener("dragstart", dragstart);
// Обработчик завершения перетаскивания элемента
item.addEventListener("dragend", dragend);
});


// Обработчик для боксов
boxes.forEach((box) => {
  // Когда заходим элементом в бокс
  box.addEventListener("dragover", dragover);
  // Когда отпускаем элемент на нужном боксе
  box.addEventListener("drop", drop);
  // Когда достигаем бокс
  box.addEventListener("dragenter", dragenter);
  // Когда покидаем бокс
  box.addEventListener("dragleave", dragleave);
});

// Функция начала перетаскивания элемента
function dragstart(items) {
  // Меняем цвет на фиолетовый
  items.target.classList.add("item--hold");
  // Удаляем элемент из бокса
  setTimeout(() => items.target.classList.add("item--hide"), 0);
}

// Функция завершения перетаскивания элемента
function dragend(items) {
  alert("не правильно!");
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  // Добавить смену фона
  e.target.classList.add(".box--hovered");
}

function dragleave(e) {
  // Убирать смену фона
  e.target.classList.remove(".box--hovered");
}*/

const dragAndDrop = () => {
  const item = document.querySelector('.item');
  const boxes = document.querySelectorAll('.cell');

  //сделать массив 
  const dragStart = function () {
    setTimeout(() => {
      this.classList.add('hide');
    },0)
  };
const dragEnd = function(){
  this.classList.remove('hide');
};




boxes.forEach((box) => {

});

  item.addEventListener('dragend', dragEnd);
  item.addEventListener('dragstart', dragStart);







};

dragAndDrop()




