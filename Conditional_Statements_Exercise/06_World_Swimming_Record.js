function wSR(input) {

    let recordInSeconds = Number(input[0])
    let distanceInMeters = Number(input[1])
    let timeinSeconds = Number(input[2]);
    
    let timeSlowed = Math.floor(distanceInMeters / 15) * 12.5
    let totalTime = ((timeinSeconds * distanceInMeters) + timeSlowed)
    let timeNeeded = totalTime - recordInSeconds;
  


    if (recordInSeconds > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(timeNeeded).toFixed(2)} seconds slower.`)
    }
}
wSR(["10464", "1500", "20"])
wSR(["55555.67","3017","5.03"])