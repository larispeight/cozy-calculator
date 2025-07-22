// query area
const numberButton= document.querySelectorAll(".number");
const display = document.querySelector(".visor p")
const operatorButtons = document.querySelectorAll(".operators button")
const equalButton = document.querySelector("#equal")
const cleanButton = document.querySelector("#CLEAN");
const dotButton = document.querySelector("#dot");
const backButton = document.querySelector("#backspace");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";
let calculationDone = false;

//Calculations
numberButton.forEach(button =>{
        button.addEventListener("click", () => {
            if (calculationDone){
                display.textContent= "";
                calculationDone = false;
            }

            display.textContent += button.innerText;
        })
    });


operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const currentDisplay = display.textContent.trim();

        if(currentDisplay === ""){
            return;
        }

        const lastChar = currentDisplay[currentDisplay.length-1];
        const operators = ["+","-","/","*"];
        
        if (operators.includes(lastChar)){
            return;
        }

        firstOperand = currentDisplay;
        operator = button.innerText;
        display.textContent = "";
    })
});


dotButton.addEventListener("click", () => {
    const currentDisplay = display.textContent;

    if (!operator){
        if (!currentDisplay.includes(".")){
            display.textContent += ".";
        }
    } else {
        const parts = currentDisplay.split(operator);
        const secondOperand = parts[1] || "";
        
        if (!secondOperand.includes(".")){
            display.textContent += ".";
        }
    }
})


equalButton.addEventListener("click", () => {
    if (calculationDone){
        firstOperand = display.textContent;
    } else {
        secondOperand = display.textContent.trim();
    }

    const num1= parseFloat(firstOperand);
    const num2= parseFloat(secondOperand);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Something went wrong!")
        display.textContent = "";
        return;
    }

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2
    } else if (operator === "*" || operator === "x") {
        result = num1 * num2
    } else if (operator === "/") {
        if (num2 === 0) {
            alert("Can't divide by 0!");
            display.textContent = "";
            return;
        } else {result = num1 / num2}
    }
    
    result = Math.round(result * 100) / 100;
    
    display.textContent = result;

    firstOperand= result.toString();

    calculationDone = true;
})

//Clean button

cleanButton.addEventListener("click", () =>{
    firstOperand = "";
    secondOperand ="";
    operator="";
    calculationDone = false;
    display.textContent = "";
})

//Backspace button

backButton.addEventListener("click", () =>{
    let currentDisplay = display.textContent;
    if (currentDisplay.length === 0) return;

    const lastChar = currentDisplay[currentDisplay.length - 1];
    const operators = ["+", "-", "*", "/"];
    
    let newText = currentDisplay.slice(0,-1);
    display.textContent = newText;

    if (operator.includes(lastChar)){
        operator = "";
        secondOperand ="";
    } else {
        if (operator === "") {
            firstOperan = newText;
        } else {
            secondOperand = newText.split(operator)[1] || "";
        }
    }

    if (newText === ""){
        firstOperand= ""
        secondOperand= ""
        operator= ""
        calculationDone = false;
    }
})

// keyboard support

window.addEventListener("keydown", e => {
    console.log("Pressed key:", e.key);
    const key = e.key;
    if (e.key === "1") {document.querySelector("#one")?.click();
    } if (e.key === "2") {document.querySelector("#two")?.click();
    } if (e.key === "3") {document.querySelector("#three")?.click();
    } if (e.key === "4") {document.querySelector("#four")?.click();
    } if (e.key === "5") {document.querySelector("#five")?.click();
    } if (e.key === "6") {document.querySelector("#six")?.click();
    } if (e.key === "7") {document.querySelector("#seven")?.click();
    } if (e.key === "8") {document.querySelector("#eight")?.click();
    } if (e.key === "9") {document.querySelector("#nine")?.click();
    } if (e.key === "0") {document.querySelector("#zero")?.click();
}
});


window.addEventListener("keydown", e => {
    const key = e.key;
    if (e.key === "-") {document.querySelector("#subtraction")?.click();
    } if (e.key === "+" || (e.key === "=" && e.altKey)) {document.querySelector("#add")?.click();
    } if (e.key === "*" || (e.key === "8" && e.altKey)) {document.querySelector("#multiply")?.click();
    } if (e.key === "/") {document.querySelector("#divide")?.click();
    }
});


window.addEventListener("keydown", e => {
    const key = e.key;
    if (e.key === "Enter") {document.querySelector("#equal")?.click();
    } if (e.key === "Backspace") {document.querySelector("#backspace")?.click();
    } if (e.key === "Escape") {document.querySelector("#CLEAN")?.click();
    } if (e.key === ".") {document.querySelector("#dot")?.click();
    }
});