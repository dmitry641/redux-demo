import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createStore } from "./createStore";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { asyncIncrement, decrement, increment } from "./redux/actions";
import { rootReducer } from "./redux/rootReducer";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

function middleware(state) {
  return function (next) {
    return function (action) {
      console.log("middleware");
      // console.log("Action", action);
      // console.log("State", state.getState());
      return next(action);
    };
  };
}

const store = createStore(
  rootReducer,
  0,
  applyMiddleware(thunk, middleware, logger)
);

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});
subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});
asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});
themeBtn.addEventListener("click", () => {
  // document.body.classList.toggle("dark");
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});
store.dispatch({ type: "INIT_APP" });
