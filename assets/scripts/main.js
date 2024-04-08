// Output window
let outputWindow = document.getElementById('output-window');

function canPlaceOperator(outputWindow) {
    let currentStr = outputWindow.innerHTML;
    if (currentStr.length == 1) return true;
    return !(currentStr[currentStr.length - 1] == ' ');
}

function canPlaceDot(outputWindow) {
    let currentStr = outputWindow.innerHTML;
    for (let i = currentStr.length - 1; i >= 0; i--) {
        if (currentStr[i] == '.') return false;
        else if (currentStr[i] == '+' || currentStr[i] == '-' || currentStr[i] == '*' || currentStr[i] == '/') {
            break;
        }
    }
    return true;
}

function updateOutput(clickedButton, outputWindow) {
    if (outputWindow.innerHTML == 'Infinity') {
        outputWindow.innerHTML = '0';
        if (clickedButton.isOperator) {
            return;
        }
    }
    if (clickedButton.isOperator && !canPlaceOperator(outputWindow)) {
        return;
    }
    if (outputWindow.innerHTML == '0') {
        if (clickedButton.isOperator) {
            outputWindow.innerHTML += ` ${clickedButton.value} `;
        } else {
            outputWindow.innerHTML = clickedButton.value;
        }
    } else {
        if (clickedButton.isOperator) {
            outputWindow.innerHTML += ` ${clickedButton.value} `;
        } else {
            if (!clickedButton.isNumber && !canPlaceDot(outputWindow)) {
                return;
            }
            outputWindow.innerHTML += clickedButton.value;
        }
    }
}

function deleteOneCharFromRight(outputWindow) {
    if (outputWindow.innerHTML == 'Infinity') {
        outputWindow.innerHTML = '0';
        return;
    }
    let currentStr = outputWindow.innerHTML;
    if (currentStr.length == 1) {
        currentStr = '0';
    } else {
        if (currentStr[currentStr.length - 1] == ' ') {
            currentStr = currentStr.slice(0, -3);
        } else {
            currentStr = currentStr.slice(0, -1);
        }
    }
    outputWindow.innerHTML = currentStr;
}

function resetOutputWindow(outputWindow) {
    outputWindow.innerHTML = '0';
}

function computeAndUpdateWindow(outputWindow) {
    let currentExpression = outputWindow.innerHTML;
    let ans = eval(currentExpression);
    outputWindow.innerHTML = ans;
}

oneButton.button.addEventListener('click', function () {
    updateOutput(oneButton, outputWindow);
});
twoButton.button.addEventListener('click', function () {
    updateOutput(twoButton, outputWindow);
});
threeButton.button.addEventListener('click', function () {
    updateOutput(threeButton, outputWindow);
});
fourButton.button.addEventListener('click', function () {
    updateOutput(fourButton, outputWindow);
});
fiveButton.button.addEventListener('click', function () {
    updateOutput(fiveButton, outputWindow);
});
sixButton.button.addEventListener('click', function () {
    updateOutput(sixButton, outputWindow);
});
sevenButton.button.addEventListener('click', function () {
    updateOutput(sevenButton, outputWindow);
});
eightButton.button.addEventListener('click', function () {
    updateOutput(eightButton, outputWindow);
});
nineButton.button.addEventListener('click', function () {
    updateOutput(nineButton, outputWindow);
});
zeroButton.button.addEventListener('click', function () {
    updateOutput(zeroButton, outputWindow);
});
dotButton.button.addEventListener('click', function () {
    updateOutput(dotButton, outputWindow);
});
plusButton.button.addEventListener('click', function () {
    updateOutput(plusButton, outputWindow);
});
minusButton.button.addEventListener('click', function () {
    updateOutput(minusButton, outputWindow);
});
multiplyButton.button.addEventListener('click', function () {
    updateOutput(multiplyButton, outputWindow);
});
divideButton.button.addEventListener('click', function () {
    updateOutput(divideButton, outputWindow);
});
deleteButton.addEventListener('click', function () {
    deleteOneCharFromRight(outputWindow);
});
resetButton.addEventListener('click', function () {
    resetOutputWindow(outputWindow);
});
equaltoButton.addEventListener('click', function () {
    computeAndUpdateWindow(outputWindow);
});