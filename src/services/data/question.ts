import { Question } from "../../models/Question";
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
};

export default QuestionService;
