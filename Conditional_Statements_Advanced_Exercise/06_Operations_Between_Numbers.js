function operation(input) {

    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let operator = input[2]
    let total = 0;
    let evenOrOdd = ""

    if (operator == "-") {
        total = num1 - num2;
    } else if (operator == "+") {
        total = num1 + num2;
    } else if (operator == "*") {
        total = num1 * num2
    } else if (operator == "/") {
        total = (num1 / num2).toFixed(2);
    } else if (operator == "%") {
        total = num1 % num2;
    } if (total % 2 == 0) {
        evenOrOdd = "even"
    } else { 
        evenOrOdd = "odd" }
 if (num2 == 0) {
    console.log(`Cannot divide ${num1} by zero`)
}
else if (operator == "+" || operator == "-" || operator == "*" && num2 != 0) {
    console.log(`${num1} ${operator} ${num2} = ${total} - ${evenOrOdd}`)
}
else if (operator == "/" || operator == "%") {
    console.log(`${num1} ${operator} ${num2} = ${total}`)
}
}
operation(["10", "12", "+"])
operation(["10", "1", "-"])
operation(["7", "3", "*"])
operation(["112", "0", "/"])
operation(["10", "0", "%"])
operation(["123", "12", "/"])