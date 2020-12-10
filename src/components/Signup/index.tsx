import React, { useState } from "react";
import styled from "styled-components";
import LoginImage from "../../assets/login.jpeg";
import Button from "../shared/Button";
import Input from "../shared/Input";
import logo from "../../assets/logo_dark.png";

type Props = {
  handleSignUp: (
    name: string,
    email: string,
    password: string,
    CNPJ: string,
    passwordConfirmation: string
  ) => Promise<void>;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
`;

const FormContainer = styled.div`
  width: 50%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 16rem;
  justify-content: flex-start;
  @media only screen and (max-width: 1700px) {
    padding: 6rem 8rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  width: 50%;
  height: 150vh;
  background-image: url(${LoginImage});
  background-repeat: no-repeat;
  background-size: auto 150vh;
`;

const Form = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;


const SignUp = ({ handleSignUp }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CNPJ, setCNPJ] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <Container>
      <Image />
      <FormContainer>
        <LogoContainer>
          <img src={logo} alt="Logo" />
          <h2 style={{ color: "#000000", fontSize: "40px" }}>Cadastre-se</h2>
        </LogoContainer>
        <Form>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <Input
            onChange={(e) => setCNPJ(e.target.value)}
            type="text"
            placeholder="CNPJ"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <Input
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            placeholder="Confirme sua senha"
          />
          <Button
            onClick={() =>
              handleSignUp(name, email, password, CNPJ, passwordConfirmation)
            }
          >
            Cadastrar
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
