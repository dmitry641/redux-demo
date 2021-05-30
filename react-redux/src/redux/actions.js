import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(showLoader());
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const json = await res.json();
    setTimeout(() => {
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(hideLoader());
    }, 2000);
  };
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
