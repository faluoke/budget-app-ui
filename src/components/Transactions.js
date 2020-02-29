import React from "react";
import {
  StyledBugetList,
  StyledBudgetListHeader,
  StyledBudgetDetailH3
} from "../styles/StyledBudgetsList";

import AddTransactions from "./AddTransactions";

export default function BudgetDetail(props) {
  return (
    <StyledBugetList className="transactions">
      <StyledBudgetListHeader>
        <StyledBudgetDetailH3>
          {props.transactions.length} Transactions
        </StyledBudgetDetailH3>
        <StyledBudgetDetailH3>
          <AddTransactions />
        </StyledBudgetDetailH3>
      </StyledBudgetListHeader>
      <ul>
        {props.transactions.map(transaction => {
          return (
            <li key={transaction._id}>
              {transaction.name} - ${transaction.amount}
            </li>
          );
        })}
      </ul>
    </StyledBugetList>
  );
}
