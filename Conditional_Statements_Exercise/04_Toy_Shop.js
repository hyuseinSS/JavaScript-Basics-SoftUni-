    function toyShop(input) {

        let tripCost = Number(input[0])
        let puzzleCount = Number(input[1])
        let dollCount = Number(input[2])
        let teddyBearCount = Number(input[3])
        let minionCount = Number(input[4])
        let truckCount = Number(input[5])



        let puzzlePrice = 2.60;
        let dollPrice = 3.00;
        let teddyBearPrice = 4.10;
        let minionPrice = 8.20;
        let truckPrice = 2.00;

        let total = (puzzleCount * puzzlePrice) + (dollCount * dollPrice) + (teddyBearCount * teddyBearPrice) + (minionCount * minionPrice) + (truckCount * truckPrice);
        if ((puzzleCount + truckCount + minionCount + teddyBearCount + dollCount) >= 50) {
            total *= 0.75;
        }

        let rent = total * 0.10;
        let finalSum = total - rent


        if (finalSum >= tripCost) {
            console.log(`Yes! ${(finalSum - tripCost).toFixed(2)} lv left.`)
        } else {
            console.log(`Not enough money! ${(tripCost - finalSum).toFixed(2)} lv needed.`)
        }

    }

toyShop(["40.8", "20", "25", "30", "50", "10"])
toyShop(["320","8","2","5","5","1"])