// const emoji = ["🐥", "🐯", "🐼"];
// console.log(emoji.includes("🐯"));
const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

const shoppingList = [];

addItemBtn.addEventListener("click", function () {
  /*
  Challenge:
  1. Add an if else to the event listener's function.
  2. Only add an item to the shoppingList array if it
     is not already in the shoppingList array.
  3. If an item is a duplicate, clear the input field
     and log out "no duplicates".
  */
  if (!shoppingList.includes(itemInput.value)) {
    shoppingList.push(itemInput.value);
    render();
    itemInput.value = "";
  } else {
    itemInput.value = "";
    itemInput.placeholder = "No Duplicates";
    console.log("No Duplicates");
  }
  itemInput.value = "";
  itemInput.placeholder = "No Duplicates";
});

function render() {
  let html = "";
  for (let item of shoppingList) {
    html += `<li class="list-item">${item}</li>`;
  }
  list.innerHTML = html;
}
render();
