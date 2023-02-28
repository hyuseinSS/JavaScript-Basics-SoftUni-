function equalSumsEvenOddPos(input) {

    let index = 0
    let intervalStart = input[index]
    index++
    let intervaclEnd = input[index]
    let currentConcText = ''

    for (let currentNumber = intervalStart; currentNumber <= intervaclEnd; currentNumber++) {

        currentNumber = currentNumber + ""

        let firstChar = Number(currentNumber.charAt(0))
        let secondChar = Number(currentNumber.charAt(1))
        let thirdChar = Number(currentNumber.charAt(2))
        let fourthChar = Number(currentNumber.charAt(3))
        let fifthChar = Number(currentNumber.charAt(4))
        let sixthChar = Number(currentNumber.charAt(5))
        let unevenTotal = firstChar + thirdChar + fifthChar
        let evenTotal = secondChar + fourthChar + sixthChar



        if (unevenTotal == evenTotal) {

            currentConcText += `${currentNumber} `

        }

    }
    console.log(currentConcText)


}

equalSumsEvenOddPos(["100000", "100050"])