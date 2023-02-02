function evenPowersOf2(input) {


    let number = Number(input[0])
    let num = 0;

    for (let i = 0; i <= number; i += 2) {
        num = Math.pow(2, i)
        console.log(num)
    }

}
evenPowersOf2(["12"])