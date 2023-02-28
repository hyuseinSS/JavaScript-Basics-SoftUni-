function solve(input) {
    let index = 0;
    let command = input[index];
    index++;
    let alltickets = 0;
    let studentcount = 0;
    let standardcount = 0;
    let kidcount = 0;
    while (command != "Finish") {
        let movie = command;
        let freeplace = Number(input[index]);
        index++;
        let tickettype = input[index];
        index++;
        let student = 0;
        let standard = 0;
        let kid = 0;
        let totaltickets = 0;

        while (tickettype != "End") {
            if (tickettype == "student") {
                student++;
                studentcount++;
            } else if (tickettype == "standard") {
                standard++;
                standardcount++;
            } else if (tickettype == "kid") {
                kid++;
                kidcount++
            }

            totaltickets++;
            alltickets++;

            if (totaltickets >= freeplace) {
                break;
            }
            tickettype = input[index]
            index++;
        }
        console.log(`${movie} - ${((totaltickets / freeplace) * 100).toFixed(2)}% full.`)
        command = input[index];
        index++;

    }
    console.log(`Total tickets: ${alltickets}`);
    console.log(`${((studentcount / alltickets) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standardcount / alltickets) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidcount / alltickets) * 100).toFixed(2)}% kids tickets.`)
}
solve(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])