import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactElement[];
  setOpenModal: (value: boolean) => void;
};

const Container = styled.div`
  width: 49%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 10px 10px 70px -20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: #1c1733;
  font-size: 16px;
  font-weight: bold;
`;

const AddButton = styled.div`
  height: 20px;
  width: 20px;
  background-color: #ff7e7c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Card = ({ title, children, setOpenModal }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <AddButton onClick={() => setOpenModal(true)}>+</AddButton>
      </Header>
      {children}
    </Container>
  );
};

export default Card;
