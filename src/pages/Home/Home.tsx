import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import logoImgLight from "../../assets/images/logo-light.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import RoomService from "../../services/data/room";

import * as S from "./styles";

export const Home = () => {
  const [roomCode, setroomCode] = useState("");
  const history = useHistory();
  const { loginWithGoogle, user } = useAuth();
  const { isDarkMode } = useTheme();

  const handleGoogleLogin = async () => {
    if (!user) {
      await loginWithGoogle();
    }

    history.push("/rooms/new");
  };

  const handleJoinRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (roomCode.trim() === "") return;

    const roomData = await RoomService.getById(roomCode);

    if (!roomData) return alert("Sala não encontrada");
    if (roomData.closedAt) return alert("Essa sala já foi encerrada");

    history.push(`/rooms/${roomCode}`);
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
          <S.LogoImg src={isDarkMode ? logoImgLight : logoImg} alt="Letmeask" />
          <S.CreateRoomButton onClick={handleGoogleLogin}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </S.CreateRoomButton>
          <S.Divider>ou entre em uma sala</S.Divider>
          <S.Form onSubmit={handleJoinRoom}>
            <S.Input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(e) => setroomCode(e.target.value)}
            />
            <S.EnterRoomButton type="submit">Entrar na sala</S.EnterRoomButton>
          </S.Form>
        </S.Content>
      </S.Main>
    </S.Container>
  );
};
