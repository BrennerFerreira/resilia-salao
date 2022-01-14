import { useEffect, useState } from "react";
import styled from "styled-components";
import { CancelButton } from "../button/CancelButton";
import { MainButton } from "../button/MainButton";
import { TextInput } from "../input/input";

const StyledSubtitle = styled.h4`
  grid-area: subtitle;
`;

const StyledForm = styled.form`
  grid-area: form;
  display: flex;
  justify-content: space-between;
`;

export const Form = ({ onSubmit, onCancel, editingClient }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(editingClient?.name || "");
    setEmail(editingClient?.email || "");
  }, [editingClient]);

  function cadastrarCliente(e) {
    e.preventDefault();
    onSubmit(name, email, editingClient?.id);
  }

  const onFormCancel = () => {
    setName("");
    setEmail("");
    onCancel();
  };

  return (
    <>
      <StyledSubtitle>Cadastro de cliente:</StyledSubtitle>
      <StyledForm>
        <TextInput id="name" label="Nome" value={name} onChange={setName} />
        <TextInput
          id="email"
          label="E-mail"
          value={email}
          onChange={setEmail}
        />
        <CancelButton onCancel={onFormCancel} />
        <MainButton
          label={editingClient ? "Editar" : "Enviar"}
          onClick={cadastrarCliente}
          disabled={!(name && email)}
        />
      </StyledForm>
    </>
  );
};
