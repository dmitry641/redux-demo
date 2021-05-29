import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

// model: index.js
// view: index.html, styles.css
let state = 0;

function render() {
  counter.textContent = state;
  // render model to view/template
}

addBtn.addEventListener("click", () => {
  state++;
  render();
});
subBtn.addEventListener("click", () => {
  state--;
  render();
});
asyncBtn.addEventListener("click", () => {
  setTimeout(() => {
    state += 10;
    render();
  }, 1500);
});
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

render();
