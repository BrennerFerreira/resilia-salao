import { useEffect,useState } from "react";
import axios from "axios";
import { getApiUrl } from "../utils/getApiUrl";
import Form from "../components/form/Form";
import ClientList from "../components/form/ClientList";
import styled from "styled-components";

const StyledSmallTitle = styled.h3`
  grid-area: smallTitle;
`;
export const Usuarios = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      setLoading (true)
      const url = getApiUrl("/users");
      const apiUsers = await axios.get(url);
      setUsers(apiUsers.data);
      setLoading (false)
    };
    getUsers ()
    }, []); 
    const onFormSubmit = async (name, email) =>
    {
setLoading (true) 
const url = getApiUrl("/users");
const user = await axios.post (url, {name,email})
console.log (user)
setLoading (false)
    }
    const onRemove = async (id) => {
      const idUrl = getApiUrl(`/users/${id}`);
    };
      const onEdit = (sch) => {
        setEditingClient(sch);
      };
    
      const onCancel = () => {
        setEditingClient(undefined);
      };
    return loading ? <p>carregando</p>
    : 
  (
    <div>
      <h1>Usuários</h1>
      < Form onSubmit={onFormSubmit}/>
      <StyledSmallTitle>Todos Clientes:</StyledSmallTitle>
        <ClientList
          Clients={users}
          onRemoveClient={onRemove}
          onEditClient={onEdit}
        />
         </div>
  );
};
