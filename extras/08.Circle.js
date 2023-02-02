function circle(input){

let radius = Number(input[0])
let totalRadius = Number(Math.PI * (2 * radius))
let areaOfCircle = (Math.PI * radius * radius )

console.log(areaOfCircle.toFixed(2))
console.log(totalRadius.toFixed(2))


}


circle([3])