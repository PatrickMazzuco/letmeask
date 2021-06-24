import React from "react";

import copyImg from "../../assets/images/copy.svg";

import * as S from "./styles";

interface RoomCodeProps {
  code: string;
}

export const RoomCode = (props: RoomCodeProps): JSX.Element => {
  const { code } = props;

  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <S.CodeButton onClick={copyRoomCodeToClipboard}>
      <S.IconWrapper>
        <S.CopyIcon src={copyImg} alt="Copiar codigo da sala" />
      </S.IconWrapper>
      <S.Code>Sala {code}</S.Code>
    </S.CodeButton>
  );
};
