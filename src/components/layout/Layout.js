import React from "react";
import styled from "styled-components";
import { Footer } from "../footer/Footer";
import { Header } from "./../header/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  flex: 1;
  ${(props) => (props.isCenter ? "display: flex;" : "")}
  ${(props) => (props.isCenter ? "align-items: center;" : "")}
`;

export const Layout = ({ children, isCenter }) => {
  return (
    <Container>
      <Header />
      <StyledContent isCenter={isCenter}>{children}</StyledContent>
      <Footer />
    </Container>
  );
};
