import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import RoomService from "../../services/data/room";

import * as S from "./styles";

export const NewRoom = () => {
  const [roomName, setRoomName] = useState("");
  const history = useHistory();
  const { user } = useAuth();

  const handleCreateRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (roomName.trim() === "") return;

    const roomId = await RoomService.create(roomName, user!.id);

    history.push(`/rooms/${roomId}`);
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
          <S.FormTitle>Criar uma nova sala</S.FormTitle>
          <S.Form onSubmit={handleCreateRoom}>
            <S.Input
              type="text"
              placeholder="Nome da sala"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
            <S.CreateRoomButton type="submit">Criar sala</S.CreateRoomButton>
          </S.Form>
          <S.BottomText>
            Quer entrar em uma sala já existente?{" "}
            <Link to="/">Clique aqui</Link>
          </S.BottomText>
        </S.Content>
      </S.Main>
    </S.Container>
  );
};
