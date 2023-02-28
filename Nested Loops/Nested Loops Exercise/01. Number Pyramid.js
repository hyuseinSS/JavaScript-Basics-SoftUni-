function numPyramid(input) {


    let num = Number(input[0])
    let currentLine = ""
    let rows = 0
    let cols = 0
    let number = 1
    let isBigger = false

    for (rows = 1; rows <= num; rows++) {
        for (cols = 1; cols <= rows; cols++) {
            if (number > num) {
                isBigger = true;
                break
            }
            currentLine += number + " "
            number++
        }
        console.log(currentLine)
        currentLine = ""
        if (isBigger) {
            break;
        }

    }


}

numPyramid(["7"])