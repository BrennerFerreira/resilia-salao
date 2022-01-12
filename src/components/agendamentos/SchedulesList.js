import React from "react";
import styled from "styled-components";
import { Edit } from "../edit/Edit";
import { Remove } from "../remove/Remove";

const StyledUl = styled.ul`
  grid-area: schedules;
`;

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 1fr 1fr;
  grid-template-areas:
    "clientTitle serviceTitle dateTitle . ."
    "client service date edit remove";
  ${(props) =>
    !props.isTitle &&
    `&:hover {
    background-color: #fe5c265e;
  }`}
  height: 40px;
`;

const ScheduleClient = styled.div`
  grid-area: client;
  justify-self: center;
`;

const ScheduleClientTitle = styled.div`
  grid-area: clientTitle;
  font-weight: bold;
  justify-self: center;
`;

const ScheduleService = styled.div`
  grid-area: service;
  justify-self: center;
`;

const ScheduleServiceTitle = styled.div`
  grid-area: serviceTitle;
  font-weight: bold;
  justify-self: center;
`;

const ScheduleDate = styled.div`
  grid-area: date;
  justify-self: center;
`;

const ScheduleDateTitle = styled.div`
  grid-area: dateTitle;
  font-weight: bold;
  justify-self: center;
`;

const ScheduleRemove = styled.div`
  grid-area: remove;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

const ScheduleEdit = styled.div`
  grid-area: edit;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const SchedulesList = ({
  schedules,
  onRemoveSchedule,
  onEditSchedule,
}) => {
  const onRemove = (id) => {
    onRemoveSchedule(id);
  };

  const onEdit = (schedule) => {
    onEditSchedule(schedule);
  };

  return (
    <StyledUl>
      <StyledLi key="title" isTitle>
        <ScheduleClientTitle>Cliente</ScheduleClientTitle>
        <ScheduleServiceTitle>Serviço</ScheduleServiceTitle>
        <ScheduleDateTitle>Data:</ScheduleDateTitle>
      </StyledLi>
      {schedules.map((sch) => {
        return (
          <StyledLi key={sch.id}>
            <ScheduleClient>{sch.user.name}</ScheduleClient>
            <ScheduleService>{sch.service.name}</ScheduleService>
            <ScheduleDate>{new Date(sch.data).toLocaleString()}</ScheduleDate>
            <ScheduleRemove>
              <Remove onClick={() => onRemove(sch.id)} />
            </ScheduleRemove>
            <ScheduleEdit>
              <Edit onClick={(e) => onEdit(sch)} />
            </ScheduleEdit>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
