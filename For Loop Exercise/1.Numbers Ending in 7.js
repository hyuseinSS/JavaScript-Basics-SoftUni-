function numbersEndingIn7() {


    for (let i = 7; i <= 1000; i++) {
        let num = i % 10
        if (num === 7) {
            console.log(i)
        }
    }

}
numbersEndingIn7()