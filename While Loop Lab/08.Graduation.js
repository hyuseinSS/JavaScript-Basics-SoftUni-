function graduation(input) {

    let name = input[0];
    let grade = Number(input[1])
    let klas = 1
    let averageNumber = 0

    for (let i = 1; i <= input.length; i++) {
        let currentNumber = Number(input[i])

        if (currentNumber < 4) {
            console.log(`${name} has been excluded at ${klas} grade`)
            break;
        }
        else if (currentNumber >= 4) {
            klas++
            averageNumber += currentNumber
        }
        else {
            console.log(`${name} graduated. Average grade: ${(averageNumber / 12).toFixed(2)}`)
        }
    }


}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])