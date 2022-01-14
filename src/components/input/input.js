import React from "react";
import styled from "styled-components";

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isPrice ? "80px" : "320px")};
  grid-area: ${(props) => props.gridArea};
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border: none;
  padding: 8px;
  height: 24px;

  &:focus {
    box-shadow: 2.5px 5px 15px -10px #36363585;
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const TextInput = ({ label, id, value, onChange, onFocus, onBlur }) => {
  const onChangeInput = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <InputArea>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        id={id}
        value={value}
        onChange={onChangeInput}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
      />
    </InputArea>
  );
};

export const PriceInput = ({ label, id, value, onChange }) => {
  const onChangeInput = (e) => {
    const textValue = e.target.value;
    onChange(+textValue);
  };

  return (
    <InputArea isPrice>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        id={id}
        type="number"
        step={0.01}
        value={value || ""}
        onChange={onChangeInput}
        autoComplete="off"
      />
    </InputArea>
  );
};

export const DateTimeInput = ({ label, id, value, onChange, gridArea }) => {
  const onDateChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <InputArea gridArea={gridArea}>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        id={id}
        type="datetime-local"
        value={value}
        onChange={onDateChange}
        autoComplete="off"
      />
    </InputArea>
  );
};
