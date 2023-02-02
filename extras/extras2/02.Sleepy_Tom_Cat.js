function tom(input){


let weekends = Number(input[0]);
let workDays = 365 - weekends;
let workPlaytime = 63;
let dayOffPlaytime = 127;
let seconds = ((workDays * workPlaytime) + (weekends * dayOffPlaytime))
let totalSeconds =((workDays * workPlaytime) + (weekends * dayOffPlaytime)) - 30000
let minutes = Math.floor(totalSeconds / 60);
let minLeft = (totalSeconds % 60)
let minutesLeft = minutes - minLeft;

let minutesLeftforPlay = minutes - (30000 / 60);

// console.log(Math.floor(minutes).toFixed(2));
// console.log((minutes + minLeft).toFixed(2))
// console.log(minLeft)
// console.log(minutesLeftforPlay)
if(seconds < 30000){
    console.log(`Tom sleeps well`)
    console.log(`${Math.abs(minutes).toFixed(0) - 1} hours and ${Math.abs(minLeft).toFixed(0)} minutes less for play`)
} else {console.log(`Tom will run away`)
console.log(`${minutes} hours and ${minLeft} minutes more for play`)}
        
}
tom([113])
tom([20])
// Пример: 20 почивни дни -> работните дни са 345 (365 – 20 = 345). Реалното време за игра е 24 275 минути (345 * 63 + 20 *127). 
//  Разликата от нормата е 5 725 минути (30 000 – 24 275 = 5 725) или 95 часа и 25 минути