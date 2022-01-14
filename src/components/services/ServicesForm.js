import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CancelButton } from "../button/CancelButton";
import { MainButton } from "../button/MainButton";
import { SearchInput } from "./SearchInput";

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

export const ServicesForm = ({
  services,
  onSubmit,
  gridArea,
  editingServices,
  onCancel,
}) => {
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedService, setSelectedService] = useState(undefined);
  const [filteredServices, setFilteredServices] = useState([...services]);

  useEffect(() => {
    const filteredServices = services.filter((service) =>
      service.name.toLowerCase().includes(serviceSearch.toLowerCase())
    );
    setFilteredServices(filteredServices);
  }, [serviceSearch, services]);

  const onServiceInputChange = (serviceName) => {
    setSelectedService(undefined);
    setServiceSearch(serviceName);
  };

  const onServiceSelected = (service) => {
    setSelectedService(service);
    setServiceSearch(service.name);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      selectedService,
      id: editingServices?.id,
    });

    setSelectedService(undefined);
    setServiceSearch("");
}

  const onFormCancel = (e) => {
    e.preventDefault();
    setServiceSearch("");
    onCancel();
  };

  return (
    <StyledForm gridArea={gridArea}>
      <SearchInput
        label="Serviço:"
        id="service"
        value={serviceSearch}
        onChange={onServiceInputChange}
        onSelect={onServiceSelected}
        options={filteredServices}
        gridArea="service"
      />
      <ButtonArea>
        <CancelArea onCancel={onFormCancel} />
        <SubmitArea
          label={editingServices ? "Editar" : "Editar"}
          disabled={!(selectedService)}
          onClick={onFormSubmit}
        />
      </ButtonArea>
    </StyledForm>
  );
};
