function change(input) {


    let coinsLeft = Number(input[0]) * 100
    let coinCounter = 0
    while (coinsLeft > 0) {

        // coins = Math.round(coinsLeft)

        if (coinsLeft >= 200) {
            coinsLeft -= 200
            coinCounter++

        }
        else if (coinsLeft >= 100) {
            coinsLeft -= 100
            coinCounter++

        }
        else if (coinsLeft >= 50) {
            coinsLeft -= 50
            coinCounter++;

        }
        else if (coinsLeft >= 20) {
            coinsLeft -= 20
            coinCounter++;

        }
        else if (coinsLeft >= 10) {
            coinsLeft -= 10
            coinCounter++

        }
        else if (coinsLeft >= 5) {
            coinsLeft -= 5
            coinCounter++

        }
        else if (coinsLeft >= 2) {
            coinsLeft -= 2;
            coinCounter++

        }
        else if (coinsLeft >= 1) {
            coinsLeft -= 1
            coinCounter++
            break;

        }

    }

    console.log(coinCounter)
}
// change(["3"])