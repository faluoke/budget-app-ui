import React from "react";
import {
  StyledBugetList,
  StyledBudgetListHeader,
  StyledBudgetDetailH3
} from "../styles/StyledBudgetsList";

export default function BudgetDetail(props) {
  return (
    <StyledBugetList>
      <StyledBudgetListHeader>
        <StyledBudgetDetailH3>Transactions</StyledBudgetDetailH3>
      </StyledBudgetListHeader>
    </StyledBugetList>
  );
}
