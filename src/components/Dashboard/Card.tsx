import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactElement[];
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

const Card = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Card;
