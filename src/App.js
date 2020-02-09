import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import ExpensesList from "./components/ExpensesList";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      budgets: []
    };
  }

  fetchBudgets = () => {
    axios
      .get("http://localhost:5000/api/budgets")
      .then(response => {
        if (response.data) {
          let budgetsClone = this.state.budgets.slice();
          budgetsClone = response.data;
          this.setState({
            budgets: budgetsClone
          });
          console.log(this.state.budgets);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchBudgets();
  }

  render() {
    return (
      <>
        <Title>Your Budget</Title>

        <ExpensesList budgets={this.state.budgets} />
        <ExpensesList budgets={this.state.budgets} />
      </>
    );
  }
}
