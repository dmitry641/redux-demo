import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  REQUEST_POSTS,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  };
  // return async (dispatch) => {
  //   dispatch(showLoader());
  //   try {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //     );
  //     const json = await res.json();
  //     setTimeout(() => {
  //       dispatch({ type: FETCH_POSTS, payload: json });
  //       dispatch(hideLoader());
  //     }, 2000);
  //   } catch (error) {
  //     dispatch(showAlert("Error"));
  //     dispatch(hideLoader());
  //   }
  // };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}
export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
