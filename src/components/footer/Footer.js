import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  background: #faedca;
  font-family: "Oswald", sans-serif;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  border-top: 1px solid #363635;
  font-size: 12px;
`;
export const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; Copyright Salão de beleza - 2022</p>
    </StyledFooter>
  );
};
