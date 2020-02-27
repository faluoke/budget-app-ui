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
        <StyledBudgetDetailH3>
          <small>{props.id.type ? props.id.type : "Type"}</small>
          <span>{props.id.name}</span>
        </StyledBudgetDetailH3>
        <StyledBudgetDetailH3>
          <small>Planned</small>
          <span>{props.id.planned}</span>
        </StyledBudgetDetailH3>
      </StyledBudgetListHeader>
      <div>
        {props.id.received
          ? props.id.type === "income"
            ? `$${props.id.received} received`
            : `$${props.id.received} spent`
          : ""}
      </div>
    </StyledBugetList>
  );
}
