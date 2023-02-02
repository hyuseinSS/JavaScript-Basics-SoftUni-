function biggestNumber(input) {

    let index = 0;
    let command = input[index]
    index++

    let maxNumber = Number(command)

    while (command !== "Stop") {
        let currentNumber = Number(command)

        if (maxNumber < currentNumber) {
            maxNumber = currentNumber
        }
        command = input[index];
        index++
    }
    console.log(maxNumber)
}
biggestNumber(["1040",
    "9952",
    "8032323",
    "70",
    "Stop"])