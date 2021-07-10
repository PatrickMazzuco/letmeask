import styled from "styled-components";

import { Button } from "../../components/Button/Button";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas: "aside main";
  grid-template-columns: 8fr 7fr;

  @media (max-width: 1024px) {
    grid-template-areas:
      "main"
      "aside";
    grid-template-columns: 100%;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;

  grid-area: aside;

  padding: 7.5rem 5rem;

  background: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.textLight};

  @media (max-width: 1024px) {
    align-items: center;
    padding: 2.5em 1rem;
  }
`;

export const Illustration = styled.img`
  max-width: 20rem;

  @media (max-width: 1024px) {
    max-width: 10rem;
  }
`;

export const Title = styled.strong`
  font: 700 2.25rem "Poppins", sans-serif;
  line-height: 2.625rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.textLighter};

  @media (max-width: 1024px) {
    margin-top: 0;
    font-size: 1.25rem;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: main;

  padding: 0 2rem;

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
  }
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

  @media (max-width: 1024px) {
    margin-top: 2rem;
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
