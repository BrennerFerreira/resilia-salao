import React from "react";
import styled from "styled-components";

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border: none;
  padding: 8px;
  height: 24px;
  width: ${(props) => (props.isPrice ? "80px" : "320px")};

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
      />
    </InputArea>
  );
};

export const PriceInput = ({ label, id, value, onChange }) => {
  const onChangeInput = (e) => {
    const value = +e.target.value || 0;
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);

    onChange(formatted);
  };
  return (
    <InputArea>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        id={id}
        isPrice
        type="number"
        step={0.01}
        value={value}
        onChange={onChangeInput}
      />
    </InputArea>
  );
};

export const DateTimeInput = ({ label, id, value, onChange }) => {
  const onDateChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <InputArea>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        type="datetime-local"
        value={value}
        onChange={onDateChange}
      />
    </InputArea>
  );
};
