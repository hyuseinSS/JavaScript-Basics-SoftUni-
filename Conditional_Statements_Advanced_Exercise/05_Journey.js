function journey(input) {

    let budget = Number(input[0])
    let season = input[1]
    let spendings = 0;
    let accomodation = ""

    if (budget <= 100) {
        if (season == "summer") {
            spendings = budget * 0.30;
        } else if (season == "winter") {
            spendings = budget * 0.70;
        }
    } else if (budget <= 1000) {
        if (season == "summer") {
            spendings = budget * 0.40;
        } else if (season == "winter") {
            spendings = budget * 0.80;
        }
    } if (budget > 1000) {
        spendings = budget * 0.90;
    }

    if (season == "summer") {
        accomodation = "Camp";
    } else if (season == "winter") {
        accomodation = "Hotel";
    } if (budget > 1000) {
        destination = "Europe"
    }
    if (budget <= 100) {
        destination = "Bulgaria"
    } else if (budget <= 1000) {
        destination = "Balkans"
    } if (destination == "Bulgaria" && destination == "Europe") {
        spendings = budget * 0.90;
    } if (destination == "Europe") {
        accomodation = "Hotel"
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${accomodation} - ${(spendings).toFixed(2)}`)
}

journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])
