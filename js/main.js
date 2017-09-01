// all operator and number buttons
var btns = document.querySelectorAll('.btn');
var output = document.getElementById('output');
var click = new Audio('assets/audio/click.mp3');
click.volume = 0.2;


window.onload = function() {
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function(e) {
			var elementClicked = e.target;
			setValues(elementClicked);
			click.play();
		}, false);
	}
};

function setValues(e) {
	switch (e.id) {
		case 'num-0':
			if (output.innerText === '0') {
				return;
			} else {
				output.innerText += '0';
			}
			break;
		case 'num-1':
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '1';
			break;
		case 'num-2':
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '2';
			break;
		case 'num-3':
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '3';
			break;
		case 'num-4':
			console.log('4');
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '4';
			break;
		case 'num-5':
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '5';
			break;
		case 'num-6':
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '6';
			break;
		case 'num-7':
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '7';
			break;
		case 'num-8':
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '8';
			break;
		case 'num-9':
			if (output.innerText === '0') {
				clearOutput();
			}
			output.innerText += '9';
			break;
		case 'clear-allclear':
			// TODO add clear
			output.innerText = '0';
			break;
		case 'neg-pos':
			console.log('+/-');
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
		case 'decimal':
			console.log('.');
			break;
		case 'equals':
			console.log('=');
			break;
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
