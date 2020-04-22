import React from "react";
import {
  StyledBugetList,
  StyledBudgetListHeader,
  StyledBudgetDetailH3
} from "../styles/StyledBudgetsList";

import AddTransactions from "./AddTransactions";

export default function BudgetDetail(props) {
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
        {props.transactions.map(transaction => {
          if (props.budgetItem === "") {
            transactionCount = props.transactions.length;
            return (
              <li key={transaction._id}>
                {transaction.name} - ${transaction.amount}
              </li>
            );
          } else if (props.budgetItem.id === transaction.budgetId) {
            debugger;
            transactionCount = props.budgetItem.length;
            return (
              <li key={transaction._id}>
                {transaction.name} - ${transaction.amount}
              </li>
            );
          } else {
            return null;
          }
        })}
        {/* {displayTransactions()} */}
      </ul>
    </StyledBugetList>
  );
}
