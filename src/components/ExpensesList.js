import React from "react";
import ExpenseItemRow from "./ExpenseItemRow";
import StyledBudgetList from "../styles/StyledBudgetList";

export default function budgetList(props) {
  return (
    <StyledBudgetList>
      {props.budgets.map(budget => {
        return (
          <>
            <ExpenseItemRow
              key={budget._id}
              id={budget._id}
              name={budget.name}
              type={budget.type}
              amount={budget.amount}
            />
          </>
        );
      })}
    </StyledBudgetList>
  );
}
