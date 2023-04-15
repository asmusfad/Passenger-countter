//document.getElementById("count-el").innerText = 5;

countEl = document.getElementById("count-el");
saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let batch = count + " - ";
  saveEl.textContent += batch;
  countEl.textContent = 0;
  count = 0;
}

function reset() {}
