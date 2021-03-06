import styled from "styled-components";

export const StyledBugetList = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0.1, 0.1, 0.1, 0.1),
    0 6px 20px 0 rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  border-radius: 5px;
  margin: 20px 40px;
  min-width: 200px;
`;

export const StyledBudgetListHeader = styled.header`
  display: flex;
  justify-content: space-around;
  max-hight: 25%;
  overflow: auto;
`;

export const StyledBudgetDetailH3 = styled.h3`
  display: flex;
  flex-direction: column;
`;
