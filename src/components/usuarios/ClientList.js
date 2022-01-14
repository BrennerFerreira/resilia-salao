import React from "react";
import styled from "styled-components";
import { Edit } from "../edit/Edit";
import { Remove } from "../remove/Remove";

const StyledUl = styled.ul`
  grid-area: clients;
`;

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  grid-template-areas:
    "clientTitle emailTitle . ."
    "client email edit remove";
  ${(props) =>
    !props.isTitle &&
    `&:hover {
    background-color: #fe5c265e;
  }`}
  height: 40px;
`;

const AddClient = styled.div`
  grid-area: client;
  justify-self: center;
`;

const AddClientEmail = styled.div`
  grid-area: email;
  justify-self: center;
`;

const AddClientTitle = styled.div`
  grid-area: clientTitle;
  font-weight: bold;
  justify-self: center;
`;

const AddEmailTitle = styled.div`
  grid-area: emailTitle;
  font-weight: bold;
  justify-self: center;
`;

const ClientRemove = styled.div`
  grid-area: remove;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

const ClientEdit = styled.div`
  grid-area: edit;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ClientList = ({ clients, onRemoveClient, onEditClient }) => {
  const onRemove = (id) => {
    onRemoveClient(id);
  };

  const onEdit = (add) => {
    onEditClient(add);
  };

  return (
    <StyledUl>
      <StyledLi key="title" isTitle>
        <AddClientTitle>Cliente</AddClientTitle>
        <AddEmailTitle>E-mail</AddEmailTitle>
      </StyledLi>
      {clients.map((client) => {
        return (
          <StyledLi key={client.id}>
            <AddClient>{client.name}</AddClient>
            <AddClientEmail>{client.email}</AddClientEmail>
            <ClientEdit>
              <Edit onClick={(e) => onEdit(client)} />
            </ClientEdit>
            <ClientRemove>
              <Remove onClick={(e) => onRemove(client.id)} />
            </ClientRemove>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
