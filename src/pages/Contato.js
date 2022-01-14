import Layout from "../components/layout/Layout";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    ". title title title title ."
    ". subtitle subtitle subtitle subtitle ."
    ". statistics statistics statistics statistics .";
`;

export const contato = () => {
<Layout>
    <Container>
        <div class="figure">
            <img src="../pics/brenner.PNG"></img>
            alt="Brenner Ferreira"
            width=150
            height=150

            <p>Brenner Ferreira</p>
        </div>
        <div class="figure">
            <img src="../pics/beatriz.PNG"></img>
            alt="Beatriz Medeiros"
            width=150
            height=150

            <p>Beatriz Medeiros</p>
        </div>
        <div class="figure">
            <img src="../pics/fernando.PNG"></img>
            alt="Fernando Costa"
            width=150
            height=150

            <p>Fernando Costa</p>
        </div>
        <div class="figure">
            <img src="../pics/joao.PNG"></img>
            alt="João Paulo"
            width=150
            height=150

            <p>João Paulo</p>
        </div>
        <div class="figure">
            <img src="../pics/vitoria.PNG"></img>
            alt="Vitória Bernardino"
            width=150
            height=150

            <p>Vitória Bernardino</p>
        </div>
    </Container>
</Layout>
}
