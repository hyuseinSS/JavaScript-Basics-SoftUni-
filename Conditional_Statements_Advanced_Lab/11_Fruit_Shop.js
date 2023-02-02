function fruitShop(input) {

    let product = input[0]
    let day = input[1]
    let quantity = Number(input[2]);
    let isProduct = input[0]

    let isDayTrue = true
    let isProductTrue = true


    if (day == "Saturday" || day == "Sunday") {
        switch (product) {

            case "banana": product = 2.70
                break;
            case "apple": product = 1.25
                break
            case "orange": product = 0.90
                break
            case "grapefruit": product = 1.60
                break
            case "kiwi": product = 3.00
                break;
            case "pineapple": product = 5.60
                break;
            case "grapes": product = 4.20
                break;
        }
    } else {
        switch (product) {
            case "banana": product = 2.50
                break;
            case "apple": product = 1.20
                break
            case "orange": product = 0.85
                break
            case "grapefruit": product = 1.45
                break
            case "kiwi": product = 2.70
                break;
            case "pineapple": product = 5.50
                break;
            case "grapes": product = 3.85
                break;
        }
    }
    let total = quantity * product;

    if (isProduct == "apple" || isProduct == "grapes" || isProduct == "banana" || isProduct == "orange" || isProduct == "grapefruit" || isProduct == "pineapple" || isProduct == "kiwi") {
        isProductTrue = true
    }
    else {
        isProductTrue = false
    }

    if (day == "Monday" || day == "Tuesday" || day == "Thursday" || day == "Wednesday" || day == "Friday" || day == "Saturday" || day == "Sunday") {
        isDayTrue = true
    }
    else {
        isDayTrue = false
    }

    if (isDayTrue == true && isProductTrue == true) {
        console.log(total.toFixed(2))
    }
    else {
        console.log("error")

    }
}

fruitShop(["tomato",
    "Monday",
    "0.5"])

