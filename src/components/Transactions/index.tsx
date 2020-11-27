import React, { useState } from "react";
import styled from "styled-components";
import BackgroundOverlay from "../shared/BackgroundOverlay";
import Modal from "./Modal";

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
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

const Transactions = ({ openModal, setOpenModal }: Props) => {
  const [isExpense, setIsExpense] = useState(false);

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
          <Row
            style={{
              paddingTop: "2rem",
            }}
          >
            <Description>
              <Ball payed={true} />
              <h3>Aluguel (17/12)</h3>
            </Description>
            <Price expense={false}>R$ 1200,00</Price>
          </Row>
        </TransactionCard>
      </Container>
      <BackgroundOverlay openModal={openModal} />
      <Modal isExpense={isExpense} open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Transactions;
