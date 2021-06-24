import styled from "styled-components";

export const CodeButton = styled.button`
  height: 2.5rem;

  display: flex;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.palette.main};
  background: ${({ theme }) => theme.palette.background};

  cursor: pointer;
  overflow: hidden;
`;

export const IconWrapper = styled.div`
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 0.75rem;

  background: ${({ theme }) => theme.palette.main};
`;

export const CopyIcon = styled.img``;

export const Code = styled.span`
  width: 14.375rem;

  display: block;
  flex: 1;
  align-self: center;

  padding: 0 1rem 0 0.75rem;

  font-size: 0.875rem;
  font-weight: 500;
`;
