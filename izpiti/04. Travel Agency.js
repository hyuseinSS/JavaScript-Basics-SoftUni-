function travelAgency(input) {

    let nameOfTown = input[0]
    let packageType = input[1]
    let isVip = input[2]
    let days = Number(input[3])
    let priceOfService = 0
    let vipDiscount = 0
    let isDestinationValid = false;
    let daysValid = true
    let isPackageValid = false

    if (days < 1) {
        daysValid = false
    }
    if (days > 7) {
        days--
    }

    if (nameOfTown == "Bansko" || nameOfTown == "Borovets") {
        isDestinationValid = true
        if (packageType == "withEquipment") {
            if (isVip == "yes") {
                vipDiscount = 0.90
            }
            priceOfService = 100.00;
            isPackageValid = true
        } else if (packageType == "noEquipment") {
            if (isVip == "yes") {
                vipDiscount = 0.95
            }
            priceOfService = 80.00
            isPackageValid = true
        }

    }
    else if (nameOfTown == "Varna" || nameOfTown == "Burgas") {
        isDestinationValid = true
        if (packageType == "withBreakfast") {
            if (isVip == "yes") {
                vipDiscount = 0.88
            }
            priceOfService = 130.00;
            isPackageValid = true
        } else if (packageType == "noBreakfast") {
            if (isVip == "yes") {
                vipDiscount = 0.93
            }
            priceOfService = 100.00
            isPackageValid = true

        }
    }


    let total = days * priceOfService

    if (isVip == "yes") {
        total = days * priceOfService * vipDiscount
    }
    else {
    }
    if (!isDestinationValid || !isPackageValid) {
        console.log(`Invalid input!`)
    }
    if (!daysValid) {
        console.log("Days must be positive number!")
    }
    if (isDestinationValid && daysValid && isPackageValid) {
        console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`)
    }
}
travelAgency(["Varna",
    "withBreakfast",
    "no",
    "9"])