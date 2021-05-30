import { call, put, takeEvery } from "redux-saga/effects";
import { hideLoader, showAlert, showLoader } from "./actions";
import { FETCH_POSTS, REQUEST_POSTS } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (error) {
    yield put(showAlert("Error"));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await res.json();
}
