import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  color: #fe5d26;
  width: 120px;
  height: 40px;
  margin-top: 16px;
  border: none;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const CancelButton = ({ onCancel }) => {
  return <StyledButton onClick={onCancel}>Cancelar</StyledButton>;
};
