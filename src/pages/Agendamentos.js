import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { ScheduleForm } from "../components/agendamentos/ScheduleForm";
import { SchedulesList } from "../components/agendamentos/SchedulesList";
import { Loading } from "../components/loading/Loading";
import { getApiUrl } from "../utils/getApiUrl";

const Container = styled.main`
  display: grid;
  grid-template-areas:
    ". title title title title ."
    ". subtitle subtitle subtitle subtitle ."
    ". form form form form ."
    ". smallTitle smallTitle smallTitle smallTitle ."
    ". schedules schedules schedules schedules .";
`;

const StyledTitle = styled.h1`
  grid-area: title;
`;

const StyledSmallTitle = styled.h3`
  grid-area: smallTitle;
`;

const StyledParagraph = styled.p`
  grid-area: subtitle;
`;

export const Agendamentos = () => {
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSchedule, setEditingSchedule] = useState(undefined);

  useEffect(() => {
    const getUsers = async () => {
      const url = getApiUrl("/users");
      const apiUsers = await axios.get(url);
      setUsers(apiUsers.data);
    };

    const getServices = async () => {
      const url = getApiUrl("/services");
      const apiServices = await axios.get(url);
      setServices(apiServices.data);
    };

    const getSchedules = async () => {
      const url = getApiUrl("/schedules");
      const apiSchedules = await axios.get(url);
      setSchedules(apiSchedules.data);
    };

    const getData = async () => {
      setLoading(true);
      await getUsers();
      await getServices();
      await getSchedules();
      setLoading(false);
    };

    getData();
  }, []);

  const onSubmit = async ({
    selectedUser,
    selectedDateTime,
    selectedService,
    id,
  }) => {
    setLoading(true);

    const datetime = new Date(selectedDateTime);
    const scheduleDate = new Date(datetime.setHours(datetime.getHours()));

    const url = getApiUrl("/schedules");
    if (id) {
      const editUrl = `${url}/${id}`;
      await axios.patch(editUrl, {
        userId: selectedUser.id,
        serviceId: selectedService.id,
        data: scheduleDate,
      });
    } else {
      await axios.post(url, {
        userId: selectedUser.id,
        serviceId: selectedService.id,
        data: scheduleDate,
      });
    }

    const apiSchedules = await axios.get(url);

    setSchedules(apiSchedules.data);

    setEditingSchedule(undefined);

    setLoading(false);
  };

  const onRemove = async (id) => {
    const idUrl = getApiUrl(`/schedules/${id}`);

    setLoading(true);
    await axios.delete(idUrl);
    const newSchedules = [...schedules].filter((sch) => sch.id !== id);
    setSchedules(newSchedules);
    setLoading(false);
  };

  const onEdit = (sch) => {
    setEditingSchedule(sch);
  };

  const onCancel = () => {
    setEditingSchedule(undefined);
  };
  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Helmet>
        <title>Resilia Salão | Agendamentos</title>
      </Helmet>
      <StyledTitle>Agendamentos</StyledTitle>
      <StyledParagraph>Marque o próximo agendamento:</StyledParagraph>
      <ScheduleForm
        gridArea="form"
        users={users}
        services={services}
        onSubmit={onSubmit}
        editingSchedule={editingSchedule}
        onCancel={onCancel}
      />
      <StyledSmallTitle>Todos agendamentos:</StyledSmallTitle>
      <SchedulesList
        schedules={schedules}
        onRemoveSchedule={onRemove}
        onEditSchedule={onEdit}
      />
    </Container>
  );
};
