while (true) {
    const firstNumber = +prompt('Пожалуйста, введите первое число...');
    const secondNumber = +prompt('Пожалуйста, введите второе число...');
    const operationSymbol = prompt('Пожалуйста, введите арифметическую операцию (*, /, +, -)...');
    const selectedOperation = (operationSymbol === '*') ? 'multiply' : (operationSymbol === '/') ? 'divide' : (operationSymbol === '+') ? 'add' : 'subtract';
    const multiplication = function(num1, num2) {
        return num1 * num2;
    };
    const division = function(num1, num2) {
        return num1 / num2;
    };
    const addition = function(num1, num2) {
        return num1 + num2;
    };
    const subtraction = function(num1, num2) {
        return num1 - num2;
    };
    const operations = {
        multiply: multiplication,
        divide: division,
        add: addition,
        subtract: subtraction
    };
    function calculate(num1, num2, operation) {
        return operation(num1, num2);
    }
    console.log(calculate(firstNumber, secondNumber, operations[selectedOperation]));
}