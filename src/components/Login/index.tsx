import React, { useState } from "react";
import styled from "styled-components";
import LoginImage from "../../assets/login.jpeg";
import Button from "../shared/Button";
import Input from "../shared/Input";
import logo from "../../assets/logo_dark.png";

type Props = {
  handleLogin: (e: any, email: string, password: string) => Promise<void>;
  error: boolean;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
`;

const FormContainer = styled.form`
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

const Link = styled.a`
  font-size: 20px;
  color: #3083dc;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const Error = styled.text`
  font-size: 20px;
  color: #b9314f;
  margin-bottom: 32px;
`;

const Login = ({ handleLogin, error }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Image />
      <FormContainer>
        <LogoContainer>
          <img src={logo} alt="Logo" />
          <h2 style={{ color: "#000000", fontSize: "40px" }}>Bem vindo</h2>
        </LogoContainer>
        <Form>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <Button onClick={(e: any) => handleLogin(e, email, password)}>
            Entrar
          </Button>
          {error && <Error>Email e/ou senha incorretos.</Error>}
          <Link
            href="/signup"
            style={{
              marginTop: "1rem",
            }}
          >
            Ainda não tem uma conta?
          </Link>
          <Link href="/signup">Registre-se agora</Link>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
