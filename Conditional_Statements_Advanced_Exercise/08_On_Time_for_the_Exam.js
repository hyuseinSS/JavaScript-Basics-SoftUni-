function exam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examTime = (examHour * 60) + examMin;
    let arrivalTime = (arriveHour * 60) + arriveMin;

    let timeDifference = examTime - arrivalTime;

    let earlyHour;
    let earlyMin;
    let lateHour;
    let lateMin;


    if (timeDifference >= 0 && timeDifference <= 30) {  // on time

        if (timeDifference == 0) {
            console.log("On time");

        } else {
            console.log("On time");
            console.log(`${timeDifference} minutes before the start`);
        }
    }

    else if (timeDifference > 30) {          // Early

        earlyHour = Math.floor(timeDifference / 60);
        earlyMin = timeDifference % 60;

        if (timeDifference > 30 && timeDifference <= 59) {
            console.log("Early");
            console.log(`${timeDifference} minutes before the start`);
        }
        else if (earlyMin < 10 && earlyMin >= 0) {

            console.log("Early");
            console.log(`${earlyHour}:0${earlyMin} hours before the start`);
        }
        else {

            console.log("Early");
            console.log(`${earlyHour}:${earlyMin} hours before the start`);
        }
    }
    else {      //  Late

        timeDifference = Math.abs(timeDifference);
        lateHour = Math.floor(timeDifference / 60);
        lateMin = timeDifference % 60;

        if (timeDifference <= 59) {
            console.log("Late");
            console.log(`${timeDifference} minutes after the start`);

        }
        else if (lateMin < 10 && lateMin >= 0) {

            console.log("Late");
            console.log(`${lateHour}:0${lateMin} hours after the start`);
        }
        else {
            console.log("Late");
            console.log(`${lateHour}:${lateMin} hours after the start`);
        }
    }
}


// exam(["9", "30", "9", "50"]) //Late 20 minutes after the start
// exam(["9", "00", "8", "30"])//On time 30 minutes before the start
// exam([11,30,8,12])
exam([16, 00, 15, 00])//Early 1:00 hours before the start
// onTime(["14", "00", "13", "55"])
// onTime(["9", "00", "10", "30"])
11
30
8
12
// onTime(["11", "30", "8", "12"])