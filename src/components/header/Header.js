import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  text-align: center;
  align-items: center;
  background: #faedca;
  box-shadow: 0 0 25px -15px #363635;
  font-family: "Oswald", sans-serif;
  font-family: "Montserrat", sans-serif;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const StyledH1 = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  color: #363635;
  text-decoration: none;
  padding: 15px;
`;

const Styledli = styled.li`
  display: inline-block;
  font-weight: bold;
  font-size: 18x;
  margin: 2px 3px;
  padding: 0 2%;
`;
const StyledLink = styled(Link)`
  color: #fd84bd;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledH1 to="/">Salão de beleza</StyledH1>
      <StyledUl>
        <Styledli>
          <StyledLink to="/usuarios">Clientes</StyledLink>
        </Styledli>
        <Styledli>
          <StyledLink to="/servicos">Serviços</StyledLink>
        </Styledli>
        <Styledli>
          <StyledLink to="/produtos">Produtos</StyledLink>
        </Styledli>
        <Styledli>
          <StyledLink to="/agendamentos">Agendamentos</StyledLink>
        </Styledli>
        <Styledli>
          <StyledLink to="/contato">Contato</StyledLink>
        </Styledli>
      </StyledUl>
    </StyledHeader>
  );
};
