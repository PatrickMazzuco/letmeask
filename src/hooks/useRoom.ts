import { useEffect, useState } from "react";
import { Question } from "../models/Question";
import RoomService from "../services/data/room";

export const useRoom = (roomId: string) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadQuestions = async () => {
      const room = await RoomService.getById(roomId);

      if (room && room.questions) {
        setTitle(room.title);
        setQuestions(room.questions);
      }
    };

    loadQuestions();
  }, [roomId]);

  return {
    title,
    questions,
  };
};
