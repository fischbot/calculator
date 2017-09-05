// all operator and number buttons
var btns = document.querySelectorAll('.btn');
var output = document.getElementById('output');
var click = new Audio('assets/audio/click.mp3');
var maxOutputLength = 12;
var storedNumbers = [],
		operator = '',
		afterEquals = false;

window.onload = function() {
	click.volume = 0.2;

	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function(e) {
			var elementClicked = e.target;
				setValues(elementClicked);
			click.play();
		}, false);
	}
};

function setValues(e) {
	if (e.classList.contains('number')) {
		if (output.innerText === '0') {
			clearOutput();
		}
		if (output.innerText.length <= maxOutputLength) {
			output.innerText += e.innerText;
		}
	} else if (e.classList.contains('operators')) {
			if (afterEquals == true) {
				// if continuing equation after pressing equals key
				// reset afterEquals
				afterEquals = false;
			} else {
				storedNumbers.push(Number(output.innerText));
			}

			operator = e.innerText;
			storedNumbers.push(operator);
			output.innerText = '0';
	} else {
			// TODO store input in variable
		// operators
		switch (e.id) {
		 case 'decimal':
			if (!output.innerText.includes('.')) {
				output.innerText += '.';
			}
			break;
		case 'clear-allclear':
			// TODO add clear
			output.innerText = '0';
			storedNumbers = [];
			break;
		case 'neg-pos':
			if (output.innerText.includes('-', 0)) {
				// remove negative sign;
				output.innerText = output.innerText.substr(1, output.innerText.length - 1);
			} else {
				// add negative sign
				output.innerText = '-' + output.innerText;
			}
			break;
		case 'percentage':
			// TODO fix problem where it outputs trailing 0000000001
			// convert to decimal
			var conversion = (Number(output.innerText) / 100);
			output.innerText = conversion;
			break;
		case 'equals':
			console.log('=');
			storedNumbers.push(Number(output.innerText));
			var expression = storedNumbers.join(' ');
			console.log(`expression: ${expression}`);
			storedNumbers = [];
			var result = eval(expression.toString());
			output.innerText = result;
			storedNumbers.push(result);
			// clearOutput();
			afterEquals = true;
			console.log(`storedNumbers: ${storedNumbers}`);
			console.log(result);
			break;
		}
	}
};

function clearOutput() {
	output.innerText = '';
}


function evaluate() {
	// TODO move code from equals
}

function isUndefined() {

	if (storedNumber)
}
