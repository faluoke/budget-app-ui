import React from "react";
import StyledBudget, { StyledButton } from "../styles/StyledBudget";

export default function DeleteBudgetItem(props) {
  const handleOnClick = () => {
    props.deleteBudget(props.id);
  };
  return (
    <StyledBudget>
      <div>
        <StyledButton onClick={handleOnClick}>Delete</StyledButton>
      </div>
    </StyledBudget>
  );
}
