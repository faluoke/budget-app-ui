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
      budgets: [],
      loading: true
    };
  }

  fetchBudgets = () => {
    axios
      .get("https://master-budget-app.herokuapp.com/api/budgets")
      .then(response => {
        if (response.data) {
          let budgetsClone = this.state.budgets.slice();
          budgetsClone = response.data;
          this.setState({
            budgets: budgetsClone,
            loading: false
          });
          console.log(this.state.budgets);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  addBudget = (name, type, planned, received) => {
    axios
      .post("https://master-budget-app.herokuapp.com/api/budget/create", {
        name: name,
        type: type,
        planned: planned,
        received: received
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

  updateBudget = (name, type, planned, received, id) => {
    axios
      .put(`https://master-budget-app.herokuapp.com/api/budget/update/${id}`, {
        name: name,
        type: type,
        planned: planned,
        received: received
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

  deleteBudget = id => {
    axios
      .delete(`https://master-budget-app.herokuapp.com/api/budget/delete/${id}`)
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
          loading={this.state.loading}
          budgets={this.state.budgets}
          addBudget={this.addBudget}
          updateBudget={this.updateBudget}
          deleteBudget={this.deleteBudget}
        />
        <ExpensesList
          loading={this.state.loading}
          budgets={this.state.budgets}
          addBudget={this.addBudget}
          updateBudget={this.updateBudget}
          deleteBudget={this.deleteBudget}
        />
      </>
    );
  }
}
