function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a -b;
}

function multiply (a, b)
{
    return a * b;
}

function divide (a, b)
{
    return a / b;
}

function operate (operator, a, b)
{
    switch(operator)
    {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            console.warn("Operator " + operator + " is not supported");
    }
}

function isOperator(char)
{
    return char == "+" || char == "-" || char == "*" || char == "/";
}

const display = document.querySelector("#calculatordisplay");

const buttons = [...document.querySelectorAll("button")];

buttons.forEach(button => {
    if(+button.textContent || isOperator(button.textContent) || button.textContent == "0")
    {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
        });
    }
    else if(button.textContent == "Del")
    {
        button.addEventListener("click", () => {
            display.textContent = display.textContent.slice(0, -1);
        });
    }
    else if(button.textContent == "C")
    {
        button.addEventListener("click", () => {
            display.textContent = "";
        });
    }
});

document.addEventListener("keydown", e => {
    console.log(String.fromCharCode(e.which));
    let buttonPressed = buttons.find(button => {
        let buttonKeyCode = button.getAttribute("data-keycode");
        let buttonKeyCodes = buttonKeyCode.split(" ");
        return buttonKeyCodes.map(keyCode => +keyCode).includes(e.which || e.keyCode);
    });
    if(buttonPressed) {  buttonPressed.click();}
});