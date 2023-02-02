function matchTickets(input) {

    let budget = Number(input[0])
    let category = input[1];
    let peopleCount = Number(input[2]);

    let transport = 0
    let ticketPrice = 0
    let totalTicketSum = peopleCount * ticketPrice
  

    if (category == "Normal") {
        ticketPrice = 249.99;
    } else if (category == "VIP") {
        ticketPrice = 499.99;
    }

    if (peopleCount >= 1 && peopleCount <= 4) {
        transport = budget * 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transport = budget * 0.60;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transport = budget * 0.50;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transport = budget * 0.40;
    }
    else if (peopleCount >= 50) {
        transport = budget * 0.25;
    }
    let budgetSum1 = (budget - transport) - (ticketPrice * peopleCount)
     if (budget - transport >= (ticketPrice * peopleCount)) {
        console.log(`Yes! You have ${budgetSum1.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${Math.abs(budgetSum1).toFixed(2)} leva.`)
    }
}
matchTickets([1000, "Normal", 1])
matchTickets([30000, "VIP", 49])
