function catDiet(input) {

    let percentOfFats = Number(input[0]) / 100
    let proteinsPercent = Number(input[1]) / 100
    let carbohydratesPercent = Number(input[2]) / 100
    let totalCalories = Number(input[3])
    let percentWater = Number(input[4]) / 100

    let caloriesOfFood = 0

    let totalProteins = totalCalories * proteinsPercent / 4
    let totalCarbohydrates = totalCalories * carbohydratesPercent / 4
    let totalFats = totalCalories * percentOfFats / 9
    let weightOfFood = totalCalories / (totalProteins + totalCarbohydrates + totalFats)
    let  grandTotal = weightOfFood  - (weightOfFood * percentWater)



    console.log(grandTotal.toFixed(4))

}
catDiet(["20",
"60",
"20",
"1800",
"50"])
