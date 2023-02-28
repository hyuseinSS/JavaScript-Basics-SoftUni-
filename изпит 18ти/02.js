function footballKit(input) {

    let priceOfTshirt = Number(input[0])
    let targetPrice = Number(input[1])
    let priceOfShorts = priceOfTshirt * 0.75
    let socksPrice = priceOfShorts * 0.20;
    let priceOfShoes = (priceOfShorts + priceOfTshirt) * 2

    let total = (priceOfShorts + socksPrice + priceOfTshirt + priceOfShoes) * 0.85




    if (total >= targetPrice) {
        console.log(`Yes, he will earn the world-cup replica ball!`)
        console.log(`His sum is ${total.toFixed(2)} lv.`)
    }
    else {
        console.log(`No, he will not earn the world-cup replica ball.`)
        console.log(`He needs ${(targetPrice - total).toFixed(2)} lv. more.`)
    }
}
footballKit(["25",
    "100"])
    footballKit(["55",

    "310"])
    footballKit(["59.99",
    "500"])