function cinema(input){
let projection = (input[0]);
let row = Number(input[1]);
let column = Number(input[2]);
let price = 0;
    if (projection == "Premiere"){
        price = 12;
    } else if (projection == "Normal"){
        price = 7.50;
    } else if (projection == "Discount"){
        price = 5;
    } 
let finalprice = (row * column * price).toFixed(2);
console.log (`${finalprice} leva`)
}

cinema (["Premiere","10","12"])
cinema(["Normal",
"21",
"13"])









    
