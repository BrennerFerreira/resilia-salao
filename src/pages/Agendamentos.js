import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchInput } from "../components/agendamentos/SearchInput";
import { MainButton } from "../components/button/MainButton";
import { DateTimeInput } from "../components/input/input";
import { getApiUrl } from "../utils/getApiUrl";

export const Agendamentos = () => {
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userSearch, setUserSearch] = useState("");
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState(
    new Date().toISOString()
  );
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedService, setSelectedService] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const url = getApiUrl("/users");
      const apiUsers = await axios.get(url);
      setUsers(apiUsers.data);
      setFilteredUsers(apiUsers.data);
    };

    const getServices = async () => {
      const url = getApiUrl("/services");
      const apiServices = await axios.get(url);
      setServices(apiServices.data);
      setFilteredServices(apiServices.data);
    };

    const getData = async () => {
      setLoading(true);
      await getUsers();
      await getServices();
      setLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(userSearch)
    );
    setFilteredUsers(filteredUsers);
  }, [userSearch, users]);

  useEffect(() => {
    const filteredServices = services.filter((service) =>
      service.name.toLowerCase().includes(serviceSearch)
    );
    setFilteredServices(filteredServices);
  }, [serviceSearch, services]);

  const onUserInputChange = (userName) => {
    setUserSearch(userName);
  };

  const onServiceInputChange = (serviceName) => {
    setServiceSearch(serviceName);
  };

  const onDateInputChange = (dateString) => {
    setSelectedDateTime(dateString);
  };

  const makeSchedule = async () => {
    setLoading(true);

    const url = getApiUrl("/schedules");
    const schedule = await axios.post(url, {
      userId: selectedUser.id,
      serviceId: selectedService.id,
    });

    console.log(schedule);
  };

  return loading ? (
    <div>Carregando...</div>
  ) : (
    <main>
      <h1>Agendamentos</h1>
      <p>Marque o próximo agendamento:</p>

      <SearchInput
        label="Cliente:"
        id="client"
        value={userSearch}
        onChange={onUserInputChange}
        onSelect={setSelectedUser}
        options={filteredUsers}
      />
      <SearchInput
        label="Serviço:"
        id="service"
        value={serviceSearch}
        onChange={onServiceInputChange}
        onSelect={setSelectedService}
        options={filteredServices}
      />
      <DateTimeInput
        id="date"
        label="Horário"
        value={selectedDateTime}
        onChange={onDateInputChange}
      />
      <MainButton
        label="Agendar"
        disabled={selectedUser && selectedService}
        onClick={makeSchedule}
      />
    </main>
  );
};
