import { Component } from "react";
import ReactDom from "react-dom";

class Modal extends Component {
  render() {
    return ReactDom.createPortal(
      this.props.children,
      document.getElementById("modal")
    );
  }
}

export default Modal;
