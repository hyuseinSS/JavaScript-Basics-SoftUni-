function sumOfTwoNumbers(input) {


  let intervalStart = Number(input[0])
  let intervalEnd = Number(input[1])
  let targetNumber = Number(input[2])
  let comboCounter = 0
  let num1 = 0;
  let num2 = 0;

  for (num1 = intervalStart; num1 <= intervalEnd; num1++) {

    for (num2 = intervalStart; num2 <= intervalEnd; num2++) {
      comboCounter++
      if (num1 + num2 !== targetNumber) {
        continue;
      } else {
        console.log(`Combination N:${comboCounter} `)
        console.log(`(${num1} + ${num2} = ${targetNumber})`)
        break;
      }
    }
    if (num1 + num2 == targetNumber) {
      break;
    }

  }
  if (num1 + num2 !== targetNumber) {
    console.log(`${comboCounter} combinations - neither equals ${targetNumber}`)
  }
}
