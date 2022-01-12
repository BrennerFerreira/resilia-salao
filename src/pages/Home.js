import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Statistics } from "../components/home/Statistics";
import { Layout } from "../components/layout/Layout";
import { Loading } from "../components/loading/Loading";
import { getApiUrl } from "../utils/getApiUrl";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    ". title title title title ."
    ". subtitle subtitle subtitle subtitle ."
    ". statistics statistics statistics statistics .";
`;

const StyledTitle = styled.h1`
  grid-area: title;
`;

const StyledSubtitle = styled.h4`
  grid-area: subtitle;
`;

const StyledStatistics = styled.main`
  margin: 32px 0;
  grid-area: statistics;
`;

export const Home = () => {
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = getApiUrl("/home");
      const statistics = await axios.get(url);
      console.log(statistics.data);
      setStatistics(statistics.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Layout>
      <Container>
        <StyledTitle>
          Bem-vinde ao sistema de gerenciamento do seu salão de beleza
        </StyledTitle>
        <StyledSubtitle>
          Seu salão está incrível! Veja algumas informações:
        </StyledSubtitle>
        <StyledStatistics>
          <Statistics statistics={statistics} />
        </StyledStatistics>
      </Container>
    </Layout>
  );
};
