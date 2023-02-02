function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = input[2];
    let totalCost = 0
   
   
    if (season == "Spring") {
        totalCost = 3000;
    } else if (season == "Summer") {
        totalCost = 4200
    } else if (season == "Autumn") {
        totalCost = 4200
    } else if (season == "Winter") {
        totalCost = 2600;
    }

    if (fishermanCount <= 6) {
        totalCost *= 0.90;
    } else if (fishermanCount <= 11) {
        totalCost *= 0.85;
    } else if (fishermanCount >= 12) {
        totalCost *= 0.75
    }
    if (fishermanCount % 2 == 0 && season != "Autumn") {
        totalCost *= 0.95;
    }
   if (budget < totalCost) {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`)
    }
   else if (budget >= totalCost) {
        console.log(`Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`)
    }
}


fishingBoat(["3600", "Autumn", "6"])
fishingBoat(["3000", "Summer", "11"])
fishingBoat(["2000", "Winter", "13"])
