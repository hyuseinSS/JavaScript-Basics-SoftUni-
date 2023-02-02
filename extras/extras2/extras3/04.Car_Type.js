function rental(input) {

    let budget = Number(input[0])
    let season = input[0]

    let carClass = ""
    let carPrice = 0
    let carType = ""

    if (budget <= 100 && season == "Summer") {
        carClass = "Economy class"
        carType = "Cabrio"
        carPrice = budget * 0.35;
    } else if (season == "Winter") {
        carType = "Jeep"
        carPrice = budget * 0.65
    }
    if (budget > 100 && budget <= 500 && season == "Summer") {
        carClass = "Compact class"
        carType = "Cabrio"
        carPrice = budget * 0.45;
        if(season == "Summer") {
            carType = "Cabrio"
            carPrice = budget * 0.45;
        } else if (season == "Winter") {
            carType = "Jeep"
            carPrice = 0.80;
        }
    }
    else if (budget > 500) {
        carClass = "Luxury class"
        carType = "Jeep"
        carPrice = budget * 0.90;
    }
    console.log(carClass)
    console.log(`${carType} - ${carPrice.toFixed(2)}`)
}
rental([450, "Summer"])





