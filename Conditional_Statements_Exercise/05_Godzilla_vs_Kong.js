function gVsK(input){

let filmBudget = Number(input[0])
let statistCount = Number(input[1])
let clothingPrice = Number(input[2])

let decor = filmBudget * 0.10
let clothingTotal = statistCount * clothingPrice


if (statistCount > 150) {
    clothingTotal *= 0.90
   }

let totalCost = decor + clothingTotal;

if (totalCost > filmBudget){
    console.log("Not enough money!")
    console.log(`Wingard needs ${(totalCost - filmBudget).toFixed(2)} leva more.`)
} else {
    console.log(`Action!`)
    console.log(`Wingard starts filming with ${(filmBudget - totalCost).toFixed(2)} leva left.`)
}
}

gVsK(["15437.62","186","57.99"])
