import { Navigation } from "Src/components/Navigation";
import { Header } from "Src/components/Header";
import { Sidebar } from "Src/components/Sidebar";
import { Posts } from "Src/components/Posts";
import { Pagination } from "Src/components/Pagination";
import { Footer } from "Src/components/Footer";
import { Grid, StyledHome } from "./styles";
import { Container } from "Src/components/Container";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <StyledHome>
      <Navigation />
      <Header />
      <Container>
        <Grid>
          <Sidebar id="sidebar" />
          <Posts id="posts" />
          <Pagination id="pagination" />
        </Grid>
      </Container>
      <Footer />
    </StyledHome>
  );
};
