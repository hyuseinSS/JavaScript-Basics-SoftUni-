function newhouse(input) {
    let flowers = input[0];
    let flowersnumber = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0
    switch (flowers) {
        case "Roses": price = 5; break;
        case "Dahlias": price = 3.80; break;
        case "Tulips": price = 2.80; break;
        case "Narcissus": price = 3; break;
        case "Gladiolus": price = 2.50; break
    }
    let total = flowersnumber * price
    if (flowers == "Roses" && flowersnumber > 80) {
        total *= 0.90;
    } else if (flowers == "Dahlias" && flowersnumber > 90) {
        total *= 0.85;
    } else if (flowers == "Tulips" && flowersnumber > 80) {
        total *= 0.85;
    } else if (flowers == "Narcissus" && flowersnumber < 120) {
        total *= 1.15;
    } else if (flowers == "Gladiolus" && flowersnumber < 80) {
        total *= 1.20;
    }
if (total <= budget){
    console.log(`Hey, you have a great garden with ${flowersnumber} ${flowers} and ${(budget - total).toFixed(2)} leva left.`)}
    else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)}
        
}
newhouse(["Roses", "55", "250"])
newhouse(["Tulips","88","260"])
newhouse(["Narcissus","119","360"])




