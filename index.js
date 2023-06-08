let count = 0;
let saveEl = document.getElementById("save-el");
const button = document.getElementById("increment-btn");

button.addEventListener("click", () => {
  count++;
  document.getElementById("count-el").innerText = count;
});

function save() {
  let countPlusDash = " " + count + " -";
  saveEl.innerText += countPlusDash;
}

// let welcomeEl = document.getElementById("welcome-el");
// let names = "jack ";
// let greeting = "Welcome Back ";
// let myGreeting = greeting + names;

// welcomeEl.innerText = myGreeting
// welcomeEl.innerText += "\u{1F44D}";
