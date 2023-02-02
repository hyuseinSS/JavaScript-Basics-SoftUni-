function repainting(input) {

    let nylon = (Number(input[0] + 2)) * 1.50;
    let paint = Number(input[1] * 14.50) + ((input[1] * 14.50) * 0.10);
    let paintThinner = Number(input[2]) * 5.00;
    let workHours = Number(input[3]);
    let bags = 0.40;
    let total = nylon + paint + paintThinner + bags;


    let workersPay = total * 0.3 * workHours;
    let finalSum = nylon + paint + paintThinner + bags + workersPay;


    console.log(finalSum);
    console.log(nylon, paint, paintThinner)

}

repainting([10, 11, 4, 8]);