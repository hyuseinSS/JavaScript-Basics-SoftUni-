function foodDelivery(input){
let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegMenu = Number(input[2]);
let delivery = 2.50;
let chickenPrice = 10.35;
let fishPrice = 12.40;
let vegPrice = 8.15;

let totalPrice = chickenMenu *  chickenPrice + fishMenu * fishPrice + vegMenu * vegPrice;

let dessert = totalPrice* 0.20;
let finalTotalPrice = totalPrice + dessert + delivery;
console.log(finalTotalPrice);
}

foodDelivery(['2','4','3']);