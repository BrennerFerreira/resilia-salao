import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 40px;
  width: 120px;
  border: none;
  color: #fff;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? "#7ebc89" : "#fe5d26")};
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0 5px 15px - 5px #fe5c26b7"};
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    box-shadow: none;
  }
`;

export const MainButton = ({ label, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
