function moving(input) {

    let widthOfRoom = Number(input[0])
    let lengthtOfRoom = Number(input[1])
    let heightOfRoom = Number(input[2])
    let sizeOfBoxes = Number(input[3])
    let totalRoomSpace = widthOfRoom * heightOfRoom * lengthtOfRoom;
    let i = 3
    let totalOccupiedByBoxes = 0

    while (true) {

        let currentBox = input[i]
        i++

        if (currentBox == "Done") {
            console.log(`${totalRoomSpace - totalOccupiedByBoxes} Cubic meters left.`)
            break;
        }
        else if (totalOccupiedByBoxes >= totalRoomSpace) {

            console.log(`No more free space! You need ${totalOccupiedByBoxes - totalRoomSpace} Cubic meters more.`)
            break;
        }
        else {
            currentBox = Number(currentBox)
            totalOccupiedByBoxes += currentBox
            continue
        }
    }

}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])