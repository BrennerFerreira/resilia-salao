import React from "react";
import styled from "styled-components";
import { ReactComponent as RemoveIcon } from "./remove.svg";

const IconDiv = styled.div`
  align-self: center;
  justify-self: center;
  height: 16px;
`;

export const Remove = ({ onClick }) => {
  return (
    <IconDiv onClick={onClick}>
      <RemoveIcon />
    </IconDiv>
  );
};
