// all operator and number buttons
var btns = document.querySelectorAll('.btn');
var output = document.getElementById('output');
var click = new Audio('assets/audio/click.mp3');
var maxOutputLength = 12;

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
			break;
		case 'neg-pos':
			console.log('+/-');
			if (output.innerText.includes('-', 0)) {
				// remove negative sign;
				output.innerText = output.innerText.substr(1, output.innerText.length - 1);
			} else {
				// add negative sign
				output.innerText = '-' + output.innerText;
			}
			break;
		case 'percentage':
			console.log('%');
			break;
		case 'addition':
			console.log('+');
			break;
		case 'subtraction':
			console.log('-');
			break;
		case 'multiplication':
			console.log('x');
			break;
		case 'division':
			console.log('/');
			break;
		case 'equals':
			console.log('=');
			break;
		}
	}
};

function clearOutput() {
	output.innerText = '';
}

var numbers = {
	add : function(a, b) {
		return a + b;
	},
	subtract : function(a, b) {
		return a - b;
	},
	multiply : function(a, b) {
		return a * b;
	},
	divide : function(a, b) {
		return a / b;
	}
};
