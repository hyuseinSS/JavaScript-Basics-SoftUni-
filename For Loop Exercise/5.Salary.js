function salary(input) {

    let openPages = Number(input[0])
    let salaryAmount = Number(input[1])

    let fine = 0
    

    for (let i = 0; input.length >= i; i++) {

        let currentPage = input[i]

        if (currentPage === "Facebook") {
            fine += 150;
            continue;
        }
        else if (currentPage === "Instagram") {
            fine += 100;
            continue;
        }
        else if (currentPage === "Reddit") {
            fine += 50;
            continue;
        }
    }
    let salaryLeft = salaryAmount - fine
    if (salaryLeft <= 0) {
        console.log("You have lost your salary.")
        

    }
    else {
        console.log(salaryAmount - fine)

    }
}
salary([
    "10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"
])