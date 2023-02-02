function schoolCamp(input) {


    let season = input[0]
    let typeOfGroup = input[1]
    let studentCount = Number(input[2])
    let nights = Number(input[3])

    let girlsOrBoysPrice = 0
    let mixedPrice = 0
    let total = 0


    if (season == "Summer" && (typeOfGroup == "girls" || typeOfGroup == "boys")) {
        girlsOrBoysPrice = 15
    } else if (season == "Winter" && (typeOfGroup == "girls" || typeOfGroup == "boys")) {
        girlsOrBoysPrice = 9.60
    } else if (season == "Spring" && (typeOfGroup == "girls" || typeOfGroup == "boys")) {
        girlsOrBoysPrice = 7.20
    } else if (typeOfGroup == "mixed" && season == "Winter") {
        mixedPrice = 10
    } else if (typeOfGroup == "mixed" && season == "Spring") {
        mixedPrice = 9.50
    } else if (typeOfGroup == "mixed" && season == "Summer") {
        mixedPrice = 20
    }


    total = studentCount * ((girlsOrBoysPrice + mixedPrice) * nights)


    if (studentCount >= 50) {
        total *= 0.50
    }
    else if (studentCount < 50 && studentCount >= 20) {
        total *= 0.85;
    }
    else if (studentCount >= 10 && studentCount < 20) {
        total *= 0.95
    }

    let typeOfSport = ""

    if (typeOfGroup == "girls" && season == "Winter") {
        typeOfSport = "Gymnastics"
    } else if (typeOfGroup == "girls" && season == "Spring") {
        typeOfSport = "Athletics"
    } else if (typeOfGroup == "girls" && season == "Summer") {
        typeOfSport = "Volleyball"
    } else if (typeOfGroup == "boys" && season == "Winter") {
        typeOfSport = "Judo"
    } else if (typeOfGroup == "boys" && season == "Spring") {
        typeOfSport = "Tennis"
    } else if (typeOfGroup == "boys" && season == "Summer") {
        typeOfSport = "Football"
    } if (typeOfGroup == "mixed") {
        if (season == "Winter") {
            typeOfSport = "Ski"
        } if (season == "Spring") {
            typeOfSport = "Cycling"
        } else {
            typeOfSport = "Swimming"
        }
    }

    console.log(`${typeOfSport} ${total.toFixed(2)} lv.`)
}

schoolCamp(["Spring", "girls", 20, 7])
schoolCamp(["Winter", "mixed", 9, 15])
schoolCamp(["Summer", "boys", 60, 7])
schoolCamp(["Spring", "mixed", 17, 14])
schoolCamp(["Winter", "mixed", 20, 7])