import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Layout } from "../components/layout/Layout";
import { Loading } from "../components/loading/Loading";
import { ProductsForm } from "../components/products/ProductsForm";
import { ProductsList } from "../components/products/ProductsList";
import { getApiUrl } from "../utils/getApiUrl";

const Container = styled.main`
  display: grid;
  grid-template-areas:
    ". title title title title ."
    ". subtitle subtitle subtitle subtitle ."
    ". form form form form ."
    ". smallTitle smallTitle smallTitle smallTitle ."
    ". products products products products .";
`;

const StyledTitle = styled.h1`
  grid-area: title;
`;

const StyledSmallTitle = styled.h3`
  grid-area: smallTitle;
`;

const StyledSubtitle = styled.h3`
  grid-area: subtitle;
`;

export const Produtos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(undefined);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const url = getApiUrl("/products");
      const apiProducts = await axios.get(url);
      setProducts(apiProducts.data);
      setLoading(false);
    };

    getProducts();
  }, []);

  const onSubmit = async ({ name, preco, id }) => {
    setLoading(true);

    const url = getApiUrl("/products");

    if (editingProduct) {
      const editUrl = `${url}/${id}`;
      await axios.patch(editUrl, {
        name,
        preco,
      });
    } else {
      await axios.post(url, {
        name,
        preco,
      });
    }

    const apiProducts = await axios.get(url);
    setProducts(apiProducts.data);
    setEditingProduct(undefined);
    setLoading(false);
  };

  const onRemove = async (id) => {
    const idUrl = getApiUrl(`/products/${id}`);

    setLoading(true);
    await axios.delete(idUrl);
    const newProducts = [...products].filter((prod) => prod.id !== id);
    setProducts(newProducts);
    setLoading(false);
  };

  const onEdit = (product) => {
    setEditingProduct({
      id: product.id,
      name: product.name,
      preco: +(+product.preco).toFixed(2),
    });
  };

  const onCancel = () => {
    setEditingProduct(undefined);
  };

  return loading ? (
    <Loading />
  ) : (
    <Layout>
      <Container>
        <Helmet>
          <title>Resilia Salão | Produtos</title>
        </Helmet>
        <StyledTitle>Produtos</StyledTitle>
        <StyledSubtitle>Adicionar produto:</StyledSubtitle>
        <ProductsForm
          gridArea="form"
          products={products}
          onSubmit={onSubmit}
          editingProduct={editingProduct}
          onCancel={onCancel}
        />

        <StyledSmallTitle>Todos os produtos:</StyledSmallTitle>
        <ProductsList
          products={products}
          onRemoveProduct={onRemove}
          onEditProduct={onEdit}
        />
      </Container>
    </Layout>
  );
};
