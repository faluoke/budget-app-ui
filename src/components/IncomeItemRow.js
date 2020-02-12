import React, { useState } from "react";
import StyledBudget, { StyledBudgetInputs } from "../styles/StyledBudget";
import DeleteBudgetItem from "./DeleteBudgetItem";

export default function ExpenseItemRow(props) {
  const [inputs, setInputs] = useState({
    name: props.name,
    type: props.type,
    amount: props.amount
  });
  const [active, setActive] = useState("");
  const handleInputChange = event => {
    const { name, value } = event.target;
    const clone = { ...inputs };
    clone[name] = value;
    setInputs(clone);
  };
  const handleInputOnFocus = event => {
    event.target.select();
  };
  const handleInputOnBlur = event => {
    if (event.target.value !== props[event.target.name]) {
      props.updateBudget(inputs.name, inputs.type, inputs.amount, props.id);
    }
  };

  const handleDivOnClick = () => {
    setActive({ status: "active" });
  };

  return (
    <StyledBudget onClick={handleDivOnClick} active={active.status}>
      <div>
        <DeleteBudgetItem deleteBudget={props.deleteBudget} id={props.id} />
      </div>
      <div>
        <StyledBudgetInputs
          name="name"
          value={inputs.name}
          onChange={event => handleInputChange(event)}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
        />
      </div>
      <div>
        <StyledBudgetInputs
          name="type"
          value={inputs.type}
          onChange={event => handleInputChange(event)}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
        />
      </div>
      <div>
        <StyledBudgetInputs
          name="amount"
          value={inputs.amount}
          onChange={event => handleInputChange(event)}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
        />
      </div>
    </StyledBudget>
  );
}
