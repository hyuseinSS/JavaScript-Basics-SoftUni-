function ranklist(input) {

    let tournamentCount = Number(input[0])
    let starterPoints = Number(input[1])


    let totalPoints = 0;
    let w = 0

    for (let i = 0; i <= tournamentCount + 2; i++) {
        let result = input[i]
        if (result == "F") {
            totalPoints += 1200;
        }
        else if (result == "W") {
            totalPoints += 2000;
            w++
        }
        else if (result == "SF") { totalPoints += 720 }
    }
    console.log(`Final points: ${totalPoints + starterPoints}`)
    console.log(`Average points: ${Math.floor(totalPoints / tournamentCount)}`)
    console.log(`${(w / tournamentCount * 100).toFixed(2)}%`)
}
ranklist([
    "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
])