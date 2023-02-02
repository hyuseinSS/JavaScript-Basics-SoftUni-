function pets(input){


let days = Number(input[0])
let foodAmountLeft = Number(input[1])
let foodForDog = Number(input[2])
let foodForCat = Number(input[3])
let foodForTurtle = Number(input[4]) / 1000
 

let foodTotalConsumed = (foodForCat + foodForDog + foodForTurtle) * days;
let foodLeft = (foodAmountLeft - foodTotalConsumed)


if (foodAmountLeft >= foodTotalConsumed){
    console.log(`${Math.floor(foodLeft)} kilos of food left.`)
} else {
    console.log(`${Math.ceil(foodTotalConsumed - foodAmountLeft)} more kilos of food are needed.`)
}

}
pets([2,10,1,1,1200])
pets([5,10,2.1,0.8,321])
// От конзолата се четат пет реда:
// Първи ред – брой дни – цяло число в интервал [1…5000]
// Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
// Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
// Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
// Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]
