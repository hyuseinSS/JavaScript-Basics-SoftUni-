function club(input) {

    let earningsRequired = Number(input[0])
    let index = 1
    let currentCommand = input[index]
    let grandTotal = 0
    let pricePerCocktail = Number(currentCommand.length)

    while (currentCommand != "Party!") {

        index++
        let numberOfCocktails = Number(input[index])
        let total = Number(numberOfCocktails * pricePerCocktail)
        if (total % 2 == 1) {
            total *= 0.75;
        }
        grandTotal += total

        if (grandTotal >= earningsRequired) {
            console.log("Target acquired.")
            console.log(`Club income - ${grandTotal.toFixed(2)} leva.`)
            return;
        }
        if (index >= input.length - 1) {
            break;
        }
        index++
        currentCommand = input[index]
        pricePerCocktail = Number(currentCommand.length)
    }
    if (grandTotal <= earningsRequired) {
        let moneyNeeded = earningsRequired - grandTotal
        console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`)
        console.log(`Club income - ${grandTotal.toFixed(2)} leva.`)
    }
}
club(["1040",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"])
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])