function hotelRoom(input) {

    let month = input[0]
    let nightsCount = Number(input[1])

    let studio = 0
    let apartment = 0
    let discountStudio = 0
    let discountApartment = 0

    if (month == "May" || month == "October") {
        studio = 50
        apartment = 65
    } else if (month == "June" || month == "September") {
        studio = 75.20
        apartment = 68.70
    } else if (month == "July" || month == "August") {
        studio = 76
        apartment = 77
    }
    if (nightsCount > 7 && nightsCount < 14 && (month == "May" || month == "October")) {
        discountStudio = 0.95
    } else if (nightsCount > 14 && (month == "May" || month == "October")) {
        discountStudio = 0.70
    } else if (nightsCount > 14 && (month == "June" || month == "September")) {
        discountStudio = 0.80
    }
    if (nightsCount > 14) {
        discountApartment = 0.90
    }

    let totalA = (nightsCount * apartment) * discountApartment
    let totalS = (nightsCount * studio) * discountStudio

    if (discountApartment == 0) {
        console.log(`Apartment: ${(nightsCount * apartment).toFixed(2)} lv.`)
    } else {
        console.log(`Apartment: ${totalA.toFixed(2)} lv.`)
    }
    if (discountStudio == 0) {
        console.log(`Studio: ${(nightsCount * studio).toFixed(2)} lv.`)
    } else {
        console.log(`Studio: ${totalS.toFixed(2)} lv.`)
    }


}
hotelRoom(["May", 0
    , "15"])

hotelRoom(["June",
    "14"])