import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../input/input";

const StyledUl = styled.ul`
  width: 320px;
  background-color: #fff;
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  box-shadow: 2.5px 5px 15px -10px #36363585;
  position: absolute;
`;
const StyledLi = styled.li`
  margin: 0;
  padding: 8px 16px;

  &:hover {
    background-color: #faedca;
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  grid-area: ${(props) => props.gridArea};
`;

export const SearchInput = ({
  label,
  id,
  value,
  onChange,
  options,
  onSelect,
  gridArea,
}) => {
  const [showList, setShowList] = useState(false);

  const onOptionSelected = (opt) => {
    onSelect(opt);
    setShowList(false);
  };

  const OptionsList = () => {
    return (
      <StyledUl>
        {options.slice(0, 5).map((opt) => {
          return (
            <StyledLi
              key={opt.id}
              tabIndex="0"
              onClick={(e) => onOptionSelected(opt)}
            >
              {opt.name} {opt.email && `(${opt.email})`}
            </StyledLi>
          );
        })}
      </StyledUl>
    );
  };

  const showOptionsList = () => {
    setShowList(true);
  };

  const hideOptionsList = (e) => {
    if (!e.relatedTarget) {
      setShowList(false);
    }
  };

  return (
    <StyledDiv gridArea={gridArea}>
      <TextInput
        label={label}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={showOptionsList}
        onBlur={hideOptionsList}
      />
      {showList && <OptionsList />}
    </StyledDiv>
  );
};
