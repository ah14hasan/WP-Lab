// Select important DOM elements
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const cartItems = document.getElementById("cartItems");
const deleteItemBtn = document.getElementById("deleteItemBtn");
const moveUpBtn = document.getElementById("moveUpBtn");
const moveDownBtn = document.getElementById("moveDownBtn");
const changeFontBtn = document.getElementById("changeFontBtn");
const changeColorBtn = document.getElementById("changeColorBtn");

// Add Item to Cart
addItemBtn.addEventListener("click", () => {
    const itemName = itemInput.value.trim();
    if (itemName === "") {
        alert("Please enter an item name!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = itemName;
    li.className = "cart-item";
    li.style.padding = "8px";
    li.style.margin = "5px 0";
    li.style.border = "1px solid #ddd";
    li.style.cursor = "pointer";
    li.addEventListener("click", () => toggleSelection(li));
    cartItems.appendChild(li);
    itemInput.value = "";
});

// Delete Selected Item from Cart
deleteItemBtn.addEventListener("click", () => {
    const selectedItems = Array.from(document.querySelectorAll(".cart-item.selected"));
    if (selectedItems.length === 0) {
        alert("Please select an item to delete!");
        return;
    }
    selectedItems.forEach((item) => item.remove());
});

// Move Selected Item Up
moveUpBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector(".cart-item.selected");
    if (!selectedItem) {
        alert("Please select an item to move!");
        return;
    }
    const prevSibling = selectedItem.previousElementSibling;
    if (prevSibling) {
        cartItems.insertBefore(selectedItem, prevSibling);
    }
});

// Move Selected Item Down
moveDownBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector(".cart-item.selected");
    if (!selectedItem) {
        alert("Please select an item to move!");
        return;
    }
    const nextSibling = selectedItem.nextElementSibling;
    if (nextSibling) {
        cartItems.insertBefore(nextSibling, selectedItem);
    }
});

// Change Font of Selected Items
changeFontBtn.addEventListener("click", () => {
    const selectedItems = document.querySelectorAll(".cart-item.selected");
    if (selectedItems.length === 0) {
        alert("Please select an item to change font!");
        return;
    }
    selectedItems.forEach((item) => {
        item.style.fontFamily = "Courier New, Courier, monospace";
    });
});

// Change Color of Selected Items
changeColorBtn.addEventListener("click", () => {
    const selectedItems = document.querySelectorAll(".cart-item.selected");
    if (selectedItems.length === 0) {
        alert("Please select an item to change color!");
        return;
    }
    selectedItems.forEach((item) => {
        item.style.color = "blue";
    });
});

// Toggle Selection of Items
function toggleSelection(item) {
    if (item.classList.contains("selected")) {
        item.classList.remove("selected");
        item.style.backgroundColor = "";
    } else {
        item.classList.add("selected");
        item.style.backgroundColor = "#f0f0f0";
    }
}
