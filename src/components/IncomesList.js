import React from "react";
import IncomeItemRow from "./IncomeItemRow";
import {
  StyledBudgetListHeader,
  StyledBugetList
} from "../styles/StyledBudgetsList";
import AddBudgetItem from "./AddBudgetItem";

export default function IncomesList(props) {
  return (
    <StyledBugetList>
      <StyledBudgetListHeader>
        <h1>Income</h1>
        <h1>Type</h1>
        <h1>Amount</h1>
      </StyledBudgetListHeader>
      {props.budgets.map(budget => {
        if (budget.type === "income") {
          return (
            <IncomeItemRow
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
      <AddBudgetItem addBudget={props.addBudget} type="income">
        Add
      </AddBudgetItem>
    </StyledBugetList>
  );
}