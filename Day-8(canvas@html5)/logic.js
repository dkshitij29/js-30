const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
  if (!isDrawing) return; // stop the function from running when not moused down
  console.log(event);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
  console.log('mousedown', event);
});

canvas.addEventListener('mousemove', (event) => {
  draw(event);
  console.log('mousemove', event);
});

canvas.addEventListener('mouseup', (event) => {
  isDrawing = false;
  console.log('mouseup', event);
});

canvas.addEventListener('mouseout', (event) => {
  isDrawing = false;
  console.log('mouseout', event);
});

canvas.addEventListener('click', (event) => {
  console.log('click', event);
});

canvas.addEventListener('dblclick', (event) => {
  console.log('dblclick', event);
});
