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

export const Main = styled.main`
  width: 100%;
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0 auto;
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

export const Form = styled.form``;

export const QuestionInput = styled.textarea`
  width: 100%;
  min-height: 8.125rem;

  padding: 1rem;

  border: 0;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.palette.backgroundLight};
  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);

  resize: vertical;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;
`;

export const LoginMessage = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.textMainLight};
`;

export const LoginButton = styled.button`
  border: 0;

  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: underline;

  color: ${({ theme }) => theme.palette.main};
  background: transparent;

  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
`;

export const UserName = styled.span`
  margin-left: 0.5rem;

  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.textMain};
`;

export const QuestionList = styled.div`
  margin-top: 2rem;
`;

interface LikeButtonProps {
  liked?: boolean;
}

export const LikeButton = styled.button<LikeButtonProps>`
  display: flex;
  align-items: flex-end;

  gap: 0.5rem;

  color: ${({ theme, liked }) =>
    liked ? theme.palette.main : theme.palette.textMainLight};

  svg path {
    stroke: ${({ theme, liked }) =>
      liked ? theme.palette.main : theme.palette.textMainLight};
  }
`;

export const Likes = styled.span``;

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
