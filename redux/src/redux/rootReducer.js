import { combineReducers } from "redux";
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
} from "./types";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === ASYNC_INCREMENT) {
    return state + 10;
  }

  return state;
}

const initialThemeState = {
  value: "light",
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

function btnsReducer(state = false, action) {
  switch (action.type) {
    case DISABLE_BUTTONS:
      return true;
    case ENABLE_BUTTONS:
      return false;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  buttons: btnsReducer,
});
