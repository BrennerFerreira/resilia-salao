import styled from "styled-components"

const StyledFooter = styled.footer`
    text-align: center;
    background: rgba(72, 255, 0, 0.250);
    font-family: 'Oswald', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    padding: 2%;
    margin-top: 8%;
    font-size: 12px;
`
export const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; Copyright Salão de beleza - 2022</p>
        </StyledFooter>
    )
}
