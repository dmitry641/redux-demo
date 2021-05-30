import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";

export default function FetchedPosts() {
  const dispatch = useDispatch(); // instead of connect, mapStateToProps
  const { posts, loader } = useSelector((state) => {
    // console.log(state);
    return { posts: state.posts.fetchedPosts, loader: state.app.loader };
  });

  if (loader) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Fetch
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
}
