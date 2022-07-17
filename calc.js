function addition(a, b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
    return aNum + bNum
};

function subtraction(a, b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
    return aNum - bNum
};

function multiplication(a, b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
    return (aNum * bNum) 
};

function division(a, b) {
    let aNum = parseInt(a);
    let bNum = parseInt(b);
    return (aNum / bNum)
}; 

// user enters number 1, operator, number 2
// user clicks enter button when ready to perform the operation
//operate function looks at the operator and number and performs function
//returns answer

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

/* to populate display
on click, change display box content to the number clicked
*/

let display = document.getElementById('displayBox');
let allButtons = document.querySelectorAll('button');

allButtons.addEventListener('click', () => {
    display.textContent = `${allButtons}`
}); //i want it to be that when any button is clicked, the display will show the most recently clicked button
