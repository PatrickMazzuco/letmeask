import React from "react";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";

import * as S from "./styles";

export const NewRoom = () => {
  return (
    <S.Container>
      <S.Aside>
        <S.Illustration
          src={illustrationImg}
          alt="Ilusração simbolizando perguntas e respostas"
        />
        <S.Title>Crie salas de Q&amp;A ao-vivo</S.Title>
        <S.Description>
          Tire as dúvidas de sua audiência em tempo-real
        </S.Description>
      </S.Aside>
      <S.Main>
        <S.Content>
          <S.LogoImg src={logoImg} alt="Letmeask" />
          <S.FormTitle>Criar uma nova sala</S.FormTitle>
          <S.Form>
            <S.Input type="text" placeholder="Nome da sala" />
            <S.CreateRoomButton type="submit">Criar sala</S.CreateRoomButton>
          </S.Form>
          <S.BottomText>
            Quer entrar em uma sala já existente: <a href="#">Clique aqui</a>
          </S.BottomText>
        </S.Content>
      </S.Main>
    </S.Container>
  );
};
