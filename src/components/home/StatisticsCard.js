import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledStatistics = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0 32px;
  border-radius: 10px;
  height: 72px;
  box-shadow: 0 0 25px -5px #ffd6e9;
  text-decoration: none;
  color: #363635;

  &:hover {
    box-shadow: none;
  }
`;

export const StatisticsCard = ({ to, label, data }) => {
  return (
    <StyledStatistics to={to}>
      <div>{label}:</div>
      <div>{data}</div>
    </StyledStatistics>
  );
};
