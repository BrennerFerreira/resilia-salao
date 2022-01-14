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
  const [serviceSearch, setServicesSearch] = useState("");
  const [selectedServices, setSelectedServices] = useState(undefined);
  const [filteredServices, setFilteredServices] = useState([...services]);

  useEffect(() => {
    const filteredServices = services.filter((service) =>
      service.name.toLowerCase().includes(serviceSearch.toLowerCase())
    );
    setFilteredServices(filteredServices);
  }, [servicesSearch, services]);

  const onServicesInputChange = (serviceName) => {
    setSelectedServices(undefined);
    setServicesSearch(serviceName);
  };

  const onServicesSelected = (service) => {
    setSelectedServices(service);
    setServicesSearch(service.name);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      selectedServices,
      id: editingServices?.id,
    });

    setSelectedServices(undefined);
    setServicesSearch("");
}

  const onFormCancel = (e) => {
    e.preventDefault();
    setServicesSearch("");
    onCancel();
  };

  return (
    <StyledForm gridArea={gridArea}>
      <SearchInput
        label="Serviço:"
        id="service"
        value={servicesSearch}
        onChange={onServicesInputChange}
        onSelect={onServicesSelected}
        options={filteredServices}
        gridArea="service"
      />
      <ButtonArea>
        <CancelArea onCancel={onFormCancel} />
        <SubmitArea
          label={editingServices ? "Editar": "Servicos"}
          disabled={!(selectedServices)}
          onClick={onFormSubmit}
        />
      </ButtonArea>
    </StyledForm>
  );
};
