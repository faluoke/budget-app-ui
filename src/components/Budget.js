import React from "react";
import StyledBudget from "../styles/StyledBudget";

export default function Budget(props) {
  return (
    <StyledBudget>
      <p contentEditable="true">{props.name}</p>
      <p>{props.type}</p>
      <p>{props.amount}</p>
    </StyledBudget>
  );
}
