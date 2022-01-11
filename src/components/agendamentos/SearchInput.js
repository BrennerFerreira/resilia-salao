import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../input/input";

const StyledUl = styled.ul`
  width: 336px;
  background-color: #fff;
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
`;
const StyledLi = styled.li`
  margin: 0;
  padding: 8px 16px;

  &:hover {
    background-color: #faedca;
    cursor: pointer;
  }
`;

export const SearchInput = ({
  label,
  id,
  value,
  onChange,
  options,
  onSelect,
}) => {
  const [showList, setShowList] = useState(false);

  const OptionsList = () => {
    return (
      <StyledUl>
        {options.slice(0, 5).map((opt) => {
          const onOptionSelected = () => {
            setShowList(false);
            onSelect(opt);
          };

          return (
            <StyledLi key={opt.email} onClick={onOptionSelected}>
              {opt.name} ({opt.email})
            </StyledLi>
          );
        })}
      </StyledUl>
    );
  };

  const showOptionsList = () => {
    setShowList(true);
  };

  const hideOptionsList = () => {
    setShowList(false);
  };

  return (
    <div>
      <TextInput
        label={label}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={showOptionsList}
        onBlur={hideOptionsList}
      />
      {showList && <OptionsList />}
    </div>
  );
};
