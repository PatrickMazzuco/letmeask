import styled from "styled-components";

import { Button } from "../../components/Button/Button";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 7;

  padding: 7.5rem 5rem;

  background: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.textLight};
`;

export const Illustration = styled.img`
  max-width: 20rem;
`;

export const Title = styled.strong`
  font: 700 2.25rem "Poppins", sans-serif;
  line-height: 2.625rem;
  margin-top: 1rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.textLighter};
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 8;

  padding: 0 2rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 20rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  text-align: center;
`;

export const LogoImg = styled.img`
  align-self: center;
`;

export const CreateRoomButton = styled.button`
  height: 3.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 4rem;

  font-weight: 500;
  background: ${({ theme }) => theme.palette.googleRed};
  color: ${({ theme }) => theme.palette.textLight};

  border-radius: 0.5rem;
  border: 0;

  cursor: pointer;

  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;

  margin: 2rem 0;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.border};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.palette.border};
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 0.5rem;
`;

export const EnterRoomButton = styled(Button)`
  width: 100%;

  margin-top: 1rem;
`;
