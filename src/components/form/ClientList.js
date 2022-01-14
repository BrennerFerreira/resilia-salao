import React from "react";
import styled from "styled-components";
import { Edit } from "../edit/Edit";
import { Remove } from "../remove/Remove";


const StyledUl = styled.ul`
  grid-area: users;
`;

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 1fr 1fr;
  grid-template-areas:
    "clientTitle . ."
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

const AddClientTitle = styled.div`
  grid-area: clientTitle;
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

export const ClientList = ({
  Clients,
  onRemoveClient,
  onEditClient,
}) => {
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
      </StyledLi>
      {AddClient.map((sch) => {
        return (
          <StyledLi key={sch.id}>
            <AddClient>{sch.user.name}</AddClient>
          <ClientRemove>
              <Remove onClick={() => onRemove(sch.id)} />
          </ClientRemove>
            <ClientEdit>
              <Edit onClick={(e) => onEdit(sch)} />
            </ClientEdit>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
