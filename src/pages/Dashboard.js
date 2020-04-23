import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import IncomesList from "../components/IncomesList";
import ExpensesList from "../components/ExpensesList";
import BudgetDetail from "../components/BudgetDetail";
import Transactions from "../components/Transactions";
import { FlexColumn } from "../styles/StyledBudgetDetail";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const BudgetContainer = styled.div`
  display: flex;
  z-index= -1;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      budgets: [],
      transactions: [],
      loading: true,
      budgetItem: "",
      //status is active when a budget item is clicked on and empty when is not clicked
      status: "",
    };
  }

  // manage state

  onStatusChange = (value) => {
    if (this.state.status === "") {
      this.setState({
        status: value,
      });
    }
  };

  //budgets

  fetchBudgets = () => {
    axios
      .get("https://master-budget-app.herokuapp.com/api/budgets")
      .then((response) => {
        if (response.data) {
          let budgetsClone = this.state.budgets.slice();
          budgetsClone = response.data;
          this.setState({
            budgets: budgetsClone,
            loading: false,
          });
          console.log(this.state.budgets);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addBudget = (name, type, planned, received) => {
    axios
      .post("https://master-budget-app.herokuapp.com/api/budget/create", {
        name: name,
        type: type,
        planned: planned,
        received: received,
      })
      .then((response) => {
        if (response.status === 201) {
          this.fetchBudgets();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateBudget = (name, type, planned, received, id) => {
    axios
      .put(`https://master-budget-app.herokuapp.com/api/budget/update/${id}`, {
        name: name,
        type: type,
        planned: planned,
        received: received,
      })
      .then((response) => {
        if (response.status === 200) {
          this.fetchBudgets();
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteBudget = (id) => {
    axios
      .delete(`https://master-budget-app.herokuapp.com/api/budget/delete/${id}`)
      .then((response) => {
        if (response.status === 200) {
          this.fetchBudgets();
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // sets the budget item that has been clicked on
  handleSetBudgetItemId = (id, name, planned, received, type) => {
    this.setState({
      budgetItem: {
        id,
        name,
        planned,
        received,
        type,
      },
    });
  };

  calculateTotal = (transactions) => {
    let total = 0;
    transactions.map((transaction) => {
      total = Number(total) + Number(transaction.amount);
      return true;
    });
    return total;
  };

  // Transactions

  fetchTransactions = () => {
    axios
      .get("https://master-budget-app.herokuapp.com/api/transactions")
      .then((response) => {
        if (response.data) {
          let transactionsClone = this.state.transactions.slice();
          transactionsClone = response.data;
          this.setState({
            transactions: transactionsClone,
            loading: false,
          });
          console.log(this.state.transactions);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addTransaction = (name, type, amount, id) => {
    debugger;
    axios
      .post("https://master-budget-app.herokuapp.com/api/transaction/create", {
        name,
        type,
        amount,
        budgetId: id,
      })
      .then((response) => {
        if (response.status === 201) {
          this.fetchTransactions();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteTransaction = (id) => {
    axios
      .delete(
        `https://master-budget-app.herokuapp.com/api/transaction/delete/${id}`
      )
      .then((response) => {
        if (response.status === 200) {
          this.fetchTransactions();
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchBudgets();
    this.fetchTransactions();
  }

  onClick() {}

  render() {
    return (
      <>
        <Title>Your Budget</Title>
        <BudgetContainer>
          <div>
            <IncomesList
              onStatusChange={this.onStatusChange}
              status={this.state.status}
              loading={this.state.loading}
              budgets={this.state.budgets}
              addBudget={this.addBudget}
              updateBudget={this.updateBudget}
              deleteBudget={this.deleteBudget}
              handleSetBudgetItemId={this.handleSetBudgetItemId}
              calculateTotal={this.calculateTotal}
              transactions={this.state.transactions}
            />
            <ExpensesList
              onStatusChange={this.onStatusChange}
              status={this.state.status}
              loading={this.state.loading}
              budgets={this.state.budgets}
              addBudget={this.addBudget}
              updateBudget={this.updateBudget}
              deleteBudget={this.deleteBudget}
              handleSetBudgetItemId={this.handleSetBudgetItemId}
              calculateTotal={this.calculateTotal}
              transactions={this.state.transactions}
            />
          </div>
          <FlexColumn>
            {this.state.budgetItem === "" ? (
              ""
            ) : (
              <BudgetDetail id={this.state.budgetItem} />
            )}
            <Transactions
              status={this.state.status}
              budgetItem={this.state.budgetItem}
              transactions={this.state.transactions}
              addTransaction={this.addTransaction}
              deleteTransaction={this.deleteTransaction}
            />
          </FlexColumn>
        </BudgetContainer>
      </>
    );
  }
}
