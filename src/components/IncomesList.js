import React from "react";
import IncomeItemRow from "./IncomeItemRow";
import AddBudgetItem from "./AddBudgetItem";
import LoadingSpinner from "./LoadingSpinner";

export default function IncomesList(props) {
  return (
    <div className="card">
      <header className="card-header">
        <h1 className="card-header-title">Income</h1>
        <h1 className="card-header-title">Planned</h1>
        <h1 className="card-header-title">Received</h1>
      </header>
      {props.loading ? (
        <LoadingSpinner />
      ) : (
        props.budgets.map((budget) => {
          if (budget.type === "income" && props.loading === false) {
            return (
              <IncomeItemRow
                onStatusChange={props.onStatusChange}
                status={props.status}
                key={budget._id}
                id={budget._id}
                name={budget.name}
                type={budget.type}
                planned={budget.planned.toString()}
                received={budget.received.toString()}
                updateBudget={props.updateBudget}
                deleteBudget={props.deleteBudget}
                handleSetBudgetItemId={props.handleSetBudgetItemId}
                calculateTotal={props.calculateTotal}
                transactions={props.transactions.filter((transaction) => {
                  return transaction.budgetId === budget._id;
                })}
              />
            );
          }
          return false;
        })
      )}
      <AddBudgetItem addBudget={props.addBudget} type="income">
        Add
      </AddBudgetItem>
    </div>
  );
}
