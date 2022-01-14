import React from "react";
import styled from "styled-components";
import { Edit } from "../edit/Edit";
import { Remove } from "../remove/Remove";

const StyledUl = styled.ul`
  grid-area: services;
`;

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 1fr 1fr;
  grid-template-areas:
    "servicesTitle . ."
    "services edit remove";
  ${(props) =>
    !props.isTitle &&
    `&:hover {
    background-color: #fe5c265e;
  }`}
  height: 40px;
`;

const Services = styled.div`
  grid-area: services;
  justify-self: center;
`;

const ServicesTitle = styled.div`
  grid-area: serviceTitle;
  font-weight: bold;
  justify-self: center;
`;

const ServicesRemove = styled.div`
  grid-area: remove;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

const ServicesEdit = styled.div`
  grid-area: edit;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ServicesList = ({
  services,
  onRemoveServices,
  onEditServices,
}) => {
  const onRemove = (id) => {
    onRemoveServices(id);
  };

  const onEdit = (services) => {
    onEditServices(services);
  };

  return (
    <StyledUl>
      <StyledLi key="title" isTitle>
        <ServicesTitle>Serviço</ServicesTitle>
      </StyledLi>
      {services.map((sch) => {
        return (
          <StyledLi key={sch.id}>
            <Services>{sch.services.name}</Services>
            <ServicesRemove>
              <Remove onClick={() => onRemove(sch.id)} />
            </ServicesRemove>
            <ServicesEdit>
              <Edit onClick={(e) => onEdit(sch)} />
            </ServicesEdit>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
