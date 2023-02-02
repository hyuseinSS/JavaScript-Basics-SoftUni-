function lunchBrake(input){
    let showName = input[0];
    let showDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchDuration = breakDuration / 8
    let restingDuration = breakDuration / 4
    breakDuration -= lunchDuration
    breakDuration -= restingDuration


    if (breakDuration >= showDuration){
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(breakDuration - showDuration)} minutes free time.`)
    } else {

        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(showDuration - breakDuration)} more minutes.`)
    }


}

// lunchBrake(["Game of Thrones", "60", "96"]);
// lunchBrake(["Teen Wolf", "48", "60"]);