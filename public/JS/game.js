const cell = document.querySelector('.cell');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3')
const food1 = document.querySelector('#food1');
const food2 = document.querySelector('#food2');


cell.ondragover = allowDrop;
box2.ondragover = allowDrop;
box3.ondragover = allowDrop;

function allowDrop(event) {
  event.preventDefault();
}

food1.ondragstart = drag;
food2.ondragstart = drag;

function drag(event) {
  event.dataTransfer.setData('id', event.target.id)
}

cell.ondrop = drop;
box2.ondrop = drop;
box3.ondrop = drop;

function drop(event) {
  let itemId = event.dataTransfer.getData('id');
  console.log(itemId);
  event.target.append(document.getElementById(itemId))
}












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

