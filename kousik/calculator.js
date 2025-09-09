var appName = "Simple Calculator";
console.log("Welcome to " + appName);


calculator('*', 6, 3, displayResult);

function calculator(operator, number1, number2, callback) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                callback("Error: Division by zero is not allowed.");
                return;
            } else {
                result = number1 / number2;
            }
            break;
        default:
            callback("Invalid operator. Please use +, -, * or /.");
            return;
    }

    callback(`${number1} ${operator} ${number2} = ${result}`);
}

function displayResult(message) {
    console.log("Result:", message);
}
