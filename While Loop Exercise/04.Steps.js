function steps(input) {


    let i = 0




    let totalSteps = 0

    while (true) {

        let currentSteps = Number(input[i])

        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`)
            if (totalSteps > 10000) {
                console.log(`${totalSteps - 10000} steps over the goal!`)
            }

            break
        }
        if (isNaN(currentSteps) == true) {
            totalSteps += Number(input[i + 1])
            if (totalSteps < 10000) {
                console.log(`${10000 - totalSteps} more steps to reach goal.`)
                break
            } else {
                console.log("Goal reached! Good job!")
                console.log(`${totalSteps - 10000} steps over the goal!`)
                break
            }
        }
        if (currentSteps !== "Going home") {
            totalSteps += currentSteps
            i++

        }

    }
}
steps(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])
// steps(["1000",
// "1500",
// "2000",
// "6500"])
// steps(["125",
// "250",
// "4000",
// "30",
// "2678",
// "4682"])
// steps(["1500",
// "300",
// "2500",
// "3000",
// "Going home",
// "200"])