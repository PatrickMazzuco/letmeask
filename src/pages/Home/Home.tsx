import React from "react";
import { useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import * as S from "./styles";

export const Home = () => {
  const history = useHistory();

  const navigateToNewRoom = () => {
    history.push("/rooms/new");
  };

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
          <S.CreateRoomButton onClick={navigateToNewRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </S.CreateRoomButton>
          <S.Divider>ou entre em uma sala</S.Divider>
          <S.Form>
            <S.Input type="text" placeholder="Digite o código da sala" />
            <S.EnterRoomButton type="submit">Entrar na sala</S.EnterRoomButton>
          </S.Form>
        </S.Content>
      </S.Main>
    </S.Container>
  );
};
