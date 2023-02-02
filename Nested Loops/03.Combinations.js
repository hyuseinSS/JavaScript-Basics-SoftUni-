function combinations(input) {

    let number = Number(input[0])

    let comboCounter = 0

    for (let num1 = 0; num1 <= number; num1++) {

        for (let num2 = 0; num2 <= number; num2++) {

            for (let num3 = 0; num3 <= number; num3++)


                if (num1 + num2 + num3 == number) {
                    comboCounter++
                }
        }
    }
    console.log(comboCounter)
}
combinations([25])