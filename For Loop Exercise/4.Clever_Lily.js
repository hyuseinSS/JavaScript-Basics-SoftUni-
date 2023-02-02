function cleverLily(input) {

    let ageOfLily = Number(input[0])
    let priceOfWashingMachine = Number(input[1])
    let pricePerToy = Number(input[2])

    let giftsCount = 0
    let totalMoney = 0
    let giftMoney = 10;

    for (let i = 1; i <= ageOfLily; i++) {
        if (i % 2 == 1) {
            giftsCount++
        }
        else {
            totalMoney += giftMoney
            totalMoney--
            giftMoney += 10;
        }
    }
    let total = totalMoney + (giftsCount * pricePerToy)
    if (total >= priceOfWashingMachine) {
        console.log(`Yes! ${(total - priceOfWashingMachine).toFixed(2)}`)
    }
    else {
        console.log(`No! ${(priceOfWashingMachine - total).toFixed(2)}`)
    }
}
cleverLily(["21",
    "1570.98",
    "3"])   