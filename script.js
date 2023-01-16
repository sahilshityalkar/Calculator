// 1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, 
// so start by creating functions for the following items and 
// testing them in your browser’s console.
// console.log(addition(9, 7))
// console.log(subtraction(9, 8))
// console.log(multiplication(7, 6))
// console.log(division(3, 4))

// Sum opretion
function addition(a, b) {
    return a + b;
};

// Subtraction opretion
function subtraction(a, b) {
    return a - b;
};

// Multiply opretion
function multiplication(a, b) {
    return a * b;
};

// Divide opretion
function division(a, b) {
    return a / b;
};

// percentage opretion
function percentage(a){
  return a % a;
}


// 2 . Create a new function operate() that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operateFun(num1, num2, operatorValue) {
    num1 = Number(num1)
   num2 = Number(num2)
    switch (operatorValue) {
      case "+":
        return addition(num1, num2);
      case "-":
        return subtraction(num1, num2);
      case "*":
        return multiplication(num1, num2);
      case "/":
        return division(num1, num2);
      case "%":
        return percentage(num1)
    }
  };


//  4 . Create the functions that populate the display when you click the number buttons. 

let inputBox = document.querySelector('input')
let numberButtons = document.querySelector('.numberButton')
let opretionButtons = document.querySelectorAll('.opretion')
let clearButton = document.querySelector('.acClearAll')
let quealButton = document.querySelector('.opretionButton')
let dotButton = document.querySelector('.dotButton')

let inputBoxstring = "";
let arrayFromInputBox = [];
let num1 = "";
let num2 = "";
let operatorValue = "";
let found_Operator = false;
let dotAdd = false;
let result;
let nu;
let valueCheckerArray = ["1","2","3","4","5","6","7","8","9","0"]


// this function is scan the array values and return the num1 num2 and opreater
function scanArray(arrayFromInputBox){
  for(let i = 0; i < arrayFromInputBox.length; i++){
     if(arrayFromInputBox[i] in valueCheckerArray && found_Operator == false){
      num1 += arrayFromInputBox[i];
     }
    //  else if (arrayFromInputBox[i] =='+'||arrayFromInputBox[i] =='%'||arrayFromInputBox[i] =='-'||arrayFromInputBox[i] =='*'||arrayFromInputBox[i] =='/'
    //           && found_Operator == false){
    //   num1 += arrayFromInputBox[i];
    //  }
     else if (arrayFromInputBox[i] === "." && dotAdd == false && found_Operator == false){
      num1 += arrayFromInputBox[i];
      dotAdd = true;
     }