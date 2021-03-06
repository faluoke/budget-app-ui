import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import IncomesList from "../components/IncomesList";
import ExpensesList from "../components/ExpensesList";
import BudgetDetail from "../components/BudgetDetail";
import MobileNav from "../components/MobileNav";
import Transactions from "../components/Transactions";
import { Redirect } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const BudgetContainer = styled.div`
  display: flex;
  z-index: -1;
`;

export default class Dashboard extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      budgets: [],
      transactions: [],
      loading: true,
      budgetItem: "",
      // status is active when a budget item is clicked on and empty when is not clicked
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
      .get("https://master-budget-app.herokuapp.com/api/budgets", {
        headers: {
          "auth-token": localStorage.getItem("userInfo"),
          "user-id": sessionStorage.getItem("email"),
        },
      })
      .then((response) => {
        if (response.data) {
          let budgetsClone = this.state.budgets.slice();
          budgetsClone = response.data;
          this.setState({
            budgets: budgetsClone,
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addBudget = (name, type, planned, received) => {
    axios
      .post(
        "https://master-budget-app.herokuapp.com/api/budget/create",
        {
          name: name,
          type: type,
          planned: planned,
          received: received,
          userId: sessionStorage.getItem("email"),
        },
        {
          headers: {
            "auth-token": localStorage.getItem("userInfo"),
          },
        }
      )
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
      .put(
        `https://master-budget-app.herokuapp.com/api/budget/update/${id}`,
        {
          name: name,
          type: type,
          planned: planned,
          received: received,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("userInfo"),
          },
        }
      )
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
      .delete(
        `https://master-budget-app.herokuapp.com/api/budget/delete/${id}`,
        {
          headers: {
            "auth-token": localStorage.getItem("userInfo"),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          this.fetchData();
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
      .get("https://master-budget-app.herokuapp.com/api/transactions", {
        headers: {
          "auth-token": localStorage.getItem("userInfo"),
          "user-id": sessionStorage.getItem("email"),
        },
      })
      .then((response) => {
        if (response.data) {
          let transactionsClone = this.state.transactions.slice();
          transactionsClone = response.data;
          this.setState({
            transactions: transactionsClone,
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addTransaction = (name, type, amount, id) => {
    axios
      .post(
        "https://master-budget-app.herokuapp.com/api/transaction/create",
        {
          name,
          type,
          amount,
          budgetId: id,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("userInfo"),
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          this.fetchData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteTransaction = (id) => {
    axios
      .delete(
        `https://master-budget-app.herokuapp.com/api/transaction/delete/${id}`,
        {
          headers: {
            "auth-token": localStorage.getItem("userInfo"),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          this.fetchData();
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleLogoutOnClick = () => {
    localStorage.removeItem("userInfo");
    const { history } = this.props;
    history.push("/");
  };

  fetchData = () => {
    this.fetchBudgets();
    this.fetchTransactions();
  };

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted === true) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (!localStorage.getItem("userInfo")) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <nav className="level">
          <div className="level-item has-text-centered">
            <Title>Your Budget</Title>
          </div>
          <div className="level-right">
            <button
              onClick={this.handleLogoutOnClick}
              style={{ marginRight: "30px" }}
              className="button"
            >
              Logout
            </button>
          </div>
        </nav>

        <div className="columns is-mobile">
          <div className="column">
            <div className="column">
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
            </div>
            <div className="column">
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
          </div>

          <div className="column is-one-third-fullhd is-two-fifths-widescreen is-two-fifths-desktop desktop">
            {this.state.budgetItem === "" ? (
              ""
            ) : (
              <div className="column">
                <BudgetDetail id={this.state.budgetItem} />
              </div>
            )}

            <div className="column">
              <Transactions
                status={this.state.status}
                budgetItem={this.state.budgetItem}
                transactions={this.state.transactions}
                addTransaction={this.addTransaction}
                deleteTransaction={this.deleteTransaction}
              />
            </div>
          </div>
          <MobileNav />
        </div>
      </>
    );
  }
}
