import React from "react";
import StyledBudget, { StyledAddBudgetButton } from "../styles/StyledBudget";

export default function AddBudgetItem(props) {
  const handleOnClick = () => {
    props.addBudget("Paycheck", "income", 0);
  };
  return (
    <StyledBudget>
      <div>
        <StyledAddBudgetButton onClick={handleOnClick}>
          Add Item
        </StyledAddBudgetButton>
      </div>
    </StyledBudget>
  );
}
