import React, { Component } from "react";
import Modal from "./Modal";
import "./ModalButton.css";

class ModalButton extends Component {
  static displayName = "Modal";

  state = {
    isModalShow: false
  };

  hideModal = () => {
    const currentCondition = this.state.isModalShow;
    this.setState({ isModalShow: !currentCondition });
  };

  showModal = () => {
    const currentCondition = this.state.isModalShow;
    this.setState({ isModalShow: !currentCondition });
  };

  render() {
    const show = this.state.isModalShow;
    return (
      <div>
        <button onClick={this.showModal}>Show Modal</button>
        {show && (
          <Modal>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <button onClick={this.hideModal}>CloseModal</button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default ModalButton;
