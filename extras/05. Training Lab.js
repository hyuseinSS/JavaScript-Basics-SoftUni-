function trainingLab(input){


let widthOfRoom = Number(input[0]) * 100;
let height = Number(input[1]) * 100;

let corridorWidth = 100;
let workSpaceWidth = 70;
let workSpaceHeight = 120;
let cathedraAndDoor = 3
let heightUsedForWork = Math.round((height - workSpaceHeight) / workSpaceWidth);
let roomHeigthLeft = (height - corridorWidth) - (heightUsedForWork * workSpaceWidth)
let widthUsedForWork = Math.floor(widthOfRoom / workSpaceHeight)
let roomWidthLeft = widthOfRoom - (workSpaceHeight * widthUsedForWork)

let totalSittings = widthUsedForWork * heightUsedForWork;

    // console.log(widthOfRoom.toFixed(2))
    // console.log(height.toFixed(2))
    // console.log(height - corridorWidth)
    // console.log(heightUsedForWork)
    // console.log(roomHeigthLeft)
    // console.log(widthUsedForWork)
    // console.log(roomWidthLeft)
    console.log((totalSittings - cathedraAndDoor).toFixed(2))
}
trainingLab([8.4,5.2])
trainingLab([15,8.9])
// Залата е широка 520 cm. От тях 100 cm отиват за коридора в средата.
//  В останалите 420 cm могат да се разположат по 6 бюра на ред (6 * 70 cm = 420 cm, без остатък).
// Залата е дълга 840 cm. В тях могат да бъдат разположени 7 реда (7 * 120 cm = 840, без остатък).
// Брой места = 7 * 6 - 3 =  42 - 3 = 39 (имаме 7 реда по 6 места = 42 минус 3 места за катедра и входна врата).