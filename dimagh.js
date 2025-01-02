const calculatorScreen = document.querySelector('.calculator-screen');
let currentInput = '';
let historyInput = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'C') {
            clearScreen();
        } else if (value === '=') {
            calculate();
        } else {
            inputCharacter(value);
        }
        updateScreen();
    });
});

function clearScreen() {
    currentInput = '';
    historyInput = '';
}

function inputCharacter(char) {
    currentInput += char;
}

function calculate() {
    try {
        historyInput = currentInput;
        currentInput = eval(currentInput.replace('^', '**'));
    } catch {
        currentInput = 'Error';
    }
}

function updateScreen() {
    calculatorScreen.value = currentInput;
}
