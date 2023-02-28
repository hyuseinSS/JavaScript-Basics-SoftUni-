function poolDay(input) {
    let peopleCount = Number(input[0])
    let entryPrice = Number(input[1]) * peopleCount
    let priceOfSunbed = Number(input[2]) * (Math.ceil(peopleCount * 0.75))
    let pricePerUmbrella = Number(input[3]) * (Math.ceil(peopleCount * 0.50))
    let total = priceOfSunbed + pricePerUmbrella + entryPrice
    console.log(`${total.toFixed(2)} lv.`)
    // console.log(priceOfSunbed)
    // console.log(pricePerUmbrella)
    // console.log(entryPrice)
    // console.log(Math.ceil(21 * 0.75))
}
poolDay(["50",
    "6",
    "8",
    "4"])