import React from "react";
import ExpenseItemRow from "./ExpenseItemRow";
import AddBudgetItem from "./AddBudgetItem";
import LoadingSpinner from "./LoadingSpinner";

export default function ExpensesList(props) {
  return (
    <div className="card">
      <header className="card-header">
        <h1 className="card-header-title">Expenses</h1>
        <h1 className="card-header-title">Planned</h1>
        <h1 className="card-header-title">Spent</h1>
      </header>
      {props.loading ? (
        <LoadingSpinner />
      ) : (
        props.budgets.map((budget) => {
          if (budget.type === "debt" && props.loading === false) {
            return (
              <ExpenseItemRow
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
      <AddBudgetItem addBudget={props.addBudget} type="debt">
        Add
      </AddBudgetItem>
    </div>
  );
}
