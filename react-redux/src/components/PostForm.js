import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Post title"
          />
          <button className="btn btn-secondary" type="submit">
            Add
          </button>
        </div>
      </form>
    );
  }
}
