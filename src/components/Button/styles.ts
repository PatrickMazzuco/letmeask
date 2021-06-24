import styled, { css } from "styled-components";
import { ButtonVariants } from "./Button";

interface ButtonProps {
  variant?: ButtonVariants;
}

export const Button = styled.button<ButtonProps>`
  height: 3.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;

  font-weight: 500;
  background: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.textLight};

  border-radius: 0.5rem;
  border: 0;

  cursor: pointer;

  transition: filter 0.2s;

  ${({ variant }) =>
    variant === "outlined"
      ? css`
          background: ${({ theme }) => theme.palette.background};
          color: ${({ theme }) => theme.palette.main};
          border: 1px solid ${({ theme }) => theme.palette.main};
        `
      : {}}

  img {
    margin-right: 0.5rem;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
