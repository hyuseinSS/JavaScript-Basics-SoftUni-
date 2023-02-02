function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI
    console.log(degrees);
}
radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);

//formula : градус = * 180 /  Pi.
// числото Pi. в JavaScript програми е достъпно чрез Math.pi