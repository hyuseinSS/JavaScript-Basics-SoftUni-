function examPrep(input) {


    let badGradesCount = Number(input[0])
    let nameOftest = input[1]
    let grade = Number(input[2])

    let badGradeCounter = 0

    let i = 1
    let a = 2
    let problemsCounter = 0
    let lastProblem = 0
    let avgScore = 0

    while (true) {

        let currentTest = input[i]
        let currentGrade = Number(input[a])

        if (currentTest == "Enough") {
            console.log(`Average score: ${(avgScore / problemsCounter).toFixed(2)}`)
            console.log(`Number of problems: ${problemsCounter}`)
            lastProblem -= 1
            console.log(`Last problem: ${input[lastProblem]}`)
            break
        }
        if (currentGrade <= 4) {
            badGradeCounter++

        }

        if (badGradeCounter == badGradesCount) {
            console.log(`You need a break, ${badGradesCount} poor grades.`)
            break;
        }

        i += 2
        a += 2
        problemsCounter++
        lastProblem += 2
        avgScore += currentGrade
    }

}
examPrep(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
examPrep(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])