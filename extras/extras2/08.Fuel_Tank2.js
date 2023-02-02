function fuelTank(input) {

    let typeOfFuel = (input[0])
    let fuelCount = Number(input[1])
    let clubCard = input[2]

    let benz95Price = 0
    let dieselPrice = 0
    let gasPrice = 0

    if (clubCard == "Yes") {
        benz95Price = 2.04;
        dieselPrice = 2.21;
        gasPrice = 0.85
    } else if (clubCard == "No") {
        benz95Price = 2.22;
        dieselPrice = 2.33;
        gasPrice = 0.93;
    } if (fuelCount <= 25 && fuelCount >= 20) {
        totalSum = totalSum - (totalSum * 0.08);
    }
    if (typeOfFuel == "Gas" && fuelCount <= 25 && fuelCount >= 20) {
        console.log(((gasPrice * fuelCount) - (gasPrice * fuelCount) * 0.08).toFixed(2) + " lv.")
    } else if (typeOfFuel == "Gas" && fuelCount > 25) {
        console.log(((gasPrice * fuelCount) - (gasPrice * fuelCount) * 0.10).toFixed(2) + " lv.")
    } else if (typeOfFuel == "Gas") {
        console.log((dieselPrice * fuelCount).toFixed(2) + " lv.")
    } if (typeOfFuel == "Gasoline" && fuelCount <= 25 && fuelCount >= 20) {
        console.log(((benz95Price * fuelCount) - (benz95Price * fuelCount) * 0.08).toFixed(2) + " lv.")
    } else if (typeOfFuel == "Gasoline" && fuelCount > 25) {
        console.log(((benz95Price * fuelCount) - (benz95Price * fuelCount) * 0.10).toFixed(2) + " lv.")
    } else if (typeOfFuel == "Gasoline") {
        console.log((benz95Price * fuelCount).toFixed(2) + " lv.")
    } if (typeOfFuel == "Diesel" && fuelCount <= 25 && fuelCount >= 20) {
        console.log(((dieselPrice * fuelCount) - (dieselPrice * fuelCount) * 0.08).toFixed(2) + " lv.")
    } else if (typeOfFuel == "Diesel" && fuelCount > 25) {
        console.log(((dieselPrice * fuelCount) - (dieselPrice * fuelCount) * 0.10).toFixed(2) + " lv.")
    } else if (typeOfFuel == "Diesel") {
        console.log((dieselPrice * fuelCount).toFixed(2) + " lv.")
    }
}
fuelTank(["Gas", 30, "Yes"])
fuelTank(["Gasoline", 25, "No"])
fuelTank(["Diesel", 19, "No"])