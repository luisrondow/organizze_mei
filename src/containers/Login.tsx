import React, { useEffect, useState } from "react";

import Login from "../components/Login";
import { api } from "../services/api";
import history from "../services/history";

const LoginContainer: React.FC = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("@token");

    if (token) {
      history.push("/");
    }
  });

  const handleLogin = async (e: any, email: string, password: string) => {
    try {
      e.preventDefault();
      const { data } = await api.post("/auth/signin", { email, password });
      sessionStorage.setItem("@token", data.token);
      history.push("/");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return <Login {...{ handleLogin, error }} />;
};

export default LoginContainer;
