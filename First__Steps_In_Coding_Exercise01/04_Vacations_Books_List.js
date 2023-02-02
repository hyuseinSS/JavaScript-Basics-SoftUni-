function vacationBooks(input){
let totalPages = Number(input[0]); //212
let pagesPerHour = Number(input[1]); //20
let days = Number(input[2]);


let totalHours = totalPages / pagesPerHour;
let hoursPerDay = totalHours / days ;
console.log(hoursPerDay);

}
//vacationBooks(["212","20","2"]); 
//vacationBooks(["432","15","4"]);