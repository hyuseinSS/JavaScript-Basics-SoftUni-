function skiTrip(input) {


    let days = Number(input[0])
    let typeOfAccomodation = input[1]
    let grade = input[2]

    let nights = days - 1


    let roomForOne = 18 * nights
    let presidentApartment = 35 * nights
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
            presidentApartment *= 0.90
        } else if (nights > 10 && nights < 15) {
            presidentApartment *= 0.85
        } else if (nights > 15) {
            presidentApartment *= 0.80
        }
    }
    if (grade == "positive") {
        apartment *= 1.25
        presidentApartment *= 1.25
        roomForOne *= 1.25
    }
    else {
        apartment *= 0.90
        presidentApartment *= 0.90
        roomForOne *= 0.90
    }

    if (typeOfAccomodation == "apartment") {

        console.log(apartment.toFixed(2))
    }
    else if (typeOfAccomodation == "president apartment") {

        console.log(presidentApartment.toFixed(2))

    } else {

        console.log(roomForOne.toFixed(2))

    }

}
skiTrip(["14", "apartment", "positive"])
skiTrip(["30",
    "president apartment",
    "negative"])
skiTrip(["12",
    "room for one person",
    "positive"])
skiTrip(["2",
    "apartment",
    "positive"])