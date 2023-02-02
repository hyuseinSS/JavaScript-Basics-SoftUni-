function sumOfTwoNumbers(input) {


    let intervalStart = Number(input[0])
    let intervalEnd = Number(input[1])
    let targetNumber = Number(input[2])
    let comboCounter = 0
    let num1 = 0
    let num2 = 0

    for (num1 = intervalStart; num1 <= intervalEnd; num1++) {
        comboCounter++

        for (num2 = intervalStart; num2 <= intervalEnd; num2++) {

            if (num1 + num2 !== targetNumber || num2 + num1 >= targetNumber) {
                comboCounter++
                continue
            } else {
                break
            }


        }
        if (num1 + num2 == targetNumber) {

            console.log(`Combination N:${comboCounter} `)
            console.log(`(${num1} + ${num2} = ${targetNumber})`)
            comboCounter++
            break;
        }
        else {
            console.log(`${comboCounter + 1} combinations - neither equals ${targetNumber}`)
            break;
        }
    }

}

// sumOfTwoNumbers([1, 10, 5])
// sumOfTwoNumbers(["23",
//     "24",
//     "20"])
// sumOfTwoNumbers(["88",
//     "888",
//     "2000"])
sumOfTwoNumbers(["88",
    "888",
    "1000"])