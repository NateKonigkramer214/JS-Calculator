window.onload = function() {
    var buttons = document.getElementsByClassName('button');
    var display = document.getElementById('display');
    var operand1 = 0;
    var operand2 = null;
    var operator = null;

    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var value = this.innerText;

            if(value == '+') {
                operator = '+';
                operand1 = parseFloat(display.value);
                display.value = '';
            } else if(value == '-') {
                operator = '-';
                operand1 = parseFloat(display.value);
                display.value = '';
            } else if(value == 'x') {
                operator = '*';
                operand1 = parseFloat(display.value);
                display.value = '';
            } else if(value == '÷') {
                operator = '/';
                operand1 = parseFloat(display.value);
                display.value = '';
            } else if(value == '%') {
                operator = '%';
                operand1 = parseFloat(display.value);
                display.value = '';
            } else if(value == '=') {
                operand2 = parseFloat(display.value);
                var result = eval(operand1 + ' ' + operator + ' ' + operand2);
                display.value = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            } else if(value == 'AC') {
                display.value = '';
            } else if(value == 'C') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += value;
            }
        });
    }
}