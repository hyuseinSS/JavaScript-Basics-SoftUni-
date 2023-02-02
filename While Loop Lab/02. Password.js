function password(input) {

    let username = input[0]
    let password = input[1]
    let inputPassword = input[2]
    let i = 2

    while (true) {
        let currentPassword = input[i]

        if (password == currentPassword) {
            console.log(`Welcome ${username}!`)
            break;
        }
        i++
    }

}
password(["Gosho","secret","secret"])