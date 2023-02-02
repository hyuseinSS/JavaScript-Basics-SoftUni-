function readText(input) {

    let i = 0

    while (true) {
        let currentName = input[i]
        if (currentName == "Stop") {
            break;
        }
        console.log(currentName)
        i++
    }
}
readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
