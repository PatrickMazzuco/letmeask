import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import { Question } from "../../components/Question";
import { RoomCode } from "../../components/RoomCode";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { Question as QuestionModel } from "../../models/Question";
import QuestionService from "../../services/data/question";

import * as S from "./styles";

interface RoomParams {
  id: string;
}

export const Room = (): JSX.Element => {
  const [newQuestion, setNewQuestion] = useState("");
  const { id: roomId } = useParams<RoomParams>();
  const { title, questions } = useRoom(roomId);
  const { user } = useAuth();

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

    const questionId = await QuestionService.create(roomId, question);

    if (!questionId) return alert("Failed to send question");

    setNewQuestion("");
  };

  const handleLikeQuestion = async (question: QuestionModel) => {
    if (!user) {
      return alert("User is not logged in.");
    }

    if (!question.likeId) {
      const newLIkeId = await QuestionService.like(
        user.id,
        roomId,
        question.id!
      );
      if (!newLIkeId) return alert("Failed to like question");
      return;
    }

    await QuestionService.undoLike(roomId, question.id!, question.likeId);
  };

  return (
    <S.Container>
      <S.Header>
        <S.LogoWrapper>
          <Link to="/">
            <S.Logo src={logoImg} alt="Letmeask" />
          </Link>
          <RoomCode code={roomId} />
        </S.LogoWrapper>
      </S.Header>

      <S.Main>
        <S.TitleWrapper>
          <S.Title>Sala "{title}"</S.Title>
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
                isHighlighted={question.isHighlighted}
                isAnswered={question.isAnswered}
                author={{
                  name: question.author.name,
                  avatar: question.author.photoURL,
                }}
              >
                {!question.isAnswered && (
                  <S.LikeButton
                    type="button"
                    liked={!!question.likeId}
                    aria-label="Marcar como gostei"
                    onClick={() =>
                      question ? handleLikeQuestion(question) : null
                    }
                  >
                    {question.likeCount! > 0 && (
                      <S.Likes>{question.likeCount}</S.Likes>
                    )}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </S.LikeButton>
                )}
              </Question>
            );
          })}
        </S.QuestionList>
      </S.Main>
    </S.Container>
  );
};
