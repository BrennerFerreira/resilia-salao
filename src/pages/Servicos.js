import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Layout } from "../components/layout/Layout";
import { Loading } from "../components/loading/Loading";
import { ServicesForm } from "../components/services/ServicesForm";
import { ServicesList } from "../components/services/ServicesList";
import { getApiUrl } from "../utils/getApiUrl";

const Container = styled.main`
  display: grid;
  grid-template-areas:
    ". title title title title ."
    ". subtitle subtitle subtitle subtitle ."
    ". form form form form ."
    ". smallTitle smallTitle smallTitle smallTitle ."
    ". services services services services .";
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

export const Servicos = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingServices, setEditingServices] = useState(undefined);

  useEffect(() => {
    const getServices = async () => {
      setLoading(true);
      const url = getApiUrl("/services");
      const apiServices = await axios.get(url);
      setServices(apiServices.data);
      setLoading(false);
    };

    getServices();
  }, []);

  const onSubmit = async ({ serviceName, employeeName, price, id }) => {
    setLoading(true);

    const url = getApiUrl("/services");

    if (editingServices) {
      const editUrl = `${url}/${id}`;
      await axios.patch(editUrl, {
        serviceName,
        employeeName,
        price,
      });
    } else {
      await axios.post(url, {
        serviceName,
        employeeName,
        price,
      });
    }

    const apiServices = await axios.get(url);
    setServices(apiServices.data);
    setEditingServices(undefined);

    setLoading(false);
  };

  const onRemove = async (id) => {
    const idUrl = getApiUrl(`/services/${id}`);

    setLoading(true);
    await axios.delete(idUrl);
    const newServices = [...services].filter((ser) => ser.id !== id);
    setServices(newServices);
    setLoading(false);
  };

  const onEdit = (service) => {
    setEditingServices(service);
  };

  const onCancel = () => {
    setEditingServices(undefined);
  };

  return loading ? (
    <Loading />
  ) : (
    <Layout>
      <Container>
        <Helmet>
          <title>Resilia Salão | Serviços</title>
        </Helmet>
        <StyledTitle>Serviços</StyledTitle>
        <StyledSubtitle>Adicionar serviço:</StyledSubtitle>
        <ServicesForm
          gridArea="form"
          services={services}
          onSubmit={onSubmit}
          editingServices={editingServices}
          onCancel={onCancel}
        />

        <StyledSmallTitle>Todos os Serviços:</StyledSmallTitle>
        <ServicesList
          services={services}
          onRemoveServices={onRemove}
          onEditServices={onEdit}
        />
      </Container>
    </Layout>
  );
};
