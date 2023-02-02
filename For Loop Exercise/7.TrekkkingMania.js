function trekkingMania(input) {

    let climbersGroupCount = Number(input[0])
    let climbersCount = Number(input[1])

    let musala = 0
    let montblanc = 0
    let kiliMJ = 0
    let k2 = 0;
    let everest = 0;
    let totalClimbers = 0

    for (let i = 1; i <= climbersGroupCount; i++) {
        climbersCount = Number(input[i])
        
        if (climbersCount <= 5) {
            musala += climbersCount
            totalClimbers += climbersCount
        }
        else if (climbersCount <= 12) {
            montblanc += climbersCount
            totalClimbers += climbersCount
        }
        else if (climbersCount <= 25) {
            kiliMJ += climbersCount
            totalClimbers += climbersCount
        }
        else if (climbersCount <= 40) {
            k2 += climbersCount
            totalClimbers += climbersCount
        }
        else if (climbersCount >= 41) {
            everest += climbersCount
            totalClimbers += climbersCount
        }

    }
    console.log(`${(musala / totalClimbers * 100).toFixed(2)}%`)
    console.log(`${(montblanc / totalClimbers * 100).toFixed(2)}%`)
    console.log(`${(kiliMJ / totalClimbers * 100).toFixed(2)}%`)
    console.log(`${(k2 / totalClimbers * 100).toFixed(2)}%`)
    console.log(`${(everest / totalClimbers * 100).toFixed(2)}%`)
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])