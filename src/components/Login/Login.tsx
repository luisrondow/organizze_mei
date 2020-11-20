import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Card = styled.div`
    width: 50%;
    height: 100vh;
`;

const FormCard = styled.div`
    display:flex;
    flex-direction:column;
`;

const Login: React.FC = () => {
    return (
        <Container>
            <Card>
                <img src="./public/loginimage.jpg" alt="Imagem de Login"></img>
            </Card>
            <Card>
                <FormCard>
                <img src="" alt="Logo Organizze MEI"></img>
                <h2 style={{color: "#000000", fontSize: "32px",}}>Bem vindo</h2>
                <form>
                    <input type="text" placeholder="E-mail"></input>
                    <input type="text" placeholder="Senha"></input>
                </form>
                <button>Entrar</button>
                <a href="">Não lembro minha senha</a>
                <h4>Ainda não tem uma conta?<a href="">Registre-se agora</a></h4>
                </FormCard>
                
            </Card>
        </Container>
    );
};

export default Login;