import React, { Component } from "react";
import Cards from "./shared/Cards";
class CounterComponent extends Component {
  constructor(props) {
    console.log("constructor");
    super();
    this.state = {
      initialValue: 5,
    };
  }
  handleDecrement = () => {
    this.setState({ initialValue: --this.state.initialValue });
  };
  componentDidMount() {
    console.log("Mounting phase of class component");
    // API Call to hit DB / 3rd party API's and get the data
    // Update it in our state variable
  }
  componentDidUpdate() {
    console.log("Updating phase of Class Component");
  }
  componentWillUnmount() {
    console.log("Unmounting phase of Class Component");
  }
  render() {
    console.log("render");
    let a = 123;
    const handleIncrement = (a1) => {
      // this.state.initialValue = ++this.state.initialValue
      this.setState({ initialValue: ++this.state.initialValue });
    };
    const handleReset = () => {
      this.setState({ initialValue: 5 });
    };
    return (
      <>
        <h3>This is {this.props.componentName}</h3>
        Initial Value: {this.state.initialValue} <br /> <br />
        <button onClick={() => handleIncrement(1)}> Increment</button> &nbsp;
        <button onClick={this.handleDecrement}>Decrement</button>
        &nbsp;
        <button onClick={handleReset}>Reset</button> &nbsp; <br /> <br />
        <Cards
          subheading="Counter Application"
          heading="Class Component"
          description="This is a Class Component, consists of Counter Application"
          functionalities="Increment | Decrement | Reset"
        />
      </>
    );
  }
}

export default CounterComponent;
