import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.title.trim() === "") return;

    const newPost = {
      title: this.state.title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Post title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
          <button className="btn btn-secondary" type="submit">
            Add
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
