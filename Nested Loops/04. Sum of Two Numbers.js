function sumOfTwoNumbers(input) {

    let index = 0
    let intervalStart = Number(input[index])
    index++
    let intervalEnd = Number(input[index])
    index++
    let targetNumber = Number(input[index])

    let comboCounter = 0

    let n1 = 0
    let n2 = 0
    let total = n1 + n2

    for (n1 = intervalStart; n1 <= intervalEnd; n1++) {
        for (n2 = intervalStart; n2 <= intervalEnd; n2++) {
            total = n1 + n2;
            comboCounter++
            if (total == targetNumber) {
                console.log(`Combination N:${comboCounter} (${n1} + ${n2} = ${targetNumber})`)
                return;
            }
        }
        if (total == targetNumber) {
            console.log(`Combination N:${comboCounter} (${n1} + ${n2} = ${targetNumber})`)
            break;
        }


    }

    if (n1 + n2 != targetNumber) {
        console.log(`${comboCounter} combinations - neither equals ${targetNumber}`)
    }
}

sumOfTwoNumbers([1, 10, 5])
sumOfTwoNumbers(["23",
    "24",
    "20"])
sumOfTwoNumbers(["88",
    "888",
    "2000"])
sumOfTwoNumbers(["88",
    "888",
    "1000"])