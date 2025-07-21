//  // pseudocode
// query area
const numberButton= document.querySelectorAll(".number");
const display = document.querySelector(".visor p")
const operatorButtons = document.querySelectorAll(".operators button")
let firstOperand = "";
let operator = "";

// step 1 enter a number + display

numberButton.forEach(button =>{
        button.addEventListener("click", () => {
            display.textContent += button.innerText;
        })
    });


// step 2 enter operator
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        firstOperand = display.textContent;
        operator = button.innerText;
        display.textContent = " ";
    })
});


// step 3 enter second number + display
// step 4 equal sign closes loop + display final answer
// step 5 loop operator and number until satisfied





// // extra after normal operations
// round up long decimals
// debug to "equal" before function end, give error saying to add more operations or number
// pressing "clear" wipe everything and go back to beginning of loop
// dividing by 0 = error
// make sure when "++" is clicked doesn't get added up as the function ++
// after "equal", when clicking a number means "clear"

// // extra extra
// make sure you can only add "." once between numbers
// add backspace, as undo last input "delete last number"
// keyboard support