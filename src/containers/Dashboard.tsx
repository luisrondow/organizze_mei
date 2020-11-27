import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import api from "../services/api";

export type Accounts = {
  id?: string;
  name: string;
  bancoOrigem: string;
  saldo: number;
};

const DashboardContainer: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [accounts, setAccounts] = useState<Accounts[]>([]);
  const [totalBalance, setTotalBalance] = useState(0.0);

  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => {
        const { user } = res.data;
        setUserName(user.name);
        sessionStorage.setItem("@user_id", user.id);
        api
          .get(`/accounts/${user.id}`)
          .then((res) => {
            setAccounts(res.data.accounts);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    let total = 0;
    accounts.map((account) => (total += account.saldo));
    setTotalBalance(total);
  }, [accounts]);

  return <Dashboard {...{ userName, accounts, totalBalance, setAccounts }} />;
};

export default DashboardContainer;
