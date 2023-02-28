function cinemaTickets(input) {

    let index = 0
    let freeSeats = Number(input[index])
    let currentCommand = input[index]
    let totalPeople = 0
    let studentTickets = 0
    let kidsTickets = 0
    let standardTickets = 0
    let ticketsSold = studentTickets + kidsTickets + standardTickets
    let totalTickets = 0
    let standardTotal = 0
    let kidsTotal = 0
    let studentTotal = 0
    let currentMovie = ''




    while (currentCommand !== "Finish") {


        currentMovie = input[index]
        index++
        freeSeats = input[index]
        index++
        currentCommand = input[index]
        index++
        let ticketsSold = studentTickets + kidsTickets + standardTickets

        while (currentCommand !== "End" || currentCommand !== "Finish") {

            if (ticketsSold >= freeSeats && (currentCommand == "student" || currentCommand == "standard" || currentCommand == "kid")) {

                index++
                continue

            }
            else if (ticketsSold >= freeSeats) {
                break;
            }
            if (currentCommand == "student") {
                studentTickets++
                studentTotal++

            }
            else if (currentCommand == "standard") {
                standardTickets++
                standardTotal++
            }
            else if (currentCommand == "kid") {
                kidsTickets++
                kidsTotal++
            } else {
                break;
            }
            ticketsSold = studentTickets + kidsTickets + standardTickets
            currentCommand = input[index]
            index++
        }
        ticketsSold = studentTickets + kidsTickets + standardTickets
        totalTickets += ticketsSold
        console.log(`${currentMovie} - ${(ticketsSold / freeSeats * 100).toFixed(2)}% full.`)
        studentTickets = 0
        kidsTickets = 0
        standardTickets = 0

    }
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentTotal / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTotal / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidsTotal / totalTickets * 100).toFixed(2)}% kids tickets.`)

}
cinemaTickets
    (["Shutter Island",
        "3",
        "standard",
        "standard",
        "standard",
        "student",
        "student",
        "student",
        "kid",
        "kid",
        "kid",
        "Rush",
        "9",
        "standard",
        "standard",
        "standard",
        "student",
        "student",
        "student",
        "kid",
        "kid",
        "kid",
        "Deadpool",
        "9",
        "standard",
        "standard",
        "standard",
        "student",
        "student",
        "student",
        "kid",
        "kid",
        "kid",
        "Finish"])
// cinemaTickets(["Taxi",
//     "10",
//     "standard",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "standard",
//     "End",
//     "Scary Movie",
//     "6",
//     "student",
//     "student",
//     "student",
//     "student",
//     "student",
//     "student",
//     "Finish"])
//     cinemaTickets(["The Matrix",
//     "20",
//     "student",
//     "standard",
//     "kid",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "The Green Mile",
//     "17",
//     "student",
//     "standard",
//     "standard",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "Amadeus",
//     "3",
//     "standard",
//     "standard",
//     "standard",
//     "Finish"])