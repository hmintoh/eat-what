import React, { ReactNode } from "react";
import { ButtonWrapper } from "@/styles/button.styles";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ onClick, children }: ButtonProps): JSX.Element => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
