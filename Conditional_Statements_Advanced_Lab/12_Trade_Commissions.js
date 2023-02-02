function commissions(input) {

    let town = input[0]
    let sales = input[1]
    let won;

    switch (town) {
        case "Sofia":
            switch (sales) {
                case (sales >= 0 || sales <= 500): won = sales * 0.05; break;
                case (sales > 500 && sales <= 1000): won = sales * 0.07; break;
                case (sales > 1000 && sales <= 10000): won = sales * 0.08; break;
                case (sales > 10000): won = sales * 0.12; break;
            } break;
        case "Plovdiv":
            switch (sales) {
                case (sales >= 0 || sales <= 500): won = sales * 0.055; break;
                case (sales > 500 && sales <= 1000): won = sales * 0.08; break;
                case (sales > 1000 && sales <= 10000): won = sales * 0.12; break;
                case (sales > 10000): won = sales * 0.145; break;
            } break;
        case "Varna":
            switch (sales) {
                case (sales >= 0 || sales <= 500): won = sales * 0.045; break;
                case (sales > 500 && sales <= 1000): won = sales * 0.075; break;
                case (sales > 1000 && sales <= 10000): won = sales * 0.10; break;
                case (sales > 10000): won = sales * 0.13; break;
            }
    }
    console.log(won)
}

commissions(["Sofia",
    "1500"])