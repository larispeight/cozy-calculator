//  // pseudocode
// query area
const numberButton= document.querySelectorAll(".number");
const display = document.querySelector(".visor p")
const operatorButtons = document.querySelectorAll(".operators button")
const equalButton = document.querySelector("#equal")
const cleanButton = document.querySelector("#CLEAN");
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
            } //

            display.textContent += button.innerText;
        })
    });


// step 2 enter operator -- DONE
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        firstOperand = display.textContent;
        operator = button.innerText;
        display.textContent = " ";
    })
});


// step 3 enter second number + display -- DONE
equalButton.addEventListener("click", () => {
    secondOperand = display.textContent;

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
// make sure when "++" is clicked doesn't get added up as the function ++
// after "equal", when clicking a number means "clear"

// // extra extra
// make sure you can only add "." once between numbers
// add backspace, as undo last input "delete last number"
// keyboard support