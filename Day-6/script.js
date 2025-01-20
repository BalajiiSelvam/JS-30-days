
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const eraser = document.getElementById('eraser');

canvas.width = 400;
canvas.height = 400;

let drawing = false;
let currentColor = '#000000';

// Set default cursor to pencil
canvas.classList.add('pencil-cursor');

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath(); 
});
canvas.addEventListener('mouseout', () => drawing = false);
canvas.addEventListener('mousemove', draw);

colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
    canvas.classList.remove('eraser-cursor');
    canvas.classList.add('pencil-cursor');
    colorPicker.style.backgroundColor = currentColor;
});

eraser.addEventListener('click', () => {
    currentColor = '#FFFFFF'; 
    canvas.classList.remove('pencil-cursor');
    canvas.classList.add('eraser-cursor');
    ctx.lineWidth = 10; 
});

function draw(event) {
    if (!drawing) return;
    ctx.strokeStyle = currentColor;
    ctx.lineCap = 'round';

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}
