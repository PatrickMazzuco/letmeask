import React from "react";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const { children, ...remainingProps } = props;
  return <S.Button {...remainingProps}>{children}</S.Button>;
};
