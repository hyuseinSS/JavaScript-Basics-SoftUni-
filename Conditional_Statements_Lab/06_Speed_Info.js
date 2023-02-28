function speed(input) {

    let num1 = Number(input[0]);

    if (Number(num1 <= 10)) {
        console.log("slow")
    } else if (Number(num1 <= 50)) {
        console.log("average")
    } else if (Number(num1 <= 150)) {
        console.log("fast")
    } else if (Number(num1 <= 1000)) {
        console.log("ultra fast")
    }
    else { console.log("extremely fast") }

}
speed(["5"])
speed(["55"])
speed(["44"])
speed(["1001"])