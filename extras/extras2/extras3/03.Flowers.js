function flowers(input) {

    let hrizantema = Number(input[0])
    let rose = Number(input[1])
    let lilia = Number(input[2])
    let season = input[3]
    let holidayOrNot = input[4]

    let tax = 0
    let holidayTax = 0
    let countTax = 0

    let totalFlowersCount = hrizantema + rose + lilia


    if (holidayOrNot == "Y") {
        holidayTax = 0.15;
    } else { holidayTax = 0 }
    if (lilia >= 7 && season == "Spring") {
        tax = 0.05;
    } if (rose >= 10 && season == "Winter") {
        tax = 0.10;
    }
    if (season == "Spring" || season == "Summer") {
        hrizantema *= 2
        rose *= 4.1
        lilia *= 2.5
    } if (season == "Autumn" || season == "Winter") {
        hrizantema *= 3.75
        rose *= 4.5
        lilia *= 4.15;
    }
    let total = hrizantema + rose + lilia;
    let totalSum = total +(total * holidayTax)
    if (totalFlowersCount >= 20) {
        countTax = 0.80
        console.log(((total - (total * tax)) * countTax + 2).toFixed(2))
    } else {
        console.log((total + (total * holidayTax) - ((total + (total * holidayTax)) * tax) + 2).toFixed(2))
    }
console.log(((totalSum - (totalSum * tax) ) * countTax + 2).toFixed(2))
}

// ⦁	На петия ред е посочено дали денят е празник – [Y – да / N - не]
flowers([2, 4, 8, "Spring", "Y"])
// flowers([3, 10, 9, "Winter", "N"])
// flowers([10, 10, 10, "Autumn", "N"])

