import { showAlert } from "./actions";
import { CREATE_POST } from "./types";

const forbiddenWords = ["aaa", "bbb", "ccc"];

export function forbiddenWordsFilter({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbiddenWords.filter((w) =>
          action.payload.title.includes(w)
        );
        if (found.length) return dispatch(showAlert("Forbidden word"));
      }
      return next(action);
    };
  };
}
