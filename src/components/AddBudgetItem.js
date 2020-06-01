import React from "react";
import { StyledButton } from "../styles/StyledBudget";

export default function AddBudgetItem(props) {
  const handleOnClick = () => {
    if (props.type === "income") {
      props.addBudget("Paycheck", props.type, 0, 0);
    } else {
      props.addBudget("Label", props.type, 0, 0);
    }
  };
  return (
    <footer className="card-footer">
      <StyledButton className="card-footer-item" onClick={handleOnClick}>
        Add Item
      </StyledButton>
    </footer>
  );
}
