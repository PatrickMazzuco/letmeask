import React, { useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button/Button";
import { Question } from "../../components/Question/Question";
import { RoomCode } from "../../components/RoomCode/RoomCode";
import { useAuth } from "../../hooks/useAuth";
import { Question as QuestionModel } from "../../models/Question";
import QuestionService from "../../services/data/question";

import * as S from "./styles";

interface RoomCodeParams {
  id: string;
}

export const Room = (): JSX.Element => {
  const [newQuestion, setNewQuestion] = useState("");
  const { id } = useParams<RoomCodeParams>();
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
          <S.Title>Sala React</S.Title>
          <S.QuestionCount>4 perguntas</S.QuestionCount>
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
          <Question
            content={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis accusantium asperiores, minus natus minima ipsam?"
            }
            author={{
              name: "Patrick Mazzuco",
              avatar: "https://avatars.githubusercontent.com/u/32601286?v=4",
            }}
          />
          <Question
            content={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus consequatur, animi nobis optio ab dolore, consequuntur aspernatur aperiam fuga fugit voluptatibus iusto autem accusantium suscipit reprehenderit tenetur quaerat. Adipisci itaque harum similique recusandae aliquid."
            }
            author={{
              name: "Patrick Mazzuco",
              avatar: "https://avatars.githubusercontent.com/u/32601286?v=4",
            }}
          />
          <Question
            content={"Lorem ipsum dolor sit amet."}
            author={{
              name: "Patrick Mazzuco",
              avatar: "https://avatars.githubusercontent.com/u/32601286?v=4",
            }}
          />
        </S.QuestionList>
      </S.Main>
    </S.Container>
  );
};
