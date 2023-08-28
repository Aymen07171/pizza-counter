import React, { Component } from 'react';
import pizza from './pizza.png';

const Counter = {
  fontSize: "82px",
  backgroundColor: "black",
  borderRadius: "20px"
}

const Button = {
  fontSize: "28px",
  padding: "10px",
  backgroundColor: "white",
  cursor: "pointer",
  borderRadius: "10px"
}

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };


  
  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        <img src={pizza} width="200" alt="Pizza" />
        <h1>Pizza Counter Order</h1>
        <h1 style={Counter}>{this.state.count}</h1>
        <button style={Button} onClick={this.increaseCount}>Take Order</button>
        <br />
        <br />
        <button style={Button} onClick={this.decreaseCount}>Cancel Order</button>
      </div>
    );
  }
}

export default Pizza;
