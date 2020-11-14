import React, { useState } from "react";
import styled from "styled-components";

type MenuItemProps = {
  clicked: boolean;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  background-color: #3083dc;
  padding: 0 4rem;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  cursor: pointer;
  border-bottom: ${(props) => props.clicked && "2px solid #F8FFE5"};
`;

const Header: React.FC = () => {
  const [dashboardClicked, setDashboardClicked] = useState(true);
  const [transactionClicked, setTransactionClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  const handleClick = (type: string) => {
    if (type === "dashboard") {
      setDashboardClicked(true);
      setTransactionClicked(false);
      setReportClicked(false);
    } else if (type === "transaction") {
      setDashboardClicked(false);
      setTransactionClicked(true);
      setReportClicked(false);
    } else {
      setDashboardClicked(false);
      setTransactionClicked(false);
      setReportClicked(true);
    }
  };

  return (
    <Container>
      <h1>Organizze MEI</h1>
      <Menu>
        <MenuItem onClick={() => handleClick('dashboard')} clicked={dashboardClicked}>dashboard</MenuItem>
        <MenuItem onClick={() => handleClick('transaction')} clicked={transactionClicked}>transações</MenuItem>
        <MenuItem onClick={() => handleClick('report')} clicked={reportClicked}>relatórios</MenuItem>
      </Menu>
      <h1>Login</h1>
    </Container>
  );
};

export default Header;
