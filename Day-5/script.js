function showConverter() {
    const choice = document.getElementById('choice').value;
    const menu = document.getElementById('menu');
    const converter = document.getElementById('converter');
    const converterTitle = document.getElementById('converterTitle');

    if (choice === '1') {
        converterTitle.innerText = 'DEC to Binary';
        converter.style.display = 'block';
        menu.style.display = 'none';
    } else if (choice === '2') {
        converterTitle.innerText = 'Binary to DEC';
        converter.style.display = 'block';
        menu.style.display = 'none';
    } else {
        alert('Please enter a valid choice (1 or 2)');
    }
}

function convert() {
    const choice = document.getElementById('choice').value;
    const numberInput = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    if (choice === '1') {
        // DEC to Binary
        result.innerText = parseInt(numberInput, 10).toString(2);
    } else if (choice === '2') {
        // Binary to DEC
        result.innerText = parseInt(numberInput, 2).toString(10);
    }
}
