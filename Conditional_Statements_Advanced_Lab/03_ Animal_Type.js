function solve(input) {


    let aType = input[0]

    switch (aType) {
        case "dog": console.log("mammal"); break;
        case "snake": console.log("reptile"); break;
        default: console.log("unknown"); break;
        case "tortoise": console.log("reptile"); break;
        case "crocodile": console.log("reptile"); break;
    }
}

solve(["dog"])
solve(["snake"])
solve(["cat"])
solve(["tortoise"])