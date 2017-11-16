import React, { Component } from "react";
import "./Switcher.css";

// Для работы этой компоненты нужно использовать методы
// React.Children.toArray
// а так же работать с child.type.name и child.type.displayName
let id = 0;
function getNewId() {
  return id++;
}
class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = event => {
    const a = Number(event.target.getAttribute("data-id"));
    this.setState({ selectedChild: a });
  };

  render() {
    const children = React.Children.toArray(this.props.children);
    return (
      <div>
        <ul className="component-list">
          {children.map((child, i) => {
            return (
              <li
                data-id={i}
                key={getNewId()}
                className="component-list__name"
                onClick={this.handleChangeChild}
              >
                {child.type.displayName || child.type.name}
              </li>
            );
          })}
        </ul>
        <hr />
        <div className="component-wrapper">
          {children[this.state.selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
