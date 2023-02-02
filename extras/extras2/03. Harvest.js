function harvest(input) {


    let harvestedGrapesPer2 = Number(input[1])
    let area2 = Number(input[0]) * harvestedGrapesPer2
    let requiredLitresOfWine = Number(input[2])
    let numberOfWorkers = Number(input[3])

    let area2UsedForHarvest = (area2 * 0.40) / 2.50;
    // let harvestedTotalGrapes = harvestedGrapesPer2 * area2UsedForHarvest;
    let litersLeft = (area2UsedForHarvest - requiredLitresOfWine)
    let litersPerPerson = ((area2UsedForHarvest - requiredLitresOfWine) / numberOfWorkers)

    // console.log(area2)
    // console.log(area2UsedForHarvest)
    // console.log(area2UsedForHarvest - requiredLitresOfWine)
    // console.log((area2UsedForHarvest - requiredLitresOfWine) / numberOfWorkers)
    if (area2UsedForHarvest >= requiredLitresOfWine) {
        console.log(`Good harvest this year! Total wine: ${Math.ceil(area2UsedForHarvest)} liters.`)
        console.log(`${Math.round(litersLeft)} liters left -> ${Math.ceil(litersPerPerson)} liters per person.`)
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(requiredLitresOfWine - area2UsedForHarvest)} liters wine needed.`)
    }
}
harvest([650, 2, 175, 3])
harvest([1020, 1.5, 425, 4])

