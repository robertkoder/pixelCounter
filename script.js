const counterDisplaySpan = document.querySelector("#counterDisplay .counterDisplayOffset");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
let counterValue = 0;

function increment() {
    counterValue = counterValue + 1;
    counterDisplaySpan.textContent = counterValue;
};

function decrement() {
    counterValue = counterValue - 1;
    counterDisplaySpan.textContent = counterValue;
};

plusButton.onclick = () => {
    increment()
    plusButton.classList.add("bounceUp");
};

plusButton.onanimationend = () => {
    plusButton.classList.remove("bounceUp");
};

minusButton.onclick = () => {
    decrement()
    minusButton.classList.add("bounceDown");
};

minusButton.onanimationend = () => {
    minusButton.classList.remove("bounceDown");
};

document.addEventListener("wheel", function(event) {
    if (event.deltaY < 0) {
        increment();
    } else {
        decrement();
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === " ") {
        increment();
    } else if (event.key === "Backspace") {
        counterValue = 0;
        counterDisplaySpan.textContent = counterValue;
    }
});