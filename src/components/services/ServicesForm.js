import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CancelButton } from "../button/CancelButton";
import { MainButton } from "../button/MainButton";
import { PriceInput, TextInput } from "../input/input";

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
  const [serviceName, setServiceName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [price, setPrice] = useState(0.0);

  useEffect(() => {
    setServiceName(editingServices?.name || "");
    setEmployeeName(editingServices?.employeeName || "");
    setPrice(editingServices?.price || 0.0);
  }, [editingServices]);

  const onServicesInputChange = (serviceName) => {
    setServiceName(serviceName);
  };

  const onEmployeeInputChange = (employee) => {
    setEmployeeName(employee);
  };

  const onPriceChange = (newPrice) => {
    setPrice(newPrice);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      serviceName,
      employeeName,
      price,
      id: editingServices?.id,
    });
  };

  const onFormCancel = (e) => {
    e.preventDefault();
    setServiceName("");
    setEmployeeName("");
    setPrice(0.0);
    onCancel();
  };

  return (
    <StyledForm gridArea={gridArea}>
      <TextInput
        label="Serviço:"
        id="service"
        value={serviceName}
        onChange={onServicesInputChange}
        gridArea="service"
      />
      <TextInput
        label="Funcionário:"
        id="employee"
        value={employeeName}
        onChange={onEmployeeInputChange}
        gridArea="employee"
      />
      <PriceInput
        label="Valor:"
        id="price"
        value={price}
        onChange={onPriceChange}
        gridArea="price"
      />
      <ButtonArea>
        <CancelArea onCancel={onFormCancel} />
        <SubmitArea
          label={editingServices ? "Editar" : "Salvar"}
          disabled={!(serviceName && employeeName && price)}
          onClick={onFormSubmit}
        />
      </ButtonArea>
    </StyledForm>
  );
};
