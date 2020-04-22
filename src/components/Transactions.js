import React from "react";
import {
  StyledBugetList,
  StyledBudgetListHeader,
  StyledBudgetDetailH3,
} from "../styles/StyledBudgetsList";
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
    <StyledBugetList className="transactions">
      <StyledBudgetListHeader>
        <StyledBudgetDetailH3>
          {transactionCount} Transactions
        </StyledBudgetDetailH3>
        <StyledBudgetDetailH3>{displayAddButton()}</StyledBudgetDetailH3>
      </StyledBudgetListHeader>
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
    </StyledBugetList>
  );
}
