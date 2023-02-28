function workout(input) {
    let index = 0
    let workoutDays = Number(input[index])
    index++
    let KMFirstDay = Number(input[index])
    index++
    let percent = Number(input[index]) / 100

    let totalSteps = KMFirstDay
    let grandTotal = 0
    let minimum = 1000
    for (let i = 1; i <= workoutDays; i++) {

        percent = Number(input[index]) / 100

        totalSteps += totalSteps * percent
        grandTotal += totalSteps
        index++


    }
    grandTotal = grandTotal + KMFirstDay
    
    if(minimum >= grandTotal){
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(minimum - grandTotal)} more kilometers`)
    }
    else {
        console.log(`You've done a great job running ${Math.ceil(grandTotal - minimum)} more kilometers!`)
    }
}
workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])
    workout(["4",
    "100",
    "30",
    "50",
    "60",
    "80"])