import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/shared/Header";
import history from "../services/history";
import DashboardContainer from "./Dashboard";
import TransactionContainer from "./Transactions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Home: React.FC = () => {
  const [dashboardClicked, setDashboardClicked] = useState(true);
  const [transactionClicked, setTransactionClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("@token");

    if (!token) {
      history.push("/login");
    }
  });

  return (
    <Container>
      <Header
        {...{
          dashboardClicked,
          setDashboardClicked,
          transactionClicked,
          setTransactionClicked,
          reportClicked,
          setReportClicked,
        }}
      />
      {dashboardClicked && <DashboardContainer />}
      {transactionClicked && <TransactionContainer />}
    </Container>
  );
};

export default Home;
