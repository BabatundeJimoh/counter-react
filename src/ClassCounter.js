import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncreaseCount = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 10 });
  };

  handleDecreaseCount = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count - 10 });
  };
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button className="btn" onClick={this.handleIncreaseCount}>
          Increase
        </button>
        <button className="btn" onClick={this.handleDecreaseCount}>
          Decrease
        </button>
      </div>
    );
  }
}

export default ClassCounter;
