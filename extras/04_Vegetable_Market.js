function vegetableMarket(input) {

    let priceOfVeggiesPerKG = Number(input[0]);
    let priceOfFruitsPerKG = Number(input[1]);
    let totalKGofVeggies = Number(input[2]);
    let totalKGofFruits = Number(input[3]);
    let total = (priceOfFruitsPerKG * totalKGofFruits) + (priceOfVeggiesPerKG * totalKGofVeggies);





    console.log((total / 1.94).toFixed(2))
}
vegetableMarket([0.194,19.4,10,10])