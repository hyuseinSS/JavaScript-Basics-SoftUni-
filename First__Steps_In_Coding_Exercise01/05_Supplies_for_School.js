function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparat = Number(input[2]);
    let discount = Number(input[3] / 100); /// ПЪРВАТА МИ ЗАДАЧА КОЯТО САМ РЕПИХ!!!!!

    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let preparatPrice = 1.20;


    let totalPrice = pensPrice * pens + markersPrice * markers + preparatPrice * preparat;
    let finalAmount = totalPrice - (totalPrice * discount);


    console.log(finalAmount);
}
suppliesForSchool([2, 3, 4, 25])
suppliesForSchool(["4", "2", "5", "13"])