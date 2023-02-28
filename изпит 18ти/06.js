function table(input) {

    let num = input[0]


    let third = Number(num.charAt(2))
    let second = Number(num.charAt(1))
    let first = Number(num.charAt(0))

    for (let i = 1; i <= third; i++) {
        for (let j = 1; j <= second; j++) {
            for (let o = 1; o <= first; o++) {
                let total = i * j * o

                console.log(`${i} * ${j} * ${o} = ${total};`)
            }

        }
    }

}
table(["324"])