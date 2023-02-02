function pipesInPool(input) {

    let volume = Number(input[0])
    let pipe1 = Number(input[1])
    let pipe2 = Number(input[2])
    let hoursAway = Number(input[3])


    let pipe1Total = pipe1 * hoursAway;
    let pipe2Total = pipe2 * hoursAway;
    let total = pipe1Total + pipe2Total
    let percent1 = (pipe1Total / volume) * 100
    let percent2 = (pipe2Total / volume) * 100
    let totalPercentOfPipe1 = (pipe1Total / total) * 100
    let totalPercentOfPipe2 = (pipe2Total / total) * 100


    console.log(`The pool is ${(percent1 + percent2)}% full. Pipe 1: ${(totalPercentOfPipe1).toFixed(2)}%. Pipe 2:
 ${totalPercentOfPipe2.toFixed(2)}%.`)
}
pipesInPool([100, 100, 100, 2.5])