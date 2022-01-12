import React from "react";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "./edit.svg";

const IconDiv = styled.div`
  align-self: center;
  justify-self: center;
  height: 16px;
`;

export const Edit = ({ onClick }) => {
  return (
    <IconDiv onClick={onClick}>
      <EditIcon />
    </IconDiv>
  );
};
