function trainTheTrainers(input) {
    let index = 0
    let numberOfJudges = Number(input[index])
    index++
    let currentCommand = input[index]
    index++
    let counter = 0

    let grandTotal = 0
    let totalPoints = 0

    while (currentCommand != "Finish") {



        for (let i = 0; i < numberOfJudges; i++) {
            let currentCommand = Number(input[index])
            totalPoints += currentCommand
            index++
            counter++
        }

        let avgPoints = totalPoints / numberOfJudges
        console.log(`${currentCommand} - ${avgPoints.toFixed(2)}.`)
        grandTotal += totalPoints

        totalPoints = 0

        currentCommand = input[index]
        index++

    }

    console.log(`Student's final assessment is ${(grandTotal / counter).toFixed(2)}.`)
}


// trainTheTrainers(["2",
//     "While-Loop",
//     "6.00",
//     "5.50",
//     "For-Loop",
//     "5.84",
//     "5.66",
// "Finish"])
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])