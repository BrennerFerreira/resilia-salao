import styled from "styled-components";
import { Layout } from "../components/layout/Layout";
import beatriz from "../pics/beatriz.PNG";
import brenner from "../pics/brenner.PNG";
import fernando from "../pics/fernando.PNG";
import vitoria from "../pics/vitoria.PNG";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #363635;
  font-weight: bold;

  &:hover {
    color: #fe5d26;
  }
`;

const Pics = ({ alt, src, linkedin, github }) => {
  return (
    <StyledDiv>
      <img src={src} alt={alt} width="200vw" height="200vw" />
      <h4>{alt}</h4>
      <div>
        <StyledLink href={linkedin}>LinkdIn</StyledLink>
      </div>
      <div>
        <StyledLink href={github}>GitHub</StyledLink>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contato = () => {
  return (
    <Layout isCenter>
      <Container>
        <Pics
          src={brenner}
          alt="Brenner Ferreira"
          linkedin="https://github.com/BrennerFerreira"
          github="https://www.linkedin.com/in/brennercsferreira/"
        />

        <Pics
          src={beatriz}
          alt="Beatriz Medeiros"
          linkedin="https://github.com/beatrizmdc"
          github="https://www.linkedin.com/in/beatrizmdev/"
        />

        <Pics
          src={fernando}
          alt="Fernando Costa"
          linkedin="https://github.com/fernando-ctz"
          github="https://www.linkedin.com/in/fernando-costa-75b11a95/"
        />

        <Pics
          src={vitoria}
          alt="Vitória Bernardino"
          linkedin="https://github.com/vitorianb"
          github="https://www.linkedin.com/in/fernando-costa-75b11a95/"
        />
      </Container>
    </Layout>
  );
};
