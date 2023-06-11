let count = 0;
const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");
const button = document.getElementById("increment-btn");

button.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

function save() {
  saveEl.textContent += count + " - ";
  count = 0;
  countEl.textContent = count;
}
