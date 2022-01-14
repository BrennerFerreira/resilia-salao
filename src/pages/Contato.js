import { Layout } from "../components/layout/Layout";
import styled from "styled-components";
import brenner from "../pics/brenner.PNG" 
import beatriz from "../pics/beatriz.PNG" 
import fernando from "../pics/fernando.PNG" 
import joao from "../pics/joao.PNG" 
import vitoria from "../pics/vitoria.PNG" 

const Container = styled.div`
  display: grid;
  grid-template-areas:
    ". pics pics pics pics pics .";
  
`;
const pics = ({alt,src}) => 
{
return (<div class="figure">
<img src={src}
alt={alt}
width="200vw"
height="200vw"/>

<h4>{alt}</h4>
</div>)
}
const StyledPics = styled (pics)`
grid-area:pics;
`

export const Contato = () => {
    return (
<Layout>
    <Container>
        <StyledPics src={brenner}
         alt="Brenner Ferreira"/>
                  
        <StyledPics src={beatriz}
         alt="Beatriz Medeiros"/>
      
        <StyledPics src={fernando}
        alt="Fernando Costa"/>
            
        <StyledPics src={joao}
        alt="João Paulo"/>
                         
        <StyledPics src={vitoria}
        alt="Vitória Bernardino"/>    
      
    </Container>
</Layout>
)
}
