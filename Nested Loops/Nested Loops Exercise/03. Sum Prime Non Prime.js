function primeNonPrime(input) {



    let index = 0
    let currentNumber = input[index]
    let nonPrimesCount = 0
    let primesCount = 0
    let test = 0
    let isPrime = true

    while (currentNumber !== "stop") {

        currentNumber = Number(input[index])

        for (let i = 2; i <= (currentNumber - 1); i++) {
            isPrime = true
            let test = currentNumber % i
            if (currentNumber % i == 0) {
                isPrime = false
                break;
            }
        }

        if (currentNumber < 0) {
            console.log("Number is negative.")

        }
        else if (isPrime == false) {
            nonPrimesCount += currentNumber
        } else {
            primesCount += currentNumber
        }


        index++
        currentNumber = input[index]
    }
    console.log(`Sum of all prime numbers is: ${primesCount}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimesCount}`)

}
primeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
// primeNonPrime(["30",
//     "83",
//     "33",
//     "-1",
//     "20",
//     "stop"])
//     primeNonPrime(["0",
//     "-9",
//     "0",
//     "stop"])