function faceOfShape(input){

let b1 = Number(input[0]);
let b2 = Number(input[1]);
let h = Number(input[2]);

total = ((b1 + b2) * h) / 2 
   
console.log(total.toFixed(2));

}
faceOfShape(["8","13","7"])