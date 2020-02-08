import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import BudgetList from "./components/BudgetList";

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

        <BudgetList budgets={this.state.budgets} />
      </>
    );
  }
}
