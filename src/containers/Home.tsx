import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/shared/Header";
import history from "../services/history";
import DashboardContainer from "./Dashboard";
import TransactionContainer from "./Transactions";
import ReportContainer from "./Reports";
import phoneIcon from "../assets/phone.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Widget = styled.div`
  position: absolute;
  bottom: 10%;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: #3083dc;
  align-self: flex-end;
  margin-right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    visibility: hidden;
    width: 240px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    right: 100%;
  }

  &:hover {
    span {
      visibility: visible;
    }
  }
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
      {reportClicked && <ReportContainer />}
      <Widget>
        <span>
          Clique aqui para entrar em contato com o suporte para dúvidas e
          reclamações
        </span>
        <img alt="" src={phoneIcon} />
      </Widget>
    </Container>
  );
};

export default Home;
