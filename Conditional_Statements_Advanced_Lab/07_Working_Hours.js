function workingHours(input) {


    let hour = Number(input[0])
    let day = input[1]

    if (hour <= 18 && hour >= 10 && (day == "Monday" || day == "Tuesday" || day == "Thursday" || day == "Wednesday" || day == "Friday" || day == "Saturday")) {
        console.log("open")
    }
    else {
        console.log("closed")
    }
}
workingHours(["19", "Friday"])
