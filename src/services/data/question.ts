import { Like, Question } from "../../models/Question";
import { database } from "../firebase";

const QuestionService = {
  create: async (
    roomId: string,
    question: Question
  ): Promise<string | null> => {
    const questionsRef = database().ref(`rooms/${roomId}/questions`);

    const createdQuestion = await questionsRef.push(question);

    return createdQuestion.key;
  },

  delete: async (roomId: string, questionId: string): Promise<any> => {
    const questionLikesRef = database().ref(
      `rooms/${roomId}/questions/${questionId}`
    );

    await questionLikesRef.remove();
  },

  markAsAnswered: async (roomId: string, questionId: string): Promise<any> => {
    const questionLikesRef = database().ref(
      `rooms/${roomId}/questions/${questionId}`
    );

    await questionLikesRef.update({ isAnswered: true });
  },

  highlight: async (roomId: string, questionId: string): Promise<any> => {
    const questionLikesRef = database().ref(
      `rooms/${roomId}/questions/${questionId}`
    );

    await questionLikesRef.update({ isHighlighted: true });
  },

  like: async (
    authorId: string,
    roomId: string,
    questionId: string
  ): Promise<string | null> => {
    const questionLikesRef = database().ref(
      `rooms/${roomId}/questions/${questionId}/likes`
    );

    const newLike = await questionLikesRef.push({ authorId } as Like);

    return newLike.key;
  },

  undoLike: async (
    roomId: string,
    questionId: string,
    likeId: string
  ): Promise<any> => {
    const questionLikesRef = database().ref(
      `rooms/${roomId}/questions/${questionId}/likes/${likeId}`
    );

    await questionLikesRef.remove();
  },
};

export default QuestionService;
