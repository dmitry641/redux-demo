import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
