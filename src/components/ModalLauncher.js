import React, { Component } from "react";
import Modal from "./Modal";
import { Button } from "../styles/StyledBudgetDetail";

export default class ModalLauncher extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };
  render() {
    return (
      <div>
        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop"></div>
        ) : null}

        <Button onClick={this.openModalHandler}>{this.props.buttonName}</Button>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          title={this.props.title}
          budgetId={this.props.budgetId}
          addTransaction={this.props.addTransaction}
          transactionName={this.props.data.name}
          transactionType={this.props.data.type}
          transactionAmount={this.props.data.amount}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}
