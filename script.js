
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

//Updating the Calculator

//Buttons for the numbers and operations
const numButtons = document.querySelectorAll(".num-button");
const opButtons = document.querySelectorAll(".operation");
//Screen Display Values
const num1 = document.querySelector('#element1');
const num2 = document.querySelector("#element2");
const op = document.querySelector("#elementOp");
const screen = document.querySelector(".screen");
//Equal Button
const equal = document.querySelector(".equals");
//Clear Button
const clearButton = document.querySelector(".clear");

let result = "";
let operatorPressed = false;
let num2Pressed = false;
let display1 = "";
let display2 = "";
let opPressed = "";
let number1 = 0;
let number2 = 0;

numButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        console.log(button.textContent);
        if(operatorPressed == false && num2Pressed == false){
            display1 = display1 + button.textContent;
        }
        else{
            display2 = display2 + button.textContent;
            num2Pressed = true;
        };
        num1.textContent = display1;
        num2.textContent = display2;
    });
});

opButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        console.log(button.textContent);
        if(num2Pressed != true){
            operatorPressed = true;
            op.textContent = setOperation(button);
        }
        else if(num2Pressed == true && operatorPressed == true){
            console.log("SECOND OPERATION");
            result = performOp();
            display1 = result;
            num1.textContent = result;
            display2 = "";
            op.textContent = setOperation(button);
            num2.textContent = "";
        }
    });
});

equal.addEventListener('click', () =>{
    if(num2Pressed == true){
        result = performOp();
        display1 = "";
        display2 = "";
        operatorPressed = false;
        num2Pressed = false;
        num1.textContent = "";
        op.textContent = "";
        num2.textContent = result;
    }
});

clearButton.addEventListener('click', clearScreen);

function performOp(){
    number1 = parseInt(display1);
    number2 = parseInt(display2);
    if(opPressed == "/"){
        result = divide(number1, number2);
    }
    else if(opPressed == "x"){
         result = multiply(number1, number2);
    }
    else if(opPressed == "-"){
         result = subtract(number1, number2);
    }
    else{
        result = addition(number1, number2);
    }
    return result;
}

function setOperation(button){
    if(button.id == "divide"){
        opPressed = "/";
    }
    else if(button.id == "multiply"){
        opPressed = "x";
    }
    else if(button.id == "add"){
        opPressed = "+";
    }
    else{
        opPressed = "-";
    }
    return opPressed;
}

function clearScreen(){
    display1 = "";
    display2 = "";
    operatorPressed = false;
    num2Pressed = false;
    num1.textContent = "";
    op.textContent = "";
    num2.textContent = "0";
}