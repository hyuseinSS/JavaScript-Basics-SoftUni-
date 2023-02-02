function transportPrice(input) {

    let KmCount = Number(input[0]);
    let dayOrNight = input[1];
    let busPrice = 0.09
    let taxiPrice = 0
    let trainPrice = 0.06
    let taxiStartPrice = 0.70

    if (dayOrNight == "day"){
         taxiPrice = 0.79
}
    else if (dayOrNight == "night") {
    taxiPrice = 0.90
}
   if (KmCount >= 20 && KmCount < 100) {
    console.log((busPrice * KmCount).toFixed(2))
    
} else if (KmCount >= 100){
    console.log((trainPrice * KmCount).toFixed(2))
} else {
    console.log(((taxiPrice * KmCount) + taxiStartPrice).toFixed(2))
}
}
transportPrice([25, "day"])
transportPrice([180,"night"])
// Студент трябва да пропътува n километра. Той има избор измежду три вида транспорт:
// Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв. / км. Нощна тарифа: 0.90 лв. / км.
// Автобус. Дневна / нощна тарифа: 0.09 лв. / км. Може да се използва за разстояния минимум 20 км.
// Влак. Дневна / нощна тарифа: 0.06 лв. / км. Може да се използва за разстояния минимум 100 км.
// Напишете програма, която въвежда броя километри n и период от деня (ден или нощ) и изчислява цената на най-евтиния транспорт.
// Разстоянието е под 20 км  може да се ползва само такси. Началната такса е 0.70 лв.
//  Понеже е през деня, тарифата е 0.79 лв. / км. С такси цената е: 0.70 + 5 * 0.79 = 4.65 лв.
