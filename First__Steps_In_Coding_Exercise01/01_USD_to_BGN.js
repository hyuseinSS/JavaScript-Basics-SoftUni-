function usdToBgn(usdAsStringInArray) {
    let usdToBgnExchangeRate = 1.79549;
    let usd = Number(usdAsStringInArray[0]);     // usd Държи стойността 22 (String)
    let bgn = usd * usdToBgnExchangeRate; // bgn държи резултата математическата операция умножение.
    console.log(bgn);
}

usdToBgn(["22"]);
usdToBgn(["100"]);

// 1 USD = 1.79549 BGN.