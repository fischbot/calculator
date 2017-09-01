// all operator and number buttons
var btns = document.querySelectorAll('.btn');
var output = document.getElementById('output');

window.onload = function() {
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function(e) {
			var elementClicked = e.target;

			switch (elementClicked.id) {
				case 'num-0':
					console.log('0');
					break;
				case 'num-1':
					console.log('1');
					break;
				case 'num-2':
					console.log('2');
					break;
				case 'num-3':
					console.log('3');
					break;
				case 'num-4':
					console.log('4');
					break;
				case 'num-5':
					console.log('5');
					break;
				case 'num-6':
					console.log('6');
					break;
				case 'num-7':
					console.log('7');
					break;
				case 'num-8':
					console.log('8');
					break;
				case 'num-9':
					console.log('9');
					break;
				case 'clear-allclear':
					console.log('AC/C');
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
		}, false);
	}
};

var numbers = {
	set : function() {
		// TODO each number button should represent its corresponding value
	},
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
