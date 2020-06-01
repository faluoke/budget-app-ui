import React, { useState, createContext } from "react";

export const BudgetContext = createContext({});

export const BudgetProvider = (props) => {
  const [budget, setBudget] = useState();

  return (
    <BudgetContext.Provider value={[budget, setBudget]}>
      {props.children}
    </BudgetContext.Provider>
  );
};
