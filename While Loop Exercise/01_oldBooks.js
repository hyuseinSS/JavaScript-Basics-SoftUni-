function oldBooks(input) {


    let book = input[0]



    let i = 1

    let currentBook = ""

    while (true) {
        let currentBook = input[i]

        if (currentBook == "No More Books") {
            console.log("The book you search is not here!")
            console.log(`You checked ${i - 1} books.`)
            break
        }


        else if (currentBook == book) {
            console.log(`You checked ${i - 1} books and found it.`)
            break;
        } else (
            i++
        )

    }
}

oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
