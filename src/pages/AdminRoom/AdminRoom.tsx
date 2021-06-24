import React, { useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import { Question } from "../../components/Question";
import { RoomCode } from "../../components/RoomCode";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

import * as S from "./styles";

interface RoomParams {
  id: string;
}
export const AdminRoom = (): JSX.Element => {
  const { id } = useParams<RoomParams>();
  const { title, questions } = useRoom(id);
  const { user } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <S.LogoWrapper>
          <S.Logo src={logoImg} alt="Letmeask" />
          <S.ButtonsWrapper>
            <RoomCode code={id} />
            <Button variant="outlined">Encerrar sala</Button>
          </S.ButtonsWrapper>
        </S.LogoWrapper>
      </S.Header>

      <S.Main>
        <S.TitleWrapper>
          <S.Title>Sala {title}</S.Title>
          {questions.length > 0 && (
            <S.QuestionCount>
              {questions.length}{" "}
              {questions.length > 1 ? "perguntas" : "pergunta"}
            </S.QuestionCount>
          )}
        </S.TitleWrapper>
        <S.QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={{
                  name: question.author.name,
                  avatar: question.author.photoURL,
                }}
              />
            );
          })}
        </S.QuestionList>
      </S.Main>
    </S.Container>
  );
};
