
//Functions for Math Operations

function addition (x, y){
    return (x + y);
}

function subtract (x, y){
    return (x - y);
}

function multiply (x, y){
    return (x * y);
}

function divide (x, y){
    return (x / y);
}

//Operator for Math Operations

function operator(operation, x, y){
    if(operation == "add"){
         return addition(x,y);
    }
    else if(operation == "sub"){
        return subtract(x,y);
    }
    else if(operation == "div"){
        return divide(x,y);
    }
    else{
        return multiply(x,y);
    }
}

console.log(addition(2,6));
console.log(subtract(2,6));
console.log(divide(2,6));
console.log(multiply(2,6));
console.log(operator("add", 2, 6));