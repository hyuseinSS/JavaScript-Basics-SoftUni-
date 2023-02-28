function bulding(input) {


    let index = 0
    let stories = Number(input[index])
    index++
    let roomsPerFloor = Number(input[index])
    let finalNum = ""

    for (let i = stories; 1 <= i; i--) {

        for (let c = 0; c < roomsPerFloor; c++) {
            {
                if (i == stories) {
                    finalNum += `L${i}${c} `
                }
                else if (i % 2 == 1)
                    finalNum += (`A${i}${c} `)
                else if (i % 2 == 0)
                    finalNum += (`O${i}${c} `)

            }
        }
        if (i == stories) {
            console.log(`${finalNum}`)
            finalNum = ""
        }
        else if (i % 2 == 1) {
            console.log(finalNum)
            finalNum = ''
        }
        else {
            console.log(finalNum)
            finalNum = ''
        }
    }
}
// bulding(["6", "4"])
bulding(["9", "5"])
