import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate() {
    console.log("did updata");
  }
  componentWillUnmount() {
    console.log("Will unmount or kill");
  }
  increaseCount = () => {
    this.setState((prevState) => {
      return prevState.count++;
    });
  };
  decreaseCount = () => {
    this.setState((prevState) => {
      return prevState.count--;
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-center border border-dark rounded">
        <div className="flex-sm-column">
          <h3 className="p-3 mb-2 bg-success text-white border border-dark rounded">
            Class Lifecycle
          </h3>
          <h3 className="text-success d-flex justify-content-center">
            {this.state.count}
          </h3>
          <div className="d-flex justify-content-around">
            {" "}
            <button
              className="btn btn-outline-success"
              onClick={this.increaseCount}
            >
              +
            </button>
            <button
              className="btn btn-outline-success"
              onClick={this.decreaseCount}
            >
              -
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                this.props.onKill(false);
              }}
            >
              kill
            </button>
          </div>
        </div>
      </div>
    );
  }
}
