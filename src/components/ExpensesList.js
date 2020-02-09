import React from "react";
import ExpenseItemRow from "./ExpenseItemRow";
import {
  StyledExpensesList,
  StyledExpensesListHeader
} from "../styles/StyledExpensesList";

export default function ExpensesList(props) {
  return (
    <StyledExpensesList>
      <StyledExpensesListHeader>
        <h1>Name</h1>
        <h1>Type</h1>
        <h1>Amount</h1>
      </StyledExpensesListHeader>
      {props.budgets.map(budget => {
        return (
          <ExpenseItemRow
            key={budget._id}
            id={budget._id}
            name={budget.name}
            type={budget.type}
            amount={budget.amount.toString()}
            updateBudget={props.updateBudget}
          />
        );
      })}
    </StyledExpensesList>
  );
}
