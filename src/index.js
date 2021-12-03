const canvas = document.getElementById('canvas-container')
const ctx = canvas.getContext('2d')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let rect = {};
let drag = false;

function init() {
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(e) {
  rect.startX = e.pageX - this.offsetLeft;
  rect.startY = e.pageY - this.offsetTop;
  drag = true;
}

function mouseUp() {
  drag = false;
}

function mouseMove(e) {
  if (drag) {
    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY ;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw();
  }
}

function draw() {
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'red';
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
}

init();