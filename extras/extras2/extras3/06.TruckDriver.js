function truckDriver(input){


let season = input[0]
let kmPerMonth = Number(input[1])

let pay = 0
let tax = 0.90

if (kmPerMonth <= 5000){
    if (season == "Spring" || season == "Autumn"){
        pay = 0.75
    } else if (season == "Summer"){
        pay = 0.90 
    } else if (season == "Winter")
    {pay = 1.05}
}
else if (kmPerMonth > 5000){
    if (season == "Spring" || season == "Autumn"){
        pay = 0.95;
    } else if (season == "Summer"){
        pay = 1.10
    } else if (season == "Winter")
    {pay = 1.25}
}
 if (kmPerMonth > 10000 && kmPerMonth < 20000){
    pay = 1.45;
}
console.log((((kmPerMonth * pay) * 4) * tax).toFixed(2))

}
truckDriver(["Summer",3455])
truckDriver(["Winter",16042])
truckDriver(["Winter",4350])