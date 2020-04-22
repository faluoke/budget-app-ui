import React, { useState } from "react";
import ModalLauncher from "../components/ModalLauncher";

export default function AddTransactions(props) {
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    amount: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    const clone = { ...inputs };
    clone[name] = value;
    setInputs(clone);
  };

  return (
    <>
      <ModalLauncher
        title="Add a Transaction"
        buttonName="Add a transaction"
        data={{ name: inputs.name, type: inputs.type, amount: inputs.amount }}
        budgetId={props.budgetId}
        addTransaction={props.addTransaction}
      >
        <input
          name="name"
          type="text"
          onChange={event => handleInputChange(event)}
        />
        <input
          name="type"
          type="text"
          onChange={event => handleInputChange(event)}
        />
        <input
          name="amount"
          type="text"
          onChange={event => handleInputChange(event)}
        />
      </ModalLauncher>
    </>
  );
}
