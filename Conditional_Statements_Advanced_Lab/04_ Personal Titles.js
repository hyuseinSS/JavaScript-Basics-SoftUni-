function title(input) {

    let age = input[0]
    let gender = input[1]

    if (gender == "m"){ 
        if (age >= 16) 
        { console.log("Mr.") }
        else 
        { console.log("Master") }}
    
   else if (gender == "f") {
        if (age >= 16)
        { console.log("Ms.") }
        else 
        { console.log("Miss") }}
    
}



title(["117", "m"])