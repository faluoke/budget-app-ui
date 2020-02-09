import React from "react";
import StyledBudget from "../styles/StyledBudget";

export default function Budget(props) {
  return (
    <StyledBudget>
      <div>
        <input value={props.name} />
      </div>
      <div>
        <input value={props.type} />
      </div>
      <div>
        <input value={props.amount} />
      </div>
    </StyledBudget>
  );
}
