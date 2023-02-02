function multiplyByTwo(input) {

    let num = input.length


    for (let i = 0; num > i; i++) {
        let number = input[i]
        if (number >= 0) {
            console.log(`Result: ${(number * 2).toFixed(2)}`)
        } else {
            console.log("Negative number!")
        }
    }

}
multiplyByTwo([5999])