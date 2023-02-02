function sequence(input) {

    let n1 = Number(input[0])
    let currentNumber = 1
    while (n1 >= currentNumber) {
        console.log(currentNumber)
        currentNumber = currentNumber * 2 + 1
    }

}
sequence(["10"])