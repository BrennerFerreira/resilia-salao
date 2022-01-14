import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNextSchedule = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #fff;
  margin: 32px;
  padding: 16px 0;
  border-radius: 10px;
  box-shadow: 0 0 25px -5px #ffd6e9;
  text-decoration: none;
  color: #363635;

  &:hover {
    box-shadow: none;
  }
`;

const NextScheduleData = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;

const NextScheduleDataColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NextSchedule = ({ user, service, data }) => {
  return (
    <StyledNextSchedule to="/agendamentos">
      <div>Próximo atendimento: </div>
      <NextScheduleData>
        <NextScheduleDataColumn>
          <div>Cliente:</div>
          <div>{user.name}</div>
        </NextScheduleDataColumn>
        <NextScheduleDataColumn>
          <div>Serviço:</div>
          <div>{service.name}</div>
        </NextScheduleDataColumn>
        <NextScheduleDataColumn>
          <div>Valor:</div>
          <div>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(service.price)}
          </div>
        </NextScheduleDataColumn>
        <NextScheduleDataColumn>
          <div>Horário:</div>
          <div>{new Date(data).toLocaleString()}</div>
        </NextScheduleDataColumn>
      </NextScheduleData>
    </StyledNextSchedule>
  );
};
