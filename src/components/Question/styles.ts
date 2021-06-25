import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;

  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.palette.backgroundLight};

  & + & {
    margin-top: 0.5rem;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.palette.textMain};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.5rem;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
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
  color: ${({ theme }) => theme.palette.textMainLight};
`;
