function housePainting(input){


let x = Number(input[0])
let y = Number(input[1])
let h = Number(input[2])

let windows = 1.5 * 1.5 * 2;
let sideWall = (x * y * 2) - windows
let backWall = x * x;
let frontWall = x * x;
let door = 1.2 * 2;
let rectangles = (x * y )* 2
let roofTriangle = 2 * (x * h /2);
let totalRoomForWalls = (((backWall + frontWall) - door) + sideWall)
let totalRoomForRoof = (rectangles + roofTriangle)
let RedPaintForRoof = totalRoomForRoof / 4.3;
let GreenPaintForRoof = totalRoomForWalls / 3.4;

console.log(GreenPaintForRoof.toFixed(2))
console.log(RedPaintForRoof.toFixed(2))
}

housePainting([6,10,5.2])
// Двата правоъгълника на покрива – 2 * (6*10) = 120
// Двата триъгълниците – 2 * (6*5.2 / 2) = 2 * 15.6 = 31.2
// ОБЩА ПЛОЩ: 120 + 31.2 = 151.2 м2

