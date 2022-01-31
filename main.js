function addition (a, b){
    return Number(a) + Number(b);
}

function subtraction (a, b){
    return Number(a) - Number(b);
}

function multiplication (a, b){
    return Number(a) * Number(b);
}

function division(a, b){
    return Number(a) / Number(b);
}

let displayString = '';

const display = document.querySelector('.display');
const digitizer = document.querySelectorAll('.number');
digitizer.forEach(digit => digit.addEventListener('click', () => {
    displayString +=digit.textContent;
    display.textContent = displayString;
}));


let firstTerm = 0;
let secondTerm = 0;
let operation = '+';
let index = 0;

const operator = document.querySelectorAll('.operator');
operator.forEach(op => op.addEventListener('click', () => {
    secondTerm = displayString.slice(index);
    displayString += op.textContent;
    display.textContent = displayString;
    
    
    if(operation === '+'){
        firstTerm = addition(firstTerm, secondTerm);
        firstTerm = Math.round(firstTerm*1000000)/1000000;
    }
    else if(operation === '-'){
        firstTerm = subtraction(firstTerm, secondTerm);
        firstTerm = Math.round(firstTerm*1000000)/1000000;
    }
    else if(operation === 'x'){
        firstTerm = multiplication(firstTerm, secondTerm);
        firstTerm = Math.round(firstTerm*1000000)/1000000;
    }
    else if(operation === '/'){
        firstTerm = division(firstTerm, secondTerm);
        firstTerm = Math.round(firstTerm*1000000)/1000000;
    }
    if(op.textContent === '='){
        operation = '+';
        displayString = `${firstTerm}`;
        display.textContent = displayString;
        firstTerm = 0;
        index = 0;
        secondTerm = 0;
    }
    else{
        operation = `${op.textContent}`;
        displayString = firstTerm + operation;
        display.textContent = displayString;
        index = displayString.length;
    }
}));


const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayString = '';
    display.textContent = displayString;
    firstTerm = 0;
    secondTerm = 0;
    operation = '+';
    index = 0;
});


const deletion = document.querySelector('.deletion');
deletion.addEventListener('click', () =>{
    displayString = displayString.slice(0, -1);
    display.textContent = displayString;
});