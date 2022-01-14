import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CancelButton } from "../button/CancelButton";
import { MainButton } from "../button/MainButton";
import { PriceInput, TextInput } from "../input/input";

const StyledForm = styled.form`
  grid-area: ${(props) => props.gridArea};
  display: grid;
  grid-template-areas: "product price buttons";
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

export const ProductsForm = ({
  products,
  onSubmit,
  gridArea,
  editingProduct,
  onCancel,
}) => {
  const [name, setname] = useState("");
  const [preco, setPreco] = useState(0.0);

  useEffect(() => {
    setname(editingProduct?.name || "");
    setPreco(editingProduct?.preco || 0.0);
  }, [editingProduct]);

  const onProductInputChange = (name) => {
    setname(name);
  };

  const onPrecoChange = (newPreco) => {
    setPreco(newPreco);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      name,
      preco,
      id: editingProduct?.id,
    });
  };

  const onFormCancel = (e) => {
    e.preventDefault();
    setname("");
    setPreco(0.0);
    onCancel();
  };

  return (
    <StyledForm gridArea={gridArea}>
      <TextInput
        label="Produto:"
        id="product"
        value={name}
        onChange={onProductInputChange}
        gridArea="product"
      />
      <PriceInput
        label="Valor:"
        id="preco"
        value={preco}
        onChange={onPrecoChange}
        gridArea="preco"
      />
      <ButtonArea>
        <CancelArea onCancel={onFormCancel} />
        <SubmitArea
          label={editingProduct ? "Editar" : "Salvar"}
          disabled={!(name && preco)}
          onClick={onFormSubmit}
        />
      </ButtonArea>
    </StyledForm>
  );
};
