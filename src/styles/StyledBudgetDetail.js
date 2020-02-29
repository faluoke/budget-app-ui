import styled from "styled-components";

export const FlexColumn = styled.div`
  display: flex;
  flex-grow: 1;
  width: 20px;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  .transactions {
    overflow: auto;
    max-height: 200px;
  }
`;

export const Button = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  text-decoration: none;
  font-size: 1.3em;
  cursor: pointer;
  color: #f58331;
  border-style: none;
  border-radius: 3px;
`;
