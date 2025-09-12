// query area
const numberButtons= document.querySelectorAll(".number");
const display = document.querySelector(".visor p")
const operatorButtons = document.querySelectorAll(".operators button")
const equalButton = document.querySelector("#equal")
const cleanButton = document.querySelector("#CLEAN");
const dotButton = document.querySelector("#dot");
const backButton = document.querySelector("#backspace");
const logList = document.getElementById("logList");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";
let calculationDone = false;

//Calculations
function formatResult(res) {
    if (res === null || res === undefined) return "";

    // Convert to plain string, no scientific notation
    let str = res.toString();

    // Remove decimal point for digit length check
    const digitCount = str.replace(".", "").replace("-", "").length;

    // 🚨 Check if result has more than 11 digits
    if (digitCount > 11) {
        alert("Result exceeds 11 digits. Look for a real calculator.");
        return "Oops";
    }

    // If decimal exists
    if (str.includes(".")) {
        const [intPart, decPart] = str.split(".");

        if (intPart.length >= 10) {
            return intPart.slice(0, 10); // cut off extra
        } else {
            const allowedDecimals = 10 - intPart.length;
            return intPart + "." + decPart.slice(0, allowedDecimals);
        }
    } else {
        // No decimal, just cut to 10 digits
        return str.slice(0, 10);
    }
}

function calculateResult(num1, num2, op) {
    let res;
    switch(op) {
        case "+": res = num1 + num2; break;
        case "-": res = num1 - num2; break;
        case "*": case "x": res = num1 * num2; break;
        case "/": 
            if (num2 === 0) {
                alert("Can't divide by 0!");
                return null;
            }
            res = num1 / num2; break;
        default: return null;
    }
    return Math.round(res * 1000) / 1000; // round to 3 decimals
}

// --- Number buttons ---
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (calculationDone) {
            display.textContent = "";
            calculationDone = false;
        }

        // Prevent typing beyond 10 digits (ignores ".")
        if (display.textContent.replace(".", "").length >= 10) return;

        display.textContent += button.innerText;
    });
});

// --- Dot button ---
dotButton.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
});

// --- Operator buttons ---
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const currentDisplay = display.textContent.trim();
        if (!currentDisplay) return;

        if (firstOperand && operator && !calculationDone) {
            // Chaining: calculate intermediate result
            const num1 = parseFloat(firstOperand);
            const num2 = parseFloat(currentDisplay);
            const res = calculateResult(num1, num2, operator);
            if (res === null) return;
            firstOperand = res.toString();
            display.textContent = firstOperand;
        } else if (calculationDone) {
            // Start new chain after = 
            calculationDone = false;
        } else {
            firstOperand = currentDisplay;
        }

        operator = button.innerText;
        display.textContent = "";
    });
});

// --- Equal button ---
equalButton.addEventListener("click", () => {
    if (!operator) return;
    const secondOperandValue = display.textContent.trim();
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperandValue);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Something went wrong!");
        return;
    }

    const res = calculateResult(num1, num2, operator);
    if (res === null) return;

    const formattedRes = formatResult(res);
    const formattedNum1 = formatResult(num1);
    const formattedNum2 = formatResult(num2);

    display.textContent = formattedRes;

    const logItem = document.createElement("li");
    logItem.textContent = `${formattedNum1} ${operator} ${formattedNum2} = ${formattedRes}`;
    logList.prepend(logItem);
    if (logList.children.length > 20) logList.removeChild(logList.lastChild);

    firstOperand = res.toString();
    operator = "";
    calculationDone = true;
});

// --- Clean button ---
cleanButton.addEventListener("click", () => {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    calculationDone = false;
    display.textContent = "";
});

// --- Backspace button ---
backButton.addEventListener("click", () => {
    let currentDisplay = display.textContent;
    if (!currentDisplay) return;

    const lastChar = currentDisplay.slice(-1);
    display.textContent = currentDisplay.slice(0, -1);

    if (operator && lastChar === operator) {
        operator = "";
        secondOperand = "";
    } else if (!operator) {
        firstOperand = display.textContent;
    } else {
        secondOperand = display.textContent;
    }

    if (!display.textContent) {
        firstOperand = "";
        secondOperand = "";
        operator = "";
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