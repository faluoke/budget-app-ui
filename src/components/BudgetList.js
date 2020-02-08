import React from "react";
import Budget from "./Budget";
import StyledBudgetList from "../styles/StyledBudgetList";
import StyledBudget from "../styles/StyledBudget";

export default function budgetList(props) {
  return (
    <StyledBudgetList>
      {props.budgets.map(budget => {
        return (
          <>
            <Budget
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
