function sumNumbers(input) {

    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let i = 1
    let total = 0

    while (true) {
        currentNum = Number(input[i])
        total += currentNum
        if (total >= n1) {
            console.log(total)
            break;
        }
        i++
    }
}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])