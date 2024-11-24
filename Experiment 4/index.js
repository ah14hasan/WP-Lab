// Select the output div to display event messages
const outputDiv = document.getElementById("output");

// 1. Handle "click" event
const btnClick = document.getElementById("btnClick");
btnClick.addEventListener("click", () => {
    outputDiv.innerText = "You clicked the button!";
});

// 2. Handle "mouseover" event
const hoverInput = document.getElementById("hoverInput");
hoverInput.addEventListener("mouseover", () => {
    outputDiv.innerText = "You hovered over the input box!";
});

// 3. Handle "double-click" event
const dblClickBtn = document.getElementById("dblClickBtn");
dblClickBtn.addEventListener("dblclick", () => {
    outputDiv.innerText = "You double-clicked the button!";
});

// 4. Handle "keydown" event
const btnKeydown = document.getElementById("btnKeydown");
btnKeydown.addEventListener("keydown", (e) => {
    outputDiv.innerText = `You pressed "${e.key}" on the focused button!`;
});

// 5. Handle "change" event for dropdown
const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", (event) => {
    outputDiv.innerText = `Dropdown changed to: ${event.target.value}`;
});

// 6. Handle "focus" on input
hoverInput.addEventListener("focus", () => {
    outputDiv.innerText = "The input is focused!";
});
