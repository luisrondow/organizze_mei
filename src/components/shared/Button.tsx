import React from "react";
import styled from "styled-components";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Component = styled.button`
  letter-spacing: 0.5px;
  height: 56px;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-weight: bold;
  background-color: #3083dc;
  border-radius: 8px;
  transition: 0.3s ease;
  :hover {
    cursor: pointer;
    box-shadow: 0px 16px 32px -8px rgba(48, 131, 220, 0.4);
  }
  margin-bottom: 2rem;
`;

const Button = ({ onClick, children, style }: Props) => {
  return <Component style={style} {...{ onClick }}>{children}</Component>;
};

export default Button;
