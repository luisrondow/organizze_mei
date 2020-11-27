import React from "react";
import styled from "styled-components";
import closeIcon from "../../assets/close.svg";
import Button from "../shared/Button";
import Input from "../shared/Input";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isExpense: boolean;
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

const Modal = ({ open, setOpen, isExpense }: Props) => {
  const handleSubmit = () => setOpen(false);
  return (
    <Container open={open}>
      <div>
        <Title>Nova {isExpense ? "Despesa" : "Receita"}</Title>
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
        <Input type="text" placeholder="Descrição" />
        <Row>
          <Input type="text" placeholder="Preço" />
          <Input type="text" placeholder="Data" />
        </Row>
        <Row>
          <Input type="text" placeholder="Conta" />
          <Input type="text" placeholder="Categoria" />
        </Row>
        <Input type="text" placeholder="Mais informações" />
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
