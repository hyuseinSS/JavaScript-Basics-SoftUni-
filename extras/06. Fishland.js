function fishland(input){

let skumriqPrice = Number(input[0]);
let cacaPrice = Number(input[1]);
let KGofPalamud = Number(input[2]) * (skumriqPrice +(skumriqPrice * 0.60))
let kGOfSafrid = Number(input[3]) * (cacaPrice + (cacaPrice * 0.80)); 
let kgOfMida = Number(input[4]) * 7.50;

let total = kgOfMida + kGOfSafrid + KGofPalamud;

console.log(total.toFixed(2))
}
fishland([6.90,4.20,1.5,2.5,1])
// ⦁	Паламуд – 60% по-скъп от скумрията
// ⦁	Сафрид – 80% по-скъп от цацата
// ⦁	Миди – 7.50 лв. за килограм
