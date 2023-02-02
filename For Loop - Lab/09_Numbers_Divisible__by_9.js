function solve(input){

let num1 = Number(input[0])
let num2 = Number(input[1])
let result = 0
let output = ""

for(let i = num1; i <= num2;i++){
    if(i % 9 == 0){
        result += i;
        output += i + "\n"
    }
}
console.log(`The sum: ${result}`)
console.log(output)

}
solve(["100", "200"])