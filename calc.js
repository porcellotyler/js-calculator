// Operator functions given inputs a, b & operator

function operate(array1, array2, operator) {
    let arrayNum1 = array1.join("");
    let arrayNum2 = array2.join("");
    
    let aNum = parseInt(arrayNum1);
    let bNum = parseInt(arrayNum2);
    let answer;

    if (arrayNum2 == '') {
        return displayDiv.textContent = "ERROR: must enter 2 numbers"
    };

    if (operator == '+') {
        answer = aNum + bNum;
            // Setting storage1 to the answer so the user can chain operations. 
        storage1 = String(answer).split("").map((answer) => {
            return Number(answer)});
        storage2 = [];
        operatorStorage = [];
        
        return displayDiv.textContent = answer

    } else if (operator == '-') {
        answer = aNum - bNum;

        storage1 = String(answer).split("").map((answer) => {
            return Number(answer)});
        storage2 = [];
        
        return displayDiv.textContent = answer
    } else if (operator == 'x') {
        answer = (aNum * bNum);

        storage1 = String(answer).split("").map((answer) => {
            return Number(answer)})
        storage2 = [];

        return displayDiv.textContent = answer 
    } else if (operator == '/') {
        if (bNum == 0) {
            return displayDiv.textContent = "C'mon son you can't divide by 0";
        } else {
            return displayDiv.textContent = (aNum / bNum)//.toFixed(1)
        }
    };
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
    if (operatorStorage == '+' || operatorStorage == '-' || operatorStorage == 'x' || operatorStorage == '/') {
        storage2.push(num); 
        displayDiv.textContent = `${storage1.join("")} ${operatorStorage} ${storage2.join("")}`;
    } else {
        storage1.push(num);
        displayDiv.textContent = storage1.join("");
    };
};

allOperators.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonText = button.innerText

        if (storage1.length > 0 && operatorStorage.length > 0 && storage2.length > 0) {
            function innerOp(array1, array2, operator) {
                let arrayNum1 = array1.join("");
                let arrayNum2 = array2.join("");
    
                let aNum = parseInt(arrayNum1);
                let bNum = parseInt(arrayNum2);
                let answer;

                if (operator == '+') {
                    answer = aNum + bNum;
                        // Setting storage1 to the answer so the user can chain operations. 
                    storage1 = String(answer).split("").map((answer) => {
                        return Number(answer)});
                    storage2 = [];
                    operatorStorage = [];
                    
                    return displayDiv.textContent = answer

                } else if (operator == '-') {
                    answer = aNum - bNum;

                    storage1 = String(answer).split("").map((answer) => {
                        return Number(answer)});
                    storage2 = [];
                    operatorStorage = [];
                    
                    return displayDiv.textContent = answer
                } else if (operator == 'x') {
                    answer = (aNum * bNum);

                    storage1 = String(answer).split("").map((answer) => {
                        return Number(answer)})
                    storage2 = [];
                    operatorStorage = [];

                    return displayDiv.textContent = answer 
                } else if (operator == '/') {
                    if (bNum == 0) {
                        return displayDiv.textContent = "C'mon son you can't divide by 0";
                    } else {
                        answer = (aNum / bNum)//.toFixed(1);

                        storage1 = String(answer).split("").map((answer) => {
                            return Number(answer)})
                        storage2 = [];
                        operatorStorage = [];

                        return displayDiv.textContent = answer;
                    }
                };
            };
            innerOp(storage1, storage2, operatorStorage);

            operatorStorage.push(buttonText);
            return 
        } else { //seems like a user could add more than one operation and break it instead of error out
            displayDiv.textContent = `${storage1.join("")} ${buttonText}`;
            operatorStorage.push(buttonText);
        }
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
        
        return operate(storage1, storage2, operatorStorage);
    })
});

/*
add decimal rounding functionality

add . button and allow users to input decimals (only one per number though)

add backspace button

add keyboard functionality

add ui
*/