import React from "react";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <h4>Sync posts</h4>
          <Posts posts={[]} />
        </div>
        <div className="col">
          <h4>Async posts</h4>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
