import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderLight};
`;

export const HeaderContent = styled.div`
  max-width: 70rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
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
  width: 100%;
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 4rem 0 1.5rem;
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconButton = styled.button``;

export const ButtonIcon = styled.img``;

export const EmptyQuesitonsWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
`;

export const EmptyQuestions = styled.div`
  max-width: 17.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const EmptyIllustration = styled.img`
  max-width: 9.375rem;
`;

export const MessageTitle = styled.h3`
  margin-top: 1rem;

  font-size: 1.125rem;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.palette.textMain};
`;

export const Message = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.textMainLight};
`;
