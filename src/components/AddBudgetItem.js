import React from "react";
import StyledBudget, { StyledButton } from "../styles/StyledBudget";

export default function AddBudgetItem(props) {
  const handleOnClick = () => {
    props.addBudget("Paycheck", props.type, 0);
  };
  return (
    <StyledBudget>
      <div>
        <StyledButton onClick={handleOnClick}>Add Item</StyledButton>
      </div>
    </StyledBudget>
  );
}