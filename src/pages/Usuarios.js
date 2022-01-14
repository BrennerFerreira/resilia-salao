import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Layout } from "../components/layout/Layout";
import { Loading } from "../components/loading/Loading";
import { ClientList } from "../components/usuarios/ClientList";
import { Form } from "../components/usuarios/Form";
import { getApiUrl } from "../utils/getApiUrl";

const StyledContainer = styled.main`
  display: grid;
  grid-template-areas:
    ". title title title title ."
    ". subtitle subtitle subtitle subtitle ."
    ". form form form form ."
    ". clients clients clients clients .";
`;

const StyledTitle = styled.h1`
  grid-area: title;
`;

const List = styled.div`
  grid-area: clients;
`;

export const Usuarios = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [editingClient, setEditingClient] = useState(undefined);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const url = getApiUrl("/users");
      const apiUsers = await axios.get(url);
      setUsers(apiUsers.data);
      setLoading(false);
    };
    getUsers();
  }, []);

  const onFormSubmit = async (name, email, id) => {
    setLoading(true);
    const url = getApiUrl("/users");

    if (editingClient) {
      const editUrl = `${url}/${id}`;
      await axios.patch(editUrl, { name, email });
    } else {
      await axios.post(url, { name, email });
    }

    const clients = await axios.get(url);
    setUsers(clients.data);
    setEditingClient(undefined);

    setLoading(false);
  };

  const onRemove = async (id) => {
    const idUrl = getApiUrl(`/users/${id}`);
    await axios.delete(idUrl);
    const newClients = [...users].filter((client) => client.id !== id);
    setUsers(newClients);
  };

  const onEdit = (client) => {
    setEditingClient(client);
  };

  const onCancel = () => {
    setEditingClient(undefined);
  };

  return loading ? (
    <Loading />
  ) : (
    <Layout>
      <StyledContainer>
        <Helmet>
          <title>Resilia Salão | Clientes</title>
        </Helmet>
        <StyledTitle>Clientes</StyledTitle>
        <Form
          onSubmit={onFormSubmit}
          onCancel={onCancel}
          editingClient={editingClient}
        />
        <List />
        <ClientList
          clients={users}
          onRemoveClient={onRemove}
          onEditClient={onEdit}
        />
      </StyledContainer>
    </Layout>
  );
};
