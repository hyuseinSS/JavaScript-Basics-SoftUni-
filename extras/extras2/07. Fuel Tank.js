function fuelTank(input) {

    let typeOfFuel = String(input[0])
    let litres = Number(input[1]);


    if (typeOfFuel != "Gas" && typeOfFuel != "Gasoline" && typeOfFuel != "Diesel") {
        console.log("Invalid fuel!")
    }
    else if (litres >= 25) {
        console.log(`You have enough ${typeOfFuel.toLowerCase(typeOfFuel)}.`)
    } else if (litres <= 25) {
        console.log(`Fill your tank with ${typeOfFuel.toLowerCase(typeOfFuel)}!`)
    }


}
fuelTank(["Diesel", 10])
fuelTank(["Gasoline", 40])
fuelTank(["Gas", 25])
fuelTank(["Keresone", 200])
// Напишете програма, която познава дали резервоара на едно превозно средство има нужда от презареждане на горивото или не.
// От конзолата се четат два реда – текст и реално число, на първия ред се чете типа на
// горивото – текст с възможности: "Diesel", "Gasoline" или "Gas", а на втория литрите гориво, които има в резервоара.
//  Ако литрите гориво са повече или равни на 25, на конзолата да се отпечата "You have enough {вида на горивото}.",
//   ако са по-малко от 25, да се отпечата "Fill your tank with {вида на горивото}!".
// В случай, че бъде въведено гориво, различно от посоченото, да се отпечата "Invalid fuel!".