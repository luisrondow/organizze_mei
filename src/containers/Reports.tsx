import React, { useEffect, useState } from "react";
import ReportsComponent from "../components/Reports";
import api from "../services/api";

const Reports: React.FC = () => {
  const [receitasData, setReceitasData] = useState<any>([]);
  const [despesaData, setDespesaData] = useState<any>([]);
  const [categoriaData, setCategoriaData] = useState<any>([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("@user_id");
    api.get(`/cash-flow/reports/receita/${userId}`).then((res) => {
      const { cashFlow } = res.data;

      setReceitasData(cashFlow);
    });
    api.get(`/cash-flow/reports/despesa/${userId}`).then((res) => {
      const { cashFlow } = res.data;

      setDespesaData(cashFlow);
    });
    api.get(`/cash-flow/reports/categoria/${userId}`).then((res) => {
      const { cashFlow } = res.data;

      setCategoriaData(cashFlow);
    });
  }, []);

  return <ReportsComponent {...{ receitasData, despesaData, categoriaData }} />;
};

export default Reports;
