function vacation(input) {


    let moneyNeeded = Number(input[0])
    let moneyAvailable = Number(input[1])

    let i = 2

    let spendingSpree = 0
    let counter = 0

    while (true) {

        let currentAmount = Number(input[i + 1])
        let currentActivity = input[i]


        if (currentActivity == "spend") { // SPEND
            moneyAvailable -= currentAmount
            spendingSpree++
            counter++
            if (moneyAvailable < 0) {
                moneyAvailable = 0
            }
            if (spendingSpree >= 5) {
                console.log("You can't save the money.")
                console.log(`${spendingSpree}`)
                break;
            }

        }
        if (currentActivity == "save") { // SAVE
            moneyAvailable += currentAmount
            spendingSpree = 0
            counter++
            if (moneyAvailable >= moneyNeeded) {
                console.log(`You saved the money for ${counter} days.`)
                break;
            }
        }
        i += 2
    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])