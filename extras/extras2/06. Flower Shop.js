function flowerShop(input) {



    let magnolia = Number(input[0]) * 3.25
    let hyacinth = Number(input[1]) * 4
    let roses = Number(input[2]) * 3.5
    let cactus = Number(input[3]) * 8
    let giftPrice = Number(input[4])

    let total = hyacinth + roses + cactus + magnolia;
    let tax = total * 0.05
    let finalSum = total - tax

    if (finalSum >= giftPrice) {
        console.log(`She is left with ${Math.floor(finalSum - giftPrice)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - finalSum)} leva.`)
    }

}
flowerShop([2, 3, 5, 1, 50])
flowerShop([15, 7, 5, 10, 100])
// На конзолата трябва да се отпечата един ред.
// Ако парите СА стигнали: "She is left with {останали} leva." – сумата трябва да е закръглена към по-малко цяло число (пр. 1.90 -> 1).
// Ако парите НЕ достигат: "She will have to borrow {останали} leva." – сумата трябва да е закръглена към по-голямо цяло число (пр. 1.10 -> 2).
