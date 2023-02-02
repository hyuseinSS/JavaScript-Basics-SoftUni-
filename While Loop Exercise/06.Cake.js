function cake(input) {

    let cakeWidth = Number(input[0])
    let cakeLength = Number(input[1])
    let wholeCakeSize = cakeLength * cakeWidth;
    let i = 2
    let cakePiecesCounter = 0


    while (true) {

        let currentAction = input[i]
        i++

        if (currentAction == "STOP") {
            if (cakePiecesCounter < wholeCakeSize) {
                console.log(`${wholeCakeSize - cakePiecesCounter} pieces are left.`)
            } else {
                console.log(`No more cake left! You need ${cakePiecesCounter - wholeCakeSize} pieces more.`)
            }
            break;
        }

        if (wholeCakeSize <= cakePiecesCounter) {
            console.log(`No more cake left! You need ${cakePiecesCounter - wholeCakeSize} pieces more.`)
            break;

        }
        else {
            currentAction = Number(currentAction)
            cakePiecesCounter += currentAction
        }
    }

}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])