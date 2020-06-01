import React from "react";
import DeleteTransactionItem from "./DeleteTransactionItem";

import AddTransactions from "./AddTransactions";

export default function Transactions(props) {
  let transactionCount = "";

  const displayAddButton = () => {
    if (props.status === "active") {
      return (
        <AddTransactions
          budgetId={props.budgetItem.id}
          addTransaction={props.addTransaction}
        />
      );
    }
  };

  return (
    <div className="card transactions">
      <header className="card-header">
        <h1 className="card-header-title">{transactionCount} Transactions</h1>
        <h1 className="card-header-title">{displayAddButton()}</h1>
      </header>
      <div className="card-content">
        <div className="content is-medium">
          <ul>
            {props.transactions.map((transaction) => {
              if (props.budgetItem === "") {
                transactionCount = props.transactions.length;
                return (
                  <li key={transaction._id}>
                    {transaction.name} - ${transaction.amount}
                  </li>
                );
              } else if (props.budgetItem.id === transaction.budgetId) {
                transactionCount = props.budgetItem.length;
                return (
                  <li key={transaction._id}>
                    {transaction.name} - ${transaction.amount}
                    <DeleteTransactionItem
                      deleteTransaction={props.deleteTransaction}
                      id={transaction._id}
                    />
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
