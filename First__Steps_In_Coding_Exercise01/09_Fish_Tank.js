function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3] / 100)

    let total = length * width * height / 1000;
    let finalSum = total - (total * percent )

    console.log(finalSum)
}

fishTank(["85", "75", "47", "17"])
fishTank(["105", "77", "89", "18.5"])