import React from "react";
import { Button } from "../styles/StyledBudgetDetail";
import { PopupForm } from "../styles/Popup";

export default function AddTransactions() {
  const handleOnClick = () => {
    console.log("123");
  };

  return (
    <>
      <Button onClick={handleOnClick}>Add Transaction</Button>{" "}
    </>
  );
}

function AddTransactionsForm() {
  return <PopupForm>Hi</PopupForm>;
}
