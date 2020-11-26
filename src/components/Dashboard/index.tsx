import React from "react";
import styled from "styled-components";
import { Accounts } from "../../containers/Dashboard";
import Card from "./Card";

type Props = {
  userName: string;
  accounts: Accounts[];
  totalBalance: number;
};

const Container = styled.div`
  width: 60%;
  padding: 2rem;
`;

const Row = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BalanceCard = styled.div`
  width: 100%;
  display: flex;
  background-color: #7dde92;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 10px 10px 70px -20px rgba(0, 0, 0, 0.2);
`;

const WelcomeText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const BalanceValue = styled.span`
  font-size: 64px;
  margin-top: 24px;
`;

const Description = styled.span`
  color: #f8ffe5;
  font-size: 18px;
`;

const AccountItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid lightgray;
`;

const Ball = styled.div`
  width: 8px;
  height: 8px;
  background-color: #b9314f;
  border-radius: 50%;
  margin-right: 8px;
`;

const TitlePaymentBills = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #bbb;
  color: #eee;
  font-size: 14px;
  padding: 0.5rem;
  margin-top: 10px;
`;

const Dashboard = ({ userName, accounts, totalBalance }: Props) => {
  return (
    <Container>
      <BalanceCard>
        <WelcomeText>Olá, {userName}!</WelcomeText>
        <BalanceValue>
          R${" "}
          {totalBalance.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
        </BalanceValue>
        <Description>Saldo</Description>
      </BalanceCard>
      <Row>
        <Card title="Minhas contas">
          {accounts.map((account) => (
            <AccountItem key={account.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "#1c1733",
                    fontSize: "14px",
                  }}
                >
                  {account.bancoOrigem}
                </span>
                <span
                  style={{
                    color: "#999",
                    fontSize: "12px",
                  }}
                >
                  {account.name}
                </span>
              </div>
              <span
                style={{
                  color: "#7dde92",
                  fontSize: "24px",
                }}
              >
                R${" "}
                {account.saldo.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </AccountItem>
          ))}
        </Card>
        <Card title="Contas à pagar">
          <TitlePaymentBills>Contas vencidas</TitlePaymentBills>
          <AccountItem>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ball />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "#1c1733",
                    fontSize: "14px",
                  }}
                >
                  Aluguel
                </span>
                <span
                  style={{
                    color: "#999",
                    fontSize: "12px",
                  }}
                >
                  15/10/2020
                </span>
              </div>
            </div>
            <span
              style={{
                color: "#B9314F",
                fontSize: "24px",
              }}
            >
              R$ 1300,00
            </span>
          </AccountItem>
          <TitlePaymentBills>Próximas contas</TitlePaymentBills>
          <AccountItem>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ball />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "#1c1733",
                    fontSize: "14px",
                  }}
                >
                  Aluguel
                </span>
                <span
                  style={{
                    color: "#999",
                    fontSize: "12px",
                  }}
                >
                  15/11/2020
                </span>
              </div>
            </div>
            <span
              style={{
                color: "#B9314F",
                fontSize: "24px",
              }}
            >
              R$ 1300,00
            </span>
          </AccountItem>
          <AccountItem>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ball />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "#1c1733",
                    fontSize: "14px",
                  }}
                >
                  DAS
                </span>
                <span
                  style={{
                    color: "#999",
                    fontSize: "12px",
                  }}
                >
                  25/15/2020
                </span>
              </div>
            </div>
            <span
              style={{
                color: "#B9314F",
                fontSize: "24px",
              }}
            >
              R$ 59,20
            </span>
          </AccountItem>
          <AccountItem>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ball />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "#1c1733",
                    fontSize: "14px",
                  }}
                >
                  Crédito Consignado
                </span>
                <span
                  style={{
                    color: "#999",
                    fontSize: "12px",
                  }}
                >
                  28/11/2020
                </span>
              </div>
            </div>
            <span
              style={{
                color: "#B9314F",
                fontSize: "24px",
              }}
            >
              R$ 250,00
            </span>
          </AccountItem>
        </Card>
      </Row>
    </Container>
  );
};

export default Dashboard;
