import React from "react";
import styled from "styled-components";
import Header from "../components/shared/Header";
import DashboardContainer from "./Dashboard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Home: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <DashboardContainer />
    </Container>
  );
};

export default Home;
