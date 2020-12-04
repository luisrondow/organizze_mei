import React, { useEffect, useState } from "react";
import TransactionsComponent from "../components/Transactions";
import api from "../services/api";

export type CashFlow = {
  description: string;
  price: number;
  date: string;
  type: string;
  accountId: string;
  category: string;
  moreInfos: string;
  account?: Account;
};

const Transactions = () => {
  const [cashFlows, setCashFlows] = useState<CashFlow[]>([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const userId = sessionStorage.getItem("@user_id");
    api.get(`/cash-flow/all/${userId}`).then((res) => {
      const cashFlows = res.data.cashFlow;
      setCashFlows(cashFlows);
    });
  }, []);

  return <TransactionsComponent {...{ openModal, setOpenModal, cashFlows, setCashFlows }} />;
};

export default Transactions;
