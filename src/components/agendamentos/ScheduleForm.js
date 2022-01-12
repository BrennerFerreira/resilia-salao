import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CancelButton } from "../button/CancelButton";
import { MainButton } from "../button/MainButton";
import { DateTimeInput } from "../input/input";
import { SearchInput } from "./SearchInput";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const StyledForm = styled.form`
  grid-area: ${(props) => props.gridArea};
  display: grid;
  grid-template-areas:
    "client service date"
    ". . buttons";
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  grid-area: buttons;
  display: grid;
  grid-template-areas: "cancel submit";
  justify-content: space-between;
`;

const CancelArea = styled(CancelButton)`
  grid-area: cancel;
`;

const SubmitArea = styled(MainButton)`
  grid-area: submit;
`;

export const ScheduleForm = ({
  users,
  services,
  onSubmit,
  gridArea,
  editingSchedule,
  onCancel,
}) => {
  const [userSearch, setUserSearch] = useState("");
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState(
    formatDate(new Date())
  );
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [selectedService, setSelectedService] = useState(undefined);
  const [filteredUsers, setFilteredUsers] = useState([...users]);
  const [filteredServices, setFilteredServices] = useState([...services]);

  useEffect(() => {
    setSelectedUser(editingSchedule?.user);
    setUserSearch(editingSchedule?.user.name || "");
    setSelectedService(editingSchedule?.service);
    setServiceSearch(editingSchedule?.service.name || "");
    console.log(editingSchedule);
    setSelectedDateTime(
      editingSchedule?.data
        ? formatDate(new Date(editingSchedule.data))
        : formatDate(new Date())
    );
  }, [editingSchedule]);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(userSearch.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  }, [userSearch, users]);

  useEffect(() => {
    const filteredServices = services.filter((service) =>
      service.name.toLowerCase().includes(serviceSearch.toLowerCase())
    );
    setFilteredServices(filteredServices);
  }, [serviceSearch, services]);

  const onUserInputChange = (userName) => {
    setSelectedUser(undefined);
    setUserSearch(userName);
  };

  const onUserSelected = (user) => {
    setSelectedUser(user);
    setUserSearch(user.name);
  };

  const onServiceInputChange = (serviceName) => {
    setSelectedService(undefined);
    setServiceSearch(serviceName);
  };

  const onServiceSelected = (service) => {
    setSelectedService(service);
    setServiceSearch(service.name);
  };

  const onDateInputChange = (dateString) => {
    setSelectedDateTime(dateString);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      selectedUser,
      selectedDateTime,
      selectedService,
      id: editingSchedule?.id,
    });

    setSelectedUser(undefined);
    setUserSearch("");
    setSelectedService(undefined);
    setServiceSearch("");
    setSelectedDateTime(formatDate(new Date()));
  };

  const onFormCancel = (e) => {
    e.preventDefault();
    setUserSearch("");
    setServiceSearch("");
    setSelectedDateTime(formatDate(new Date()));
    onCancel();
  };

  return (
    <StyledForm gridArea={gridArea}>
      <SearchInput
        label="Cliente:"
        id="client"
        value={userSearch}
        onChange={onUserInputChange}
        onSelect={onUserSelected}
        options={filteredUsers}
        gridArea="client"
      />
      <SearchInput
        label="Serviço:"
        id="service"
        value={serviceSearch}
        onChange={onServiceInputChange}
        onSelect={onServiceSelected}
        options={filteredServices}
        gridArea="service"
      />
      <DateTimeInput
        gridArea="date"
        id="date"
        label="Horário"
        value={selectedDateTime}
        onChange={onDateInputChange}
      />
      <ButtonArea>
        <CancelArea onCancel={onFormCancel} />
        <SubmitArea
          label={editingSchedule ? "Editar" : "Agendar"}
          disabled={!(selectedUser && selectedService)}
          onClick={onFormSubmit}
        />
      </ButtonArea>
    </StyledForm>
  );
};
