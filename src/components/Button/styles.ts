import styled from "styled-components";

export const Button = styled.button`
  height: 3.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;
  margin-top: 4rem;

  font-weight: 500;
  background: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.textLight};

  border-radius: 0.5rem;
  border: 0;

  cursor: pointer;

  transition: filter 0.2s;

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
