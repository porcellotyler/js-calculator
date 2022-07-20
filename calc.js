// Operator functions given inputs a & b

function addition(a, b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
    return displayDiv.textContent = aNum + bNum
};

function subtraction(a, b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
    return displayDiv.textContent = aNum - bNum
};

function multiplication(a, b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
    return displayDiv.textContent = (aNum * bNum) 
};

function division(a, b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
    return displayDiv.textContent = (aNum / bNum)
}; 

function operate(operator, num1, num2) {
    if (operator == '+') {
        return addition(num1, num2)
    } else if (operator == '-') {
        return subtraction(num1, num2)
    } else if (operator == 'x') {
        return multiplication(num1, num2)
    } else if (operator == '/') {
        return division(num1, num2)
    }
};

let displayDiv = document.createElement('div');
    container.appendChild(displayDiv);
    displayDiv.textContent = '';

let allNums = document.querySelectorAll("button.numBtn");
let allOperators = document.querySelectorAll("button.operator");
let equalSign = document.querySelectorAll("button.equals");
let clearBtn = document.querySelectorAll("button.clear");

let storage1 = [];
let storage2 = [];
let operatorStorage = [];

function numArrays(num) {
        displayDiv.textContent = num;
    
    if (operatorStorage == '+' || operatorStorage == '-' || operatorStorage == 'x' || operatorStorage == '/') {
        storage2.push(num); 
    } else {
        storage1.push(num);
    };
};

allOperators.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonText = button.innerText
        displayDiv.textContent = buttonText;

        operatorStorage.push(buttonText);
    });
});

function clearing() {
    displayDiv.textContent = "";

    storage1 = [];
    storage2 = [];
    operatorStorage = [];
}

equalSign.forEach((button) => { //could prob delete for each here as well
    button.addEventListener("click", () => {
        let buttonText = button.innerText;
        displayDiv.textContent = buttonText;

        return operateFilter(operatorStorage);
    })
});

function operateFilter(sign) {
    if (sign == '+') {
        additionPrep(storage1, storage2);
    } else if (sign == '-') {
        subtractionPrep(storage1, storage2);
    } else if (sign == 'x') {
        multiplicationPrep(storage1, storage2);
    } else if (sign == '/') {
        divisionPrep(storage1, storage2);
    }
};

//These prep the input array to pass to the operation
function additionPrep(array1, array2) {
    let newNumber1 = array1.join("");
    let newNumber2 = array2.join("");
    return addition(newNumber1, newNumber2);
};

function subtractionPrep(array1, array2) {
    let newNumber1 = array1.join("");
    let newNumber2 = array2.join("");
    return subtraction(newNumber1, newNumber2);
};

function multiplicationPrep(array1, array2) {
    let newNumber1 = array1.join("");
    let newNumber2 = array2.join("");
    return multiplication(newNumber1, newNumber2);
};

function divisionPrep(array1, array2) {
    let newNumber1 = array1.join("");
    let newNumber2 = array2.join("");
    return division(newNumber1, newNumber2);
};

/*

figure out how to process multi operator inputs 

for example: 1 + 2 + 7 = 10
*/