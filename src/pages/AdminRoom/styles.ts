import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderLight};
`;

export const LogoWrapper = styled.div`
  max-width: 70rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
`;

export const Logo = styled.img`
  max-height: 2.8125rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  button {
    height: 2.5rem;
  }
`;

export const Main = styled.main`
  max-width: 50rem;

  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 2rem 0 1.5rem;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.textMain};
`;

export const QuestionCount = styled.span`
  margin-left: 1rem;
  padding: 0.5rem 1rem;

  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.textLight};

  border-radius: 9999px;
  background: ${({ theme }) => theme.palette.secondary};
`;

export const QuestionList = styled.div`
  margin-top: 2rem;
`;

export const DeleteButton = styled.button``;

export const ButtonIcon = styled.img``;
