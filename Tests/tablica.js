function specialNumbers(input) {

  let num = Number(input[0])
  let intervalStart = 1111
  let intervalEnd = 9999
  let currentNumber = 0
  let finalNumber = ''


  for (currentNumber = intervalStart; currentNumber <= intervalEnd; currentNumber++) {
      let isValid1 = false
      let isValid2 = false
      let isValid3 = false
      let isValid4 = false
      currentNumber += ""                //превръщаш currentNumber в стринг да не ти излиза грепка при използване на .charAt командата.
      let resultNumber = "" // ресетваш резултата всеки път

      let firstChar = Number(currentNumber.charAt(0))
      let secondChar = Number(currentNumber.charAt(1))
      let thirdChar = Number(currentNumber.charAt(2))
      let fourthChar = Number(currentNumber.charAt(3))


      if (num % firstChar == 0) {
          resultNumber += `${firstChar}`
          isValid1 = true
      }
      if (num % secondChar == 0) {
          resultNumber += `${secondChar}`
          isValid2 = true
      }
      if (num % thirdChar == 0) {
          resultNumber += `${thirdChar}`
          isValid3 = true
      }
      if (num % fourthChar == 0) {
          resultNumber += `${fourthChar} `
          isValid4 = true
      }

      if (isValid1 == true && isValid2 == true && isValid3 == true && isValid4 == true) {
          finalNumber += `${resultNumber}`
      }


  }
  console.log(finalNumber)
}

specialNumbers(["16"])