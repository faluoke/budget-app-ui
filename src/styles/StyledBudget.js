import styled from "styled-components";

const StyledBudget = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 10px;
  z-index: 1;
`;

export const StyledBudgetInputs = styled.input.attrs({ type: "text" })`
  border-style: none;
  padding: 10px;
  font-size: 1.2em;
  border-radius: 4px;
  width: 50%;
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

// export const StyledSpan = styled.span`
//   margin-top: 10px;
//   font-size: 1.3rem;
// `;

export const StyledButton = styled.button`
  border-style: none;
  background: none;
  cursor: pointer;
  font-size: 1.3em;
  margin: 0;
  color: #0091d9;
  :hover {
    color: #0173ab;
  }
`;

export default StyledBudget;
