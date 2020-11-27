import React, { useState } from "react";
import styled from "styled-components";
import closeIcon from "../../assets/close.svg";
import { Accounts } from "../../containers/Dashboard";
import api from "../../services/api";
import Button from "../shared/Button";
import Input from "../shared/Input";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  accounts: Accounts[];
  setAccounts: React.Dispatch<React.SetStateAction<Accounts[]>>
};

const Container = styled.div<{ open: boolean }>`
  z-index: 4;
  transition: 0.6s ease;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  position: fixed;
  width: 515px;
  top: ${(props) => (props.open ? "10%" : "0%")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fff;
  box-shadow: 0px 40px 64px rgba(44, 44, 82, 0.1),
    0px 24px 32px rgba(44, 44, 82, 0.1), 0px 16px 16px rgba(44, 44, 82, 0.1);
  padding: 1rem 2rem;
`;

const Title = styled.h2`
  color: #000;
`;

const Form = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = ({ open, setOpen, accounts, setAccounts }: Props) => {
  const handleSubmit = () => {
    api
      .post("/accounts", {
        name,
        bancoOrigem,
        saldoInicial: isNaN(saldoInicial) ? 0 : saldoInicial,
        userId: sessionStorage.getItem("@user_id"),
      })
      .then((res) => {
        const { name, bancoOrigem, saldo } = res.data.account;
        setAccounts([...accounts, {name, bancoOrigem, saldo} ])
        setOpen(false);
      });
  };
  const [name, setName] = useState("");
  const [bancoOrigem, setBancoOrigem] = useState("");
  const [saldoInicial, setSaldoInicial] = useState(0);

  return (
    <Container open={open}>
      <div>
        <Title>Nova conta</Title>
        <img
          alt="close"
          src={closeIcon}
          onClick={() => setOpen(false)}
          title="Fechar"
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            cursor: "pointer",
          }}
        />
      </div>
      <Form>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Row>
          <Input
            onChange={(e) => setBancoOrigem(e.target.value)}
            type="text"
            placeholder="Banco de Origem"
          />
          <Input
            onChange={(e) => setSaldoInicial(Number(e.target.value))}
            type="text"
            placeholder="Saldo Inicial"
          />
        </Row>
        <Button
          onClick={handleSubmit}
          style={{
            padding: "0 1rem",
            alignSelf: "flex-end",
          }}
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Modal;
