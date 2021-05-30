import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.title.trim() === "") {
      return this.props.showAlert("Please enter a title");
    }

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
      <React.Fragment>
        {this.props.alert ? <Alert text={this.props.alert}></Alert> : ""}
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { alert: state.app.alert };
};

const mapDispatchToProps = {
  createPost,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
