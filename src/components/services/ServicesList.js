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
    "servicesTitle employeeTitle priceTitle . ."
    "services employee price edit remove";
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

const Employee = styled.div`
  grid-area: employee;
  justify-self: center;
`;

const Price = styled.div`
  grid-area: price;
  justify-self: center;
`;

const ServicesTitle = styled.div`
  grid-area: servicesTitle;
  font-weight: bold;
  justify-self: center;
`;

const EmployeeTitle = styled.div`
  grid-area: employeeTitle;
  font-weight: bold;
  justify-self: center;
`;

const PriceTitle = styled.div`
  grid-area: priceTitle;
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
        <EmployeeTitle>Funcionário</EmployeeTitle>
        <PriceTitle>Preço</PriceTitle>
      </StyledLi>
      {services.map((service) => {
        return (
          <StyledLi key={service.id}>
            <Services>{service.name}</Services>
            <Employee>{service.employeeName}</Employee>
            <Price>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(service.price)}
            </Price>
            <ServicesRemove>
              <Remove onClick={() => onRemove(service.id)} />
            </ServicesRemove>
            <ServicesEdit>
              <Edit onClick={(e) => onEdit(service)} />
            </ServicesEdit>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
