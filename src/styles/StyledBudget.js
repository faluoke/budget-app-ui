import styled from "styled-components";

const StyledBudget = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
`;

export const StyledBudgetInputs = styled.input.attrs({ type: "text" })`
  border-style: none;
  font-size: 1.2em;
  :hover {
    background: #f4f4f4;
    border: lightblue;
  }
  :focus {
    background: none;
  }
  ::selection {
    background: rgba(171, 233, 255, 0.4);
  }
`;

export const StyledAddBudgetButton = styled.button`
  border-style: none;
  background: none;
  cursor: pointer;
  font-size: 1.3em;
  color: #0091d9;
  :hover {
    color: #0173ab;
  }
`;

export default StyledBudget;
