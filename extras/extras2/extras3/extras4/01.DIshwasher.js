function dishwasher(input) {


    let bottlesCount = Number(input[0]) * 750
    let costPerDish = 5
    let costPerPot = 15
    let dishesCount = 0
    let potsCount = 0
    let i = 1
    let currentDish = 0
    let total = 0

    while (true) {
        currentDish = input[i]
        let total = potsCount * costPerPot + costPerDish * dishesCount
        if (bottlesCount <= total) { console.log(`Not enough detergent, ${total - bottlesCount} ml. more necessary!`) 
    break;}
        else if (currentDish == "End") {
            console.log(`Detergent was enough!`)
            console.log(`${dishesCount} dishes and ${potsCount} pots were washed.`)
            console.log(`Leftover detergent ${bottlesCount - total} ml.`)
            break;
        }
        if (i % 3 == 0) {
            potsCount += currentDish
            i++
            continue;
        }
        else { dishesCount += currentDish }

        if (bottlesCount >= 0)
            i++
    }
}

dishwasher([2, 53, 65, 55, "End"])
dishwasher([1, 10, 15, 10, 12, 13, 30, "End"])