let countMouseEventElement = document.querySelector('.js-count-mouse');
let inputElement = document.querySelector('.js-input');
let outputElem = document.querySelector('.js-output');

let countMouseEvent = 0;
let countInputEvent = 0;

document.addEventListener('mousemove', onMouseMove);

function onMouseMove() {
  countMouseEventElement.innerHTML = ++countMouseEvent;
}
