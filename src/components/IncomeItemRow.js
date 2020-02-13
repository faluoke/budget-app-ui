import React, { useState } from "react";
import StyledBudget, { StyledBudgetInputs } from "../styles/StyledBudget";
import DeleteBudgetItem from "./DeleteBudgetItem";

export default function ExpenseItemRow(props) {
  const [inputs, setInputs] = useState({
    name: props.name,
    type: props.type,
    planned: props.planned,
    received: props.received
  });
  const [active, setActive] = useState({
    status: ""
  });
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
      props.updateBudget(
        inputs.name,
        inputs.type,
        inputs.planned,
        inputs.received,
        props.id
      );
      setActive({
        statue: ""
      });
    }
  };

  const handleDivClick = () => {
    setActive({
      status: "active"
    });
  };

  const displayDeleteButton = () => {
    if (active.status === "active") {
      return (
        <DeleteBudgetItem deleteBudget={props.deleteBudget} id={props.id} />
      );
    }
  };

  return (
    <StyledBudget onClick={handleDivClick}>
      {displayDeleteButton()}
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
          name="planned"
          value={inputs.planned}
          onChange={event => handleInputChange(event)}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
        />
      </div>
      <div>
        <StyledBudgetInputs
          name="received"
          value={inputs.received}
          onChange={event => handleInputChange(event)}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
        />
      </div>
    </StyledBudget>
  );
}
