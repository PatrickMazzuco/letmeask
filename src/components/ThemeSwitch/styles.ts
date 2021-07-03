import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Switch = styled.label`
  position: relative;
  width: 3.5rem;
  height: 1.25rem;

  display: inline-block;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 34px;

  cursor: pointer;
  background: ${({ theme }) => theme.palette.main};

  -webkit-transition: 0.4s;
  transition: 0.4s;

  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Circle = styled.span`
  position: absolute;
  height: 2rem;
  width: 2rem;
  left: 0;
  bottom: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.palette.main};
  border-radius: 50%;

  transform: translateY(50%);
  background-color: white;

  -webkit-transition: 0.4s;
  transition: 0.4s;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  input:checked + & {
    -webkit-transform: translate(1.5rem, 50%);
    -ms-transform: translate(1.5rem, 50%);
    transform: translate(1.5rem, 50%);
  }
`;
