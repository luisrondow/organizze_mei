import React, { useState } from 'react';
import TransactionsComponent from '../components/Transactions';

const Transactions = () => {
  const [openModal, setOpenModal] = useState(false);

  return <TransactionsComponent {...{openModal, setOpenModal}}/>;
}

export default Transactions;