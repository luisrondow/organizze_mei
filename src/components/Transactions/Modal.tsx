import React, { useEffect, useState } from "react";
import styled from "styled-components";
import closeIcon from "../../assets/close.svg";
import Button from "../shared/Button";
import Input from "../shared/Input";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { Accounts } from "../../containers/Dashboard";
import api from "../../services/api";
import { CashFlow } from "../../containers/Transactions";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isExpense: boolean;
  cashFlows: CashFlow[];
  setCashFlows: React.Dispatch<React.SetStateAction<CashFlow[]>>;
};

const Container = styled.div<{ open: boolean }>`
  z-index: 4;
  transition: 0.6s ease;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  position: fixed;
  width: 515px;
  top: ${(props) => (props.open ? "10%" : "0%")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fff;
  box-shadow: 0px 40px 64px rgba(44, 44, 82, 0.1),
    0px 24px 32px rgba(44, 44, 82, 0.1), 0px 16px 16px rgba(44, 44, 82, 0.1);
  padding: 1rem 2rem;
`;

const Title = styled.h2`
  color: #000;
`;

const Form = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = ({
  open,
  setOpen,
  isExpense,
  cashFlows,
  setCashFlows,
}: Props) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState<any>(new Date());
  const [options, setOptions] = useState<any[]>([]);
  const [accountId, setAccountId] = useState("");
  const [category, setCategory] = useState("");
  const [moreInfos, setMoreInfos] = useState("");
  const [accounts, setAccounts] = useState<Accounts[]>([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("@user_id");
    api
      .get(`/accounts/${userId}`)
      .then((res) => {
        setAccounts(res.data.accounts);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = () => {
    api
      .post("/cash-flow", {
        description,
        price,
        date: date.toString(),
        type: isExpense ? "despesa" : "receita",
        accountId,
        category,
        moreInfos,
      })
      .then((res) => {
        setCashFlows([...cashFlows, res.data.cashFlow]);
        setOpen(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const aux: { value: string | undefined; label: string }[] = [];
    accounts.map((account) =>
      aux.push({ value: account.id, label: account.name })
    );

    setOptions([...aux]);
  }, [accounts]);

  return (
    <Container open={open}>
      <div>
        <Title>Nova {isExpense ? "Despesa" : "Receita"}</Title>
        <img
          alt="close"
          src={closeIcon}
          onClick={() => setOpen(false)}
          title="Fechar"
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            cursor: "pointer",
          }}
        />
      </div>
      <Form>
        <Input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Row>
          <Input
            type="text"
            placeholder="Preço"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </Row>
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <Select
            defaultValue={options[0]}
            styles={{
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? "red" : "blue",
                padding: 20,
              }),
            }}
            options={options}
            onChange={(selectedOption) =>
              setAccountId(selectedOption.value || "")
            }
          />
        </div>
        <Row>
          <Input
            type="text"
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          />
        </Row>
        <Input
          type="text"
          placeholder="Mais informações"
          onChange={(e) => setMoreInfos(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          style={{
            padding: "0 1rem",
            alignSelf: "flex-end",
          }}
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Modal;
