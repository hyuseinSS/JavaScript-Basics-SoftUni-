function oscars(input) {

    let nameOfActor = input[0]
    let starterPoints = Number(input[1])
    let totalJudges = Number(input[2])

    for (let i = 0; totalJudges * 2 > i; i += 2) {
        let nameOfJudge = input[i + 3]
        let judgesPoints = Number(input[i + 4]);

        starterPoints += nameOfJudge.length * judgesPoints / 2
        if (starterPoints > 1250.5) {
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${starterPoints.toFixed(1)}!`)
            break;
        }
    }
    if (starterPoints <= 1250.5) {
        console.log(`Sorry, ${nameOfActor} you need ${(1250.5 - starterPoints).toFixed(1)} more!`)
        
    }
}
// oscars(["Zahari Baharov",
//     "205",
//     "4",
//     "Johnny Depp",
//     "45",
//     "Will Smith",
//     "29",
//     "Jet Lee",
//     "10",
//     "Matthew Mcconaughey",
//     "39"])
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])