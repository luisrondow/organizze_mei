import React, { useEffect } from "react";

import Login from "../components/Login";
import { api } from "../services/api";
import history from "../services/history";

const LoginContainer: React.FC = () => {
  useEffect(() => {
    const token = sessionStorage.getItem("@token");

    if (token) {
      history.push("/");
    }
  });

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/auth/signin", { email, password });
      sessionStorage.setItem("@token", data.token);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return <Login {...{ handleLogin }} />;
};

export default LoginContainer;
