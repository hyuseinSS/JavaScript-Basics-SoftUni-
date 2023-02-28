function everest(input) {


    let index = 0
    let yesOrNo = input[index]
    index++
    let currentMeters = Number(input[index])
    let currentPlaceOfClimber = 5364
    let nights = 0

    while (yesOrNo !== "END") {

        if (yesOrNo == "Yes") {
            nights++
        }
        if (nights >= 5) {
            console.log("Failed!")
            console.log(`${currentPlaceOfClimber}`)
            return;
        }
        currentPlaceOfClimber += currentMeters

        if (currentPlaceOfClimber >= 8848) {
            console.log(`Goal reached for ${nights + 1} days!`)
            return;
        }

        index += 2
        yesOrNo = input[index - 1]
        currentMeters = Number(input[index])


    }
    console.log("Failed!")
    console.log(`${currentPlaceOfClimber}`)
}
everest(["Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"])
everest(["Yes",
    "1000",
    "Yes",
    "945",
    "No",
    "1200",
    "END"])
    everest(["Yes",
    "535",
    "Yes",
    "849",
    "Yes",
    "499",
    "Yes",
    "400",
    "Yes",
    "500"])
    