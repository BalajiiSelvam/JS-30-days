function changeColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33A1', '#33FFF3', '#7F33FF', '#FFC300', '#581845', '#DAF7A6', '#900C3F', '#C70039', '#FF5733', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#DAF7A6', '#FF5733', '#FFC300', '#DAF7A6', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#DAF7A6', '#FF5733', '#C70039'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.getElementById('colorBox').style.backgroundColor = colors[randomIndex];
}
