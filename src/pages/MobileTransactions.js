import React, { useContext } from "react";
import MobileNav from "../components/MobileNav";
import { BudgetContext } from "../components/Context/BudgetContext";

function MobileTransactions(props) {
  const [budget] = useContext(BudgetContext);
  return (
    <div className="card transactions">
      <header className="card-header">
        <h1 className="card-header-title">Transactions</h1>
      </header>
      <div className="card-content">
        <div className="content is-medium">
          <ul>
            {budget.map((budgetItem) => {
              return (
                <li key={budgetItem._id}>
                  {budgetItem.type}: {budgetItem.name} - {budgetItem.amount}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default MobileTransactions;
