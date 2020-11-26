import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/shared/Header";
import history from "../services/history";
import DashboardContainer from "./Dashboard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Home: React.FC = () => {
  useEffect(() => {
    const token = sessionStorage.getItem("@token");

    if (!token) {
      history.push("/login");
    }
  });

  return (
    <Container>
      <Header />
      <DashboardContainer />
    </Container>
  );
};

export default Home;
