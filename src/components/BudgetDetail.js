import React from "react";
import {
  StyledBudgetListHeader,
  StyledBudgetDetailH3,
} from "../styles/StyledBudgetsList";

export default function BudgetDetail(props) {
  return (
    <div className="card">
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
      <div className="card-content">
        <div className="content is-medium">
          {props.id.received
            ? props.id.type === "income"
              ? `$${props.id.received} received`
              : `$${props.id.received} spent`
            : ""}
        </div>
      </div>
    </div>
  );
}
