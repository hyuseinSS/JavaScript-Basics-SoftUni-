function shopping(input) {

    let budget = Number(input[0])
    let videoCards = Number(input[1])
    let proccessorsCount = Number(input[2])
    let ramCount = Number(input[3])

    let videoCardsPrice = videoCards * 250;
    let proccessorPrice = videoCardsPrice * 0.35;
    let ramPrice = (videoCardsPrice * 0.10) * ramCount;
    let total = videoCardsPrice + proccessorPrice + ramPrice;


    if (videoCards >= proccessorsCount) {
        total = total * 0.85;
    }

    if (total <= budget) {
         console.log(`You have ${((budget - total).toFixed(2))} leva left!`)
    } else {
        
        console.log(`Not enough money! You need ${((total - budget).toFixed(2))} leva more!`)
    }
}  

shopping(["900", "2", "1", "3"])
shopping(["920.45", "3", "1", "1"])