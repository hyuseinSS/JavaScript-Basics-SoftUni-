function bikeRace(input) {

    let youngBikersCount = Number(input[0]);
    let seniorBikersCount = Number(input[1]);
    let typeOfTrace = input[2]
    let totalBikers = youngBikersCount + seniorBikersCount;

    let juniorPrice = 0
    let seniorPrice = 0
    let tax = 0
    let mandatoryTax = 0.05;

    if (typeOfTrace == "trail") {
        juniorPrice = 5.50;
        seniorPrice = 7;
    } if (typeOfTrace == "cross-country") {
        juniorPrice = 8;
        seniorPrice = 9.5;}
    if (typeOfTrace == "cross-country" && totalBikers >= 50) {
        juniorPrice = 8;
        seniorPrice = 9.5;
        tax = 0.25;
    } if (typeOfTrace == "downhill") {
        juniorPrice = 12.25;
        seniorPrice = 13.75;
    } if (typeOfTrace == "road") {
        juniorPrice = 20;
        seniorPrice = 21.50;
    } let totalSum = (juniorPrice * youngBikersCount) + (seniorPrice * seniorBikersCount)
    console.log((totalSum- (totalSum * tax) - ((totalSum- (totalSum * tax)) * mandatoryTax)).toFixed(2) )
}
bikeRace([10, 20, "trail"])
bikeRace([30,25,"cross-country"])
bikeRace([21,26,"cross-country"])
// ⦁	Третият ред – вид трасе – "trail", "cross-country", "downhill" или "road"
// Група	trail	cross-country	downhill	road
// juniors	5.50	8	               12.25	20
// seniors	7	    9.50	           13.75	21.50
