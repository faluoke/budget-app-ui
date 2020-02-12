import React from "react";
import ExpenseItemRow from "./ExpenseItemRow";
import {
  StyledBugetList,
  StyledBudgetListHeader
} from "../styles/StyledBudgetsList";
import AddBudgetItem from "./AddBudgetItem";

export default function ExpensesList(props) {
  return (
    <StyledBugetList>
      <StyledBudgetListHeader>
        <h1>Expenses</h1>
        <h1>Type</h1>
        <h1>Amount</h1>
      </StyledBudgetListHeader>
      {props.budgets.map(budget => {
        if (budget.type === "debt") {
          return (
            <ExpenseItemRow
              key={budget._id}
              id={budget._id}
              name={budget.name}
              type={budget.type}
              amount={budget.amount.toString()}
              updateBudget={props.updateBudget}
              deleteBudget={props.deleteBudget}
            />
          );
        }
        return false;
      })}
      <AddBudgetItem addBudget={props.addBudget} type="debt">
        Add
      </AddBudgetItem>
    </StyledBugetList>
  );
}
