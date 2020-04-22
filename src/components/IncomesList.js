import React from "react";
import IncomeItemRow from "./IncomeItemRow";
import {
  StyledBudgetListHeader,
  StyledBugetList,
} from "../styles/StyledBudgetsList";
import AddBudgetItem from "./AddBudgetItem";
import LoadingSpinner from "./LoadingSpinner";

export default function IncomesList(props) {
  return (
    <StyledBugetList>
      <StyledBudgetListHeader>
        <h1>Income</h1>
        <h1>Planned</h1>
        <h1>Received</h1>
      </StyledBudgetListHeader>
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
    </StyledBugetList>
  );
}
