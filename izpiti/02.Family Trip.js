function familyTrip(input) {

    let budget = Number(input[0])
    let nights = Number(input[1])
    let PricePerNight = Number(input[2]) * nights
    let percentOfExtraExpenses = Number(input[3]) / 100 * budget


    if (nights > 7) {
        PricePerNight *= 0.95
    }
    let total = PricePerNight + percentOfExtraExpenses
    let moneyLeft = budget - total
    // console.log(total)
    // console.log(PricePerNight)
    // console.log(percentOfExtraExpenses)
    if (budget >= total) {

        // console.log(budget)
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${(total - budget).toFixed(2)} leva needed.`)
    }
}

familyTrip(["500",
    "7",
    "66",
    "15"])