function reportSystem(input) {

    let amountExpected = Number(input[0])

    let cashPayment = 0
    let cardPayment = 0
    let i = 1
    let c = 2
    let moneyCollected = 0
    let cash1 = 0
    let card1 = 0

    while (true) {
        let currentAmount = input[i]
        let currentAmount2 = input[c]

        if (currentAmount != "End" && currentAmount <= 100) {  //cash payment

            cashPayment += currentAmount
            cash1++
            console.log("Product sold!")
            c += 2

        }
        if (currentAmount2 != "End" && currentAmount2 > 10) { //card payment

            if (currentAmount != "End" && currentAmount > 100) {
                console.log("Error in transaction!")
                c += 2
            }
            else {
                cardPayment += currentAmount
                cash1++
                console.log("Product sold!")
                c += 2
            }
        }
        if (currentAmount != "End" && currentAmount > 100) {
            console.log("Error in transaction!")
            c += 2
        }
        if (currentAmount2 != "End" && currentAmount2 < 10) {
            console.log("Error in transaction!")
            i += 2

        }
        if (moneyCollected >= amountExpected) {
            break;
        }


        moneyCollected = cardPayment + cashPayment
    }

    if (moneyCollected < amountExpected) {
        console.log("Failed to collect required money for charity.")

    }
    else if (moneyCollected > amountExpected) {
        console.log(`Average CS: ${(cashPayment / cash1).toFixed(2)}`)
        console.log(`Average CC: ${(cardPayment / card1).toFixed(2)}`)

    }

}
reportSystem([500, 120, 8, 63, 256, 78, 317])
reportSystem([600, 86, 150, 98, 227, "End"])