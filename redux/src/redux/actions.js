import {
  DECREMENT,
  INCREMENT,
  ASYNC_INCREMENT,
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
} from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableBtns());
    setTimeout(() => {
      dispatch({ type: ASYNC_INCREMENT });
      dispatch(enableBtns());
    }, 1500);
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
}

export function disableBtns() {
  return {
    type: DISABLE_BUTTONS,
  };
}
export function enableBtns() {
  return {
    type: ENABLE_BUTTONS,
  };
}
