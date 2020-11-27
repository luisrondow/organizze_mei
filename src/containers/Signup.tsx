import React from "react";

import SignupComponent from "../components/Signup";
import api from "../services/api";
import history from "../services/history";

const Signup: React.FC = () => {
  const handleSignUp = async (
    name: string,
    email: string,
    password: string,
    CNPJ: string,
    passwordConfirmation: string
  ) => {
    api
      .post("/auth/signup", {
        name,
        email,
        password,
        cnpj: CNPJ,
        passwordConfirmation,
      })
      .then(() => history.push("/"));
  };

  return <SignupComponent {...{ handleSignUp }} />;
};

export default Signup;
