function histogram(input) {

    let n = Number(input[0])
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i])

        if (num < 200) {
            p1++
            continue;
        }
        else if (num < 400) {
            p2++
            continue;
        }
        else if (num < 600) {
            p3++
            continue;
        }
        else if (num < 800) {
            p4++
            continue;
        }
        else {
            p5++
            continue;
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`)
    console.log(`${(p2 / n * 100).toFixed(2)}%`)
    console.log(`${(p3 / n * 100).toFixed(2)}%`)
    console.log(`${(p4 / n * 100).toFixed(2)}%`)
    console.log(`${(p5 / n * 100).toFixed(2)}%`)
}
histogram(["3", "1", "2", "999"])
