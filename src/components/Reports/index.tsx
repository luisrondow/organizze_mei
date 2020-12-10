import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { monthData, saldoData } from "./mock";

const Container = styled.div`
  width: 1200px;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ChartCard = styled.div`
  width: 550px;
  padding: 2rem;
  background-color: #fff;
  color: #1c1733;
  box-shadow: 10px 10px 70px -20px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Reports = ({ receitasData, despesaData, categoriaData }: any) => {
  return (
    <Container>
      <ChartCard>
        <Title>Receitas nos últimos 6 meses</Title>
        <BarChart width={450} height={300} data={receitasData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="receita" fill="#7dde92" />
        </BarChart>
      </ChartCard>
      <ChartCard>
        <Title>Despesa nos últimos 6 meses</Title>
        <BarChart width={450} height={300} data={despesaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="despesa" fill="#ff7e7c" />
        </BarChart>
      </ChartCard>
      <ChartCard>
        <Title>Fluxo de caixa nos últimos 6 meses</Title>
        <LineChart
          width={500}
          height={300}
          data={saldoData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="despesa"
            stroke="#ff7e7c"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="receita" stroke="#7dde92" />
          <Line type="monotone" dataKey="saldo" stroke="#c2b280" />
        </LineChart>
      </ChartCard>
      <ChartCard>
        <Title>Gastos por categoria</Title>
        <PieChart width={500} height={300}>
          <Tooltip />
          <Legend />
          <Pie
            data={categoriaData}
            cx={250}
            cy={120}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {categoriaData.map((entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ChartCard>
    </Container>
  );
};

export default Reports;
