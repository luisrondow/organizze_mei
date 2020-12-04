import React, { useState } from "react";
import styled from "styled-components";
import { CashFlow } from "../../containers/Transactions";
import { formatISODate } from "../../utils/formatters";
import BackgroundOverlay from "../shared/BackgroundOverlay";
import Modal from "./Modal";

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  cashFlows: CashFlow[];
  setCashFlows: React.Dispatch<React.SetStateAction<CashFlow[]>>;
};

const Container = styled.div`
  width: 50%;
  padding: 2rem;
`;

const TransactionCard = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: #1c1733;
  box-shadow: 10px 10px 70px -20px rgba(0, 0, 0, 0.2);
`;

const AddButton = styled.div<{ expense: boolean }>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => (props.expense ? "#ff7e7c" : "#7dde92")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.h3<{ expense: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.expense ? "#b9314f" : "#7dde92")};
`;

const Ball = styled.div<{ payed: boolean }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => (!props.payed ? "#b9314f" : "#7dde92")};
  border-radius: 50%;
  margin-right: 8px;
`;

const Transactions = ({
  openModal,
  setOpenModal,
  cashFlows,
  setCashFlows,
}: Props) => {
  const [isExpense, setIsExpense] = useState(false);

  const handleTotal = () => {
    let soma = 0;
    cashFlows.map((cashFlow) => {
      if (cashFlow.type === "receita") {
        soma += cashFlow.price;
      } else {
        soma -= cashFlow.price;
      }
    });

    return soma;
  };

  return (
    <>
      <Container>
        <TransactionCard>
          <Row
            style={{
              alignItems: "center",
            }}
          >
            <h2>Transações</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <AddButton
                expense
                onClick={() => {
                  setOpenModal(true);
                  setIsExpense(true);
                }}
              >
                +
              </AddButton>
              <AddButton
                expense={false}
                onClick={() => {
                  setOpenModal(true);
                  setIsExpense(false);
                }}
              >
                +
              </AddButton>
            </div>
          </Row>
          {cashFlows.map((cashFlow) => (
            <Row
              style={{
                paddingTop: "2rem",
              }}
            >
              <Description>
                <Ball payed={true} />
                <h3>{`${cashFlow.description} (${formatISODate(
                  cashFlow.date
                )})`}</h3>
              </Description>
              <Price expense={cashFlow.type === "despesa"}>
                R${" "}
                {cashFlow.price.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </Price>
            </Row>
          ))}
          <Row
            style={{
              paddingTop: "2rem",
            }}
          >
            <Description>
              <h3>Total</h3>
            </Description>
            <Price expense={handleTotal() < 0}>
              R${" "}
              {handleTotal().toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            </Price>
          </Row>
        </TransactionCard>
      </Container>
      <BackgroundOverlay openModal={openModal} />
      <Modal
        isExpense={isExpense}
        open={openModal}
        setOpen={setOpenModal}
        cashFlows={cashFlows}
        setCashFlows={setCashFlows}
      />
    </>
  );
};

export default Transactions;
