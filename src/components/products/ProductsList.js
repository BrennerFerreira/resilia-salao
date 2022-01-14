import React from "react";
import styled from "styled-components";
import { Edit } from "../edit/Edit";
import { Remove } from "../remove/Remove";

const StyledUl = styled.ul`
  grid-area: products;
`;

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  grid-template-areas:
    "productsTitle  priceTitle . ."
    "products  price edit remove";
  ${(props) =>
    !props.isTitle &&
    `&:hover {
    background-color: #fe5c265e;
  }`}
  height: 40px;
`;

const Products = styled.div`
  grid-area: products;
  justify-self: center;
`;

const Price = styled.div`
  grid-area: price;
  justify-self: center;
`;

const ProductsTitle = styled.div`
  grid-area: productsTitle;
  font-weight: bold;
  justify-self: center;
`;

const PriceTitle = styled.div`
  grid-area: priceTitle;
  font-weight: bold;
  justify-self: center;
`;

const ProductsRemove = styled.div`
  grid-area: remove;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

const ProductsEdit = styled.div`
  grid-area: edit;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductsList = ({ products, onRemoveProducts, onEditProduct }) => {
  const onRemove = (id) => {
    onRemoveProducts(id);
  };

  const onEdit = (products) => {
    onEditProduct(products);
  };

  return (
    <StyledUl>
      <StyledLi key="title" isTitle>
        <ProductsTitle>Produto</ProductsTitle>
        <PriceTitle>Preço</PriceTitle>
      </StyledLi>
      {products.map((product) => {
        return (
          <StyledLi key={product.id}>
            <Products>{product.name}</Products>
            <Price>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(product.preco)}
            </Price>
            <ProductsRemove>
              <Remove onClick={() => onRemove(product.id)} />
            </ProductsRemove>
            <ProductsEdit>
              <Edit onClick={(e) => onEdit(product)} />
            </ProductsEdit>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
