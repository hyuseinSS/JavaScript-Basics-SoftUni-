function areaOfFigures(input) {

    let type = input[0];
    let x = Number(input[1]);
    let y = Number(input[2]);
    if (type === "square") {
        result = x * x;
    }
    else if (type === "circle") {
        result = Math.PI * Math.pow(x, 2)
    }
    else if (type === "rectangle") {
        result = (x * y)
    }
    else { result = x * y / 2; }

    console.log(result.toFixed(3))
}
areaOfFigures(["circle", "6"])
areaOfFigures(["square", "5"])
areaOfFigures(["rectangle", "7", "2.5"])