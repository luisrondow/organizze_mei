import React, { useState } from "react";
import styled from "styled-components";
import LoginImage from "../../assets/login.jpeg";
import Button from "../shared/Button";
import Input from "../shared/Input";
import logo from '../../assets/logo_dark.png';

type Props = {
  handleLogin: (email: string, password: string) => Promise<void>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
`;

const FormContainer = styled.div`
  width: 50%;
  height: 100vh;
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
  height: 100vh;
  background-image: url(${LoginImage});
  background-repeat: no-repeat;
  background-size: auto 100vh;
`;

const Form = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Link = styled.span`
  font-size: 20px;
  color: #3083dc;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const Login = ({ handleLogin }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Image />
      <FormContainer>
        <LogoContainer>
          <img src={logo} alt="Logo"/>
          <h2 style={{ color: "#000000", fontSize: "40px" }}>Bem vindo</h2>
        </LogoContainer>
        <Form>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" />
          <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
          <Button onClick={() => handleLogin(email, password)}>Entrar</Button>
          <Link style={{
            marginTop: '1rem'
          }}>
            Ainda não tem uma conta?
          </Link>
          <Link>
            Registre-se agora
          </Link>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
