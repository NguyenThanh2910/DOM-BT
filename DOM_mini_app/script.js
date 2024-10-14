function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Lỗi';
    }
}

function square() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    display.value = value * value;
}

function sqrt() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    display.value = Math.sqrt(value);
}
