//  // pseudocode
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


// step 1 enter a number + display -- DONE

numberButton.forEach(button =>{
        button.addEventListener("click", () => {
            if (calculationDone){
                display.textContent= "";
                calculationDone = false;
            }

            display.textContent += button.innerText;
        })
    });


// step 2 enter operator -- DONE
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


// step 3 enter second number + display -- DONE
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
// step 4 equal sign closes loop + display final answer -- DONE
// step 5 loop operator and number until satisfied -- DONE

// // extra after normal operations
// round up long decimals -- DONE
// debug to "equal" before function end, give error saying to add more operations or number -- DONE
// pressing "clear" wipe everything and go back to beginning of loop
cleanButton.addEventListener("click", () =>{
    firstOperand = "";
    secondOperand ="";
    operator="";
    calculationDone = false;
    display.textContent = "";
})
// dividing by 0 = error -- DONE
// make sure when "++" is clicked doesn't get added up as the function ++ -- DONE
// after "equal", when clicking a number means "clear" -- DONE

// // extra extra
// make sure you can only add "." once between numbers -- DONE
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
// add backspace, as undo last input "delete last number"
backButton.addEventListener("click", () =>{
    let currentDisplay = display.textContent;
    if (currentDisplay.length === 0) return;

    const lastChar = currentDisplay[currentDisplay.length - 1];
    const operators = ["+", "-", "*", "/"];

    //slice
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