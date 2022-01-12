import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    text-align: center;
    background: rgba(72, 255, 0, 0.250);
    font-family: 'Oswald', sans-serif;
    font-family: 'Montserrat', sans-serif;
    transition: 1s all;
    margin: 1%;
`
const StyledUl = styled.ul`
    display: flex;
    justify-content: flex-end;
    width: 80%;
    margin: 25px;
`
const Styledli = styled.li`
    display: inline-block;
    font-family: 'Oswald', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 18x;
    margin: 2px 3px;    
    padding: 2%;
`
const StyledLink = styled(Link)`
    color:  #FFD6E9
`

export const Header = () => {
    return (
        <StyledHeader>
            <h1>Salão de beleza</h1>
        <StyledUl>
            <Styledli><StyledLink to='/'>Home</StyledLink></Styledli>    
            <Styledli><StyledLink to='/usuarios'>Clientes</StyledLink></Styledli>
            <Styledli><StyledLink to='/servicos'>Serviços</StyledLink></Styledli>
            <Styledli><StyledLink to='/produtos'>Produtos</StyledLink></Styledli>
            <Styledli><StyledLink to='/agendamentos'>Agendamentos</StyledLink></Styledli>
            <Styledli><StyledLink to='/contato'>Contato</StyledLink></Styledli>
        </StyledUl>
    </StyledHeader>
    )
}

