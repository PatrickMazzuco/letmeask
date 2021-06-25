import { useHistory, useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import deleteImage from "../../assets/images/delete.svg";

import { Button } from "../../components/Button";
import { Question } from "../../components/Question";
import { RoomCode } from "../../components/RoomCode";
import { useRoom } from "../../hooks/useRoom";
import QuestionService from "../../services/data/question";

import * as S from "./styles";
import RoomService from "../../services/data/room";

interface RoomParams {
  id: string;
}
export const AdminRoom = (): JSX.Element => {
  const history = useHistory();
  const { id: roomId } = useParams<RoomParams>();
  const { title, questions } = useRoom(roomId);

  const handleDeleteQuestion = async (questionId: string) => {
    const deleteConfirmed = window.confirm(
      "Tem certeza que você deseja excluir esta pergunta?"
    );

    if (deleteConfirmed) await QuestionService.delete(roomId, questionId);
  };

  const handleCloseRoom = async () => {
    await RoomService.close(roomId);
    history.push("/");
  };

  return (
    <S.Container>
      <S.Header>
        <S.LogoWrapper>
          <S.Logo src={logoImg} alt="Letmeask" />
          <S.ButtonsWrapper>
            <RoomCode code={roomId} />
            <Button variant="outlined" onClick={handleCloseRoom}>
              Encerrar sala
            </Button>
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
              >
                <S.DeleteButton
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id!)}
                >
                  <S.ButtonIcon src={deleteImage} alt="Remover pergunta" />
                </S.DeleteButton>
              </Question>
            );
          })}
        </S.QuestionList>
      </S.Main>
    </S.Container>
  );
};
