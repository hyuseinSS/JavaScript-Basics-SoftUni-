function coffeMachine(input) {

    let product = input[0]
    let sugarOrNot = input[1]
    let productCount = Number(input[2])
    let productPrice = 0


    if (product == "Espresso") {
        if (sugarOrNot == "Normal") {
            productPrice = 1.00

        } else if (sugarOrNot == "Extra") {
            productPrice = 1.20
        }
        else {
            productPrice = 0.90
        }
    }
    else if (product == "Cappuccino") {
        if (sugarOrNot == "Normal") {
            productPrice = 1.20

        } else if (sugarOrNot == "Extra") {
            productPrice = 1.60
        }
        else {
            productPrice = 1.00
        }
    }
    else if (product == "Tea") {
        if (sugarOrNot == "Normal") {
            productPrice = 0.60

        } else if (sugarOrNot == "Extra") {
            productPrice = 0.70
        }
        else {
            productPrice = 0.50
        }
    }
    if (sugarOrNot == "Without") {
        productPrice *= 0.65;
    }
    if (product == "Espresso" && productCount >= 5) {
        productPrice *= 0.75;
    }
    let total = (productPrice * productCount)
    if (total > 15) {
        total *= 0.80;
    }
    console.log(`You bought ${productCount} cups of ${product} for ${total.toFixed(2)} lv.`)

}
// coffeMachine(["Espresso",
//     "Without",
//     "10"])
// coffeMachine(["Cappuccino",
//     "Normal",
//     "13"])
// coffeMachine(["Tea",
//     "Extra",
//     "3"])