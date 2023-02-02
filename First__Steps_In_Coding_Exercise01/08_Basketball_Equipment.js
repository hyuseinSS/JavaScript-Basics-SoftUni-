function basketballEquipment(input) {
    let yearly = Number(input[0]);
    let shoes = yearly * 0.60;
    let equip = shoes * 0.80;
    let ball = equip * 0.25;
    let accessory = ball * 0.20;

    let total = shoes + equip + ball + accessory + yearly;

    console.log(total);
    
}
basketballEquipment(["365"]);
//basketballEquipment([550]);