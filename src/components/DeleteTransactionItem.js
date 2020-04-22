import React from "react";
import { StyledButton } from "../styles/StyledBudget";

export default function DeleteTransactionItem(props) {
  const handleOnClick = () => {
    props.deleteTransaction(props.id);
  };
  return <StyledButton onClick={handleOnClick}>Delete</StyledButton>;
}
