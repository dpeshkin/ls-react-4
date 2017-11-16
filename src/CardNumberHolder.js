import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component {
  static displayName = "Card Number";
  state = {
    cardNumber: ""
  };
  handleChange = value => {
    this.setState({ cardNumber: value });
  };

  render() {
    return (
      <CardNumberInput
        onChange={this.handleChange}
        cardNumber={this.state.cardNumber}
      />
    );
  }
}

export default CardNumberHolder;
