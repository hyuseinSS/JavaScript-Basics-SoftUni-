function accBalance(input) {



    let i = 0
    let totalBalance = 0

    while (true) {
        let currentNumber = input[i]
        if (currentNumber == "NoMoreMoney") {
            break;
        }
        else if (currentNumber < 0) {
            console.log("Invalid operation!")
            break;
        }
        else {
            totalBalance += Number(currentNumber)
            console.log(`Increase: ${Number(currentNumber).toFixed(2)}`)
        }
        i++
    }
    console.log(`Total: ${Number(totalBalance).toFixed(2)}`)
    
}
accBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])