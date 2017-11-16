import React, { Component } from "react";

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    const initialNumber = this.format(this.props.cardNumber);
    this.state = {
      number: initialNumber
    };
  }

  format = str => {
    if (str == null || undefined) {
      str = "";
    }
    str = String(str);
    let i = 0;
    let substr = "";
    for (i; i < str.length; i = i + 4) {
      substr = (substr + " " + str.slice(i, i + 4)).trim();
    }
    return substr;
  };

  normalize = str => str.replace(/\s+/g, "");
  handleChange = e => {
    this.props.onChange(this.normalize(e.target.value));
  };

  componentWillReceiveProps = nextProps => {
    const propsNumber = this.format(nextProps.cardNumber);
    this.setState({ number: propsNumber });
  };
  render() {
    return (
      <input
        type="text"
        value={this.state.number}
        onChange={this.handleChange}
      />
    );
  }
}

export default CardNumberInput;
