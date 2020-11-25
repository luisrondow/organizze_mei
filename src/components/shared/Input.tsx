import React from "react";
import styled from "styled-components";

type Props = {
  type: string;
  placeholder: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
};

const Component = styled.input`
  border-radius: 8px;
  border: 1px solid #9698b4;
  height: 48px;
  padding-left: 15px;
  font-family: Lato;
  font-size: 16px;
  :focus {
    outline: none;
  }
  margin-bottom: 2rem;
`;

const Input = ({ type, placeholder, onChange }: Props) => {
  return <Component {...{ type, placeholder, onChange }} />;
};

export default Input;
