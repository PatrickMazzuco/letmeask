import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import { Question } from "../../components/Question";
import { RoomCode } from "../../components/RoomCode";
import { useAuth } from "../../hooks/useAuth";
import { Question as QuestionModel } from "../../models/Question";
import QuestionService from "../../services/data/question";
import RoomService from "../../services/data/room";

import * as S from "./styles";

interface RoomCodeParams {
  id: string;
}

export const Room = (): JSX.Element => {
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<QuestionModel[]>([]);
  const [title, setTitle] = useState("");
  const { id } = useParams<RoomCodeParams>();
  const { user } = useAuth();

  useEffect(() => {
    const loadQuestions = async () => {
      const room = await RoomService.getById(id);

      if (room && room.questions) {
        setTitle(room.title);
        setQuestions(room.questions);
      }
    };

    loadQuestions();
  }, [id]);

  const handleCreateNewQuestioin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (newQuestion.trim() === "") return;

    if (!user) {
      return alert("User is not logged in.");
    }

    const question: QuestionModel = {
      content: newQuestion,
      isHighlighted: false,
      isAnswered: false,
      author: {
        id: user.id,
        name: user.name,
        photoURL: user.photoURL,
      },
    };

    const questionId = await QuestionService.create(id, question);

    if (!questionId) return alert("Failed to send question");

    setNewQuestion("");
  };

  return (
    <S.Container>
      <S.Header>
        <S.LogoWrapper>
          <S.Logo src={logoImg} alt="Letmeask" />
          <RoomCode code={id} />
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
        <S.Form onSubmit={handleCreateNewQuestioin}>
          <S.QuestionInput
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <S.FormFooter>
            {!!user ? (
              <S.UserInfo>
                <S.Avatar src={user.photoURL} alt={user.name} />
                <S.UserName>{user.name}</S.UserName>
              </S.UserInfo>
            ) : (
              <S.LoginMessage>
                Para enviar uma pergunta,{" "}
                <S.LoginButton>faça seu login</S.LoginButton>.
              </S.LoginMessage>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </S.FormFooter>
        </S.Form>
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
