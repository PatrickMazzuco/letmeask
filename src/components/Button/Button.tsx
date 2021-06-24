import React from "react";

import * as S from "./styles";

export type ButtonVariants = "default" | "outlined";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}

export const Button = (props: ButtonProps) => {
  const { variant = "default", ...remainingProps } = props;
  return <S.Button variant={variant} {...remainingProps} />;
};
