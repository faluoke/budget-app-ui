import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import IncomesList from "./components/IncomesList";
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

  addBudget = (name, type, amount) => {
    axios
      .post("http://localhost:5000/api/budget/create", {
        name: name,
        type: type,
        amount: amount
      })
      .then(response => {
        if (response.status === 201) {
          this.fetchBudgets();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateBudget = (name, type, amount, id) => {
    axios
      .put(`http://localhost:5000/api/budget/update/${id}`, {
        name: name,
        type: type,
        amount: amount
      })
      .then(response => {
        if (response.status === 200) {
          this.fetchBudgets();
          console.log(response);
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
        <IncomesList
          budgets={this.state.budgets}
          addBudget={this.addBudget}
          updateBudget={this.updateBudget}
        />
        <ExpensesList
          budgets={this.state.budgets}
          addBudget={this.addBudget}
          updateBudget={this.updateBudget}
        />
      </>
    );
  }
}
