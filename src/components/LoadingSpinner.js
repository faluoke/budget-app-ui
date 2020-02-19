import React from "react";
import { StyledSpinner, SpinnerDiv } from "../styles/StyledSpinner";

export default function BudgetDetail() {
  return (
    <StyledSpinner>
      <SpinnerDiv>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerDiv>
    </StyledSpinner>
  );
}
