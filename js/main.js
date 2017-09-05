// all operator and number buttons
var btns = document.querySelectorAll('.btn');
var jsCalc = document.getElementById('js');
var output = document.getElementById('output');
var click = new Audio('assets/audio/click.mp3');
var maxOutputLength = 12;
var storedNumbers = [],
		operator = '',
		afterEquals = false,
		isUndefined = false;

window.onload = function() {
	click.volume = 0.2;

	window.addEventListener('keydown', keydownHandler, false);

	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function(e) {clickHandler(e);}, false);
	}
};

function keydownHandler(event) {
	switch(event.keyCode) {
		case 48:    // 0
		case 96:
			setOutput(output.innerText += 0);
			break;
		case 49:    // 1
		case 97:
			setOutput(output.innerText += 1);
			break;
		case 50:    // 2
		case 98:
			setOutput(output.innerText += 2);
			break;
		case 51:    // 3
		case 99:
			setOutput(output.innerText += 3);
			break;
		case 52:    // 4
		case 100:
			setOutput(output.innerText += 4);
			break;
		case 53:    // 5
		case 101:
			setOutput(output.innerText += 5);
			break;
		case 54:    // 6
		case 102:
			setOutput(output.innerText += 6);
			break;
		case 55:    // 7
		case 103:
			setOutput(output.innerText += 7);
			break;
		case 56:    // 8
		case 104:
			setOutput(output.innerText += 8);
			break;
		case 57:    // 9
		case 105:
			setOutput(output.innerText += 9);
			break;
		case 106:    // *

			break;
		case 107:    // +
			break;

		case 109:    // -

			break;
		case 111:    // /

			break;
		case 110:    // .

			break;
		case 49:    // +/- (m)
			// TODO
			break;
		case 187:    // =

			break;
		case 219:    // (
			break;
		case 221:    // )
			break;
		case 46:     // delete
		case 8:
			setOutput(0);
			break;
	}
}

function clickHandler(e) {
	var elementClicked = e.target;
	for (var i = 0; i < btns.length; i++) {
		if (btns[i].classList.contains('highlighted')) {
			btns[i].classList.remove('highlighted');
		} else {
			elementClicked.classList.add('highlighted');
			elementClicked.style
		}
	}



	setValues(elementClicked);
	click.play();
}

function setValues(e) {
	if (isUndefined === true) {
		clearOutput();
		storedNumbers = [];
		isUndefined = false;
	}

	if (e.classList.contains('number')) {
		if (output.innerText === '0') {
			clearOutput();
		}
		if (output.innerText.length <= maxOutputLength) {
			setOutput(output.innerText += e.innerText);
		}
	} else if (e.classList.contains('operators')) {
			// if (checkForAccidentalOperator() === true) {
			// 	console.log(storedNumbers);
			// 	clearLast();
			// }

			if (afterEquals == true) {
				// if continuing equation after pressing equals key
				afterEquals = false;
			} else {
				storedNumbers.push(Number(output.innerText));
			}
			operator = e.value;
			storedNumbers.push(operator);
			setOutput('0');									// TODO change this
	} else {
		// operators
		switch (e.id) {
		 case 'decimal':
			if (!output.innerText.includes('.')) {
				setOutput(output.innerText += '.');
			}
			break;
		case 'clear-allclear':
			// TODO add clear
			isUndefined = false;
			setOutput('0');
			storedNumbers = [];
			break;
		case 'neg-pos':
			if (output.innerText.includes('-', 0)) {
				// remove negative sign;
				setOutput(output.innerText.substr(1, output.innerText.length - 1));
			} else {
				// add negative sign
				if (output.innerText !== '0') {
					setOutput('-' + output.innerText)
				}
			}
			break;
		case 'percentage':
			// TODO fix problem where it outputs trailing 0000000001
			// convert to decimal
			var conversion = (Number(output.innerText) / 100);

			setOutput(conversion);
			break;
		case 'equals':
			storedNumbers.push(Number(output.innerText));
			isDividedByZero();
			if (isUndefined === true) {
				setOutput('undefined');
			} else {
				var expression = storedNumbers.join(' ');
				storedNumbers = [];
				var result = 0;
				if (Number.isInteger(eval(expression))) {
					result = eval(expression);
				} else {
					// if result is a float set the amount of digits after decimal
					result = eval(expression).toFixed(9);
					// TODO remove trailing zeros
				}
				setOutput(result);
				storedNumbers.push(result);
				afterEquals = true;
			}
		}
	}
};

function clearOutput() {
	output.innerText = '';
}

function evaluate() {
	// TODO move code from equals
}

// Function to see if the user is attempting to divide by 0
function isDividedByZero() {
	var sliced = storedNumbers.slice(storedNumbers.length - 2);
	if (sliced[0] === '/' && sliced[1] == '0') {
		isUndefined = true;
	}
}

function setOutput(value) {
	output.innerText = value;
}

function checkForAccidentalOperator() {
	// if the user presses the wrong operator before pressing the one they want
	// this function removes the incorrect operator and replaces it with the correct one
	// in the storedNumbers array
	if (storedNumbers[storedNumbers.length-3] === '+' && storedNumbers[storedNumbers.length-2] === 0 ||
			storedNumbers[storedNumbers.length-3] === '-' && storedNumbers[storedNumbers.length-2] === 0 ||
			storedNumbers[storedNumbers.length-3] === '*' && storedNumbers[storedNumbers.length-2] === 0 ||
			storedNumbers[storedNumbers.length-3] === '/' && storedNumbers[storedNumbers.length-2] === 0) {
		return true;
	}
}

function clearLast() {
	storedNumbers.pop();
}
