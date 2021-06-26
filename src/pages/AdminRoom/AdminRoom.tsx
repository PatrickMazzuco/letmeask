import { Link, useHistory, useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";
import emptyQuestionsImg from "../../assets/images/empty-questions.svg";

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

  const handleMarkQuestionAsAnswered = async (questionId: string) => {
    await QuestionService.markAsAnswered(roomId, questionId);
  };

  const handlehighlightQuestion = async (questionId: string) => {
    await QuestionService.highlight(roomId, questionId);
  };

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
          <Link to="/">
            <S.Logo src={logoImg} alt="Letmeask" />
          </Link>
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
          <S.Title>Sala "{title}"</S.Title>
          {questions.length > 0 && (
            <S.QuestionCount>
              {questions.length}{" "}
              {questions.length > 1 ? "perguntas" : "pergunta"}
            </S.QuestionCount>
          )}
        </S.TitleWrapper>
        {questions.length > 0 ? (
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
                  <S.ButtonGroup>
                    {!question.isAnswered && (
                      <>
                        <S.IconButton
                          type="button"
                          onClick={() =>
                            handleMarkQuestionAsAnswered(question.id!)
                          }
                        >
                          <S.ButtonIcon
                            src={checkImg}
                            alt="Destacar pergunta"
                          />
                        </S.IconButton>
                        <S.IconButton
                          type="button"
                          onClick={() => handlehighlightQuestion(question.id!)}
                        >
                          <S.ButtonIcon
                            src={answerImg}
                            alt="Marcar pergunta como respondida"
                          />
                        </S.IconButton>
                      </>
                    )}
                    <S.IconButton
                      type="button"
                      onClick={() => handleDeleteQuestion(question.id!)}
                    >
                      <S.ButtonIcon src={deleteImg} alt="Remover pergunta" />
                    </S.IconButton>
                  </S.ButtonGroup>
                </Question>
              );
            })}
          </S.QuestionList>
        ) : (
          <S.EmptyQuesitonsWrapper>
            <S.EmptyQuestions>
              <S.EmptyIllustration
                src={emptyQuestionsImg}
                alt="Nenhuma pergunta"
              />
              <S.MessageTitle>Nenhuma pergunta por aqui...</S.MessageTitle>
              <S.Message>
                Envie o código desta sala para seus amigos e comece a responder
                perguntas!
              </S.Message>
            </S.EmptyQuestions>
          </S.EmptyQuesitonsWrapper>
        )}
      </S.Main>
    </S.Container>
  );
};
