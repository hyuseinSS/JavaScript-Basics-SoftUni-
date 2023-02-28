function santa(input) {


    let days = Number(input[0])
    let typeOfAccomodation = input[1]
    let grade = input[2]

    let nights = days - 1


    let priceOfRoomForOne = 18 * nights
    let priceOfPresidentApartment = 35 * nights
    let apartment = 25 * nights

    if (typeOfAccomodation == "apartment") {

        if (nights < 10) {
            apartment *= 0.70
        } else if (nights > 10 && nights < 15) {
            apartment *= 0.65
        } else if (nights > 15) {
            apartment *= 0.50
        }

    }
    if (typeOfAccomodation == "president apartment") {
        if (nights < 10) {
            priceOfPresidentApartment *= 0.90
        } else if (nights > 10 && nights < 15) {
            priceOfPresidentApartment *= 0.85
        } else if (nights > 15) {
            priceOfPresidentApartment *= 0.80
        }
    }
    if (grade == "positive") {
        apartment *= 1.25
        priceOfPresidentApartment *= 1.25
        priceOfRoomForOne *= 1.25
    }
    else {
        apartment *= 0.90
        priceOfPresidentApartment *= 0.90
        priceOfRoomForOne *= 0.90
    }

    if (typeOfAccomodation == "apartment") {

        console.log(apartment.toFixed(2))
    }
    else if (typeOfAccomodation == "president apartment") {

        console.log(priceOfPresidentApartment.toFixed(2))

    } else {

        console.log(priceOfRoomForOne.toFixed(2))

    }

}
santa(["14",
    "apartment",
    "positive"])
santa(["30",
    "president apartment",
    "negative"])