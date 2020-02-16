import React from "react";
import styled from "styled-components";

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
`;

export default function LoadingSpinner() {
  return <StyledSpinner>Loading...</StyledSpinner>;
}
